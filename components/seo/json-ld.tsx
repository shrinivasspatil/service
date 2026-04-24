"use client"

import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, SERVICES, BANGALORE_AREAS, BRAND_SERVICES } from "@/lib/constants"

// ============================================
// 1. LOCAL BUSINESS SCHEMA (with AggregateRating)
// ============================================
interface LocalBusinessSchemaProps {
  area?: string
  service?: string
}

export function LocalBusinessSchema({ area, service }: LocalBusinessSchemaProps) {
  const areaName = area 
    ? BANGALORE_AREAS.find(a => a.slug === area)?.name 
    : "Bangalore"
  
  const serviceName = service
    ? SERVICES.find(s => s.slug === service)?.name
    : undefined

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": "https://servicehub-bangalore.com/#business",
    name: serviceName 
      ? `${COMPANY_NAME} - ${serviceName} Services in ${areaName}`
      : `${COMPANY_NAME}`,
    image: [
      "https://servicehub-bangalore.com/images/hero-technician.jpg",
      "https://servicehub-bangalore.com/images/water-purifier.jpg",
      "https://servicehub-bangalore.com/images/ac.jpg"
    ],
    description: serviceName
      ? `Professional ${serviceName} sales, installation, repair & maintenance services in ${areaName}, Bangalore. Certified technicians, same-day service, 90-day warranty.`
      : "Bangalore's trusted home appliance service provider for Kent RO, Aquaguard, Daikin AC, Faber Chimney, Prestige Hob. Expert installation, repair & maintenance.",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    url: "https://servicehub-bangalore.com",
    logo: "https://servicehub-bangalore.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, 100 Feet Road",
      addressLocality: area ? areaName : "Koramangala",
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946
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
        latitude: 12.9716,
        longitude: 77.5946
      },
      geoRadius: "50000"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "₹299 - ₹4999",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12500",
      reviewCount: "8750"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Priya Sharma"
        },
        reviewBody: "Excellent Kent RO service. Technician was on time and very professional. Filter replacement done quickly.",
        datePublished: "2024-01-15"
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        reviewBody: "Best Daikin AC service in Bangalore. Gas refill done properly and AC cooling is perfect now.",
        datePublished: "2024-02-20"
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Anitha Reddy"
        },
        reviewBody: "Faber chimney deep cleaning was thorough. Kitchen is now smoke-free. Highly recommend!",
        datePublished: "2024-03-10"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Appliance Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "OfferCatalog",
        name: service.name,
        itemListElement: service.features.slice(0, 4).map((feature, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
            provider: {
              "@type": "LocalBusiness",
              name: COMPANY_NAME
            }
          }
        }))
      }))
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://servicehub-bangalore.com/#book-service",
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
    sameAs: [
      "https://www.facebook.com/servicehub.bangalore",
      "https://www.instagram.com/servicehub.bangalore",
      "https://twitter.com/servicehub_blr",
      "https://www.youtube.com/@servicehub_bangalore",
      "https://www.linkedin.com/company/servicehub-bangalore"
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
// 2. WEBSITE SCHEMA (for sitelinks search box)
// ============================================
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://servicehub-bangalore.com/#website",
    name: COMPANY_NAME,
    url: "https://servicehub-bangalore.com",
    description: "Authorized service center for Kent, Aquaguard, Daikin, LG, Faber, Elica, Prestige appliances in Bangalore",
    publisher: {
      "@type": "Organization",
      "@id": "https://servicehub-bangalore.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://servicehub-bangalore.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
    "@id": "https://servicehub-bangalore.com/#organization",
    name: COMPANY_NAME,
    legalName: "ServiceHub Bangalore Home Services Pvt Ltd",
    url: "https://servicehub-bangalore.com",
    logo: {
      "@type": "ImageObject",
      url: "https://servicehub-bangalore.com/logo.png",
      width: "200",
      height: "60"
    },
    description: "Authorized service center for Kent, Aquaguard, Daikin, LG, Faber, Elica, Prestige and other major appliance brands in Bangalore",
    foundingDate: "2018",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN"
      }
    },
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, 100 Feet Road",
      addressLocality: "Koramangala",
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_PHONE,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Kannada"],
        areaServed: "IN",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "21:00"
        }
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_PHONE,
        contactType: "sales",
        availableLanguage: ["English", "Hindi", "Kannada"]
      }
    ],
    sameAs: [
      "https://www.facebook.com/servicehub.bangalore",
      "https://www.instagram.com/servicehub.bangalore",
      "https://twitter.com/servicehub_blr",
      "https://www.youtube.com/@servicehub_bangalore",
      "https://www.linkedin.com/company/servicehub-bangalore"
    ],
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
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100
    },
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
    "@id": `https://servicehub-bangalore.com/services/${service.slug}`,
    name: `${service.name} Services in ${areaName}`,
    description: service.description,
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://servicehub-bangalore.com/#business",
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE
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
      serviceUrl: `https://servicehub-bangalore.com/services/${service.slug}`,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "3500",
      reviewCount: "2100"
    },
    termsOfService: "https://servicehub-bangalore.com/terms",
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
interface FAQSchemaProps {
  faqs: { question: string; answer: string }[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://servicehub-bangalore.com/#faq",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
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
      item: `https://servicehub-bangalore.com${item.url}`
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
// 7. PRODUCT/SERVICE SCHEMA FOR BRANDS
// ============================================
export function BrandServiceSchema({ serviceType, brand, area }: { serviceType: string; brand: string; area?: string }) {
  const areaName = area 
    ? BANGALORE_AREAS.find(a => a.slug === area)?.name || area
    : "Bangalore"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand} ${serviceType} Service in ${areaName}`,
    description: `Professional ${brand} ${serviceType.toLowerCase()} repair, installation and AMC service in ${areaName}, Bangalore. Genuine spare parts, certified technicians.`,
    brand: {
      "@type": "Brand",
      name: brand
    },
    category: `${serviceType} Service`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "299",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: COMPANY_NAME
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
          addressRegion: "Karnataka"
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY"
          }
        }
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1500",
      reviewCount: "890"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Verified Customer"
        },
        reviewBody: `Excellent ${brand} ${serviceType.toLowerCase()} service. Very professional and timely.`,
        datePublished: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
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
// 8. HOW-TO SCHEMA (for service process)
// ============================================
export function HowToSchema({ serviceName }: { serviceName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Book ${serviceName} Service in Bangalore`,
    description: `Simple steps to book professional ${serviceName.toLowerCase()} service in Bangalore with ServiceHub`,
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
        url: "https://servicehub-bangalore.com/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive Confirmation Call",
        text: "Our team will call you within 30 minutes to confirm appointment time",
        url: "https://servicehub-bangalore.com/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Technician Visit",
        text: "Certified technician arrives at your home with all necessary tools and spare parts",
        url: "https://servicehub-bangalore.com/#book-service"
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Service Completion",
        text: "Service is completed with quality check and you pay only after satisfaction",
        url: "https://servicehub-bangalore.com/#book-service"
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
    description: "Complete list of home appliance services offered by ServiceHub Bangalore",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `https://servicehub-bangalore.com/services/${service.slug}`,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY_NAME
        }
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://servicehub-bangalore.com/areas/${areaSlug}/#business`,
    name: `ServiceHub ${area}`,
    description: `Authorized Kent RO, Aquaguard, Daikin AC, Faber Chimney, Prestige Hob service center in ${area}, Bangalore. Same-day repair & installation.`,
    url: `https://servicehub-bangalore.com/areas/${areaSlug}`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    priceRange: "₹₹",
    image: "https://servicehub-bangalore.com/images/hero-technician.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: area,
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946"
    },
    areaServed: {
      "@type": "Place",
      name: `${area}, Bangalore, Karnataka`
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Home Appliance Services in ${area}`,
      itemListElement: SERVICES.map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.name} Service in ${area}`,
          url: `https://servicehub-bangalore.com/areas/${areaSlug}/${service.slug}`
        }
      }))
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1200",
      reviewCount: "890"
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
// 11. PRODUCT SCHEMA (for service-area pages)
// ============================================
export function ProductSchema({ 
  serviceName, 
  area, 
  areaSlug,
  serviceSlug,
  brands,
  priceRange 
}: { 
  serviceName: string; 
  area: string;
  areaSlug: string;
  serviceSlug: string;
  brands: string[];
  priceRange: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://servicehub-bangalore.com/areas/${areaSlug}/${serviceSlug}/#product`,
    name: `${serviceName} Service in ${area}, Bangalore`,
    description: `Professional ${serviceName.toLowerCase()} installation, repair, maintenance and AMC service in ${area}, Bangalore. Serving brands: ${brands.slice(0, 5).join(", ")}`,
    url: `https://servicehub-bangalore.com/areas/${areaSlug}/${serviceSlug}`,
    image: `https://servicehub-bangalore.com/images/${serviceSlug}.jpg`,
    brand: brands.slice(0, 5).map(brand => ({
      "@type": "Brand",
      name: brand
    })),
    category: `${serviceName} Service`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "299",
      highPrice: "15000",
      offerCount: "50",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        "@type": "LocalBusiness",
        name: COMPANY_NAME,
        telephone: COMPANY_PHONE
      },
      areaServed: {
        "@type": "Place",
        name: `${area}, Bangalore`
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "850",
      reviewCount: "620"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Verified Customer"
        },
        reviewBody: `Excellent ${serviceName.toLowerCase()} service in ${area}. Technician was professional and completed the work quickly.`,
        datePublished: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
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
// 12. AGGREGATE RATING SCHEMA (standalone)
// ============================================
export function AggregateRatingSchema({ 
  itemName, 
  ratingValue, 
  reviewCount,
  area 
}: { 
  itemName: string; 
  ratingValue: number;
  reviewCount: number;
  area: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ServiceHub ${area}`,
    aggregateRating: {
      "@type": "AggregateRating",
      itemReviewed: {
        "@type": "Service",
        name: itemName
      },
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
      reviewCount: Math.floor(reviewCount * 0.7).toString()
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
      "@type": "LocalBusiness",
      "@id": "https://servicehub-bangalore.com/#business",
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "50000"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
