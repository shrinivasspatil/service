import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BANGALORE_AREAS, SERVICES, COMPANY_INFO } from "@/lib/constants"
import {
  getAreaFaqs,
  getAreaHeading,
  getAreaIntro,
  getAreaMetaDescription,
  getAreaPageTitle,
} from "@/lib/area-content"
import { pageMetadata } from "@/lib/seo"
import { getNearbyAreaPages } from "@/lib/coverage"
import { getAreaAnswerSummary } from "@/lib/answer-summaries"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { LastUpdated } from "@/components/seo/last-updated"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { ServiceCard } from "@/components/cards/service-card"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { getTestimonialsForArea } from "@/lib/testimonials"
import { MapPin, Phone, Clock, CheckCircle, Star, Users, Wrench, ArrowRight } from "lucide-react"

interface AreaPageProps {
  params: Promise<{ area: string }>
}

export async function generateStaticParams() {
  return BANGALORE_AREAS.map((area) => ({
    area: area.slug,
  }))
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params
  const area = BANGALORE_AREAS.find(a => a.slug === areaSlug)
  
  if (!area) {
    return { title: "Area Not Found" }
  }

  return pageMetadata({
    title: getAreaPageTitle(area),
    description: getAreaMetaDescription(area),
    path: `/areas/${area.slug}`,
  })
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area: areaSlug } = await params
  const area = BANGALORE_AREAS.find(a => a.slug === areaSlug)
  
  if (!area) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/areas" },
    { label: area.name, href: `/areas/${area.slug}` },
  ]

  const faqs = getAreaFaqs(area, COMPANY_INFO.phone)
  const nearbyAreas = getNearbyAreaPages(area, 10)

  const areaAnswer = getAreaAnswerSummary(area)
  const testimonials = getTestimonialsForArea(area.name, area.slug, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                {area.name}, Bangalore
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {getAreaHeading(area)}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-4 text-pretty">
                {getAreaIntro(area)}
              </p>
              <LastUpdated className="text-sm text-muted-foreground mb-8" />

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "4.8 Rating" },
                  { icon: Users, text: "1000+ Customers" },
                  { icon: Wrench, text: "Expert Technicians" },
                  { icon: Clock, text: "Same-day Service" },
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
                  Book Online
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Book Service in {area.name}
              </h2>
              <LeadForm 
                serviceType="general"
                serviceCategory="service"
                area={area.name}
                sourcePage={`area-${area.slug}`}
              />
            </div>
          </div>
        </div>
      </section>

      <AnswerSummary question={areaAnswer.question} answer={areaAnswer.answer} />

      {/* Services in Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services Available in {area.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive home appliance services in {area.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link 
                key={service.slug} 
                href={`/areas/${area.slug}/${service.slug}`}
                className="block"
              >
                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.name} Service in {area.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Installation", "Repair", "AMC"].map((tag) => (
                          <span key={tag} className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Service Booking in {area.name}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Experts", desc: `Technicians who know ${area.name} well` },
              { title: "Quick Response", desc: "30-minute confirmation, same-day service" },
              { title: "Trusted Service", desc: "1000+ happy customers in the area" },
              { title: "Fair Pricing", desc: "No hidden charges, transparent quotes" },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Quick Links - Services in {area.name}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-background rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-3">{service.name}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href={`/areas/${area.slug}/${service.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Service in {area.name}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/areas/${area.slug}/${service.slug}#installation`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Installation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/areas/${area.slug}/${service.slug}#repair`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Repair
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        title={`Customer Reviews in ${area.name}`}
        subtitle={`What locals in ${area.name} say about our water purifier, AC, and chimney service`}
        testimonials={testimonials}
      />

      {/* Nearby Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            We Also Serve Nearby Areas
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {nearbyAreas.map((nearbyArea) => (
              <Link
                key={nearbyArea.slug}
                href={`/areas/${nearbyArea.slug}`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {nearbyArea.name}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/areas"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection 
        title={`FAQs - Services in ${area.name}`}
        subtitle="Common questions about our services in this area"
        faqs={faqs}
      />

      {/* CTA Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Home Appliance Service in {area.name}?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Book now and get same-day service from our expert technicians. 
                We&apos;re available 7 days a week in {area.name}.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Book Your Service</h3>
              <LeadForm 
                serviceType="general"
                serviceCategory="service"
                area={area.name}
                sourcePage={`area-${area.slug}-bottom`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
