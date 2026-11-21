import { BANGALORE_AREAS, BRAND_SERVICES, SERVICES } from "@/lib/constants"

export type Testimonial = {
  id: number
  name: string
  location: string
  rating: number
  service: string
  text: string
  initials?: string
  color?: string
}

const CUSTOMERS = [
  { name: "Priya Sharma", initials: "PS", color: "bg-pink-500" },
  { name: "Rajesh Kumar", initials: "RK", color: "bg-blue-500" },
  { name: "Anita Reddy", initials: "AR", color: "bg-purple-500" },
  { name: "Mohammed Farhan", initials: "MF", color: "bg-green-500" },
  { name: "Sneha Patel", initials: "SP", color: "bg-orange-500" },
  { name: "Vikram Rao", initials: "VR", color: "bg-teal-500" },
  { name: "Meera Nair", initials: "MN", color: "bg-violet-500" },
  { name: "Suresh Menon", initials: "SM", color: "bg-sky-500" },
  { name: "Lakshmi Iyer", initials: "LI", color: "bg-rose-500" },
  { name: "Arjun Desai", initials: "AD", color: "bg-amber-500" },
  { name: "Kavitha Gowda", initials: "KG", color: "bg-cyan-500" },
  { name: "Deepak Shetty", initials: "DS", color: "bg-indigo-500" },
  { name: "Nisha Thomas", initials: "NT", color: "bg-emerald-500" },
  { name: "Rahul Bhat", initials: "RB", color: "bg-fuchsia-500" },
  { name: "Pooja Hegde", initials: "PH", color: "bg-lime-500" },
]

/** Named Bangalore localities used when a page is not area-specific. */
const AREA_NAMES = BANGALORE_AREAS.map((a) => a.name)

function brandsForService(serviceSlug: string): string[] {
  const fromBrandServices =
    BRAND_SERVICES[serviceSlug as keyof typeof BRAND_SERVICES]?.map((b) => b.brand) ?? []
  if (fromBrandServices.length > 0) return fromBrandServices
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  return service?.brands ? [...service.brands] : []
}

function defaultBrand(serviceSlug: string): string {
  return brandsForService(serviceSlug)[0] ?? "Home"
}

