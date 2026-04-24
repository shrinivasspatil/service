import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TestimonialCardProps {
  testimonial: {
    name: string
    location: string
    rating: number
    service: string
    text: string
    initials?: string
    color?: string
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Generate initials from name if not provided
  const initials = testimonial.initials || testimonial.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  // Use provided color or fallback
  const avatarColor = testimonial.color || "bg-primary"

  return (
    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="flex h-full flex-col p-6">
        {/* Header with Avatar and Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`h-12 w-12 rounded-full ${avatarColor} flex items-center justify-center text-white font-semibold text-sm`}>
              {initials}
            </div>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}, Bangalore</p>
            </div>
          </div>
          <Quote className="h-8 w-8 text-primary/20" />
        </div>

        {/* Rating */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <p className="flex-1 text-muted-foreground leading-relaxed text-sm">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Service Badge */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10">
            {testimonial.service}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
