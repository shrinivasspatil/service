import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BANGALORE_AREAS, SERVICES, COMPANY_INFO } from "@/lib/constants"
import { getTestimonialsForAreaService } from "@/lib/testimonials"
import {
  getAreaServiceHeading,
  getAreaServiceIntro,
  getAreaServiceLocalDetails,
  getAreaServiceMetaDescription,
  getAreaServiceFaqs,
  getAreaServiceTitle,
} from "@/lib/area-content"
import {
  brandToSlug,
  getTopBrandsForService,
} from "@/lib/area-brand-pages"
import { pageMetadata } from "@/lib/seo"
import { getNearbyAreaPages } from "@/lib/coverage"
import { getAreaServiceAnswerSummary } from "@/lib/answer-summaries"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { LastUpdated } from "@/components/seo/last-updated"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { MapPin, Phone, Clock, CheckCircle, Star, ArrowRight, Timer, ShieldCheck, Wrench } from "lucide-react"

interface ServiceAreaPageProps {
  params: Promise<{ area: string; service: string }>
}

export async function generateStaticParams() {
  const params: { area: string; service: string }[] = []
  
  for (const area of BANGALORE_AREAS) {
    for (const service of SERVICES) {
      params.push({
        area: area.slug,
        service: service.slug,
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug } = await params
  const area = BANGALORE_AREAS.find(a => a.slug === areaSlug)
  const service = SERVICES.find(s => s.slug === serviceSlug)
  
  if (!area || !service) {
    return { title: "Page Not Found" }
  }

  return pageMetadata({
    title: getAreaServiceTitle(area, serviceSlug, service.name),
    description: getAreaServiceMetaDescription(area, serviceSlug),
    path: `/areas/${area.slug}/${service.slug}`,
  })
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { area: areaSlug, service: serviceSlug } = await params
  const area = BANGALORE_AREAS.find(a => a.slug === areaSlug)
  const service = SERVICES.find(s => s.slug === serviceSlug)
  
  if (!area || !service) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/areas" },
    { label: area.name, href: `/areas/${area.slug}` },
    { label: service.name, href: `/areas/${area.slug}/${service.slug}` },
  ]

  const faqs = getAreaServiceFaqs(
    area,
    service.name,
    service.slug,
    service.startingPrice,
    service.brands
  )

  const nearbyAreas = getNearbyAreaPages(area, 8)

  const ServiceIcon = service.icon
  const comboAnswer = getAreaServiceAnswerSummary(area, serviceSlug)
  const intro = getAreaServiceIntro(area, serviceSlug)
  const localDetails = getAreaServiceLocalDetails(
    area,
    service.slug,
    service.name,
    service.startingPrice
  )
  const topBrands = getTopBrandsForService(serviceSlug)
  const testimonials = getTestimonialsForAreaService(
    area.name,
    area.slug,
    service.slug,
    6
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <ServiceIcon className="w-4 h-4" />
                  {service.name}
                </span>
                <span className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {area.name}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {getAreaServiceHeading(area, service.slug, service.name)}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-4 text-pretty">
                {intro}
              </p>
              <LastUpdated className="text-sm text-muted-foreground mb-8" />

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "4.8 Google Rating" },
                  { icon: Timer, text: "Same-day Service" },
                  { icon: ShieldCheck, text: "Warranty Included" },
                  { icon: Wrench, text: "Expert Technicians" },
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

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={`${service.slug === 'water-purifier' ? 'Kent RO and Aquaguard' : service.slug === 'ac' ? 'Daikin and LG AC' : service.slug === 'chimney' ? 'Faber and Elica chimney' : 'Prestige and Pigeon hob'} ${service.name.toLowerCase()} service in ${area.name} Bangalore - repair and installation`}
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
                    <div className="font-semibold text-foreground">Same Day Service</div>
                    <div className="text-sm text-muted-foreground">in {area.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerSummary question={comboAnswer.question} answer={comboAnswer.answer} />

      {/* Unique local copy — reduces "thin/duplicate" clone signals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {localDetails.title}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {localDetails.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
            Common {service.name.toLowerCase()} issues we fix in {area.name}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {localDetails.commonIssues.map((issue) => (
              <li key={issue} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-8 text-sm">
            <Link
              href={`/areas/${area.slug}`}
              className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
            >
              All services in {area.name}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
            >
              {service.name} across Bangalore
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {(topBrands.length > 0) && (
        <section className="py-12 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Popular {service.name} Brands in {area.name}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Book brand-specific {service.name.toLowerCase()} repair near you in{" "}
              {area.name} — or open the Bangalore brand page.
            </p>
            <div className="flex flex-wrap gap-3">
              {topBrands.map((brandData) => {
                const slug = brandToSlug(brandData.brand)
                const href = `/services/${service.slug}/${slug}`
                const label = `${brandData.brand} ${service.name}`
                return (
                  <Link
                    key={brandData.brand}
                    href={href}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Services Offered */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {service.name} Services in {area.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete {service.name.toLowerCase()} solutions for homes in {area.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Installation", 
                  desc: `Professional ${service.name.toLowerCase()} installation for homes in ${area.name}`,
                  price: `From ${service.startingPrice}`
                },
                { 
                  title: "Repair", 
                  desc: `Doorstep ${service.name.toLowerCase()} repair with genuine parts in ${area.name}`,
                  price: `From ${service.startingPrice}`
                },
                { 
                  title: "Maintenance", 
                  desc: `Scheduled ${service.name.toLowerCase()} servicing across ${area.name}`,
                  price: "From ₹399"
                },
                { 
                  title: "AMC Plans", 
                  desc: `Annual ${service.name.toLowerCase()} cover with priority slots in ${area.name}`,
                  price: "From ₹1,499/yr"
                },
              ].map((item, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <div className="text-primary font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for {service.name} Service in {area.name}?
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re the trusted {service.name.toLowerCase()} service provider in {area.name} 
                with years of experience and hundreds of happy customers.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Local Experts", desc: `Technicians who know ${area.name} well for quick service` },
                  { title: "Genuine Parts", desc: "100% authentic spare parts with warranty" },
                  { title: "Fair Pricing", desc: "Transparent quotes with no hidden charges" },
                  { title: "Quick Service", desc: "Same-day service with 30-minute response" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get Free Quote for {service.name} Service
              </h3>
              <LeadForm 
                serviceType={service.slug}
                serviceCategory="service"
                area={area.name}
                sourcePage={`${area.slug}-${service.slug}-mid`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services in Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Other Services in {area.name}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.slug !== service.slug).map((otherService) => (
              <Link
                key={otherService.slug}
                href={`/areas/${area.slug}/${otherService.slug}`}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <otherService.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {otherService.name} Service
                </h3>
                <p className="text-sm text-muted-foreground">{otherService.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same Service in Nearby Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {service.name} Service in Nearby Areas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAreas.map((nearbyArea) => (
              <Link
                key={nearbyArea.slug}
                href={`/areas/${nearbyArea.slug}/${service.slug}`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center hover:border-primary hover:text-primary transition-colors"
              >
                {service.name} in {nearbyArea.name}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all {service.name} service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection 
        title={`${service.name} Reviews in ${area.name}`}
        subtitle={`Customers in ${area.name} share feedback on ${service.brands.slice(0, 4).join(", ")} and more`}
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <FaqSection 
        title={`${service.name} Service FAQs - ${area.name}`}
        subtitle={`Common questions about ${service.name.toLowerCase()} services in ${area.name}`}
        faqs={faqs}
      />

      {/* CTA Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book {service.name} Service in {area.name}
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Get expert {service.name.toLowerCase()} service in {area.name} today. 
                Same-day service available with warranty on all repairs.
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
                serviceType={service.slug}
                serviceCategory="service"
                area={area.name}
                sourcePage={`${area.slug}-${service.slug}-bottom`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
