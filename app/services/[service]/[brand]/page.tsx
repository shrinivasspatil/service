import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { SERVICES, BRAND_SERVICES, BANGALORE_AREAS, COMPANY_INFO } from "@/lib/constants"
import { ServiceJsonLd, BreadcrumbJsonLd, FaqJsonLd, ProductSchema } from "@/components/seo/json-ld"
import { LeadForm } from "@/components/forms/lead-form"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Wrench,
  Settings,
  BadgeCheck
} from "lucide-react"

// Generate all brand pages statically
export async function generateStaticParams() {
  const params: { service: string; brand: string }[] = []
  
  Object.entries(BRAND_SERVICES).forEach(([serviceSlug, brands]) => {
    brands.forEach((brandData) => {
      params.push({
        service: serviceSlug,
        brand: brandData.brand.toLowerCase().replace(/\s+/g, '-')
      })
    })
  })
  
  return params
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ service: string; brand: string }> 
}): Promise<Metadata> {
  const { service: serviceSlug, brand: brandSlug } = await params
  
  const service = SERVICES.find(s => s.slug === serviceSlug)
  const brandServices = BRAND_SERVICES[serviceSlug as keyof typeof BRAND_SERVICES]
  const brandData = brandServices?.find(
    b => b.brand.toLowerCase().replace(/\s+/g, '-') === brandSlug
  )

  if (!service || !brandData) {
    return { title: "Not Found" }
  }

  const brandName = brandData.brand
  const serviceName = service.name

  const title = `${brandName} ${serviceName} Service Bangalore | Repair, Installation & AMC`
  const description = `Authorized ${brandName} ${serviceName.toLowerCase()} service center in Bangalore. Expert ${brandName} repair, installation, maintenance & AMC. Same-day service in Koramangala, HSR Layout, Whitefield & all areas. Call ${COMPANY_INFO.phone}`

  return {
    title,
    description,
    keywords: [
      `${brandName} ${serviceName} service Bangalore`,
      `${brandName} ${serviceName} repair Bangalore`,
      `${brandName} service center Bangalore`,
      `${brandName} ${serviceName} installation`,
      `${brandName} AMC Bangalore`,
      ...brandData.services.map(s => `${s} Bangalore`),
    ].join(", "),
    openGraph: {
      title: `${brandName} ${serviceName} Service in Bangalore`,
      description: `Expert ${brandName} ${serviceName.toLowerCase()} repair, installation & AMC in Bangalore. Same-day service available.`,
      type: "website",
      url: `https://servicehub-bangalore.com/services/${serviceSlug}/${brandSlug}`,
    },
    alternates: {
      canonical: `https://servicehub-bangalore.com/services/${serviceSlug}/${brandSlug}`,
    },
  }
}

