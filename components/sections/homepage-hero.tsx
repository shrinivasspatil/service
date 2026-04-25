"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Phone, 
  ArrowRight, 
  Star,
  ChevronRight,
  Clock,
  Shield,
  BadgeCheck,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES, COMPANY_INFO } from "@/lib/constants"
import { BookingModal } from "@/components/forms/booking-modal"

export function HomepageHero() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90">Serving 50,000+ Bangalore Families</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Home Appliance
                <span className="block mt-2 bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Service Experts
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0">
                Authorized service for <span className="text-white font-medium">Kent RO</span>, <span className="text-white font-medium">Daikin AC</span>, <span className="text-white font-medium">LG</span>, <span className="text-white font-medium">Samsung</span>, <span className="text-white font-medium">Bosch</span> & 50+ brands. Same-day service across Bangalore.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => setBookingOpen(true)}
                >
                  Book a Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-base rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                >
                  <a href={`tel:${COMPANY_INFO.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex -space-x-2">
                    {['PS', 'RK', 'AR', 'MK'].map((initial, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-slate-800 ${['bg-gradient-to-br from-pink-500 to-rose-500', 'bg-gradient-to-br from-blue-500 to-cyan-500', 'bg-gradient-to-br from-purple-500 to-violet-500', 'bg-gradient-to-br from-green-500 to-emerald-500'][i]}`}>
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-semibold">50K+</span>
                    <span className="text-slate-400 ml-1">Customers</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.8</span>
                  <span className="text-slate-400 text-sm">Rating</span>
                </div>
              </div>
            </div>

            {/* Right - Service Grid */}
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-60" />
              
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-white font-semibold text-lg">Our Services</h2>
                  <Link href="/services" className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
                    View All <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {SERVICES.slice(0, 6).map((service) => {
                    const Icon = service.icon
                    return (
                      <Link 
                        key={service.slug} 
                        href={`/services/${service.slug}`}
                        className="group"
                      >
                        <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                          <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`h-6 w-6 ${service.iconColor}`} />
                          </div>
                          <h3 className="font-medium text-white text-sm mb-1 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <span className="text-xs text-slate-400">
                            From {service.startingPrice}
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">Same Day</div>
                    <div className="text-slate-400 text-xs">Service</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">90 Days</div>
                    <div className="text-slate-400 text-xs">Warranty</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">Certified</div>
                    <div className="text-slate-400 text-xs">Technicians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - All Brands by Service Category for SEO */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-center text-slate-400 text-sm mb-8">Authorized Service Partner for All Major Brands</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Water Purifier Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-primary font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Water Purifier
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Kent RO, Aquaguard, Pureit, Livpure, Blue Star, AO Smith, Havells, LG, Eureka Forbes
                </p>
              </div>

              {/* AC Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-cyan-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Air Conditioner
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier, Godrej, Panasonic, O General
                </p>
              </div>

              {/* Washing Machine Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-violet-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                  Washing Machine
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, Panasonic, Siemens
                </p>
              </div>

              {/* Refrigerator Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Refrigerator
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  LG, Samsung, Whirlpool, Godrej, Haier, Bosch, Hitachi, Panasonic, Kelvinator
                </p>
              </div>

              {/* Chimney Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-orange-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Kitchen Chimney
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Faber, Elica, Hindware, Kaff, Glen, Bosch, Prestige, Sunflame, Kutchina
                </p>
              </div>

              {/* Hob Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-red-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Gas Hob / Cooktop
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Prestige, Pigeon, Sunflame, Gilma, Elica, Faber, Bosch, Kaff, Glen, Hindware
                </p>
              </div>

              {/* Dishwasher Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Dishwasher
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Bosch, IFB, LG, Samsung, Siemens, Faber, Voltas Beko, Elica, Kaff
                </p>
              </div>

              {/* TV Brands */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-indigo-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  TV
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Samsung, LG, Sony, Panasonic, Philips, OnePlus, TCL, Mi, Kelvinator
                </p>
              </div>

              {/* All Brands Summary */}
              <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-primary/30">
                <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  50+ Brands Serviced
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  All major Indian & international appliance brands with genuine spare parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
