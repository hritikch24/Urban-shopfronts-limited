/**
 * Single source of truth for how customers reach this business.
 *
 * The primary office number handles both calls and WhatsApp. The original
 * number remains available as the secondary mobile and WhatsApp contact.
 *
 * Nothing else in the codebase may hardcode a contact number. There were 33
 * hardcoded references before this file existed, which meant a number change
 * was a find-and-replace with no way to verify nothing had been missed.
 */

/**
 * Primary WhatsApp. Every wa.me link on the site points here — the floating
 * button, the sticky bar, the footer, the contact page, every template CTA.
 */
export const WHATSAPP = '447903680363';
export const WHATSAPP_DISPLAY = '07903 680363';

/**
 * Secondary WhatsApp. The original number, kept reachable for anyone who
 * already has it saved or is mid-conversation on it, but not used for any
 * outbound link. If this ever needs a visible link, use whatsappLinkSecondary()
 * explicitly rather than switching WHATSAPP — primary is primary.
 */
export const WHATSAPP_SECONDARY = '447471043827';
export const WHATSAPP_SECONDARY_DISPLAY = '07471 043827';

/** Primary office number — the same handset as primary WhatsApp. */
export const PHONE_TEL = '07903680363';
export const PHONE_DISPLAY = WHATSAPP_DISPLAY;
export const PHONE_E164 = `+${WHATSAPP}`;
export const PHONE_INTERNATIONAL_DISPLAY = '+44 7903 680363';

/** Original number, retained as the secondary mobile contact. */
export const PHONE_SECONDARY_DISPLAY = WHATSAPP_SECONDARY_DISPLAY;
export const PHONE_SECONDARY_E164 = `+${WHATSAPP_SECONDARY}`;

export const EMAIL = 'sales@urbanshopfronts.co.uk';

/** Update visible contact instructions while preserving shared SEO data. */
export function primaryContactText(text: string): string {
  return text.replaceAll(PHONE_SECONDARY_DISPLAY, PHONE_DISPLAY);
}

/**
 * Build a wa.me link with an optional prefilled message.
 * Always use this rather than writing the URL out — it keeps the number in
 * one place and encodes the message correctly.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Explicit opt-in to the secondary number. Not used by any default CTA. */
export function whatsappLinkSecondary(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_SECONDARY}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
