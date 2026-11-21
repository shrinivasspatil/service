import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { pageMetadata } from "@/lib/seo"
import { COMPANY_NAME, COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY_NAME}. How we collect, use, and protect your contact and booking information.`,
  path: "/privacy-policy",
})

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-8 text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p>
              {COMPANY_NAME} respects your privacy. This policy explains what information we collect
              when you book a service and how we use it.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p>
              When you submit a booking or contact form, we may collect your name, phone number,
              email address, service area, appliance type, and message details needed to schedule
              your visit.
            </p>
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <p>
              We use your information to confirm appointments, dispatch technicians, provide service
              updates, and improve customer support. We do not sell your personal information.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Data retention</h2>
            <p>
              Booking records are retained only as long as needed for service delivery, warranty
              support, and legal compliance.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Privacy requests: {COMPANY_INFO.email} or {COMPANY_INFO.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
