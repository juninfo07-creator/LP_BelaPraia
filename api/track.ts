// Vercel Serverless Function (Node.js runtime).
// Recebe eventos do site e repassa para a API de Conversões do Meta,
// mantendo o access token apenas no servidor (variável de ambiente).

interface VercelLikeRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface VercelLikeResponse {
  status: (code: number) => VercelLikeResponse;
  json: (body: unknown) => void;
}

function parseCookies(header: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  for (const part of header.split(";")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    cookies[trimmed.slice(0, idx)] = decodeURIComponent(trimmed.slice(idx + 1));
  }
  return cookies;
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.META_PIXEL_ID ?? "972767522539205";

  if (!token) {
    res.status(500).json({ error: "META_CAPI_TOKEN não configurado no servidor" });
    return;
  }

  const body = (req.body ?? {}) as { eventName?: string; eventId?: string; eventSourceUrl?: string };
  if (!body.eventName) {
    res.status(400).json({ error: "eventName é obrigatório" });
    return;
  }

  const cookieHeader = req.headers.cookie;
  const cookies = parseCookies(Array.isArray(cookieHeader) ? cookieHeader[0] ?? "" : cookieHeader ?? "");

  const forwardedFor = req.headers["x-forwarded-for"];
  const clientIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(",")[0]?.trim();
  const userAgent = req.headers["user-agent"];

  const payload = {
    data: [
      {
        event_name: body.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.eventId,
        event_source_url: body.eventSourceUrl,
        action_source: "website",
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: Array.isArray(userAgent) ? userAgent[0] : userAgent,
          fbp: cookies._fbp,
          fbc: cookies._fbc,
        },
      },
    ],
  };

  const metaResponse = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  const result = await metaResponse.json();
  res.status(metaResponse.ok ? 200 : 502).json(result);
}
