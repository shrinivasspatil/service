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
  Flame, 
  Wrench, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Settings,
  RefreshCw,
  AlertTriangle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Prestige Hob Repair Bangalore | Pigeon, Sunflame, Gilma Gas Stove Service",
  description: "Expert Prestige hob repair Bangalore. Professional Pigeon gas stove service, Sunflame cooktop repair, Gilma hob cleaning, Elica, Faber & Bosch hob installation. Burner repair, ignition fix. Same-day service.",
  keywords: "Prestige hob repair Bangalore, Pigeon gas stove service, Sunflame cooktop repair, Gilma hob service, Elica hob repair, Faber hob installation, Bosch cooktop service, gas hob burner repair Bangalore",
  openGraph: {
    title: "Prestige Hob Repair Bangalore | Pigeon, Sunflame, Gilma Service",
    description: "Expert Prestige, Pigeon, Sunflame, Gilma, Elica & Faber hob repair in Bangalore. Burner repair, ignition fix, glass top replacement.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/services/hob",
  },
}

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Professional hob installation with gas line setup and safety testing",
    price: "Starting ₹799"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Expert repair for ignition, burner, and gas flow issues",
    price: "Starting ₹349"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning of burners, grates, and glass top",
    price: "Starting ₹399"
  },
  {
    icon: RefreshCw,
    title: "AMC Plans",
    description: "Annual maintenance with regular servicing and priority support",
    price: "Starting ₹1,299/year"
  }
]

const brands = [
  "Bosch", "Elica", "Faber", "Kaff", "Glen", "Prestige", 
  "Hindware", "Hafele", "IFB", "Kutchina", "Sunflame", "Pigeon"
]

const faqs = [
  {
    question: "What types of hobs do you service?",
    answer: "We service all types including built-in gas hobs, glass top hobs, stainless steel hobs, induction cooktops, and combination hobs. Both 2-burner and 4-burner models are covered."
  },
  {
    question: "My hob burner is not igniting. Can you fix it?",
    answer: "Yes! Ignition issues are common and usually caused by faulty spark plugs, blocked burners, or electrical issues. Our technicians diagnose and fix ignition problems on the spot."
  },
  {
    question: "How much does hob installation cost in Bangalore?",
    answer: "Basic installation starts from ₹799 including gas pipe connection. Complex installations with new gas line setup may cost ₹1,500-2,500 depending on requirements."
  },
  {
    question: "Do you provide gas leak testing?",
    answer: "Yes, every installation and repair includes comprehensive gas leak testing using professional equipment. Safety is our top priority."
  },
  {
    question: "Can you replace individual burners?",
    answer: "Yes, we can replace individual burners, grates, knobs, and other components. We stock genuine parts for all major brands."
  },
  {
    question: "How often should I get my hob serviced?",
    answer: "We recommend professional servicing every 6 months for optimal performance and safety. Regular cleaning of burners should be done monthly."
  }
]

const features = [
  "Gas safety certified technicians",
  "Genuine spare parts",
  "30-day service warranty",
  "Same-day service available",
  "Gas leak testing included",
  "All brands serviced"
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hob", href: "/services/hob" },
]

export default function HobPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceName="Gas Hob Service Bangalore"
        description="Professional gas hob installation, repair, and maintenance services in Bangalore. All brands serviced."
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
                <Flame className="w-4 h-4" />
                Gas Hob Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Prestige & Pigeon Hob Repair in Bangalore
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert Prestige hob repair, Pigeon gas stove service, Sunflame cooktop repair & Gilma 
                hob cleaning across Bangalore. Burner repair, ignition fix by certified technicians.
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
                  src="/images/hob.jpg"
                  alt="Prestige gas hob repair and Pigeon cooktop service in Bangalore - burner repair and glass top replacement"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Safety Certified</div>
                    <div className="text-sm text-muted-foreground">Gas leak tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 justify-center text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm md:text-base">
              <strong>Safety First:</strong> All our technicians are gas safety certified. 
              Every installation includes comprehensive leak testing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Hob Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete gas hob solutions for homes in Bangalore
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
              Expert service for all major gas hob brands
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

      {/* Common Issues We Fix */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Hob Issues We Fix
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our technicians are experts at diagnosing and fixing all types of hob problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Burner Not Igniting", desc: "Spark plug replacement, electrode cleaning, ignition switch repair" },
              { title: "Low Flame / Weak Fire", desc: "Gas valve adjustment, burner cleaning, regulator check" },
              { title: "Gas Smell / Leak", desc: "Pipe inspection, valve replacement, leak sealing" },
              { title: "Uneven Flame", desc: "Burner cap alignment, jet cleaning, gas pressure adjustment" },
              { title: "Auto-ignition Failure", desc: "Battery replacement, switch repair, wiring check" },
              { title: "Glass Top Crack", desc: "Glass replacement, protective coating, safe disposal" },
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
              Hob Service by Brand
            </h2>
            <p className="text-slate-400">
              Expert service for all major hob and cooktop brands in Bangalore
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {BRAND_SERVICES["hob"].map((brand) => (
              <Link
                key={brand.brand}
                href={`/services/hob/${brand.brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              Hob Service Areas in Bangalore
            </h2>
            <p className="text-muted-foreground">
              We provide hob services across all these Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {BANGALORE_AREAS.slice(0, 15).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/hob`}
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
        subtitle="See what our customers say about our hob services"
        testimonials={TESTIMONIALS.slice(0, 3)}
      />

      {/* FAQ Section */}
      <FaqSection 
        title="Hob Service FAQs"
        subtitle="Common questions about hob services in Bangalore"
        faqs={faqs}
      />

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Hob Service
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Fill out the form to book your hob installation, repair, or cleaning service. 
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
                  <span>Gas safety certified technicians</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Request a Callback</h3>
              <LeadForm 
                serviceType="hob"
                serviceCategory="service"
                sourcePage="hob-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
