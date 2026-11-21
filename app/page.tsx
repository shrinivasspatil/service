import { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { LocalBusinessJsonLd, ServiceListSchema } from "@/components/seo/json-ld"
import { FOOTER_BRAND_LINKS, getCrawlSeedAreas } from "@/lib/coverage"
import { AnswerSummary } from "@/components/seo/answer-summary"
import { getHomeAnswerSummary } from "@/lib/answer-summaries"
import { SERVICES, TESTIMONIALS, COMPANY_INFO, STATS, BRAND_SERVICES } from "@/lib/constants"
import { LeadForm } from "@/components/forms/lead-form"
import { HomepageHero } from "@/components/sections/homepage-hero"
import { HomeNotes } from "@/components/home-notes"
import { 
  Shield, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  MapPin,
  Wrench,
  BadgeCheck,
  IndianRupee,
  Calendar,
  HeadphonesIcon,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialCard } from "@/components/cards/testimonial-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = pageMetadata({
  title: "Service Booking | Appliance Repair Bangalore",
  description:
    "Independent appliance repair in Bangalore. Same-day Kent RO, Daikin AC, Faber chimney, LG, Samsung and 50+ brand service from our HSR Layout team.",
  path: "/",
  absoluteTitle: true,
})

const homeFaqs = [
  {
    question: "Do you provide Kent and Aquaguard water purifier service?",
    answer: "Yes! We provide independent multi-brand service for Kent RO, Aquaguard, and other water purifiers in Bangalore. Our services include filter replacements and emergency repairs, ensuring your water purifier runs efficiently."
  },
  {
    question: "Which AC brands do you service - Daikin, LG, Voltas?",
    answer: "We service all major AC brands, including Daikin, LG, and Voltas. Our offerings include repairs, installations, and maintenance services, ensuring your AC operates at peak performance throughout the year."
  },
  {
    question: "Do you clean Faber and Elica chimneys?",
    answer: "Yes! We offer professional cleaning and repair services for Faber and Elica chimneys. Our team ensures optimal performance and cleanliness, helping you maintain a smoke-free kitchen."
  },
  {
    question: "Can you repair Prestige and Pigeon gas hobs?",
    answer: "Absolutely! We repair various gas hobs, including Prestige and Pigeon. Our services cover burner repairs and ignition fixes, ensuring your cooking experience is hassle-free."
  },
  {
    question: "Which areas in Bangalore do you cover?",
    answer: "We cover all major areas in Bangalore, including Koramangala and Whitefield. Our prompt service ensures that help is always just a call away, no matter where you are in the city."
  },
  {
    question: "Do you provide AMC for Kent, Daikin and other brands?",
    answer: "Yes, we provide Annual Maintenance Contracts (AMC) for various brands. This ensures regular servicing and priority support, giving you peace of mind throughout the year."
  }
]

const trustBadges = [
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges" },
  { icon: BadgeCheck, title: "Verified Experts", desc: "Trained professionals" },
  { icon: Wrench, title: "Fully Equipped", desc: "Right tools always" },
  { icon: Shield, title: "Service Warranty", desc: "Guaranteed satisfaction" },
]

const popularAreas = getCrawlSeedAreas()

const homeAnswer = getHomeAnswerSummary()

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd includeRating />
      <ServiceListSchema />
      
      {/* Hero Section - Clean Urban Company Style */}
      <HomepageHero />
      <HomeNotes />

      <AnswerSummary question={homeAnswer.question} answer={homeAnswer.answer} />

      {/* Trust Badges */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What are the expert solutions for all your home appliance needs?
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <Card key={service.slug} className="overflow-hidden border-slate-200">
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="relative h-64 lg:h-auto lg:w-2/5">
<Image
                            src={service.image}
                            alt={`${service.name} service in Bangalore - ${service.slug === 'water-purifier' ? 'Kent RO, Aquaguard, Pureit repair & installation' : service.slug === 'ac' ? 'Daikin, LG, Voltas, Samsung AC repair & installation' : service.slug === 'chimney' ? 'Faber, Elica, Hindware chimney cleaning & repair' : 'Prestige, Pigeon, Sunflame hob repair & installation'}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                      </div>
                      <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${service.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-foreground">{service.name}</h3>
                            <span className="text-sm text-primary font-medium">Starting from {service.startingPrice}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-5">{service.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.slice(0, 4).map((feature) => (
                            <span 
                              key={feature} 
                              className="inline-flex items-center gap-1.5 text-sm bg-slate-100 text-muted-foreground px-3 py-1.5 rounded-full"
                            >
                              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button asChild className="rounded-xl">
                            <Link href={`/services/${service.slug}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="rounded-xl">
                            <a href={`tel:${COMPANY_INFO.phone}`}>
                              <Phone className="mr-2 h-4 w-4" />
                              Call Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Services - SEO Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What brands do we service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Which major appliance brands do we provide unauthorized service for?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Water Purifier Brands */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">RO</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Water Purifier</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {BRAND_SERVICES["water-purifier"].slice(0, 6).map((item) => (
                    <Link 
                      key={item.brand}
                      href="/services/water-purifier"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.brand} Service
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AC Brands */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <span className="text-cyan-600 font-bold text-sm">AC</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Air Conditioner</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {BRAND_SERVICES["ac"].slice(0, 6).map((item) => (
                    <Link 
                      key={item.brand}
                      href="/services/ac"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.brand} AC Service
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chimney Brands */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">CH</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Kitchen Chimney</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {BRAND_SERVICES["chimney"].slice(0, 6).map((item) => (
                    <Link 
                      key={item.brand}
                      href="/services/chimney"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.brand} Chimney Service
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hob Brands */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">HOB</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Gas Hob & Cooktop</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {BRAND_SERVICES["hob"].slice(0, 6).map((item) => (
                    <Link 
                      key={item.brand}
                      href="/services/hob"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.brand} Hob Service
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your service done in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", icon: Calendar, title: "Book Online", desc: "Fill the form or call us" },
              { step: "2", icon: HeadphonesIcon, title: "Get Confirmed", desc: "We call within 30 mins" },
              { step: "3", icon: Wrench, title: "Expert Arrives", desc: "At your scheduled time" },
              { step: "4", icon: CheckCircle, title: "Job Done", desc: "With service warranty" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-slate-300" />
                )}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white mb-4">
                  <item.icon className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              We Serve All Bangalore
            </h2>
            <p className="text-lg text-muted-foreground">
              Doorstep service in 30+ localities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                {area.name}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/areas">
                Browse all Bangalore service areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Brand pages:{" "}
              {FOOTER_BRAND_LINKS.map((brand, index) => (
                <span key={brand.href}>
                  {index > 0 ? " · " : ""}
                  <Link href={brand.href} className="text-primary hover:underline">
                    {brand.name}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by thousands of Bangalore families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Got questions? We have answers
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {homeFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-slate-200 rounded-xl px-6 bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Book Service Form */}
      <section id="book-service" className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Book Your Service Now
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Fill the form and our team will get back to you within 30 minutes to confirm your appointment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Call Us</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold hover:text-primary transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Working Hours</div>
                    <span className="font-semibold">Mon - Sun, 8 AM - 9 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Service Area</div>
                    <span className="font-semibold">All Bangalore</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-6 lg:p-8">
                <LeadForm sourcePage="homepage" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/80">
                Our experts are ready to help. Call now for same-day service.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="h-14 px-8 rounded-xl whitespace-nowrap">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {COMPANY_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
