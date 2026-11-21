import nodemailer from "nodemailer"

async function main() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || "465")
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM
  const to = process.env.LEAD_NOTIFICATION_EMAIL

  if (!host || !user || !pass || !from || !to) {
    console.error("Missing required SMTP env vars")
    process.exit(1)
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    requireTLS: port === 587,
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 20_000,
    tls: { minVersion: "TLSv1.2" },
  })

  console.log("Verifying SMTP connection...")
  await transporter.verify()
  console.log("SMTP verify OK")

  const info = await transporter.sendMail({
    from,
    to,
    subject: "Service Booking — SMTP test",
    text: "This is a test email from the Service Booking form SMTP setup.",
    html: "<p>This is a <strong>test email</strong> from the Service Booking form SMTP setup.</p>",
  })

  console.log("Email sent:", info.messageId)
  console.log("Accepted:", info.accepted)
  console.log("Rejected:", info.rejected)
}

main().catch((err) => {
  console.error("SMTP test failed:")
  console.error(err)
  process.exit(1)
})
