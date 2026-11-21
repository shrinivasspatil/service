import { Metadata } from "next"
import Link from "next/link"
import { SERVICES, COMPANY_INFO } from "@/lib/constants"
import { pageMetadata } from "@/lib/seo"
import { getServicesIndexAnswerSummary } from "@/lib/answer-summaries"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { LastUpdated } from "@/components/seo/last-updated"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { ServiceCard } from "@/components/cards/service-card"
import { Phone, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = pageMetadata({
  title: "Appliance services Bangalore",
  description:
    "Kent RO, Daikin AC, Faber chimney, Prestige hob, LG washing machine and TV repair in Bangalore. Same-day doorstep service from ₹399.",
  path: "/services",
})

const servicesAnswer = getServicesIndexAnswerSummary()

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Appliance services in Bangalore
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-4">
              Unauthorized Kent RO, Aquaguard, Daikin AC, LG AC, Faber chimney, Prestige hob repair near you across Bangalore.
              Same-day installation, repair &amp; AMC from certified technicians.
            </p>
            <LastUpdated />
          </div>
        </div>
      </section>

      <AnswerSummary question={servicesAnswer.question} answer={servicesAnswer.answer} />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services for all your home appliance needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sales", desc: "Buy quality appliances from top brands at competitive prices" },
              { title: "Installation", desc: "Professional installation with proper setup and testing" },
              { title: "Repair", desc: "Expert diagnosis and repair with genuine spare parts" },
              { title: "AMC Plans", desc: "Annual maintenance contracts for worry-free ownership" },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Links by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Browse by Service Category
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Service
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/services/${service.slug}#installation`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Installation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/services/${service.slug}#repair`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} Repair
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/services/${service.slug}#amc`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name} AMC
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Your Appliances?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Book a service now and get expert assistance from our trained technicians. 
                Same-day service available across all Bangalore areas.
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
                  <CheckCircle className="w-5 h-5" />
                  <span>30-day service warranty</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Book Your Service</h3>
              <LeadForm 
                serviceType="general"
                serviceCategory="service"
                sourcePage="services-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
