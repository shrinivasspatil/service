import { Metadata } from "next"
import Link from "next/link"
import { BANGALORE_AREAS, SERVICES } from "@/lib/constants"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Kent RO, Daikin AC, Faber Chimney Service Areas in Bangalore",
  description: "Kent RO service, Aquaguard repair, Daikin AC service, Faber chimney cleaning in Koramangala, HSR Layout, Whitefield, Indiranagar, Electronic City & all Bangalore areas. Same-day service.",
  keywords: "Kent RO service Koramangala, Daikin AC repair Whitefield, Aquaguard service HSR Layout, Faber chimney cleaning Indiranagar, LG AC service Electronic City, Prestige hob repair Jayanagar",
  openGraph: {
    title: "Service Areas - ServiceHub Bangalore",
    description: "We cover all major Bangalore areas. Find home appliance services near you.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/areas",
  },
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/areas" },
]

// Group areas by zone
const areasByZone = {
  "East Bangalore": BANGALORE_AREAS.filter(a => 
    ["Whitefield", "Marathahalli", "Bellandur", "Varthur", "KR Puram", "Mahadevapura"].includes(a.name)
  ),
  "South Bangalore": BANGALORE_AREAS.filter(a => 
    ["Koramangala", "HSR Layout", "BTM Layout", "JP Nagar", "Jayanagar", "Banashankari", "Electronic City", "Sarjapur Road"].includes(a.name)
  ),
  "North Bangalore": BANGALORE_AREAS.filter(a => 
    ["Hebbal", "Yelahanka", "Thanisandra", "Hennur"].includes(a.name)
  ),
  "West Bangalore": BANGALORE_AREAS.filter(a => 
    ["Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Vijayanagar"].includes(a.name)
  ),
  "Central Bangalore": BANGALORE_AREAS.filter(a => 
    ["Indiranagar", "MG Road", "Shivajinagar", "Ulsoor", "Richmond Town", "Basavanagudi"].includes(a.name)
  ),
}

export default function AreasPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving All Bangalore
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Service Areas in Bangalore
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We provide home appliance services across all major Bangalore areas. 
              Same-day service available in most localities.
            </p>
          </div>
        </div>
      </section>

      {/* Areas by Zone */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {Object.entries(areasByZone).map(([zone, areas]) => (
              <div key={zone}>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  {zone}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="bg-background p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {area.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        All services available
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas List */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            All Service Areas
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {BANGALORE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Your Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Services Available in Your Area
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
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
                Can&apos;t Find Your Area?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Don&apos;t worry! We cover most parts of Bangalore. 
                Contact us and we&apos;ll confirm if we service your location.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Same-day service available</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Book Service in Your Area</h3>
              <LeadForm 
                serviceType="general"
                serviceCategory="service"
                sourcePage="areas-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