/** Templates always use {area} and {brand} — never hardcode a competitor brand. */
const REVIEW_TEMPLATES: Record<string, string[]> = {
  "water-purifier": [
    "Excellent {brand} RO service in {area}! The technician reached my apartment the same day and fixed low water flow within an hour. Transparent pricing and genuine {brand} parts.",
    "Booked {brand} water purifier filter replacement in {area}. Very professional team — they explained TDS levels and completed the service without any mess.",
    "My {brand} purifier was leaking in {area}. Service Booking diagnosed a loose connector and replaced the membrane. Running perfectly now with a clear warranty.",
    "Got {brand} AMC renewal for our home in {area}. Technician was on time, cleaned all filters, and shared maintenance tips. Highly recommend for {area} residents.",
    "Needed urgent {brand} RO repair in {area}. Same-day visit, honest quote, and the water taste is back to normal.",
    "{brand} installation in {area} was neat — proper plumbing, TDS check, and they explained filter change intervals clearly.",
  ],
  ac: [
    "Best {brand} AC service in {area}! Complete gas refill and coil cleaning for our 5-year-old unit. Cooling is back to like-new condition.",
    "Our {brand} split AC in {area} stopped cooling before summer. They fixed the compressor issue same day and followed up after the repair. Great service.",
    "Professional {brand} AC installation in {area} with proper copper piping and vacuum testing. No shortcuts — exactly what we wanted.",
    "Booked {brand} AC maintenance in {area}. Technician cleaned filters, checked gas pressure, and resolved a water leakage drip. Fair price.",
    "Emergency {brand} AC repair in {area} on a Sunday. Reached within 2 hours and fixed the PCB fault. Saved us from the heat!",
    "{brand} AC deep cleaning in {area} made a huge difference — quieter fan and much better cooling in our bedroom.",
  ],
  chimney: [
    "My {brand} kitchen chimney in {area} had almost no suction. Deep cleaning and motor check made it work like new. Excellent value in {area}.",
    "{brand} chimney service in {area} was quick and thorough. Grease buildup cleared, filters replaced, and they tested suction before leaving.",
    "Called for {brand} chimney motor repair in {area}. Diagnosed the issue immediately and had the spare part. Very satisfied with the work.",
    "Regular {brand} chimney cleaning in {area} for our cafe kitchen. Team is punctual and leaves the workspace clean. We book them every quarter.",
    "{brand} hood wasn't extracting smoke in our {area} flat. Service Booking fixed the duct blockage and explained filter care. Top-notch.",
    "Booked {brand} chimney installation in {area}. Proper ducting, noise check, and suction tested before they left.",
  ],
  hob: [
    "Quick {brand} hob repair in {area}. Ignition wasn't working on two burners — fixed on the spot with genuine parts.",
    "Our {brand} gas stove in {area} had uneven flames. Technician cleaned burners and replaced a faulty valve. Cooking safely again.",
    "Booked {brand} cooktop service in {area} for glass top scratches and loose knobs. Neat work and reasonable charges.",
    "{brand} hob installation in {area} done cleanly with leak testing. They also demonstrated safety checks for our family.",
    "{brand} hob service in {area} — same-day visit, burner replacement, and a 90-day warranty. Will use again.",
    "Needed {brand} gas hob repair in {area} before a family function. Fast response and the burners light perfectly now.",
  ],
  "washing-machine": [
    "My {brand} front-load washer in {area} stopped spinning. Motor replaced quickly and machine runs smoothly now.",
    "{brand} washing machine repair in {area} — drainage issue fixed same day. Technician was knowledgeable and polite.",
    "Booked {brand} washer service in {area} for loud vibration during spin. Balanced the drum and replaced worn bearings.",
    "{brand} top-load service in {area}. Error code cleared and they ran a full test cycle before leaving.",
    "Excellent {brand} washing machine maintenance in {area}. Descaling done and they showed us how to avoid future drum issues.",
    "Our {brand} washer in {area} wasn't draining. Quick doorstep fix with genuine spare parts.",
  ],
  refrigerator: [
    "{brand} fridge in {area} wasn't cooling — they found a gas leak and completed the refill professionally. Food safe again.",
    "{brand} refrigerator repair in {area} fixed our thermostat issue within hours. Clear quote and warranty on the repair.",
    "Our {brand} double-door fridge in {area} had ice buildup. Defrosting, gasket replacement, and full service — very thorough.",
    "Booked {brand} fridge service in {area} before moving homes. Compressor check and door seal fix — ready for the shift.",
    "{brand} refrigerator not cooling in {area}; genuine parts and fair pricing. Cooling restored the same day.",
    "Trusted {brand} fridge repair in {area} — technician explained the issue and completed the job without upselling.",
  ],
  dishwasher: [
    "{brand} dishwasher in {area} wasn't draining. Pump cleaned and spray arms unclogged — dishes come out spotless again.",
    "{brand} dishwasher installation in {area} was neat with proper inlet/outlet connections. Team explained first-use steps.",
    "Our {brand} dishwasher in {area} showed error codes. Technician reset the board and replaced a faulty sensor.",
    "Regular {brand} dishwasher service in {area} for our restaurant. Reliable team that works around our kitchen hours.",
    "{brand} dishwasher repair in {area} — quick diagnosis, genuine spare, and they ran a test wash before leaving.",
    "Booked {brand} dishwasher maintenance in {area}. Filters cleaned and spray pressure is strong again.",
  ],
  tv: [
    "{brand} TV in {area} had no picture — backlight replaced and display is perfect. Technician was careful with our wall mount.",
    "{brand} TV repair in {area} for sound but no video. Motherboard issue fixed at a fair price with warranty.",
    "Our {brand} smart TV in {area} kept restarting. Software reset and power board repair solved it same day.",
    "Booked {brand} TV installation in {area}. Hidden cabling and soundbar setup done professionally.",
    "{brand} LED service in {area} — original parts used and picture quality restored fully.",
    "Doorstep {brand} TV repair in {area}. Diagnosed fast and fixed without taking the panel to a workshop.",
  ],
}

