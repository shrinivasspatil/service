import { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LeadForm } from "@/components/forms/lead-form"
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { COMPANY_INFO, BANGALORE_AREAS } from "@/lib/constants"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Building,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact ServiceHub Bangalore | Kent RO, Daikin AC, Faber Chimney Service Helpline",
  description: "Contact ServiceHub for Kent RO service, Aquaguard repair, Daikin AC service, Faber chimney cleaning, Prestige hob repair in Bangalore. Call +91 98765 43210. 7 days, 8 AM - 9 PM.",
  keywords: "contact ServiceHub Bangalore, Kent RO service helpline, Daikin AC service contact, Faber chimney cleaning contact, Aquaguard service number Bangalore, book appliance service",
  openGraph: {
    title: "Contact Us - ServiceHub Bangalore",
    description: "Get in touch with ServiceHub Bangalore for all your home appliance needs.",
    type: "website",
  },
  alternates: {
    canonical: "https://servicehub-bangalore.com/contact",
  },
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our support team",
    value: COMPANY_INFO.phone,
    action: `tel:${COMPANY_INFO.phone}`,
    actionLabel: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send us a message on WhatsApp",
    value: COMPANY_INFO.phone,
    action: `https://wa.me/919876543210?text=Hi, I need home appliance service`,
    actionLabel: "Chat Now"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    value: COMPANY_INFO.email,
    action: `mailto:${COMPANY_INFO.email}`,
    actionLabel: "Send Email"
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
]

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have questions or need to book a service? We&apos;re here to help! 
              Reach out to us via phone, WhatsApp, email, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-foreground font-medium mb-4">{method.value}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith("https") ? "_blank" : undefined}
                  rel={method.action.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {method.actionLabel}
                </a>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we&apos;ll get back to you within 30 minutes
              </p>
              <LeadForm 
                serviceType="general"
                serviceCategory="inquiry"
                sourcePage="contact-page"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Working Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Office Address</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {COMPANY_INFO.address}
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    "We respond to all inquiries within 30 minutes",
                    "Same-day service available for most requests",
                    "Transparent pricing with no hidden charges",
                    "Verified technicians for your safety"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Areas We Serve
            </h2>
            <p className="text-muted-foreground">
              We provide home appliance services across all major Bangalore areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BANGALORE_AREAS.slice(0, 18).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-background px-4 py-3 rounded-lg border border-border text-center text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/areas"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" />
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "How quickly can I get a technician?",
                  a: "We offer same-day service for most areas in Bangalore. Book before 2 PM for same-day service."
                },
                {
                  q: "What are your service charges?",
                  a: "Service visit charges start from ₹299. We provide transparent, upfront pricing before any work begins."
                },
                {
                  q: "Do you work on weekends?",
                  a: "Yes, we are available 7 days a week. Sunday hours are 9 AM to 6 PM."
                },
                {
                  q: "Which payment methods do you accept?",
                  a: "We accept cash, UPI, credit/debit cards, and bank transfers."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need Urgent Help?</h2>
              <p className="opacity-90">Call us now for emergency appliance repairs</p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
