export const CONTACT_EMAIL = 'angelantonioflore837@gmail.com';

// WhatsApp expects country code + number, digits only (no +, spaces, or hyphens).
export const WHATSAPP_NUMBER_E164 = '525663812661';
export const WHATSAPP_NUMBER_DISPLAY = '+52 56 6381 2661';

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}

export function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

