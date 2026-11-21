import nodemailer from "nodemailer"
import type SMTPTransport from "nodemailer/lib/smtp-transport"
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants"

function env(name: string): string | undefined {
  const value = process.env[name]
  if (!value) return undefined
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function getSmtpPassword(): string | undefined {
  const encoded = env("SMTP_PASS_B64")
  if (encoded) {
    return Buffer.from(encoded, "base64").toString("utf8")
  }
  return env("SMTP_PASS")
}

export function getSmtpConfig(): SMTPTransport.Options {
  const host = env("SMTP_HOST")
  const user = env("SMTP_USER")
  const pass = getSmtpPassword()
  const port = Number(env("SMTP_PORT") || "465")

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured (SMTP_HOST, SMTP_USER, and SMTP_PASS or SMTP_PASS_B64 required)"
    )
  }

  const secure = port === 465

  return {
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: port === 587,
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 20_000,
    tls: {
      minVersion: "TLSv1.2",
    },
  }
}

export function getSmtpTransporter() {
  return nodemailer.createTransport(getSmtpConfig())
}

export function getSmtpFromAddress(): string {
  const fromEmail = env("SMTP_FROM_EMAIL")
  const fromName = env("SMTP_FROM_NAME") || COMPANY_NAME
  const legacyFrom = env("SMTP_FROM")

  if (fromEmail) {
    return `${fromName} <${fromEmail}>`
  }

  if (legacyFrom) {
    return legacyFrom
  }

  return `${COMPANY_NAME} <${env("SMTP_USER") || COMPANY_EMAIL}>`
}

export function getLeadNotificationEmails(): string[] {
  const raw = env("LEAD_NOTIFICATION_EMAIL") || COMPANY_EMAIL
  return raw
    .split(/[,;]+/)
    .map((email) => email.trim())
    .filter(Boolean)
}

export function formatSmtpError(error: unknown): string {
  if (!(error instanceof Error)) return "Unknown SMTP error"

  const smtpError = error as Error & {
    code?: string
    response?: string
    responseCode?: number
  }

  const parts = [smtpError.message]
  if (smtpError.code) parts.push(`code=${smtpError.code}`)
  if (smtpError.responseCode) parts.push(`responseCode=${smtpError.responseCode}`)
  if (smtpError.response) parts.push(`response=${smtpError.response}`)

  return parts.join(" | ")
}
