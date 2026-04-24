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
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Settings,
  RefreshCw,
  Droplets,
  Waves,
  Zap,
  type LucideIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Bosch Dishwasher Service Bangalore | IFB, LG, Samsung, Siemens Repair",
  description: "Expert Bosch dishwasher repair Bangalore. IFB dishwasher service, LG dishwasher repair, Samsung dishwasher service, Siemens installation. Same-day service in Koramangala, Whitefield, HSR Layout.",
  keywords: "Bosch dishwasher service Bangalore, IFB dishwasher repair, LG dishwasher service, Samsung dishwasher repair, Siemens dishwasher service, Faber dishwasher repair Bangalore",
  openGraph: {
    title: "Bosch Dishwasher Service Bangalore | IFB, LG, Samsung Repair",
    description: "Expert repair for Bosch, IFB, LG, Samsung & Siemens dishwashers in Bangalore. Installation, repair & maintenance.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/dishwasher",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional dishwasher installation with proper plumbing connection",
    price: "Starting ₹999"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert diagnosis and repair of all dishwasher issues",
    price: "Starting ₹449"
  },
  {
    icon: Droplets,
    title: "Water Inlet Fix",
    description: "Water inlet valve repair, hose replacement and leak fix",
    price: "Starting ₹399"
  },
  {
    icon: Waves,
    title: "Drain Repair",
    description: "Drain pump repair, filter cleaning and drainage fix",
    price: "Starting ₹499"
  },
  {
    icon: RefreshCw,
    title: "AMC Plans",
    description: "Annual maintenance with regular servicing and priority support",
    price: "Starting ₹2,499/year"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Complete interior cleaning, descaling and sanitization",
    price: "Starting ₹599"
  }
]

const brands = [
  "Bosch", "IFB", "LG", "Samsung", "Siemens", "Faber", 
  "Voltas Beko", "Elica", "Kaff", "Miele", "Whirlpool", "Electrolux"
]

const faqs = [
  {
    question: "How often should I service my dishwasher?",
    answer: "We recommend servicing your dishwasher every 6-12 months. Regular cleaning of filters and spray arms ensures optimal performance."
  },
  {
    question: "Why is my dishwasher not cleaning properly?",
    answer: "Common causes include clogged spray arms, dirty filters, low water temperature, or incorrect detergent. Our technicians can diagnose and fix the issue."
  },
  {
    question: "How much does dishwasher installation cost?",
    answer: "Dishwasher installation starts from ₹999 including plumbing connection. Built-in installations may cost more depending on cabinet modifications needed."
  },
  {
    question: "Do you repair all dishwasher brands?",
    answer: "Yes, we service all brands - Bosch, IFB, LG, Samsung, Siemens, Faber, Voltas Beko, and all major dishwasher brands available in India."
  },
  {
    question: "Why is my dishwasher not draining?",
    answer: "Drainage issues can be caused by clogged filters, blocked drain hose, faulty drain pump, or garbage disposal connection problems."
  },
  {
    question: "Can you repair dishwasher control panel?",
    answer: "Yes, we repair and replace control panels and PCB boards for all dishwasher brands. Control panel repair costs ₹1,500-4,000 depending on the model."
  }
]

const features = [
  "Certified technicians",
  "Genuine spare parts",
  "90-day service warranty",
  "Same-day service available",
  "All brands serviced",
  "Built-in & countertop"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Dishwasher", href: "/services/dishwasher" },
]

export default function DishwasherPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceName="Dishwasher Service Bangalore"
        description="Professional dishwasher installation, repair, and maintenance services in Bangalore. All brands serviced."
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
                <Sparkles className="w-4 h-4" />
                Dishwasher Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bosch & IFB Dishwasher Service in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert Bosch dishwasher repair, IFB dishwasher service, LG dishwasher repair, 
                Samsung & Siemens installation across Bangalore. Same-day service with 90-day warranty.
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
                  src="/images/dishwasher.jpg"
                  alt="Bosch dishwasher service and IFB dishwasher repair in Bangalore - installation and maintenance"
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
                    <div className="font-semibold text-foreground">Expert Repair</div>
                    <div className="text-sm text-muted-foreground">All brands serviced</div>
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
              Our Dishwasher Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete dishwasher solutions for homes in Bangalore
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
              Expert service for all major dishwasher brands
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

      {/* Types We Service */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types We Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert service for all types of dishwashers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Built-in", 
                desc: "Bosch, Siemens, IFB integrated dishwashers",
                icon: Settings,
                color: "bg-emerald-100 text-emerald-600",
                brands: ["Bosch", "Siemens", "IFB", "Miele"]
              },
              { 
                title: "Freestanding", 
                desc: "LG, Samsung, IFB standalone dishwashers",
                icon: Sparkles,
                color: "bg-blue-100 text-blue-600",
                brands: ["LG", "Samsung", "IFB", "Bosch"]
              },
              { 
                title: "Countertop", 
                desc: "Faber, Elica, Kaff compact dishwashers",
                icon: Waves,
                color: "bg-violet-100 text-violet-600",
                brands: ["Faber", "Elica", "Kaff", "Voltas Beko"]
              },
              { 
                title: "Drawer", 
                desc: "Fisher & Paykel, Bosch drawer dishwashers",
                icon: Zap,
                color: "bg-orange-100 text-orange-600",
                brands: ["Fisher & Paykel", "Bosch", "Siemens"]
              },
            ].map((item, index) => {
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
              Common Problems We Fix
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our technicians handle all types of dishwasher issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Not Cleaning", desc: "Clogged spray arms, dirty filters, low water temp" },
              { title: "Not Draining", desc: "Blocked filter, drain pump failure, hose clog" },
              { title: "Water Leakage", desc: "Door seal damage, loose connections, overflow" },
              { title: "Not Starting", desc: "Power issues, door latch, control panel failure" },
              { title: "Strange Noise", desc: "Pump issues, spray arm obstruction, motor problems" },
              { title: "Bad Smell", desc: "Food residue, mold growth, drainage issues" },
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
              Dishwasher Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major dishwasher brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["dishwasher"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/dishwasher/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground">
              We provide dishwasher services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/dishwasher`}
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
        subtitle="See what our customers say about our dishwasher services"
        testimonials={TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="Dishwasher Service FAQs"
        subtitle="Common questions about dishwasher services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Dishwasher Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your dishwasher service or repair. 
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
                serviceType="dishwasher"
                serviceCategory="service"
                sourcePage="dishwasher-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