const GENERIC_TEMPLATES = [
  "Excellent {brand} {service} service in {area}! Technician arrived on time and fixed our unit quickly. Professional and reasonably priced.",
  "Booked {brand} {service} repair in {area}. Same-day visit, clear quote, and genuine spare parts. Very happy with Service Booking.",
  "Reliable doorstep {brand} {service} in {area}. Team was courteous and left the place clean after the job.",
  "We've used Service Booking in {area} for {brand} {service} work. Consistent quality and honest pricing.",
  "Quick response for {brand} {service} in {area}. Issue diagnosed fast and repaired with a proper warranty.",
  "{brand} {service} support in {area} was excellent — on-time visit and transparent pricing from start to finish.",
]

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

function fillTemplate(
  template: string,
  area: string,
  brand: string,
  serviceLabel: string
): string {
  return template
    .replace(/\{area\}/g, area)
    .replace(/\{brand\}/g, brand)
    .replace(/\{service\}/g, serviceLabel.toLowerCase())
}

type PageTestimonialOptions = {
  /** Exact locality name shown in quote + card (e.g. Koramangala). */
  area: string
  areaSlug?: string
  serviceSlug?: string
  /** Exact brand name shown in quote + badge (e.g. Faber). */
  brand: string
  count?: number
  idOffset?: number
}

export function getTestimonialsForPage({
  area,
  areaSlug = area.toLowerCase().replace(/\s+/g, "-"),
  serviceSlug,
  brand,
  count = 3,
  idOffset = 0,
}: PageTestimonialOptions): Testimonial[] {
  const service = serviceSlug
    ? SERVICES.find((s) => s.slug === serviceSlug)
    : undefined
  const serviceLabel = service?.name ?? "Appliance"
  const seed = `${areaSlug}|${serviceSlug ?? "general"}|${brand}`
  const baseHash = hashString(seed)

  const templates =
    serviceSlug && REVIEW_TEMPLATES[serviceSlug]
      ? REVIEW_TEMPLATES[serviceSlug]
      : GENERIC_TEMPLATES

  const testimonials: Testimonial[] = []
  const usedTemplateIdx = new Set<number>()
  const usedCustomerIdx = new Set<number>()

  for (let i = 0; i < count; i++) {
    const offset = baseHash + i * 9973 + idOffset
    let templateIdx = offset % templates.length
    while (usedTemplateIdx.has(templateIdx) && usedTemplateIdx.size < templates.length) {
      templateIdx = (templateIdx + 1) % templates.length
    }
    usedTemplateIdx.add(templateIdx)

    let customerIdx = (offset * 17 + i * 13) % CUSTOMERS.length
    while (usedCustomerIdx.has(customerIdx) && usedCustomerIdx.size < CUSTOMERS.length) {
      customerIdx = (customerIdx + 1) % CUSTOMERS.length
    }
    usedCustomerIdx.add(customerIdx)

    const customer = CUSTOMERS[customerIdx]
    const text = fillTemplate(templates[templateIdx], area, brand, serviceLabel)

    testimonials.push({
      id: baseHash + i + 1 + idOffset,
      name: customer.name,
      initials: customer.initials,
      color: customer.color,
      location: area,
      rating: 5,
      service: `${brand} ${serviceLabel}`,
      text,
    })
  }

  return testimonials
}

/** Mixed reviews for home page — real area + brand pairs. */
export function getHomeTestimonials(count = 6): Testimonial[] {
  const combos: PageTestimonialOptions[] = [
    { area: "Koramangala", areaSlug: "koramangala", serviceSlug: "water-purifier", brand: "Kent" },
    { area: "Whitefield", areaSlug: "whitefield", serviceSlug: "ac", brand: "Daikin" },
    { area: "HSR Layout", areaSlug: "hsr-layout", serviceSlug: "chimney", brand: "Faber" },
    { area: "Indiranagar", areaSlug: "indiranagar", serviceSlug: "hob", brand: "Prestige" },
    { area: "Electronic City", areaSlug: "electronic-city", serviceSlug: "water-purifier", brand: "Aquaguard" },
    { area: "Marathahalli", areaSlug: "marathahalli", serviceSlug: "ac", brand: "LG" },
    { area: "Bellandur", areaSlug: "bellandur", serviceSlug: "washing-machine", brand: "IFB" },
    { area: "Jayanagar", areaSlug: "jayanagar", serviceSlug: "refrigerator", brand: "Samsung" },
  ]

  return combos.slice(0, count).map((combo, i) => ({
    ...getTestimonialsForPage({ ...combo, count: 1 })[0],
    id: i + 1,
  }))
}

