declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara um evento no Pixel do navegador e na API de Conversões (server-side),
 * usando o mesmo event_id nos dois para o Meta deduplicar automaticamente.
 */
export function trackPixelEvent(eventName: string) {
  const eventId = crypto.randomUUID();

  window.fbq?.("track", eventName, {}, { eventID: eventId });

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
    }),
    keepalive: true,
  }).catch(() => {
    // Falha silenciosa: não deve afetar a navegação do usuário.
  });
}
