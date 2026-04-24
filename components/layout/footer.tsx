import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react"
import { SERVICES, BANGALORE_AREAS, COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from "@/lib/constants"

export function Footer() {
  const popularAreas = BANGALORE_AREAS.filter(a => a.popular).slice(0, 8)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 6h2v6h-2V8zm0 8h2v2h-2v-2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight tracking-tight">ServiceHub</span>
                <span className="text-xs text-primary font-medium leading-tight">Bangalore</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Bangalore&apos;s trusted home appliance service provider. Expert installation, repair & maintenance for Water Purifiers, AC, Chimneys & Hobs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {service.name} Services
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-flex items-center gap-1 mt-2"
                >
                  View All Services
                  <span className="text-lg">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Service Areas</h3>
            <ul className="space-y-3">
              {popularAreas.map((area) => (
                <li key={area.slug}>
                  <Link 
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/areas"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-flex items-center gap-1 mt-2"
                >
                  View All {BANGALORE_AREAS.length} Areas
                  <span className="text-lg">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Call us</div>
                    <div className="text-sm font-medium text-white">{COMPANY_PHONE}</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Email us</div>
                    <div className="text-sm font-medium text-white">{COMPANY_EMAIL}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Visit us</div>
                  <div className="text-sm text-white">{COMPANY_ADDRESS}</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Working hours</div>
                  <div className="text-sm text-white">Mon - Sun: 8 AM - 9 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {currentYear} {COMPANY_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