/** Service hub — rotate real Bangalore areas + real brands for that service. */
export function getTestimonialsForService(serviceSlug: string, count = 6): Testimonial[] {
  const brands = brandsForService(serviceSlug)
  const start = hashString(serviceSlug) % AREA_NAMES.length

  return Array.from({ length: count }, (_, i) => {
    const area = AREA_NAMES[(start + i) % AREA_NAMES.length]
    const brand = brands[i % brands.length] || defaultBrand(serviceSlug)
    const areaSlug = BANGALORE_AREAS.find((a) => a.name === area)?.slug
      ?? area.toLowerCase().replace(/\s+/g, "-")
    return getTestimonialsForPage({
      area,
      areaSlug: `${areaSlug}-hub-${serviceSlug}-${brand}-${i}`,
      serviceSlug,
      brand,
      count: 1,
      idOffset: i * 31,
    })[0]
  })
}

/** Area page — this locality only; rotate real brands across services. */
export function getTestimonialsForArea(areaName: string, areaSlug: string, count = 6): Testimonial[] {
  const serviceSlugs = [
    "water-purifier",
    "ac",
    "chimney",
    "hob",
    "washing-machine",
    "refrigerator",
  ] as const
  const results: Testimonial[] = []

  for (let i = 0; i < count; i++) {
    const serviceSlug = serviceSlugs[i % serviceSlugs.length]
    const brands = brandsForService(serviceSlug)
    const brand = brands[i % brands.length] || defaultBrand(serviceSlug)
    results.push(
      ...getTestimonialsForPage({
        area: areaName,
        areaSlug: `${areaSlug}-area-${brand}-${i}`,
        serviceSlug,
        brand,
        count: 1,
        idOffset: i * 31,
      })
    )
  }

  return results
}

/** Area × service — this locality + rotate brands of that service. */
export function getTestimonialsForAreaService(
  areaName: string,
  areaSlug: string,
  serviceSlug: string,
  count = 6
): Testimonial[] {
  const brands = brandsForService(serviceSlug)

  return Array.from({ length: count }, (_, i) => {
    const brand = brands[i % brands.length] || defaultBrand(serviceSlug)
    return getTestimonialsForPage({
      area: areaName,
      areaSlug: `${areaSlug}-${serviceSlug}-${brand}-${i}`,
      serviceSlug,
      brand,
      count: 1,
      idOffset: i * 31,
    })[0]
  })
}

/** Area × brand — every review uses this locality + this brand only. */
export function getTestimonialsForAreaBrand(
  areaName: string,
  areaSlug: string,
  serviceSlug: string,
  brand: string,
  count = 6
): Testimonial[] {
  return getTestimonialsForPage({
    area: areaName,
    areaSlug,
    serviceSlug,
    brand,
    count,
  })
}

/** Brand page — this brand only; rotate real Bangalore localities. */
export function getTestimonialsForBrand(
  brand: string,
  serviceSlug: string,
  count = 6
): Testimonial[] {
  const start = hashString(`${brand}|${serviceSlug}`) % AREA_NAMES.length

  return Array.from({ length: count }, (_, i) => {
    const area = AREA_NAMES[(start + i) % AREA_NAMES.length]
    const areaSlug = BANGALORE_AREAS.find((a) => a.name === area)?.slug
      ?? area.toLowerCase().replace(/\s+/g, "-")
    return getTestimonialsForPage({
      area,
      areaSlug: `${areaSlug}-brand-${brand}-${i}`,
      serviceSlug,
      brand,
      count: 1,
      idOffset: i * 31,
    })[0]
  })
}
