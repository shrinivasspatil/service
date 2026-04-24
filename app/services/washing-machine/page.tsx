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
  WashingMachine, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Settings,
  RefreshCw,
  Droplets,
  RotateCcw,
  Waves,
  Zap,
  Drum,
  type LucideIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "LG Washing Machine Service Bangalore | Samsung, IFB, Bosch, Whirlpool Repair",
  description: "Expert LG washing machine repair Bangalore. Samsung front load service, IFB dryer repair, Bosch washing machine service, Whirlpool motor repair. Same-day service in Koramangala, Whitefield, HSR Layout.",
  keywords: "LG washing machine service Bangalore, Samsung washing machine repair, IFB washing machine service, Bosch washing machine repair, Whirlpool service center, Godrej washing machine repair Bangalore",
  openGraph: {
    title: "LG Washing Machine Service Bangalore | Samsung, IFB, Bosch Repair",
    description: "Expert repair for LG, Samsung, IFB, Bosch, Whirlpool & Godrej washing machines in Bangalore. Motor repair, drum service & installation.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/washing-machine",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional washing machine installation with proper leveling and plumbing",
    price: "Starting ₹499"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert diagnosis and repair of all washing machine issues",
    price: "Starting ₹299"
  },
  {
    icon: Drum,
    title: "Drum Cleaning",
    description: "Deep cleaning to remove dirt, mold and odor from drum",
    price: "Starting ₹399"
  },
  {
    icon: RotateCcw,
    title: "Motor Repair",
    description: "Motor replacement and repair for smooth operation",
    price: "Starting ₹899"
  },
  {
    icon: RefreshCw,
    title: "AMC Plans",
    description: "Annual maintenance with regular servicing and priority support",
    price: "Starting ₹1,999/year"
  },
  {
    icon: Droplets,
    title: "Drainage Fix",
    description: "Fixing drainage issues, pump repair and hose replacement",
    price: "Starting ₹349"
  }
]

const brands = [
  "LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", 
  "Haier", "Panasonic", "Siemens", "Electrolux", "Voltas Beko", "Lloyd"
]

const faqs = [
  {
    question: "How often should I service my washing machine?",
    answer: "We recommend servicing your washing machine every 6 months for optimal performance. Regular cleaning and maintenance prevents odor, mold, and extends machine life."
  },
  {
    question: "Why is my washing machine not spinning?",
    answer: "Common causes include overloading, unbalanced load, worn drive belt, faulty motor, or lid switch issues. Our technicians can diagnose and fix the exact problem."
  },
  {
    question: "How much does washing machine motor repair cost?",
    answer: "Motor repair starts from ₹899 depending on the brand and issue. Motor replacement costs ₹2,500-5,000 including parts and labor."
  },
  {
    question: "Do you repair front load and top load washing machines?",
    answer: "Yes, we service all types - front load, top load, and semi-automatic washing machines from LG, Samsung, IFB, Bosch, Whirlpool and all major brands."
  },
  {
    question: "Why does my washing machine smell bad?",
    answer: "Bad smell is usually due to mold, mildew, or detergent residue buildup. Our drum cleaning service eliminates odor and sanitizes the machine."
  },
  {
    question: "Can you repair washing machine PCB board?",
    answer: "Yes, we repair and replace PCB boards for all washing machine brands. PCB repair costs ₹1,500-4,000 depending on the model."
  }
]

const features = [
  "Certified technicians",
  "Genuine spare parts",
  "90-day service warranty",
  "Same-day service available",
  "All brands serviced",
  "Front & top load repair"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Washing Machine", href: "/services/washing-machine" },
]

export default function WashingMachinePage() {
  return (
    <>
      <ServiceJsonLd 
        serviceName="Washing Machine Service Bangalore"
        description="Professional washing machine installation, repair, and maintenance services in Bangalore. All brands serviced."
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
                <WashingMachine className="w-4 h-4" />
                Washing Machine Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                LG & Samsung Washing Machine Service in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert LG washing machine repair, Samsung front load service, IFB dryer repair, 
                Bosch & Whirlpool motor repair across Bangalore. Same-day service with 90-day warranty.
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
                  src="/images/washing-machine.jpg"
                  alt="LG washing machine repair and Samsung front load service in Bangalore - motor repair and drum cleaning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <WashingMachine className="w-6 h-6 text-primary" />
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
              Our Washing Machine Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete washing machine solutions for homes in Bangalore
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
              Expert service for all major washing machine brands
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
              Expert service for all types of washing machines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Front Load", 
                desc: "LG, Samsung, IFB, Bosch front loading washers",
                icon: RotateCcw,
                color: "bg-violet-100 text-violet-600",
                brands: ["LG", "Samsung", "IFB", "Bosch"]
              },
              { 
                title: "Top Load", 
                desc: "LG, Samsung, Whirlpool, Godrej top loaders",
                icon: Waves,
                color: "bg-blue-100 text-blue-600",
                brands: ["LG", "Samsung", "Whirlpool", "Godrej"]
              },
              { 
                title: "Semi-Automatic", 
                desc: "LG, Godrej, Whirlpool twin tub washers",
                icon: Settings,
                color: "bg-green-100 text-green-600",
                brands: ["LG", "Godrej", "Whirlpool", "Haier"]
              },
              { 
                title: "Washer Dryer", 
                desc: "IFB, Bosch, LG, Samsung combo units",
                icon: Zap,
                color: "bg-orange-100 text-orange-600",
                brands: ["IFB", "Bosch", "LG", "Samsung"]
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
              Our technicians handle all types of washing machine issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Not Spinning", desc: "Motor issues, belt problems, lid switch failure" },
              { title: "Water Leakage", desc: "Damaged hose, pump issues, door seal problems" },
              { title: "Not Draining", desc: "Blocked drain pump, clogged filter, hose blockage" },
              { title: "Excessive Noise", desc: "Worn bearings, loose drum, motor problems" },
              { title: "Not Starting", desc: "Power issues, door latch, PCB board failure" },
              { title: "Bad Smell", desc: "Mold growth, detergent residue, drainage issues" },
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
              Washing Machine Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major washing machine brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["washing-machine"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/washing-machine/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              We provide washing machine services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/washing-machine`}
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
        subtitle="See what our customers say about our washing machine services"
        testimonials={TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="Washing Machine Service FAQs"
        subtitle="Common questions about washing machine services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Washing Machine Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your washing machine service or repair. 
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
                serviceType="washing-machine"
                serviceCategory="service"
                sourcePage="washing-machine-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
