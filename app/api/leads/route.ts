import { NextResponse } from "next/server"
import { sendLeadEmail } from "@/lib/email/send-lead-email"
import { formatSmtpError } from "@/lib/email/smtp"
import { leadPayloadSchema } from "@/lib/lead-schema"

export const runtime = "nodejs"

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const submissionLog = new Map<string, number[]>()

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown"
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent)
    return true
  }
  recent.push(now)
  submissionLog.set(ip, recent)
  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: bots that fill hidden website field get a silent success
    if (typeof body?.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true })
    }

    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute and try again." },
        { status: 429 }
      )
    }

    const parsed = leadPayloadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid form data" },
        { status: 400 }
      )
    }

    await sendLeadEmail(parsed.data)

    return NextResponse.json({ ok: true })
  } catch (error) {
    const detail = formatSmtpError(error)
    console.error("Lead submission failed:", detail)

    const isConfigError =
      error instanceof Error && error.message.includes("SMTP is not configured")

    return NextResponse.json(
      {
        error: isConfigError
          ? "Email service is not configured yet."
          : "Failed to send your request. Please call us directly.",
      },
      { status: 500 }
    )
  }
}
