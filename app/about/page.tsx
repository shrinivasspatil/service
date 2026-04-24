import { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { COMPANY_INFO } from "@/lib/constants"
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Target, 
  Heart,
  CheckCircle,
  Phone,
  Star,
  Wrench,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "About ServiceHub Bangalore | Kent, Daikin, Faber Authorized Service Partner",
  description: "ServiceHub is Bangalore's trusted Kent RO service partner, Daikin AC service center, Faber chimney service provider. 50,000+ customers served. Authorized service for Aquaguard, LG, Voltas, Elica, Prestige.",
  keywords: "about ServiceHub Bangalore, Kent RO service partner Bangalore, Daikin AC authorized service, Faber chimney service center, Aquaguard service Bangalore, home appliance company Bangalore",
  openGraph: {
    title: "About Us - ServiceHub Bangalore",
    description: "Learn about ServiceHub Bangalore - your trusted partner for home appliance services.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/about",
  },
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
]

const stats = [
  { number: "15,000+", label: "Happy Customers", icon: Users },
  { number: "50+", label: "Expert Technicians", icon: Wrench },
  { number: "4.8", label: "Google Rating", icon: Star },
  { number: "6+", label: "Years Experience", icon: Award },
]

const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "Every decision we make is centered around providing the best experience for our customers."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Honest pricing, genuine parts, and clear communication at every step of the service."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Our technicians are trained to deliver the best results."
  },
  {
    icon: Heart,
    title: "Care & Commitment",
    description: "We treat every home like our own and every appliance with the care it deserves."
  }
]

const milestones = [
  { year: "2018", title: "Founded", desc: "Started with a vision to transform home services in Bangalore" },
  { year: "2019", title: "1,000 Customers", desc: "Reached our first milestone of 1,000 happy customers" },
  { year: "2020", title: "Expanded Services", desc: "Added AC and kitchen appliance services to our portfolio" },
  { year: "2021", title: "50+ Areas", desc: "Expanded coverage to over 50 areas across Bangalore" },
  { year: "2022", title: "10,000 Customers", desc: "Crossed 10,000 customers with 4.8 average rating" },
  { year: "2023", title: "Team of 50+", desc: "Grew to a team of 50+ verified technicians" },
]

export default function AboutPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                About ServiceHub Bangalore
              </h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We&apos;re Bangalore&apos;s trusted home appliance service provider, dedicated to 
                making your life easier with professional, reliable, and affordable services.
              </p>
              <p className="text-muted-foreground text-pretty">
                Since 2018, we&apos;ve been serving thousands of families across Bangalore, 
                helping them with their water purifiers, air conditioners, kitchen chimneys, 
                and gas hobs. Our mission is simple: deliver exceptional service with complete 
                transparency and care.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-technician.jpg"
                  alt="ServiceHub Bangalore certified technician for Kent, Aquaguard, Daikin, LG, Faber appliance service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                ServiceHub Bangalore was founded in 2018 with a simple observation: getting 
                home appliances serviced was a frustrating experience for most people in 
                Bangalore. Unreliable technicians, hidden charges, poor quality parts, and 
                long waiting times were the norm.
              </p>
              <p>
                We decided to change that. We started by building a team of skilled, verified 
                technicians who share our commitment to quality and customer service. We invested 
                in training, quality processes, and technology to make booking and tracking 
                services seamless.
              </p>
              <p>
                Today, we&apos;re proud to serve over 15,000 families across Bangalore. From 
                Koramangala to Whitefield, from Jayanagar to Yelahanka - wherever you are in 
                Bangalore, we&apos;re here to help with all your home appliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do at ServiceHub Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Customers Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  "Verified & background-checked technicians",
                  "100% genuine spare parts with warranty",
                  "Transparent pricing - no hidden charges",
                  "Same-day service in most Bangalore areas",
                  "30-90 day warranty on all services",
                  "Easy booking via call, WhatsApp, or online",
                  "Professional, uniformed technicians",
                  "Post-service support and follow-up"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/happy-family.jpg"
                alt="Happy ServiceHub customer family in Bangalore with Kent RO water purifier and Daikin AC service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the ServiceHub Difference?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Join thousands of happy customers across Bangalore. 
                Book your first service today and see why we&apos;re the trusted choice.
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
                  <MapPin className="w-5 h-5" />
                  <span>Serving all of Bangalore</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Book Your Service</h3>
              <LeadForm 
                serviceType="general"
                serviceCategory="service"
                sourcePage="about-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
