import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Badge } from "@/components/ui/badge"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  service: string
  text: string
  initials?: string
}

interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  title = "What Our Customers Say",
  subtitle = "Trusted by 50,000+ happy customers across Bangalore",
  testimonials
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
