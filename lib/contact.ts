/**
 * Single source of truth for how customers reach this business.
 *
 * Phone and WhatsApp are deliberately different numbers. The landline-style
 * mobile is what rings for calls; WhatsApp sits on a separate handset so an
 * out-of-hours message does not depend on someone picking up a call.
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

/** Voice number — the same handset as the secondary WhatsApp. */
export const PHONE_TEL = '07471043827';
export const PHONE_DISPLAY = '07471 043827';
export const PHONE_E164 = '+447471043827';

export const EMAIL = 'sales@urbanshopfronts.co.uk';

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
