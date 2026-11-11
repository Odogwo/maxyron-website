const controlCentre = 'https://maxyron-infrastructure.drawbridige.chatgpt.site';

export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: controlCentre,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export const HEAD = GET;
