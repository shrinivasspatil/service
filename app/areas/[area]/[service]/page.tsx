import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BANGALORE_AREAS, SERVICES, TESTIMONIALS, COMPANY_INFO } from "@/lib/constants"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ServiceJsonLd, BreadcrumbJsonLd, FaqJsonLd, LocalBusinessJsonLd, ProductSchema, AggregateRatingSchema } from "@/components/seo/json-ld"
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

  const titleMap: Record<string, string> = {
    "water-purifier": `Kent RO Service ${area.name} | Aquaguard, Pureit Repair & Installation`,
    "chimney": `Faber Chimney Cleaning ${area.name} | Elica, Hindware Service & Repair`,
    "hob": `Prestige Hob Repair ${area.name} | Pigeon, Sunflame, Gilma Service`,
    "ac": `Daikin AC Service ${area.name} | LG, Voltas, Samsung AC Repair`,
  }

  const descMap: Record<string, string> = {
    "water-purifier": `Kent RO service ${area.name}, Aquaguard repair, Pureit service, Livpure AMC, Blue Star & AO Smith water purifier installation in ${area.name} Bangalore. Same-day filter replacement!`,
    "chimney": `Faber chimney cleaning ${area.name}, Elica chimney service, Hindware chimney repair, Kaff, Glen, Bosch chimney motor repair in ${area.name} Bangalore. Deep cleaning available!`,
    "hob": `Prestige hob repair ${area.name}, Pigeon gas stove service, Sunflame cooktop repair, Gilma, Elica, Faber hob installation in ${area.name} Bangalore. Burner repair & ignition fix!`,
    "ac": `Daikin AC service ${area.name}, LG AC repair, Samsung AC service, Voltas AC gas refill, Blue Star, Hitachi, Carrier AC installation in ${area.name} Bangalore. Same-day service!`,
  }

  const keywordsMap: Record<string, string> = {
    "water-purifier": `Kent RO service ${area.name}, Aquaguard service ${area.name}, Pureit repair ${area.name}, Livpure service, water purifier AMC ${area.name} Bangalore`,
    "chimney": `Faber chimney cleaning ${area.name}, Elica chimney service ${area.name}, Hindware chimney repair, chimney deep cleaning ${area.name} Bangalore`,
    "hob": `Prestige hob repair ${area.name}, Pigeon gas stove service ${area.name}, Sunflame cooktop repair, hob installation ${area.name} Bangalore`,
    "ac": `Daikin AC service ${area.name}, LG AC repair ${area.name}, Voltas AC gas refill, Samsung AC service ${area.name} Bangalore`,
  }

  return {
    title: titleMap[serviceSlug] || `${service.name} Service in ${area.name} | ServiceHub Bangalore`,
    description: descMap[serviceSlug] || `Expert ${service.name.toLowerCase()} services in ${area.name}, Bangalore. Installation, repair, maintenance. Same-day service available.`,
    keywords: keywordsMap[serviceSlug] || `${service.name.toLowerCase()} service ${area.name}, ${service.name.toLowerCase()} repair ${area.name}, ${service.name.toLowerCase()} installation ${area.name} Bangalore`,
    openGraph: {
      title: `${service.name} Service in ${area.name} | ServiceHub Bangalore`,
      description: `Professional ${service.name.toLowerCase()} services in ${area.name}. Installation, repair, AMC available.`,
      type: "website",
    },
    alternates: {
      canonical: `https://servicehub-bangalore.com/areas/${area.slug}/${service.slug}`,
    },
  }
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

  const faqs = [
    {
      question: `What ${service.name.toLowerCase()} services do you offer in ${area.name}?`,
      answer: `We offer complete ${service.name.toLowerCase()} services in ${area.name} including sales of new units, professional installation, repair & maintenance, and annual maintenance contracts (AMC).`
    },
    {
      question: `How much does ${service.name.toLowerCase()} service cost in ${area.name}?`,
      answer: `${service.name} service in ${area.name} starts from ₹299 for basic service. Repair costs depend on the issue. We provide transparent, upfront pricing before any work begins.`
    },
    {
      question: `Do you offer same-day ${service.name.toLowerCase()} service in ${area.name}?`,
      answer: `Yes! We offer same-day ${service.name.toLowerCase()} service in ${area.name}. Book before 2 PM for same-day service. Emergency services also available.`
    },
    {
      question: `Which ${service.name.toLowerCase()} brands do you service in ${area.name}?`,
      answer: `We service all major ${service.name.toLowerCase()} brands in ${area.name}. Our technicians are trained on all models and use genuine spare parts.`
    },
    {
      question: `Do you provide warranty on ${service.name.toLowerCase()} repairs in ${area.name}?`,
      answer: `Yes, all our ${service.name.toLowerCase()} repairs in ${area.name} come with a 30-90 day warranty depending on the service type. Parts replaced also come with warranty.`
    }
  ]

  // Get nearby areas
  const currentIndex = BANGALORE_AREAS.findIndex(a => a.slug === areaSlug)
  const nearbyAreas = [
    ...BANGALORE_AREAS.slice(Math.max(0, currentIndex - 2), currentIndex),
    ...BANGALORE_AREAS.slice(currentIndex + 1, currentIndex + 3)
  ].slice(0, 4)

  const ServiceIcon = service.icon

  return (
    <>
      <LocalBusinessJsonLd />
      <ServiceJsonLd 
        serviceName={`${service.name} Service in ${area.name}`}
        description={`Professional ${service.name.toLowerCase()} services in ${area.name}, Bangalore. Installation, repair, maintenance.`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FaqJsonLd faqs={faqs} />
      <ProductSchema 
        serviceName={service.name}
        area={area.name}
        areaSlug={area.slug}
        serviceSlug={service.slug}
        brands={service.brands as string[]}
        priceRange={service.priceRange}
      />
      <AggregateRatingSchema 
        itemName={`${service.name} Service in ${area.name}`}
        ratingValue={4.8}
        reviewCount={850}
        area={area.name}
      />

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
                {service.name} Service in {area.name}, Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                {service.description} Professional installation, repair, and maintenance services 
                in {area.name} with same-day service available.
              </p>

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
                desc: `Professional ${service.name.toLowerCase()} installation in ${area.name}`,
                price: "Starting ₹499"
              },
              { 
                title: "Repair", 
                desc: `Expert ${service.name.toLowerCase()} repair with genuine parts`,
                price: "Starting ₹299"
              },
              { 
                title: "Maintenance", 
                desc: "Regular servicing for optimal performance",
                price: "Starting ₹399"
              },
              { 
                title: "AMC Plans", 
                desc: "Annual contracts with priority support",
                price: "Starting ₹1,499/yr"
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
        title="Customer Reviews"
        subtitle={`See what customers in ${area.name} say about our services`}
        testimonials={TESTIMONIALS.slice(0, 3)}
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
