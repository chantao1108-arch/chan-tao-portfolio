const SOURCE = "https://uyjumeiitsrmwmlkyfzl.supabase.co/storage/v1/object/public/reality-os-site/reality-os-v0102-7d93f6c1a44e49d2b7c8f8a6.html";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const upstream = await fetch(SOURCE, { cache: "no-store" });

    if (!upstream.ok) {
      return new Response("Reality OS is temporarily unavailable.", {
        status: 502,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    const html = await upstream.text();

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400",
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    return new Response("Reality OS is temporarily unavailable.", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}
