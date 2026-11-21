import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  BANGALORE_AREAS,
  SERVICES,
  COMPANY_INFO,
} from "@/lib/constants"
import { getTestimonialsForAreaBrand } from "@/lib/testimonials"
import {
  areaBrandPath,
  brandToSlug,
  findBrandInService,
  getTopBrandsForService,
  isPhase1AreaBrandPage,
} from "@/lib/area-brand-pages"
import {
  getAreaBrandHeading,
  getAreaBrandIntro,
  getAreaBrandMetaDescription,
  getAreaBrandTitle,
} from "@/lib/area-content"
import { getAreaBrandAnswerSummary } from "@/lib/answer-summaries"
import { pageMetadata } from "@/lib/seo"
import { getNearbyAreaPages } from "@/lib/coverage"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { LastUpdated } from "@/components/seo/last-updated"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Timer,
  ShieldCheck,
  Wrench,
} from "lucide-react"

interface AreaBrandPageProps {
  params: Promise<{ area: string; service: string; brand: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({
  params,
}: AreaBrandPageProps): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug, brand: brandSlug } =
    await params

  if (!isPhase1AreaBrandPage(areaSlug, serviceSlug, brandSlug)) {
    return { title: "Page Not Found" }
  }

  const area = BANGALORE_AREAS.find((a) => a.slug === areaSlug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const brandData = findBrandInService(serviceSlug, brandSlug)

  if (!area || !service || !brandData) {
    return { title: "Page Not Found" }
  }

  const brandName = brandData.brand

  return pageMetadata({
    title: getAreaBrandTitle(area, serviceSlug, brandName),
    description: getAreaBrandMetaDescription(area, serviceSlug, brandName),
    path: areaBrandPath(area.slug, service.slug, brandSlug),
  })
}

export default async function AreaBrandServicePage({ params }: AreaBrandPageProps) {
  const { area: areaSlug, service: serviceSlug, brand: brandSlug } =
    await params

  if (!isPhase1AreaBrandPage(areaSlug, serviceSlug, brandSlug)) {
    notFound()
  }

  const area = BANGALORE_AREAS.find((a) => a.slug === areaSlug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const brandData = findBrandInService(serviceSlug, brandSlug)

  if (!area || !service || !brandData) {
    notFound()
  }

  const brandName = brandData.brand
  const ServiceIcon = service.icon
  const intro = getAreaBrandIntro(area, serviceSlug, brandName)
  const answer = getAreaBrandAnswerSummary(
    area,
    serviceSlug,
    brandName,
    service.name
  )

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/areas" },
    { label: area.name, href: `/areas/${area.slug}` },
    {
      label: service.name,
      href: `/areas/${area.slug}/${service.slug}`,
    },
    {
      label: brandName,
      href: areaBrandPath(area.slug, service.slug, brandSlug),
    },
  ]

  const faqs = [
    {
      question: `How much does ${brandName} ${service.name.toLowerCase()} service cost in ${area.name}?`,
      answer: `${brandName} ${service.name.toLowerCase()} service in ${area.name} starts from ${service.startingPrice}. We share a transparent quote after inspection — no hidden charges.`,
    },
    {
      question: `Do you offer same-day ${brandName} ${service.name.toLowerCase()} repair in ${area.name}?`,
      answer: `Yes. Book before 2 PM for same-day ${brandName} ${service.name.toLowerCase()} service in ${area.name}. Our ${area.name} technicians carry common ${brandName} spare parts for faster fixes.`,
    },
    {
      question: `Is ${brandName} ${service.name.toLowerCase()} repair available at home in ${area.name}?`,
      answer: `Yes — we provide doorstep ${brandName} ${service.name.toLowerCase()} repair across ${area.name} and nearby localities. Installation, maintenance, and AMC are also available.`,
    },
    {
      question: `What warranty do you provide on ${brandName} repairs in ${area.name}?`,
      answer: `All ${brandName} ${service.name.toLowerCase()} repairs in ${area.name} include up to a 90-day service warranty. Genuine ${brandName} parts carry manufacturer warranty where applicable.`,
    },
    {
      question: `Which ${brandName} ${service.name.toLowerCase()} services are available in ${area.name}?`,
      answer: `We offer ${brandData.services.slice(0, 4).join(", ")} and more for ${brandName} in ${area.name}. Call ${COMPANY_INFO.phone} for the full service list.`,
    },
  ]

  const siblingBrands = getTopBrandsForService(serviceSlug).filter(
    (b) => brandToSlug(b.brand) !== brandSlug
  )
  const testimonials = getTestimonialsForAreaBrand(
    area.name,
    area.slug,
    service.slug,
    brandName,
    6
  )

  const nearbyAreas = getNearbyAreaPages(area, 12)
    .filter((nearby) =>
      isPhase1AreaBrandPage(nearby.slug, service.slug, brandSlug)
    )
    .slice(0, 8)

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <ServiceIcon className="w-4 h-4" />
                  {brandName} {service.name}
                </span>
                <span className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {area.name}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {getAreaBrandHeading(area, service.slug, brandName, service.name)}
              </h1>

              <p className="text-lg text-muted-foreground mb-4 text-pretty">
                {intro}
              </p>
              <LastUpdated className="text-sm text-muted-foreground mb-8" />

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "4.8 Google Rating" },
                  { icon: Timer, text: "Same-day Service" },
                  { icon: ShieldCheck, text: "90-Day Warranty" },
                  { icon: Wrench, text: `${brandName} Specialists` },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="#book-service"
                  className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Book {brandName} Service
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={`${brandName} ${service.name.toLowerCase()} repair in ${area.name} Bangalore`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Timer className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Same Day in {area.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      From {service.startingPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerSummary question={answer.question} answer={answer.answer} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {brandName} {service.name} Services in {area.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Doorstep {brandName} repair, installation, and AMC for homes in{" "}
              {area.name}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {brandData.services.map((serviceName, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium text-foreground">{serviceName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {siblingBrands.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Other {service.name} Brands in {area.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblingBrands.map((b) => (
                <Link
                  key={b.brand}
                  href={areaBrandPath(
                    area.slug,
                    service.slug,
                    brandToSlug(b.brand)
                  )}
                  className="px-4 py-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  {b.brand} in {area.name}
                </Link>
              ))}
              <Link
                href={`/areas/${area.slug}/${service.slug}`}
                className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary/5"
              >
                All {service.name} brands in {area.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {brandName} {service.name} in Nearby Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                href={areaBrandPath(
                  nearby.slug,
                  service.slug,
                  brandSlug
                )}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center hover:border-primary hover:text-primary transition-colors text-sm"
              >
                {brandName} in {nearby.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href={`/services/${service.slug}/${brandSlug}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {brandName} {service.name} across Bangalore
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/areas/${area.slug}/${service.slug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium"
            >
              All brands — {service.name} in {area.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection
        title="Customer Reviews"
        subtitle={`What ${area.name} customers say about our ${brandName} ${service.name.toLowerCase()} service`}
        testimonials={testimonials}
      />

      <FaqSection
        title={`${brandName} ${service.name} FAQs — ${area.name}`}
        subtitle={`Common questions about ${brandName} ${service.name.toLowerCase()} repair in ${area.name}`}
        faqs={faqs}
      />

      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book {brandName} {service.name} in {area.name}
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Same-day {brandName} {service.name.toLowerCase()} service in{" "}
                {area.name}. Certified technicians, genuine parts, 90-day warranty.
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
                  <MapPin className="w-5 h-5" />
                  <span>Serving all of {area.name}</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Book {brandName} Service
              </h3>
              <LeadForm
                serviceType={service.slug}
                serviceCategory="service"
                area={area.name}
                sourcePage={`${area.slug}-${service.slug}-${brandSlug}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
