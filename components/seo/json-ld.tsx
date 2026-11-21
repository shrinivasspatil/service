import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_POSTAL_ADDRESS,
  COMPANY_GEO,
  COMPANY_OPENING_HOURS,
  COMPANY_LOGO_PATH,
  SERVICES,
  BANGALORE_AREAS,
  BRAND_SERVICES,
  TESTIMONIALS,
} from "@/lib/constants"
import { SOCIAL_SAME_AS } from "@/lib/social"
import { absoluteUrl } from "@/lib/seo"
import { getAreaZoneGeo } from "@/lib/area-content"

// ============================================
// 1. LOCAL BUSINESS SCHEMA
// ============================================
interface LocalBusinessSchemaProps {
  area?: string
  service?: string
  includeRating?: boolean
}

export function LocalBusinessSchema({
  area,
  service,
  includeRating = false,
}: LocalBusinessSchemaProps) {
  const areaName = area 
    ? BANGALORE_AREAS.find(a => a.slug === area)?.name 
    : "Bangalore"
  
  const serviceName = service
    ? SERVICES.find(s => s.slug === service)?.name
    : undefined

  const ratings = TESTIMONIALS.map((item) => item.rating)
  const ratingValue =
    ratings.length > 0
      ? (ratings.reduce((sum, value) => sum + value, 0) / ratings.length).toFixed(1)
      : undefined

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://servicebooking.in/#business",
    name: serviceName 
      ? `${COMPANY_NAME} - ${serviceName} Services in ${areaName}`
      : `${COMPANY_NAME}`,
    image: [
      "https://servicebooking.in/images/hero-technician.jpg",
      "https://servicebooking.in/images/water-purifier.jpg",
      "https://servicebooking.in/images/ac.jpg"
    ],
    description: serviceName
      ? `Professional ${serviceName} sales, installation, repair & maintenance services in ${areaName}, Bangalore. Certified technicians, same-day service, 90-day warranty.`
      : "Bangalore's trusted home appliance service provider for Kent RO, Aquaguard, Daikin AC, Faber Chimney, Prestige Hob. Expert installation, repair & maintenance.",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    url: "https://servicebooking.in",
    logo: absoluteUrl(COMPANY_LOGO_PATH),
    address: { ...COMPANY_POSTAL_ADDRESS },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_GEO.latitude,
      longitude: COMPANY_GEO.longitude
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bangalore",
        "@id": "https://en.wikipedia.org/wiki/Bangalore"
      },
      ...BANGALORE_AREAS.slice(0, 10).map(a => ({
        "@type": "Place",
        name: `${a.name}, Bangalore, Karnataka`
      }))
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: COMPANY_GEO.latitude,
        longitude: COMPANY_GEO.longitude
      },
      geoRadius: "50000"
    },
    openingHoursSpecification: COMPANY_OPENING_HOURS,
    priceRange: "₹299 - ₹4999",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Appliance Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "OfferCatalog",
        name: service.name,
        itemListElement: service.features.slice(0, 4).map((feature) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
            // Reference the parent business — do not nest new LocalBusiness nodes
            // (Google counts each nested LocalBusiness as a separate entity).
            provider: { "@id": "https://servicebooking.in/#business" },
          },
        })),
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://servicebooking.in/#book-service",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      result: {
        "@type": "Reservation",
        name: "Service Booking"
      }
    },
    sameAs: SOCIAL_SAME_AS,
    ...(includeRating && ratingValue
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount: String(TESTIMONIALS.length),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 2. WEBSITE SCHEMA
// ============================================
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://servicebooking.in/#website",
    name: COMPANY_NAME,
    url: "https://servicebooking.in",
    description: "Home appliance repair and installation in Bangalore — Kent RO, Aquaguard, Daikin AC, Faber chimney, Prestige hob and more.",
    publisher: {
      "@type": "Organization",
      "@id": "https://servicebooking.in/#organization"
    },
    inLanguage: "en-IN"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 3. ORGANIZATION SCHEMA (with brands & services)
// ============================================
export function OrganizationSchema() {
  const allBrands = [
    ...BRAND_SERVICES["water-purifier"].map(b => b.brand),
    ...BRAND_SERVICES["ac"].map(b => b.brand),
    ...BRAND_SERVICES["chimney"].map(b => b.brand),
    ...BRAND_SERVICES["hob"].map(b => b.brand),
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://servicebooking.in/#organization",
    name: COMPANY_NAME,
    url: "https://servicebooking.in",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(COMPANY_LOGO_PATH),
      width: "880",
      height: "210"
    },
    description: "Home appliance repair and installation in Bangalore — Kent RO, Aquaguard, Daikin AC, Faber chimney, Prestige hob and more.",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: { ...COMPANY_POSTAL_ADDRESS },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_PHONE,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Kannada"],
        areaServed: "IN",
        hoursAvailable: COMPANY_OPENING_HOURS[0]
      }
    ],
    sameAs: SOCIAL_SAME_AS,
    brand: [...new Set(allBrands)].map(brand => ({
      "@type": "Brand",
      name: brand
    })),
    knowsAbout: [
      "Kent RO Service", "Aquaguard Repair", "Pureit Service", "Livpure AMC",
      "Daikin AC Service", "LG AC Repair", "Voltas AC Service", "Samsung AC Repair",
      "Faber Chimney Cleaning", "Elica Chimney Service", "Hindware Chimney Repair",
      "Prestige Hob Repair", "Pigeon Gas Stove Service", "Sunflame Cooktop Repair",
      "Water Purifier Installation", "AC Gas Refill", "Chimney Motor Repair", "Hob Burner Repair"
    ],
    slogan: "Home Services, Done Right"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 4. SERVICE SCHEMA (detailed with pricing)
