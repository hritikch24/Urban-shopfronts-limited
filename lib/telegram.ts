// ---------------------------------------------------------------------------
// Telegram Bot – Lead Notifications
// ---------------------------------------------------------------------------

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const BUSINESS_PHONE = "07471043827";

interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message?: string | null;
  source?: string | null;
  createdAt: Date;
}

export async function sendTelegramLeadNotification(
  lead: LeadData
): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn(
      "[telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping notification."
    );
    return;
  }

  const rawPhone = lead.phone.replace(/\D/g, "");
  const intlPhone = rawPhone.startsWith("0")
    ? `44${rawPhone.slice(1)}`
    : rawPhone;

  const lines = [
    `🔔 <b>New Lead</b>`,
    ``,
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `<b>Location:</b> ${escapeHtml(lead.location)}`,
    `<b>Service:</b> ${escapeHtml(lead.service)}`,
    lead.message ? `<b>Message:</b> ${escapeHtml(lead.message)}` : null,
    lead.source ? `<b>Source:</b> ${escapeHtml(lead.source)}` : null,
    ``,
    `<b>Received:</b> ${lead.createdAt.toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
    `<b>ID:</b> <code>${lead.id}</code>`,
    ``,
    `📞 <a href="tel:+${intlPhone}">Call</a>  ·  💬 <a href="https://wa.me/${intlPhone}">WhatsApp</a>`,
  ];

  const text = lines.filter(Boolean).join("\n");

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(
      `[telegram] sendMessage failed (${res.status}): ${body}`
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
