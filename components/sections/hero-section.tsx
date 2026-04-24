"use client"

import Link from "next/link"
import { Phone, CheckCircle2, Star, Shield, Clock, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_PHONE, STATS, SERVICES } from "@/lib/constants"

interface HeroSectionProps {
  title: string
  subtitle: string
  showForm?: boolean
  showStats?: boolean
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({
  title,
  subtitle,
  showForm = false,
  showStats = true,
  ctaText = "Book Service Now",
  ctaLink = "#book-service"
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">Trusted by 50,000+ customers in Bangalore</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            <span className="text-primary">Home Appliance</span> Services
            <br />
            <span className="text-foreground">at Your Doorstep in Bangalore</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            {subtitle}
          </p>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Clock, text: "Same Day Service" },
              { icon: Shield, text: "Verified Technicians" },
              { icon: Award, text: "90-Day Warranty" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base px-8 h-12 rounded-xl shadow-lg shadow-primary/25">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 h-12 rounded-xl">
              <a href={`tel:${COMPANY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                {COMPANY_PHONE}
              </a>
            </Button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.iconColor}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground text-base md:text-lg group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {service.shortDesc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded-full">
                    From {service.startingPrice}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Location Tag */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Serving all major areas across Bangalore - Koramangala, Whitefield, HSR Layout, Indiranagar & more</span>
          </div>
        </div>

        {/* Stats */}
        {showStats && (
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl px-4 py-5 text-center border border-slate-100 shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