// ============================================
interface ServiceSchemaProps {
  service: typeof SERVICES[number]
  area?: string
}

export function ServiceSchema({ service, area }: ServiceSchemaProps) {
  const areaName = area 
    ? BANGALORE_AREAS.find(a => a.slug === area)?.name 
    : "Bangalore"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://servicebooking.in/services/${service.slug}`,
    name: `${service.name} Services in ${areaName}`,
    description: service.description,
    serviceType: service.name,
    provider: {
      "@id": "https://servicebooking.in/#business",
    },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: {
        "@type": "State",
        name: "Karnataka"
      }
    },
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners, Renters, Businesses"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://servicebooking.in/services/${service.slug}`,
      servicePhone: COMPANY_PHONE,
      availableLanguage: ["English", "Hindi", "Kannada"]
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "299",
      highPrice: "4999",
      priceCurrency: "INR",
      offerCount: service.features.length
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
          description: `Professional ${feature.toLowerCase()} service in ${areaName}`
        },
        position: index + 1
      }))
    },
    brand: service.brands.map(brand => ({
      "@type": "Brand",
      name: brand
    })),
    termsOfService: "https://servicebooking.in/terms",
    serviceOutput: {
      "@type": "Thing",
      name: `Repaired/Installed ${service.name}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 5. FAQ SCHEMA
// ============================================
export function FAQSchema({
  faqs,
  pageUrl,
}: {
  faqs: { question: string; answer: string }[]
  pageUrl?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageUrl ? `${pageUrl}#faq` : "https://servicebooking.in/#faq",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 6. BREADCRUMB SCHEMA
// ============================================
interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://servicebooking.in${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 7. BRAND SERVICE SCHEMA (Service — not Product)
// ============================================
/** Use Service, not Product: Product + Offer triggers Merchant listings (GTIN, shipping, returns). */
export function BrandServiceSchema({
  serviceType,
  brand,
  area,
  price = "399",
}: {
  serviceType: string
  brand: string
  area?: string
  /** Numeric INR starting price without currency symbol */
  price?: string
}) {
  const areaName = area
    ? BANGALORE_AREAS.find((a) => a.slug === area)?.name || area
    : "Bangalore"
  const priceValue = price.replace(/[^\d.]/g, "") || "399"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand} ${serviceType} Service in ${areaName}`,
    description: `Professional ${brand} ${serviceType.toLowerCase()} repair, installation and AMC service in ${areaName}, Bangalore. Genuine spare parts, certified technicians.`,
    serviceType: `${brand} ${serviceType}`,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    provider: {
      "@id": "https://servicebooking.in/#business",
    },
    areaServed: {
      "@type": "Place",
      name: `${areaName}, Bangalore, Karnataka`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: priceValue,
      availability: "https://schema.org/InStock",
      url: "https://servicebooking.in",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 8. HOW-TO SCHEMA (for service process)
// ============================================
export function HowToSchema({ serviceName }: { serviceName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Book ${serviceName} Service in Bangalore`,
    description: `Simple steps to book professional ${serviceName.toLowerCase()} service in Bangalore with ${COMPANY_NAME}`,
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "299"
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Fill the Booking Form",
        text: "Enter your name, phone number, pincode and select the service you need",
        url: "https://servicebooking.in/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive Confirmation Call",
        text: "Our team will call you within 30 minutes to confirm appointment time",
        url: "https://servicebooking.in/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Technician Visit",
        text: "Certified technician arrives at your home with all necessary tools and spare parts",
        url: "https://servicebooking.in/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Service Completion",
        text: "Service is completed with quality check and you pay only after satisfaction",
        url: "https://servicebooking.in/#book-service"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 9. ITEMLIST SCHEMA (for service listings)
// ============================================
export function ServiceListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Home Appliance Services in Bangalore",
    description: `Complete list of home appliance services offered by ${COMPANY_NAME} in Bangalore`,
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `https://servicebooking.in/services/${service.slug}`,
        provider: {
          "@id": "https://servicebooking.in/#business",
        },
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 10. AREA SERVICE SCHEMA (for area pages)
// ============================================
export function AreaServiceSchema({ area, areaSlug }: { area: string; areaSlug: string }) {
  const areaMeta = BANGALORE_AREAS.find((a) => a.slug === areaSlug)
  const geo = getAreaZoneGeo(areaMeta?.zone ?? "Central")
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://servicebooking.in/areas/${areaSlug}/#business`,
    name: `${COMPANY_NAME} — ${area}`,
    description: `Kent RO, Aquaguard, Daikin AC, Faber chimney and Prestige hob service in ${area}, Bangalore. Same-day repair & installation from ${COMPANY_NAME}.`,
    url: `https://servicebooking.in/areas/${areaSlug}`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    priceRange: "₹₹",
    image: absoluteUrl("/images/hero-technician.jpg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: area,
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    areaServed: {
      "@type": "Place",
      name: `${area}, Bangalore, Karnataka`
    },
    openingHoursSpecification: COMPANY_OPENING_HOURS,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Home Appliance Services in ${area}`,
      itemListElement: SERVICES.map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.name} Service in ${area}`,
          url: `https://servicebooking.in/areas/${areaSlug}/${service.slug}`
        }
      }))
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 11. SERVICE OFFER SCHEMA (area / brand service pages)
// ============================================
/** Kept export name ProductSchema for call-sites; emits Service (not Product) to avoid Merchant listings. */
export function ProductSchema({
  serviceName,
  area,
  areaSlug,
  serviceSlug,
  brands,
  priceRange,
}: {
  serviceName: string
  area: string
  areaSlug: string
  serviceSlug: string
  brands: string[]
  priceRange: string
}) {
  const lowMatch = priceRange.match(/[\d,]+/)
  const lowPrice = lowMatch ? lowMatch[0].replace(/,/g, "") : "399"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://servicebooking.in/areas/${areaSlug}/${serviceSlug}/#service`,
    name: `${serviceName} Service in ${area}, Bangalore`,
    description: `Professional ${serviceName.toLowerCase()} installation, repair, maintenance and AMC service in ${area}, Bangalore. Serving brands: ${brands.slice(0, 5).join(", ")}`,
    url: `https://servicebooking.in/areas/${areaSlug}/${serviceSlug}`,
    serviceType: serviceName,
    brand: brands.slice(0, 5).map((brand) => ({
      "@type": "Brand",
      name: brand,
    })),
    provider: {
      "@id": "https://servicebooking.in/#business",
    },
    areaServed: {
      "@type": "Place",
      name: `${area}, Bangalore`,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice,
      highPrice: "15000",
      offerCount: String(Math.max(brands.length, 1)),
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================
// 12. AGGREGATE RATING SCHEMA (standalone)
// ============================================
/** Deprecated: do not emit invented ratings. Kept as no-op for call-site compatibility. */
export function AggregateRatingSchema(_props: {
  itemName: string
  ratingValue: number
  reviewCount: number
  area: string
}) {
  return null
}

// ============================================
// ALIAS EXPORTS FOR BACKWARD COMPATIBILITY
// ============================================
export { LocalBusinessSchema as LocalBusinessJsonLd }
export { FAQSchema as FaqJsonLd }
export { BreadcrumbSchema as BreadcrumbJsonLd }

// Simple ServiceJsonLd for pages that just need basic service schema
export function ServiceJsonLd({ serviceName, description }: { serviceName: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@id": "https://servicebooking.in/#business",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/** SpeakableSpecification — marks answer-ready copy for voice / AEO assistants. */
export function SpeakableJsonLd({
  path = "/",
  cssSelectors = ["#answer-summary-heading", "#answer-summary-text"],
}: {
  path?: string
  cssSelectors?: string[]
}) {
  const url = path === "/" ? "https://servicebooking.in" : `https://servicebooking.in${path}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: COMPANY_NAME,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://servicebooking.in/#website",
      url: "https://servicebooking.in",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
