import { Metadata } from "next"
import Link from "next/link"
import { BANGALORE_AREAS, SERVICES, COMPANY_INFO, COMPANY_NAME, COMPANY_PHONE } from "@/lib/constants"
import { pageMetadata } from "@/lib/seo"
import { getAreasIndexAnswerSummary } from "@/lib/answer-summaries"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { LastUpdated } from "@/components/seo/last-updated"
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = pageMetadata({
  title: "Bangalore service areas",
  description:
    "Doorstep appliance repair across 31 Bangalore localities — Koramangala, HSR, Whitefield, Indiranagar, Electronic City and more. Same-day RO, AC, chimney and hob service.",
  path: "/areas",
})

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/areas" },
]

const areasAnswer = getAreasIndexAnswerSummary()

const ZONE_LABEL: Record<string, string> = {
  East: "East Bangalore",
  South: "South Bangalore",
  North: "North Bangalore",
  West: "West Bangalore",
  Central: "Central Bangalore",
}

const areasByZone = Object.fromEntries(
  ["South", "East", "North", "West", "Central"].map((zone) => [
    ZONE_LABEL[zone],
    BANGALORE_AREAS.filter((area) => area.zone === zone),
  ])
) as Record<string, typeof BANGALORE_AREAS>

const priorityServices = [
  {
    slug: "hob",
    title: "Prestige & Pigeon hob repair",
    href: "/services/hob",
    desc: "Burner, ignition and glass-top repair near you across Bangalore.",
  },
  {
    slug: "ac",
    title: "Daikin & LG AC service",
    href: "/services/ac",
    desc: "Gas refill, installation and AMC with same-day doorstep visits.",
  },
  {
    slug: "tv",
    title: "Samsung & LG TV repair",
    href: "/services/tv",
    desc: "Panel, board and wall-mount repairs for major TV brands.",
  },
  {
    slug: "water-purifier",
    title: "Kent RO & Aquaguard service",
    href: "/services/water-purifier",
    desc: "Filter change, RO repair and AMC in every listed locality.",
  },
]

const faqs = [
  {
    question: "Do you cover all Bangalore areas for appliance repair?",
    answer: `Yes. ${COMPANY_NAME} covers 30+ localities across East, South, North, West and Central Bangalore. Pick your area below or call ${COMPANY_PHONE} to confirm same-day availability.`,
  },
  {
    question: "Can I book Kent RO, AC, hob or TV repair for my locality?",
    answer:
      "Yes. Every area page links to water purifier, AC, chimney, hob, washing machine, refrigerator, dishwasher and TV services so you can book the right technician for your neighbourhood.",
  },
  {
    question: "How fast can a technician reach my area?",
    answer:
      "Most popular localities get same-day service when you book before 2 PM. We confirm ETA within 30 minutes of your request.",
  },
]

function AreasItemListJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bangalore appliance service areas",
    url: "https://servicebooking.in/areas",
    description:
      "Find Kent RO, Daikin AC, Faber chimney, Prestige hob and TV repair near you across Bangalore.",
    isPartOf: { "@type": "WebSite", url: "https://servicebooking.in" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BANGALORE_AREAS.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: area.name,
        url: `https://servicebooking.in/areas/${area.slug}`,
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function AreasPage() {
  return (
    <>
      <AreasItemListJsonLd />

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving All Bangalore
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Bangalore appliance service areas
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-4">
              Choose your locality for same-day Kent RO, Daikin AC, Faber chimney, Prestige hob and TV
              repair. {COMPANY_NAME} sends trained technicians across East, South, North, West and
              Central Bangalore with transparent pricing and a 90-day service warranty.
            </p>
            <LastUpdated />
          </div>
        </div>
      </section>

      <AnswerSummary question={areasAnswer.question} answer={areasAnswer.answer} />

      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book by service, then pick your area
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            These hub pages are linked from every locality so Google and customers can crawl service
            + area combinations. Start here if you already know the appliance type.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {priorityServices.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="rounded-xl border border-border bg-background p-5 hover:border-primary hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open {service.slug} service page
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              How Bangalore area coverage works
            </h2>
            <p>
              Each area page lists the appliances we repair locally, popular brands, and a booking
              form so residents in that neighbourhood do not have to dig through the whole site.
              From HSR Layout and Koramangala to Whitefield and Electronic City, technicians carry
              common spares for RO filters, AC gas top-ups, hob ignition kits and TV boards.
            </p>
            <p>
              Prefer browsing by appliance? Use our{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                all services index
              </Link>
              , then jump into{" "}
              <Link href="/services/hob" className="text-primary font-medium hover:underline">
                hob repair
              </Link>
              ,{" "}
              <Link href="/services/ac" className="text-primary font-medium hover:underline">
                AC service
              </Link>
              , or{" "}
              <Link href="/services/tv" className="text-primary font-medium hover:underline">
                TV repair
              </Link>
              . Every service hub also links back here so both directions stay crawlable.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(areasByZone).map(([zone, areas]) => (
              <div key={zone}>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  {zone}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="bg-background p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {area.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        RO · AC · Hob · TV
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            All {BANGALORE_AREAS.length} service areas
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {BANGALORE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Services available in every area
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  {service.name} service near me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Service area FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Can&apos;t find your area?</h2>
              <p className="text-lg opacity-90 mb-8">
                We cover most of Bangalore. Call us and we will confirm whether a same-day visit is
                available for your pin code.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Same-day service available</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Book service in your area</h3>
              <LeadForm
                serviceType="general"
                serviceCategory="service"
                sourcePage="areas-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
