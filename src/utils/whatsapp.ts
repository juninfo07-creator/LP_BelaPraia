import { whatsapp } from "../data/property";

export type WhatsappMessageKey = keyof typeof whatsapp.messages;

/** true quando um número real foi configurado em src/data/property.ts */
export const isWhatsappConfigured = whatsapp.number.trim().length > 0;

/**
 * Monta a URL https://wa.me para o número configurado.
 * Retorna null se o número ainda não foi configurado, para evitar links falsos.
 */
export function getWhatsappUrl(messageKey: WhatsappMessageKey = "default"): string | null {
  if (!isWhatsappConfigured) return null;
  const text = whatsapp.messages[messageKey];
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}
