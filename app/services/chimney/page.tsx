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
  Wind, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Settings,
  RefreshCw,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Faber Chimney Service Bangalore | Elica, Hindware, Kaff Cleaning & Repair",
  description: "Authorized Faber chimney cleaning Bangalore. Expert Elica chimney service, Hindware chimney repair, Kaff motor replacement, Glen, Bosch, IFB & Kutchina chimney deep cleaning. Same-day service in Koramangala, HSR, Whitefield.",
  keywords: "Faber chimney service Bangalore, Elica chimney cleaning, Hindware chimney repair, Kaff chimney service, Glen chimney cleaning, Bosch chimney repair, IFB chimney service, Kutchina chimney cleaning Bangalore",
  openGraph: {
    title: "Faber Chimney Service Bangalore | Elica, Hindware, Kaff Repair",
    description: "Authorized service for Faber, Elica, Hindware, Kaff, Glen & Bosch chimneys in Bangalore. Deep cleaning, motor repair & filter replacement.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/chimney",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional chimney installation with proper ducting and electrical setup",
    price: "Starting ₹999"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning of filters, motor, and body for optimal performance",
    price: "Starting ₹499"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert diagnosis and repair of all chimney issues with genuine parts",
    price: "Starting ₹349"
  },
  {
    icon: RefreshCw,
    title: "AMC Plans",
    description: "Annual maintenance with regular cleaning and priority support",
    price: "Starting ₹1,499/year"
  }
]

const brands = [
  "Elica", "Faber", "Kaff", "Hindware", "Glen", "Bosch", 
  "IFB", "Prestige", "Sunflame", "Pigeon", "Kutchina", "Hafele"
]

const faqs = [
  {
    question: "How often should I clean my kitchen chimney?",
    answer: "We recommend professional cleaning every 2-3 months for regular use. If you cook frequently with oil, monthly cleaning is ideal for optimal performance."
  },
  {
    question: "What is included in chimney cleaning service?",
    answer: "Our cleaning includes filter removal and degreasing, motor cleaning, body cleaning, suction check, and performance testing. We use food-safe chemicals only."
  },
  {
    question: "How much does chimney service cost in Bangalore?",
    answer: "Basic cleaning starts from ₹499. Deep cleaning with motor service costs ₹799-1,299. Repair costs vary based on the issue - typically ₹500-2,000."
  },
  {
    question: "Do you service all chimney brands?",
    answer: "Yes, we service all brands including Elica, Faber, Kaff, Hindware, Glen, Bosch, IFB, and more. Our technicians are trained on all models."
  },
  {
    question: "My chimney is not sucking properly. Can you fix it?",
    answer: "Yes! Poor suction is usually due to clogged filters or motor issues. Our technicians diagnose and fix suction problems with proper cleaning or part replacement."
  },
  {
    question: "Do you provide chimney installation services?",
    answer: "Yes, we provide complete installation including wall mounting, ducting, electrical connection, and testing. We work with all chimney types - wall-mounted, island, and built-in."
  }
]

const features = [
  "Professional deep cleaning",
  "Genuine spare parts",
  "30-day service warranty",
  "Same-day service available",
  "Food-safe cleaning chemicals",
  "All brands serviced"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Chimney", href: "/services/chimney" },
]

export default function ChimneyPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceName="Kitchen Chimney Service Bangalore"
        description="Professional kitchen chimney cleaning, repair, and installation services in Bangalore. All brands serviced."
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
                <Wind className="w-4 h-4" />
                Kitchen Chimney Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Faber & Elica Chimney Service in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Authorized Faber chimney cleaning, Elica chimney service, Hindware repair & Kaff motor 
                replacement across Bangalore. Deep cleaning with same-day service available.
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
                  src="/images/chimney.jpg"
                  alt="Faber chimney cleaning and Elica chimney service in Bangalore kitchen - deep cleaning and motor repair"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Deep Cleaning</div>
                    <div className="text-sm text-muted-foreground">Starting ₹499</div>
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
              Our Chimney Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete kitchen chimney solutions for homes in Bangalore
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
              Expert service for all major kitchen chimney brands
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

      {/* Cleaning Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional 6-step chimney cleaning for spotless results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Inspection", desc: "Check chimney condition and identify issues" },
              { step: "2", title: "Filter Removal", desc: "Carefully remove mesh and baffle filters" },
              { step: "3", title: "Degreasing", desc: "Soak filters in food-safe degreaser solution" },
              { step: "4", title: "Motor Cleaning", desc: "Clean motor blades and housing" },
              { step: "5", title: "Body Cleaning", desc: "Clean and polish exterior surfaces" },
              { step: "6", title: "Testing", desc: "Test suction power and reassemble" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
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
              Chimney Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major chimney brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["chimney"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/chimney/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              Chimney Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground">
              We provide chimney services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/chimney`}
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
      <TestimonialsSection 
        title="Customer Reviews"
        subtitle="See what our customers say about our chimney services"
        testimonials={TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="Chimney Service FAQs"
        subtitle="Common questions about chimney services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Chimney Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your chimney cleaning or repair service. 
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
                  <CheckCircle className="w-5 h-5" />
                  <span>All major brands serviced</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Request a Callback</h3>
              <LeadForm 
                serviceType="chimney"
                serviceCategory="service"
                sourcePage="chimney-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
