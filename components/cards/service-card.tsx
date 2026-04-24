import Image from "next/image"
import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  service: {
    slug: string
    name: string
    shortDesc: string
    shortDescription?: string
    description?: string
    image: string
    priceRange: string
    features: readonly string[]
    icon: LucideIcon
    iconColor?: string
    startingPrice?: string
  }
  variant?: "default" | "horizontal" | "compact" | "detailed"
  area?: string
}

export function ServiceCard({ service, variant = "default", area }: ServiceCardProps) {
  const Icon = service.icon
  const href = area 
    ? `/areas/${area}/${service.slug}` 
    : `/services/${service.slug}`

  if (variant === "horizontal") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 md:h-auto md:w-1/3">
            <Image
              src={service.image}
              alt={`${service.slug === 'water-purifier' ? 'Kent RO, Aquaguard' : service.slug === 'ac' ? 'Daikin, LG AC' : service.slug === 'chimney' ? 'Faber, Elica chimney' : 'Prestige, Pigeon hob'} ${service.name.toLowerCase()} service in Bangalore`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <Badge variant="secondary" className="mt-1">
                  Starting {service.priceRange.split(" - ")[0]}
                </Badge>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{service.shortDesc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.features.slice(0, 4).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <Button asChild>
                <Link href={href}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <Link href={href}>
        <Card className="group overflow-hidden hover:shadow-lg transition-all hover:border-primary/50">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">{service.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{service.shortDesc}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardContent>
        </Card>
      </Link>
    )
  }

  if (variant === "detailed") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-56 md:h-auto md:w-2/5">
            <Image
              src={service.image}
              alt={`${service.slug === 'water-purifier' ? 'Kent RO, Aquaguard' : service.slug === 'ac' ? 'Daikin, LG AC' : service.slug === 'chimney' ? 'Faber, Elica chimney' : 'Prestige, Pigeon hob'} ${service.name.toLowerCase()} service in Bangalore`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {service.name}
                </h3>
                <Badge variant="secondary" className="mt-1">
                  {service.priceRange}
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{service.description || service.shortDesc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.slice(0, 6).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="mt-auto">
              <Button asChild size="lg">
                <Link href={href}>
                  View {service.name} Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.slug === 'water-purifier' ? 'Kent RO, Aquaguard' : service.slug === 'ac' ? 'Daikin, LG AC' : service.slug === 'chimney' ? 'Faber, Elica chimney' : 'Prestige, Pigeon hob'} ${service.name.toLowerCase()} service in Bangalore`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white text-foreground hover:bg-white">
            {service.priceRange}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {service.name}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDesc}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
