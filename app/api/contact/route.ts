import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadNotification, sendAutoReply } from "@/lib/resend";
import { sendTelegramLeadNotification } from "@/lib/telegram";

// ---------------------------------------------------------------------------
// In-memory rate limiter: max 3 submissions per IP per hour
// ---------------------------------------------------------------------------
interface RateLimitEntry {
  count: number;
  resetAt: number; // epoch ms
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    // First request in this window (or window expired — start fresh)
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Periodic cleanup to prevent unbounded Map growth (runs on each request)
function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now >= entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UK_POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const DOOR_TYPES = ["Roller", "Sectional", "Up-and-Over", "Side-Hinged", "Not sure"];
const TIMINGS = ["As soon as possible", "Within a month", "Planning ahead / budgeting"];

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for can be a comma-separated list; take the first (client) IP
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest): Promise<NextResponse> {
  cleanupExpiredEntries();

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Too many submissions. Please wait before submitting another enquiry.",
      },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, location, service, message, source, sessionId, postcode, timing, doorType, landingPage } = body as {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    service?: string;
    message?: string;
    source?: string;
    sessionId?: string;
    postcode?: string;
    timing?: string;
    doorType?: string;
    landingPage?: string;
  };

  // Optional structured details. Unknown values are dropped, not rejected, so
  // an older cached form can never fail on them.
  const details = [
    typeof postcode === "string" && UK_POSTCODE.test(postcode.trim()) ? `Postcode: ${postcode.trim().toUpperCase()}` : null,
    typeof doorType === "string" && DOOR_TYPES.includes(doorType) ? `Door type: ${doorType}` : null,
    typeof timing === "string" && TIMINGS.includes(timing) ? `When: ${timing}` : null,
  ].filter(Boolean);
  const page = typeof landingPage === "string" && /^\/[a-z0-9\-/]{0,150}$/.test(landingPage) ? landingPage : undefined;

  // Required field validation
  const missingFields: string[] = [];
  if (!name?.trim()) missingFields.push("name");
  if (!email?.trim()) missingFields.push("email");
  if (!phone?.trim()) missingFields.push("phone");
  if (!location?.trim()) missingFields.push("location");
  if (!service?.trim()) missingFields.push("service");

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  // Email format validation
  if (!EMAIL_REGEX.test(email!.trim())) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Save lead to database
  let lead;
  try {
    lead = await prisma.lead.create({
      data: {
        name: name!.trim(),
        email: email!.trim().toLowerCase(),
        phone: phone!.trim(),
        location: location!.trim(),
        service: service!.trim(),
        message: [message?.trim(), details.join("\n")].filter(Boolean).join("\n\n") || undefined,
        source: source?.trim() || undefined,
        landingPage: page,
        sessionId: sessionId?.trim().slice(0, 100) || undefined,
      },
    });
  } catch (err) {
    console.error("[contact] Failed to save lead:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }

  // Send emails — failures are logged but do not affect the response
  try {
    await sendLeadNotification(lead);
  } catch (err) {
    console.error("[contact] Failed to send lead notification email:", err);
  }

  try {
    await sendAutoReply(lead.email, lead.name);
  } catch (err) {
    console.error("[contact] Failed to send auto-reply email:", err);
  }

  try {
    await sendTelegramLeadNotification(lead);
  } catch (err) {
    console.error("[contact] Failed to send Telegram notification:", err);
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "Thank you for your enquiry. We'll be in touch within 2 hours during business hours.",
    },
    { status: 201 }
  );
}
