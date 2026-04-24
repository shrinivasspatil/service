import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { LeadForm } from "@/components/forms/lead-form"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { BANGALORE_AREAS, TESTIMONIALS, BRAND_SERVICES } from "@/lib/constants"
import { 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Settings,
  RefreshCw,
  Filter
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kent RO Service Bangalore | Aquaguard, Pureit, Livpure Repair & AMC",
  description: "Authorized Kent RO service center Bangalore. Expert Aquaguard repair, Pureit service, Livpure AMC, Blue Star & AO Smith water purifier installation. Same-day service in Koramangala, Whitefield, HSR Layout.",
  keywords: "Kent RO service Bangalore, Aquaguard service center Bangalore, Pureit repair Bangalore, Livpure service, Blue Star water purifier repair, AO Smith service, Eureka Forbes service center, water purifier AMC Bangalore",
  openGraph: {
    title: "Kent RO Service Bangalore | Aquaguard, Pureit, Livpure Repair",
    description: "Authorized service for Kent, Aquaguard, Pureit, Livpure, Blue Star & AO Smith water purifiers in Bangalore. Filter replacement, AMC & emergency repairs.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/water-purifier",
  },
}

const services = [
  {
    icon: Settings,
    title: "Kent & Aquaguard Installation",
    description: "Professional Kent RO installation, Aquaguard setup, Pureit, Livpure & all brand installation with testing",
    price: "Starting ₹499"
  },
  {
    icon: Wrench,
    title: "RO Repair & Service",
    description: "Expert Kent RO repair, Aquaguard service, Pureit repair with genuine spare parts",
    price: "Starting ₹299"
  },
  {
    icon: Filter,
    title: "Filter Replacement",
    description: "Genuine Kent filter, Aquaguard filter, Pureit filter replacement for RO, UV, UF systems",
    price: "Starting ₹699"
  },
  {
    icon: RefreshCw,
    title: "Kent & Aquaguard AMC",
    description: "Annual maintenance for Kent, Aquaguard, Pureit, Livpure with regular servicing & priority support",
    price: "Starting ₹1,999/year"
  }
]

const brands = [
  "Kent", "Aquaguard", "Pureit", "Livpure", "Blue Star", "AO Smith", 
  "Havells", "Eureka Forbes", "Hindware", "Tata Swach", "HUL", "V-Guard"
]

const faqs = [
  {
    question: "How much does Kent RO service cost in Bangalore?",
    answer: "Kent RO service charges start from ₹299 for basic servicing. Kent filter replacement costs ₹699-₹1,499 depending on the filter type. We provide genuine Kent spare parts with warranty."
  },
  {
    question: "Do you provide Aquaguard service in my area?",
    answer: "Yes! We provide Aquaguard service center facilities across all Bangalore areas including Koramangala, Whitefield, HSR Layout, Electronic City, Marathahalli, Indiranagar, and more. Same-day Aquaguard repair available."
  },
  {
    question: "How much does water purifier repair cost in Bangalore?",
    answer: "Basic service starts from ₹299. Repair costs depend on the issue - minor repairs cost ₹300-800, while major repairs may cost ₹1,000-2,500 including parts."
  },
  {
    question: "Do you provide same-day water purifier service?",
    answer: "Yes, we offer same-day service for most areas in Bangalore. Book before 2 PM for same-day service."
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we only use 100% genuine spare parts from authorized suppliers. All parts come with warranty."
  },
  {
    question: "What is included in the AMC plan?",
    answer: "Our AMC includes 2-3 free services per year, priority support, 10% discount on parts, free filter cleaning, and emergency repair coverage."
  }
]

const features = [
  "Certified & trained technicians",
  "100% genuine spare parts",
  "30-day service warranty",
  "Same-day service available",
  "Transparent pricing",
  "All brands serviced"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Water Purifier", href: "/services/water-purifier" },
]

export default function WaterPurifierPage() {
  const filteredTestimonials = TESTIMONIALS.filter(t => 
    t.service.toLowerCase().includes("water") || t.service.toLowerCase().includes("purifier")
  ).slice(0, 3)

  return (
    <>
      <ServiceJsonLd 
        serviceName="Water Purifier Service Bangalore"
        description="Expert water purifier installation, repair, and maintenance services in Bangalore. All brands serviced."
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Droplets className="w-4 h-4" />
                Water Purifier Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Kent RO & Aquaguard Service in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Authorized Kent RO service, Aquaguard repair, Pureit service, Livpure AMC & Blue Star 
                water purifier installation across Bangalore. Same-day service with genuine parts.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+919876543210" 
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
                  src="/images/water-purifier.jpg"
                  alt="Kent RO service and Aquaguard water purifier repair in Bangalore - filter replacement, AMC and installation"
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
                    <div className="text-sm text-muted-foreground">Book before 2 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Water Purifier Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete water purifier solutions for homes and offices in Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="text-primary font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Brands We Service
            </h2>
            <p className="text-muted-foreground">
              Expert service for all major water purifier brands
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-background px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 hover:shadow-sm transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for Water Purifier Service?
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re Bangalore&apos;s trusted water purifier service provider with 
                years of experience and thousands of happy customers.
              </p>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, title: "Verified Technicians", desc: "Background-checked & trained professionals" },
                  { icon: Sparkles, title: "Genuine Parts", desc: "100% authentic spare parts with warranty" },
                  { icon: Timer, title: "Quick Service", desc: "Same-day service in most Bangalore areas" },
                  { icon: CheckCircle, title: "Satisfaction Guaranteed", desc: "30-day warranty on all services" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-technician.jpg"
                alt="Kent and Aquaguard certified water purifier technician in Bangalore providing RO service and Pureit repair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pages */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Water Purifier Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major water purifier brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["water-purifier"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/water-purifier/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg text-center text-sm font-medium transition-colors"
              >
                {brand.brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Water Purifier Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground">
              We provide water purifier services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/water-purifier`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {area.name}
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

      {/* Testimonials */}
      {filteredTestimonials.length > 0 && (
        <TestimonialsSection 
          title="Customer Reviews"
          subtitle="See what our customers say about our water purifier services"
          testimonials={filteredTestimonials.length >= 3 ? filteredTestimonials : TESTIMONIALS.slice(0, 3)}
        />
      )}

      {/* FAQ Section */}
      <FaqSection 
        title="Water Purifier Service FAQs"
        subtitle="Common questions about water purifier services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Water Purifier Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your water purifier service. 
                Our team will contact you within 30 minutes to confirm your appointment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5" />
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>All major brands serviced</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Request a Callback</h3>
              <LeadForm 
                serviceType="water-purifier"
                serviceCategory="service"
                sourcePage="water-purifier-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
