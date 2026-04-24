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
  Snowflake, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Settings,
  RefreshCw,
  Wind,
  Thermometer,
  AirVent,
  Zap,
  Building2,
  Home,
  type LucideIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Daikin AC Service Bangalore | LG, Voltas, Samsung, Blue Star Repair & AMC",
  description: "Authorized Daikin AC service Bangalore. Expert LG AC repair, Samsung AC service, Voltas AC gas refill, Blue Star AC installation, Hitachi, Carrier & O General AC AMC. Same-day service in Koramangala, Whitefield, HSR Layout.",
  keywords: "Daikin AC service Bangalore, LG AC repair Bangalore, Samsung AC service, Voltas AC gas refill, Blue Star AC installation, Hitachi AC service, Carrier AC repair, O General AC service, Godrej AC repair Bangalore",
  openGraph: {
    title: "Daikin AC Service Bangalore | LG, Voltas, Samsung, Blue Star Repair",
    description: "Authorized service for Daikin, LG, Samsung, Voltas, Blue Star, Hitachi & Carrier ACs in Bangalore. Gas refill, compressor repair & AMC.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/ac",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional AC installation with proper copper piping and electrical setup",
    price: "Starting ₹1,499"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert diagnosis and repair of all AC issues with genuine parts",
    price: "Starting ₹349"
  },
  {
    icon: Wind,
    title: "Gas Filling",
    description: "Quality refrigerant gas top-up and leak detection service",
    price: "Starting ₹1,299"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive cleaning of filters, coils, and drainage",
    price: "Starting ₹499"
  },
  {
    icon: RefreshCw,
    title: "AMC Plans",
    description: "Annual maintenance with 2-4 services and priority support",
    price: "Starting ₹2,499/year"
  },
  {
    icon: Thermometer,
    title: "Uninstallation",
    description: "Safe AC removal with gas recovery and shifting",
    price: "Starting ₹799"
  }
]

const brands = [
  "LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", 
  "Carrier", "Godrej", "Panasonic", "Whirlpool", "Haier", "Lloyd"
]

const faqs = [
  {
    question: "How often should I service my AC?",
    answer: "We recommend servicing your AC every 3-4 months for optimal performance. Before summer and monsoon are the best times for preventive maintenance."
  },
  {
    question: "What are signs that my AC needs gas refilling?",
    answer: "Signs include reduced cooling, AC running continuously without cooling, ice formation on pipes, and unusual sounds. Our technicians can check gas levels accurately."
  },
  {
    question: "How much does AC gas filling cost in Bangalore?",
    answer: "Gas filling starts from ₹1,299 for R32 gas (1 ton AC). R410A gas costs ₹1,499-2,499 depending on quantity. Price includes leak testing."
  },
  {
    question: "Do you service all AC brands and types?",
    answer: "Yes, we service all brands including LG, Samsung, Voltas, Daikin, Blue Star, and more. We handle split ACs, window ACs, cassette ACs, and inverter ACs."
  },
  {
    question: "How long does AC installation take?",
    answer: "Standard split AC installation takes 2-3 hours including mounting, piping, electrical connection, and testing. Complex installations may take longer."
  },
  {
    question: "What is included in AC deep cleaning?",
    answer: "Deep cleaning includes filter washing, evaporator coil cleaning, condenser cleaning, drain pipe clearing, and sanitization. It improves cooling efficiency by up to 30%."
  }
]

const features = [
  "Certified AC technicians",
  "Genuine spare parts",
  "90-day service warranty",
  "Same-day service available",
  "Quality refrigerant gas",
  "All brands serviced"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "AC", href: "/services/ac" },
]

export default function ACPage() {
  const filteredTestimonials = TESTIMONIALS.filter(t => 
    t.service.toLowerCase().includes("ac") || t.service.toLowerCase().includes("air")
  ).slice(0, 3)

  return (
    <>
      <ServiceJsonLd 
        serviceName="AC Service Bangalore"
        description="Professional AC installation, repair, gas filling, and maintenance services in Bangalore. All brands serviced."
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
                <Snowflake className="w-4 h-4" />
                AC Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Daikin & LG AC Service in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Authorized Daikin AC service, LG AC repair, Samsung AC service, Voltas gas refill & 
                Blue Star AC installation across Bangalore. Same-day service with 90-day warranty.
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
                  src="/images/ac.jpg"
                  alt="Daikin AC service and LG AC repair in Bangalore - gas refill, compressor repair and installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Beat the Heat</div>
                    <div className="text-sm text-muted-foreground">Same-day service</div>
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
              Our AC Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete air conditioning solutions for homes and offices in Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Expert service for all major AC brands
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

      {/* AC Types We Service */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AC Types We Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert service for all types of air conditioners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {([
              { 
                title: "Split AC", 
                desc: "Daikin, LG, Samsung, Voltas wall-mounted split ACs",
                icon: AirVent,
                color: "bg-cyan-100 text-cyan-600",
                brands: ["Daikin", "LG", "Samsung", "Voltas"]
              },
              { 
                title: "Window AC", 
                desc: "Voltas, Blue Star, Godrej window air conditioners",
                icon: Home,
                color: "bg-blue-100 text-blue-600",
                brands: ["Voltas", "Blue Star", "Godrej", "Lloyd"]
              },
              { 
                title: "Inverter AC", 
                desc: "Daikin, Hitachi, Carrier energy-efficient inverter ACs",
                icon: Zap,
                color: "bg-green-100 text-green-600",
                brands: ["Daikin", "Hitachi", "Carrier", "O General"]
              },
              { 
                title: "Cassette AC", 
                desc: "Daikin, Blue Star, Carrier ceiling-mounted ACs",
                icon: Building2,
                color: "bg-purple-100 text-purple-600",
                brands: ["Daikin", "Blue Star", "Carrier", "Mitsubishi"]
              },
            ] as const).map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.brands.map((brand) => (
                        <span key={brand} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Common Issues We Fix */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common AC Problems We Fix
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our technicians handle all types of AC issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "AC Not Cooling", desc: "Gas leak, dirty filters, compressor issues" },
              { title: "Water Leakage", desc: "Blocked drain pipe, frozen coil, improper tilt" },
              { title: "Strange Noise", desc: "Loose parts, fan motor issues, compressor problems" },
              { title: "AC Not Starting", desc: "Electrical issues, capacitor failure, PCB problems" },
              { title: "Bad Smell", desc: "Mold growth, dirty filters, drainage issues" },
              { title: "High Electricity Bill", desc: "Gas shortage, dirty coils, inefficient operation" },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Pages */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              AC Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major AC brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {BRAND_SERVICES["ac"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/ac/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg text-center text-sm font-medium transition-colors"
              >
                {brand.brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              AC Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground">
              We provide AC services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/ac`}
                className="bg-muted/50 px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
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
      <TestimonialsSection 
        title="Customer Reviews"
        subtitle="See what our customers say about our AC services"
        testimonials={filteredTestimonials.length >= 3 ? filteredTestimonials : TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="AC Service FAQs"
        subtitle="Common questions about AC services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book AC Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your AC service, repair, or installation. 
                Our team will contact you within 30 minutes.
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
                  <ShieldCheck className="w-5 h-5" />
                  <span>90-day warranty on repairs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Request a Callback</h3>
              <LeadForm 
                serviceType="ac"
                serviceCategory="service"
                sourcePage="ac-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
