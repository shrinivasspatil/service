import { BANGALORE_AREAS, BRAND_SERVICES, SERVICES } from "@/lib/constants"

/** Phase 1: highest-demand Bangalore localities (see docs/area-brand-pages-roadmap.md). */
export const PHASE1_AREA_SLUGS = [
  "koramangala",
  "hsr-layout",
  "indiranagar",
  "whitefield",
  "electronic-city",
  "marathahalli",
  "jayanagar",
  "jp-nagar",
  "btm-layout",
  "bellandur",
] as const

export const TOP_BRANDS_PER_SERVICE = 3

export type AreaBrandRoute = {
  area: string
  service: string
  brand: string
}

export function brandToSlug(brand: string): string {
  return brand.toLowerCase().replace(/\s+/g, "-")
}

/**
 * Extra priority brands for area×brand pages (beyond default top 3).
 * Chimney: high-volume brand + area searches (Gilma, Sunflame, Beyond, etc.).
 */
const PRIORITY_BRAND_SLUGS: Partial<Record<string, string[]>> = {
  chimney: [
    "faber",
    "elica",
    "hindware",
    "gilma",
    "sunflame",
    "beyond",
    "haier",
    "hafele",
  ],
  hob: [
    "faber",
    "prestige",
    "gilma",
    "sunflame",
    "glen",
    "hindware",
    "kaff",
    "hafele",
    "beyond",
  ],
  "water-purifier": [
    "kent",
    "aquaguard",
    "pureit",
    "faber",
    "aquasure",
    "aqua",
    "purosis",
    "aqua-pearl",
    "lg",
  ],
  dishwasher: [
    "bosch",
    "ifb",
    "lg",
    "samsung",
    "siemens",
    "faber",
    "hafele",
    "kelvinator",
  ],
}

export function getTopBrandsForService(serviceSlug: string) {
  const brands = BRAND_SERVICES[serviceSlug as keyof typeof BRAND_SERVICES]
  if (!brands) return []

  const prioritySlugs = PRIORITY_BRAND_SLUGS[serviceSlug]
  if (prioritySlugs) {
    const picked = prioritySlugs
      .map((slug) => brands.find((b) => brandToSlug(b.brand) === slug))
      .filter((b): b is (typeof brands)[number] => Boolean(b))
    if (picked.length > 0) return picked
  }

  return brands.slice(0, TOP_BRANDS_PER_SERVICE)
}

export function findBrandInService(serviceSlug: string, brandSlug: string) {
  const brands = BRAND_SERVICES[serviceSlug as keyof typeof BRAND_SERVICES]
  return brands?.find((b) => brandToSlug(b.brand) === brandSlug)
}

export function getPhase1AreaBrandRoutes(): AreaBrandRoute[] {
  const routes: AreaBrandRoute[] = []

  for (const areaSlug of PHASE1_AREA_SLUGS) {
    for (const service of SERVICES) {
      for (const brandData of getTopBrandsForService(service.slug)) {
        routes.push({
          area: areaSlug,
          service: service.slug,
          brand: brandToSlug(brandData.brand),
        })
      }
    }
  }

  return routes
}

export function isPhase1AreaBrandPage(
  areaSlug: string,
  serviceSlug: string,
  brandSlug: string
): boolean {
  if (!PHASE1_AREA_SLUGS.includes(areaSlug as (typeof PHASE1_AREA_SLUGS)[number])) {
    return false
  }
  const topBrands = getTopBrandsForService(serviceSlug)
  return topBrands.some((b) => brandToSlug(b.brand) === brandSlug)
}

export function getPhase1Areas() {
  return BANGALORE_AREAS.filter((a) =>
    PHASE1_AREA_SLUGS.includes(a.slug as (typeof PHASE1_AREA_SLUGS)[number])
  )
}

export function areaBrandPath(areaSlug: string, serviceSlug: string, brandSlug: string) {
  return `/areas/${areaSlug}/${serviceSlug}/${brandSlug}`
}
