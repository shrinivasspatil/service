"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Phone, 
  Menu, 
  ChevronDown,
  MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { SERVICES, BANGALORE_AREAS, COMPANY_PHONE } from "@/lib/constants"
import { BookingModal } from "@/components/forms/booking-modal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const popularAreas = BANGALORE_AREAS.filter(a => a.popular).slice(0, 8)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-none">ServiceHub</span>
                <span className="text-[10px] text-muted-foreground leading-none">Bangalore</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium text-foreground hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
                      {SERVICES.map((service) => {
                        const Icon = service.icon
                        return (
                          <li key={service.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-100 transition-colors"
                              >
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${service.iconBg}`}>
                                  <Icon className={`h-5 w-5 ${service.iconColor}`} />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">{service.name}</div>
                                  <p className="text-xs text-slate-500 line-clamp-1">{service.shortDesc}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium text-foreground hover:text-primary">
                    Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] p-4">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Popular Areas</div>
                      <ul className="grid grid-cols-2 gap-1">
                        {popularAreas.map((area) => (
                          <li key={area.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/areas/${area.slug}`}
                                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                              >
                                <MapPin className="h-3 w-3 text-primary" />
                                {area.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/areas"
                            className="flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
                          >
                            View All Areas
                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="inline-flex h-10 items-center px-4 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="inline-flex h-10 items-center px-4 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a 
                href={`tel:${COMPANY_PHONE}`}
                className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{COMPANY_PHONE}</span>
              </a>
              
              {/* Mobile Call Button - visible on small screens */}
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex lg:hidden items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Call Now
              </a>

              <Button 
                size="sm" 
                className="hidden sm:flex rounded-lg"
                onClick={() => setBookingOpen(true)}
              >
                Book Now
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-base font-bold text-white">S</span>
                      </div>
                      <span className="font-bold text-foreground">ServiceHub</span>
                    </Link>
                  </div>
                  
                  <nav className="p-4 space-y-1">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services</div>
                    {SERVICES.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-slate-50 transition-colors"
                        >
                          <div className={`flex h-8 w-8 items-center justify-center rounded-md ${service.iconBg}`}>
                            <Icon className={`h-4 w-4 ${service.iconColor}`} />
                          </div>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      )
                    })}

                    <div className="pt-4 mt-4 border-t">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Quick Links</div>
                      <Link
                        href="/areas"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-slate-50 transition-colors"
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Service Areas</span>
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>

                  <div className="p-4 border-t mt-auto">
                    <Button 
                      className="w-full mb-3 rounded-lg"
                      onClick={() => {
                        setIsOpen(false)
                        setBookingOpen(true)
                      }}
                    >
                      Book Service Now
                    </Button>
                    <a 
                      href={`tel:${COMPANY_PHONE}`}
                      className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary"
                    >
                      <Phone className="h-4 w-4" />
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex border-t border-slate-200 bg-white shadow-2xl">
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 bg-green-500 hover:bg-green-600 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5 mb-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <Phone className="h-5 w-5 text-white" />
            <span className="text-[11px] font-bold text-white tracking-wide">CALL NOW</span>
          </a>

          <button
            onClick={() => setBookingOpen(true)}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 bg-primary hover:bg-primary/90 transition-colors"
          >
            <span className="text-lg leading-none mb-0.5">📅</span>
            <span className="text-[11px] font-bold text-white tracking-wide">BOOK SERVICE</span>
          </button>
        </div>
      </div>
    </>
  )
}