export default async function BrandServicePage({ 
  params 
}: { 
  params: Promise<{ service: string; brand: string }> 
}) {
  const { service: serviceSlug, brand: brandSlug } = await params
  
  const service = SERVICES.find(s => s.slug === serviceSlug)
  const brandServices = BRAND_SERVICES[serviceSlug as keyof typeof BRAND_SERVICES]
  const brandData = brandServices?.find(
    b => b.brand.toLowerCase().replace(/\s+/g, '-') === brandSlug
  )

  if (!service || !brandData) {
    notFound()
  }

  const brandName = brandData.brand
  const Icon = service.icon

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: `/services/${serviceSlug}` },
    { label: brandName, href: `/services/${serviceSlug}/${brandSlug}` },
  ]

  // Dynamic FAQs for this brand
  const faqs = [
    {
      question: `What is the cost of ${brandName} ${service.name.toLowerCase()} service in Bangalore?`,
      answer: `${brandName} ${service.name.toLowerCase()} service charges start from ${service.startingPrice}. This includes inspection and basic service. Parts replacement and major repairs are charged extra based on requirements.`
    },
    {
      question: `Do you provide ${brandName} ${service.name.toLowerCase()} repair at home?`,
      answer: `Yes, we provide doorstep ${brandName} ${service.name.toLowerCase()} repair service across all Bangalore areas including Koramangala, HSR Layout, Whitefield, Electronic City, and more.`
    },
    {
      question: `Is your ${brandName} service center authorized?`,
      answer: `We are an authorized service partner for ${brandName} products in Bangalore. Our technicians are trained and certified for ${brandName} ${service.name.toLowerCase()} repair and maintenance.`
    },
    {
      question: `Do you provide AMC for ${brandName} ${service.name.toLowerCase()}?`,
      answer: `Yes, we offer Annual Maintenance Contracts (AMC) for ${brandName} ${service.name.toLowerCase()}. AMC includes regular servicing, priority support, and discounted repair charges.`
    },
    {
      question: `What warranty do you provide on ${brandName} repairs?`,
      answer: `We provide 90 days warranty on all ${brandName} ${service.name.toLowerCase()} repairs. Genuine ${brandName} spare parts come with manufacturer warranty.`
    },
  ]

  // Service types offered
  const serviceTypes = [
    { name: "Installation", desc: `New ${brandName} ${service.name.toLowerCase()} installation`, icon: Settings },
    { name: "Repair", desc: `${brandName} ${service.name.toLowerCase()} fault diagnosis & repair`, icon: Wrench },
    { name: "Service", desc: `Regular ${brandName} ${service.name.toLowerCase()} maintenance`, icon: CheckCircle },
    { name: "AMC", desc: `Annual maintenance contract for ${brandName}`, icon: Shield },
  ]

  // Popular areas for this service
  const popularAreas = BANGALORE_AREAS.slice(0, 12)

  return (
    <>
      {/* SEO Schemas */}
      <ServiceJsonLd 
        serviceName={`${brandName} ${service.name} Service Bangalore`}
        description={`Professional ${brandName} ${service.name.toLowerCase()} repair, installation and maintenance in Bangalore`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FaqJsonLd faqs={faqs} />
      <ProductSchema 
        serviceName={service.name}
        area="Bangalore"
        areaSlug="bangalore"
        serviceSlug={serviceSlug}
        brands={[brandName]}
        priceRange={service.priceRange}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 py-8 relative">
            <Breadcrumbs items={breadcrumbItems} className="text-slate-400 mb-8" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${service.iconBg}`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Authorized Service Partner
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {brandName} {service.name} Service in Bangalore
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 text-pretty">
                  Expert {brandName} {service.name.toLowerCase()} repair, installation, maintenance & AMC services 
                  across all Bangalore areas. Certified technicians with genuine {brandName} spare parts.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                    <BadgeCheck className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Certified Technicians</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">90 Days Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">4.8/5 Rating</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="gap-2">
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="gap-2 border-white/20 hover:bg-white/10">
                    <a href="#book-service">
                      Book Service
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={service.image}
                    alt={`${brandName} ${service.name.toLowerCase()} service in Bangalore - repair and installation`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold">Same Day Service</div>
                      <div className="text-sm text-slate-500">Book before 2 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {brandName} {service.name} Services We Offer
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Comprehensive {brandName} {service.name.toLowerCase()} solutions with certified technicians and genuine parts
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {serviceTypes.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                        <ItemIcon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{brandName} {item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Services for this Brand */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Complete {brandName} Service List
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              All {brandName} {service.name.toLowerCase()} services available in Bangalore
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {brandData.services.map((serviceName, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium">{serviceName}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {brandName} Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              We provide {brandName} {service.name.toLowerCase()} service across all Bangalore locations
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
              {popularAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/${serviceSlug}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md hover:border-primary border border-transparent transition-all text-sm"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/areas">
                  View All 32 Service Areas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us for {brandName} Service?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: BadgeCheck, title: "Certified Experts", desc: `Trained technicians for ${brandName} products` },
                { icon: Shield, title: "Genuine Parts", desc: `Original ${brandName} spare parts used` },
                { icon: Clock, title: "Same Day Service", desc: "Quick response within 2-4 hours" },
                { icon: Star, title: "90 Days Warranty", desc: "Assured warranty on all repairs" },
              ].map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <ItemIcon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {brandName} {service.name} Service FAQs
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Common questions about {brandName} {service.name.toLowerCase()} service in Bangalore
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Book Service Form */}
        <section id="book-service" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Book {brandName} {service.name} Service
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill the form below and our technician will contact you shortly
              </p>

              <Card>
                <CardContent className="p-6">
                  <LeadForm 
                    serviceType="repair"
                    serviceCategory={serviceSlug}
                    sourcePage={`/services/${serviceSlug}/${brandSlug}`}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Other {service.name} Brands We Service
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {brandServices
                ?.filter(b => b.brand !== brandName)
                .map((b) => (
                  <Link
                    key={b.brand}
                    href={`/services/${serviceSlug}/${b.brand.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
                  >
                    {b.brand}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
