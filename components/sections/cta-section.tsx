import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_PHONE } from "@/lib/constants"

interface CTASectionProps {
  title?: string
  subtitle?: string
  features?: string[]
}

export function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Book your service today and experience the ServiceHub difference",
  features = [
    "Free consultation & quote",
    "Same-day service available",
    "Certified technicians",
    "90-day service warranty"
  ]
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link href="/contact">Book Service Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
              <a href={`tel:${COMPANY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                {COMPANY_PHONE}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
