import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { pageMetadata } from "@/lib/seo"
import { COMPANY_NAME, COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${COMPANY_NAME}. Service scope, pricing, warranty, and booking policies for home appliance repair in Bangalore.`,
  path: "/terms",
})

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "/terms" },
]

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-8 text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p>
              These terms govern bookings and services provided by {COMPANY_NAME} in Bangalore.
              By requesting a service, you agree to the policies below.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Service scope</h2>
            <p>
              We provide installation, repair, maintenance, and AMC for home appliances. Work is
              limited to the service category and brand discussed during booking confirmation.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Pricing</h2>
            <p>
              Visit and inspection charges are shared before work begins. Spare parts and major
              repairs are quoted separately. You may decline work before parts are ordered or
              installed.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Warranty</h2>
            <p>
              Service warranty duration depends on the repair type and is confirmed on the service
              receipt. Manufacturer warranty applies to genuine parts where applicable.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these terms: {COMPANY_INFO.phone} or {COMPANY_INFO.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
