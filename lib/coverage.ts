import { BANGALORE_AREAS } from "@/lib/constants"

type Area = (typeof BANGALORE_AREAS)[number]

/** Footer + homepage crawl seeds — must be live `/areas/{slug}` pages. */
export const FOOTER_AREA_LINKS: Array<{ name: string; href: string }> = [
  { name: "Koramangala", href: "/areas/koramangala" },
  { name: "HSR Layout", href: "/areas/hsr-layout" },
  { name: "Whitefield", href: "/areas/whitefield" },
  { name: "Indiranagar", href: "/areas/indiranagar" },
  { name: "Marathahalli", href: "/areas/marathahalli" },
  { name: "Jayanagar", href: "/areas/jayanagar" },
  { name: "Electronic City", href: "/areas/electronic-city" },
  { name: "Bellandur", href: "/areas/bellandur" },
  { name: "Hebbal", href: "/areas/hebbal" },
  { name: "Yelahanka", href: "/areas/yelahanka" },
  { name: "Rajajinagar", href: "/areas/rajajinagar" },
  { name: "Banashankari", href: "/areas/banashankari" },
]

/** City brand pages Google already crawled — keep them linked from the footer. */
export const FOOTER_BRAND_LINKS: Array<{ name: string; href: string }> = [
  { name: "Sunflame chimney", href: "/services/chimney/sunflame" },
  { name: "Hindware chimney", href: "/services/chimney/hindware" },
  { name: "Gilma chimney", href: "/services/chimney/gilma" },
  { name: "Faber hob", href: "/services/hob/faber" },
  { name: "Sunflame hob", href: "/services/hob/sunflame" },
  { name: "Glen hob", href: "/services/hob/glen" },
  { name: "Whirlpool AC", href: "/services/ac/whirlpool" },
  { name: "AO Smith RO", href: "/services/water-purifier/ao-smith" },
]

export const CRAWL_SEED_SLUGS = [
  "koramangala",
  "hsr-layout",
  "whitefield",
  "indiranagar",
  "marathahalli",
  "jayanagar",
  "electronic-city",
  "bellandur",
  "jp-nagar",
  "btm-layout",
  "sarjapur-road",
  "bannerghatta-road",
  "hebbal",
  "yelahanka",
  "rajajinagar",
  "malleshwaram",
  "banashankari",
  "vijayanagar",
  "yeshwanthpur",
  "thanisandra",
  "varthur",
  "mg-road",
] as const

export function getAreaBySlug(slug: string): Area | undefined {
  return BANGALORE_AREAS.find((area) => area.slug === slug)
}

export function getCrawlSeedAreas(): Area[] {
  const seen = new Set<string>()
  const seeds: Area[] = []
  for (const slug of CRAWL_SEED_SLUGS) {
    if (seen.has(slug)) continue
    const area = getAreaBySlug(slug)
    if (!area) continue
    seen.add(slug)
    seeds.push(area)
  }
  return seeds
}

export function getNearbyAreaPages(area: Area, limit = 10): Area[] {
  const seen = new Set<string>([area.slug])
  const out: Area[] = []

  for (const candidate of BANGALORE_AREAS) {
    if (seen.has(candidate.slug)) continue
    if (candidate.zone !== area.zone) continue
    seen.add(candidate.slug)
    out.push(candidate)
    if (out.length >= limit) return out
  }

  for (const candidate of BANGALORE_AREAS) {
    if (seen.has(candidate.slug)) continue
    seen.add(candidate.slug)
    out.push(candidate)
    if (out.length >= limit) return out
  }

  return out
}
