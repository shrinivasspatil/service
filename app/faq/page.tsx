import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FaqSection } from "@/components/sections/faq-section"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { pageMetadata } from "@/lib/seo"
import { COMPANY_PHONE, FAQS } from "@/lib/constants"
import Link from "next/link"

export const metadata: Metadata = pageMetadata({
  title: "Appliance service FAQs",
  description:
    "Answers on Kent RO, Daikin AC, Faber chimney, hob, washing machine and TV repair in Bangalore — pricing, same-day visits, warranty and booking.",
  path: "/faq",
})

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "FAQs", href: "/faq" },
]

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={[...FAQS]} pageUrl="https://servicebooking.in/faq" />

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-8">
            <p className="text-sm font-medium text-primary mb-3">FAQs</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Questions before you book
            </h1>
            <p className="text-lg text-muted-foreground">
              What customers ask most about doorstep appliance repair in Bangalore.
              If your question is not here, call {COMPANY_PHONE}.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        title="Service Booking FAQs"
        subtitle="Independent multi-brand repair — not an OEM authorised centre"
        faqs={FAQS}
      />

      <section className="pb-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Need a technician today?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{" "}
            or browse{" "}
            <Link href="/areas" className="text-primary font-medium hover:underline">
              Bangalore service areas
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
