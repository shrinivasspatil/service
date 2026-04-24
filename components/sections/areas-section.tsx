import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AreaCard } from "@/components/cards/area-card"
import { BANGALORE_AREAS } from "@/lib/constants"

interface AreasSectionProps {
  title?: string
  subtitle?: string
  showPopularOnly?: boolean
  variant?: "default" | "compact" | "detailed"
  limit?: number
}

export function AreasSection({
  title = "We Serve All Bangalore Areas",
  subtitle = "Professional home appliance services available across 25+ locations",
  showPopularOnly = false,
  variant = "default",
  limit
}: AreasSectionProps) {
  let areas = showPopularOnly 
    ? BANGALORE_AREAS.filter(a => a.popular)
    : [...BANGALORE_AREAS]
  
  if (limit) {
    areas = areas.slice(0, limit)
  }

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
          variant === "compact"
            ? "grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : variant === "detailed"
            ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            : "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        }>
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} variant={variant} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/areas">
              View All Service Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
