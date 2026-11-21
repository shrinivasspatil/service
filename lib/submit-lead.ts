import type { LeadPayload } from "@/lib/lead-schema"

type SubmitLeadResult =
  | { ok: true }
  | { ok: false; message: string }

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = (await response.json().catch(() => null)) as { error?: string } | null

    if (!response.ok) {
      return {
        ok: false,
        message: data?.error || "Something went wrong. Please call us directly.",
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      message: "Network error. Please try again or call us directly.",
    }
  }
}
