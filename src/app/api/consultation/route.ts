import { NextResponse } from "next/server";
import { consultationApiSchema } from "@/lib/consultation-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Very small in-memory rate limiter (per server instance). Swap for Redis/Upstash if you scale out. ---
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

/**
 * STUB: replace the body with your real delivery (email via Resend/SendGrid/SMTP,
 * CRM webhook, Google Sheet, Slack, etc.). Keep it server-side so keys stay secret.
 */
async function deliverLead(lead: Record<string, unknown>) {
  console.info("[consultation] new lead", lead);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = consultationApiSchema.safeParse(body);

  // Honeypot filled in or form submitted implausibly fast -> pretend success, drop silently.
  const raw = (body ?? {}) as { website?: unknown; elapsedMs?: unknown };
  const honeypotTripped = typeof raw.website === "string" && raw.website.length > 0;
  const tooFast = typeof raw.elapsedMs === "number" && raw.elapsedMs < 2000;
  if (honeypotTripped || tooFast) {
    return NextResponse.json({ ok: true });
  }

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { website: _website, elapsedMs: _elapsedMs, ...lead } = parsed.data;
  void _website;
  void _elapsedMs;
  await deliverLead({ ...lead, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
