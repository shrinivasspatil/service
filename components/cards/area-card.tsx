import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AreaCardProps {
  area: {
    name: string
    slug: string
    zone: string
    popular: boolean
  }
  variant?: "default" | "compact" | "detailed"
}

export function AreaCard({ area, variant = "default" }: AreaCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/areas/${area.slug}`}>
        <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 hover:border-primary/50 hover:bg-accent transition-colors">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{area.name}</span>
          {area.popular && (
            <Badge variant="secondary" className="ml-auto text-xs">Popular</Badge>
          )}
        </div>
      </Link>
    )
  }

  if (variant === "detailed") {
    return (
      <Link href={`/areas/${area.slug}`}>
        <Card className="group overflow-hidden hover:shadow-lg transition-all hover:border-primary/50">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {area.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{area.zone} Bangalore</p>
                </div>
              </div>
              {area.popular && (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Popular
                </Badge>
              )}
            </div>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">
              View Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/areas/${area.slug}`}>
      <Card className="group hover:shadow-md transition-all hover:border-primary/50">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground">{area.name}</h3>
            <p className="text-xs text-muted-foreground">{area.zone} Bangalore</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardContent>
      </Card>
    </Link>
  )
}
