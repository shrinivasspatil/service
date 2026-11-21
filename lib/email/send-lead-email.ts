import { COMPANY_NAME } from "@/lib/constants"
import type { LeadPayload } from "@/lib/lead-schema"
import { getServiceName } from "@/lib/leads"
import {
  getLeadNotificationEmails,
  getSmtpFromAddress,
  getSmtpTransporter,
} from "@/lib/email/smtp"

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function buildLeadEmailHtml(payload: LeadPayload): string {
  const serviceName = getServiceName(payload.service)
  const rows = [
    ["Name", payload.name],
    ["Phone", `+91 ${payload.phone}`],
    ["Pincode", payload.pincode],
    ["Service", serviceName],
    ["Form", payload.formType === "booking" ? "Booking modal" : "Lead form"],
    ["Area", payload.area || "—"],
    ["Source page", payload.sourcePage || "—"],
    [
      "Submitted at",
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;width:140px">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(value)}</td></tr>`
    )
    .join("")

  return `
    <div style="font-family:system-ui,sans-serif;color:#0f172a;max-width:560px">
      <h2 style="margin:0 0 12px;font-size:20px">New service request — ${escapeHtml(COMPANY_NAME)}</h2>
      <p style="margin:0 0 16px;color:#475569">A customer submitted a form on your website. Call them within 30 minutes.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${tableRows}</table>
      <p style="margin:16px 0 0;font-size:13px;color:#64748b">
        Reply by calling <a href="tel:+91${payload.phone}">+91 ${payload.phone}</a>
      </p>
    </div>
  `
}

function buildLeadEmailText(payload: LeadPayload): string {
  const serviceName = getServiceName(payload.service)
  return [
    `New service request — ${COMPANY_NAME}`,
    "",
    `Name: ${payload.name}`,
    `Phone: +91 ${payload.phone}`,
    `Pincode: ${payload.pincode}`,
    `Service: ${serviceName}`,
    `Form: ${payload.formType === "booking" ? "Booking modal" : "Lead form"}`,
    `Area: ${payload.area || "—"}`,
    `Source page: ${payload.sourcePage || "—"}`,
    `Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
  ].join("\n")
}

export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const serviceName = getServiceName(payload.service)
  const subject = `New ${payload.formType === "booking" ? "booking" : "lead"}: ${serviceName} — ${payload.name}`
  const transporter = getSmtpTransporter()

  await transporter.sendMail({
    from: getSmtpFromAddress(),
    to: getLeadNotificationEmails(),
    subject,
    text: buildLeadEmailText(payload),
    html: buildLeadEmailHtml(payload),
  })
}
