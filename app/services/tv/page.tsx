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
  Tv, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Settings,
  Zap,
  Home,
  Truck,
  type LucideIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Samsung LG Sony TV Repair & Sales Bangalore | Repair Service",
  description: "Expert TV repair and sales in Bangalore. Samsung, LG, Sony, Panasonic TV screen repair, installation & home delivery. LED, QLED, OLED repair service.",
  keywords: "TV repair Bangalore, Samsung TV service, LG TV repair, Sony TV service, TV screen replacement, LED TV repair, QLED repair, television repair Bangalore",
  openGraph: {
    title: "Samsung & LG TV Repair Bangalore | Professional Service",
    description: "Expert TV repair and sales for Samsung, LG, Sony & all brands. Screen replacement, installation & home delivery available.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/tv",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation & Mounting",
    description: "Professional TV installation with HDMI setup and wall mounting",
    price: "Starting ₹499"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert diagnosis and repair of all TV issues and problems",
    price: "Starting ₹599"
  },
  {
    icon: Home,
    title: "Screen Replacement",
    description: "LED, QLED, OLED screen replacement with installation",
    price: "Starting ₹2,999"
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Home delivery and unboxing service for new televisions",
    price: "Starting ₹399"
  },
  {
    icon: Zap,
    title: "Power Issues",
    description: "Power supply repair, circuit board fix and electrical issues",
    price: "Starting ₹449"
  },
  {
    icon: Tv,
    title: "Software Update",
    description: "TV firmware update, reset and software troubleshooting",
    price: "Starting ₹299"
  }
]

const brands = [
  "Samsung", "LG", "Sony", "Panasonic", "Philips", "OnePlus", 
  "TCL", "Mi", "Realme", "iFFALCON", "Kodak", "CloudWalker"
]

const faqs = [
  {
    question: "How much does TV screen replacement cost?",
    answer: "TV screen replacement costs vary by size and type. LED screens start from ₹2,999, QLED screens from ₹8,999, and OLED screens from ₹15,999. We provide genuine parts with warranty."
  },
  {
    question: "Do you sell new TVs or just repair?",
    answer: "We both repair existing TVs and provide sales and home delivery for new televisions. We can deliver brands like Samsung, LG, Sony, and others to your home with professional installation."
  },
  {
    question: "What is included in TV installation service?",
    answer: "Our installation includes wall mounting with HDMI setup, power connection, remote pairing, and basic settings configuration. Professional mounting ensures optimal viewing angle and safety."
  },
  {
    question: "Why is my TV showing no picture but has sound?",
    answer: "This is usually a backlight issue or display problem. Common causes include display panel failure, LED strip failure, or HDMI connection issues. Our technicians can diagnose and fix this."
  },
  {
    question: "How long does TV repair typically take?",
    answer: "Most TV repairs can be completed within 24-48 hours. Simple issues like software reset or HDMI troubleshooting may be fixed on the same day. Complex repairs like screen replacement take 2-3 days."
  },
  {
    question: "Do you offer warranty on TV repairs?",
    answer: "Yes, we provide 90-day warranty on all TV repairs and replacement parts. This covers labor and parts used during the repair service."
  }
]

const features = [
  "Certified technicians",
  "Genuine spare parts",
  "90-day warranty",
  "Same-day service",
  "All brands serviced",
  "Home delivery"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "TV", href: "/services/tv" },
]

export default function TvPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceName="TV Repair & Sales Bangalore"
        description="Professional TV repair, sales, installation and home delivery services in Bangalore. All brands serviced."
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500/5 via-background to-indigo-500/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Tv className="w-4 h-4" />
                TV Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Samsung & LG TV Repair & Sales in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert TV repair for Samsung, LG, Sony, Panasonic and all brands. 
                Screen replacement, installation, home delivery. Same-day service with 90-day warranty.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+919876543210" 
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
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
                  src="/images/tv.jpg"
                  alt="Samsung and LG TV repair, sales and installation service in Bangalore - LED QLED OLED screen replacement"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Tv className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Expert Service</div>
                    <div className="text-sm text-muted-foreground">All brands available</div>
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
              Our TV Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete television solutions for homes in Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-indigo-300 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <service.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="text-indigo-600 font-semibold">{service.price}</div>
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
              Expert service for all major TV brands and models
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-background px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-indigo-300 hover:shadow-sm transition-all"
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
              Expert service for all types of television technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "LED TV", 
                desc: "Standard LED television repair and service",
                icon: Tv,
                color: "bg-blue-100 text-blue-600",
                brands: ["Samsung", "LG", "Sony", "Panasonic"]
              },
              { 
                title: "QLED TV", 
                desc: "Quantum dot LED technology television repair",
                icon: Zap,
                color: "bg-purple-100 text-purple-600",
                brands: ["Samsung QLED", "TCL QLED", "Hisense QLED"]
              },
              { 
                title: "OLED TV", 
                desc: "Organic LED display television repair",
                icon: Tv,
                color: "bg-indigo-100 text-indigo-600",
                brands: ["LG OLED", "Sony OLED", "OnePlus TV"]
              },
              { 
                title: "Smart TV", 
                desc: "WiFi enabled smart television service",
                icon: Settings,
                color: "bg-green-100 text-green-600",
                brands: ["All Brands", "WiFi Fix", "App Updates"]
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
              Our technicians handle all types of television issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Black Screen", desc: "No picture but sound playing or completely dark" },
              { title: "No Sound", desc: "TV working but audio not coming or muted" },
              { title: "No Power", desc: "TV not turning on or not responding to remote" },
              { title: "Remote Issues", desc: "Remote not working or buttons not responding" },
              { title: "HDMI Problem", desc: "No signal from HDMI port or device not detected" },
              { title: "Screen Damage", desc: "Cracked, broken or dead pixels on display" },
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
              TV Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major TV brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["tv"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/tv/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              We provide TV services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/tv`}
                className="bg-muted/50 px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-indigo-500 hover:text-indigo-600 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/areas"
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
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
        subtitle="See what our customers say about our TV services"
        testimonials={TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="TV Service FAQs"
        subtitle="Common questions about TV services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book TV Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your TV repair or service. 
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
                serviceType="tv"
                serviceCategory="tv"
                sourcePage="tv-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
