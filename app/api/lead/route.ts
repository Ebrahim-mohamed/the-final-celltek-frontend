import { NextResponse } from 'next/server';

// Receives Book a demo requests.
// Set LEAD_WEBHOOK_URL (for example a Zapier, Make or Google Apps Script webhook, or your CRM) to forward each lead.
// Without it, leads are only written to the server log.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try { data = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const required = ['name', 'company', 'phone'];
  if (required.some((k) => typeof data[k] !== 'string' || !(data[k] as string).trim())) {
    return NextResponse.json({ ok: false, error: 'missing fields' }, { status: 422 });
  }
  const lead = { ...data, source: 'website-book-a-demo', receivedAt: new Date().toISOString() };
  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log('[lead]', JSON.stringify(lead));
  }
  return NextResponse.json({ ok: true });
}
