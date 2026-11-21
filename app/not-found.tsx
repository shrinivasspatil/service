import type { Metadata } from "next"
import Link from "next/link"
import { Home, Phone, Wrench, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { COMPANY_INFO, SERVICES, BANGALORE_AREAS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Browse Service Booking services or call us for home appliance repair.",
  robots: {
    index: false,
    follow: true,
  },
}

const popularAreas = BANGALORE_AREAS.filter((area) => area.popular).slice(0, 6)

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            This page could not be found
          </h1>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            The link may be outdated or the page may have moved. You can return home,
            explore our services, or call us — we are available 7 days a week in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button asChild size="lg" className="rounded-xl w-full sm:w-auto">
              <Link href="/">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl w-full sm:w-auto">
              <Link href="/services">
                <Wrench className="h-5 w-5" />
                View Services
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-xl w-full sm:w-auto">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="h-5 w-5" />
                Call {COMPANY_INFO.phone}
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Popular services
              </h2>
              <ul className="space-y-2">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-1.5"
                    >
                      <span>{service.name} Service</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline"
              >
                See all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service areas
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {popularAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-sm text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Need help booking a repair? Our team responds within 30 minutes.
              </p>
              <Button asChild variant="outline" className="w-full rounded-xl">
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
