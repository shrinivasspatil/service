import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/cards/service-card"
import { SERVICES } from "@/lib/constants"

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  showAll?: boolean
  area?: string
  variant?: "default" | "horizontal" | "compact"
}

export function ServicesSection({
  title = "Our Services",
  subtitle = "Professional installation, repair & maintenance for all your home appliances",
  showAll = true,
  area,
  variant = "default"
}: ServicesSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className={
          variant === "horizontal" 
            ? "space-y-6" 
            : variant === "compact"
            ? "grid gap-4 md:grid-cols-2"
            : "grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        }>
          {SERVICES.map((service) => (
            <ServiceCard 
              key={service.slug} 
              service={service} 
              variant={variant}
              area={area}
            />
          ))}
        </div>

        {showAll && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
