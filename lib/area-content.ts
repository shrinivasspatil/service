import { COMPANY_NAME } from "@/lib/constants"

type Area = (typeof import("@/lib/constants").BANGALORE_AREAS)[number]

const ZONE_CONTEXT: Record<string, string> = {
  South: "South Bangalore's residential corridors and apartment clusters",
  East: "East Bangalore's IT and tech-adjacent neighborhoods",
  North: "North Bangalore's growing suburban and airport-side localities",
  West: "West Bangalore's established commercial and residential zones",
  Central: "Central Bangalore's business and heritage districts",
}

/** Approximate zone centroids for GEO / LocalBusiness schema. */
export const ZONE_GEO: Record<string, { latitude: number; longitude: number }> = {
  South: { latitude: 12.9166, longitude: 77.6101 },
  East: { latitude: 12.9698, longitude: 77.7499 },
  North: { latitude: 13.0358, longitude: 77.597 },
  West: { latitude: 12.9915, longitude: 77.5334 },
  Central: { latitude: 12.9716, longitude: 77.5946 },
}

const AREA_HIGHLIGHTS: Record<string, string> = {
  koramangala:
    "Known for dense apartment blocks and quick same-day technician routing from our South Bangalore team.",
  "hsr-layout":
    "High demand for RO filter service and AC gas refill during summer peaks.",
  indiranagar:
    "Frequent chimney deep-cleaning and hob ignition repair requests from independent homes and cafes.",
  whitefield:
    "Large apartment communities drive regular AMC bookings for AC and water purifier maintenance.",
  "electronic-city":
    "Strong demand for weekend appliance service slots across gated communities.",
  marathahalli:
    "Mixed residential and rental housing with recurring water purifier and AC repair needs.",
  jayanagar:
    "Older independent homes often need chimney motor repair and legacy RO servicing.",
  "jp-nagar":
    "Family homes with multi-brand appliances benefit from our consolidated service visits.",
  "btm-layout":
    "Student and working-professional housing creates steady demand for budget-friendly repairs.",
  bellandur:
    "Lake-side apartments see seasonal AC load issues and chimney grease buildup.",
  "sarjapur-road":
    "New developments rely on installation and first-year appliance servicing.",
  "bannerghatta-road":
    "Villa and apartment mix with regular hob burner and purifier filter replacements.",
  "mg-road":
    "Central commercial and residential mix with priority same-day callback windows.",
  rajajinagar:
    "Established West Bangalore locality with steady RO servicing and AC maintenance in older apartment blocks.",
  malleshwaram:
    "Heritage homes and traditional layouts often need chimney motor repair and classic hob ignition fixes.",
  basavanagudi:
    "South Bangalore heritage neighborhood with recurring water purifier filter and gas stove repair calls.",
  hebbal:
    "North Bangalore hub near Manyata Tech Park — high AC breakdown and RO installation demand from new towers.",
  yelahanka:
    "Airport corridor apartments see pre-summer AC gas refill spikes and washing machine drum repair requests.",
  "rt-nagar":
    "North-central residential belt with strong demand for Daikin and Voltas AC AMC renewals.",
  hennur:
    "Growing North Bangalore pocket where new families book combined RO installation and chimney setup visits.",
  "kr-puram":
    "East Bangalore junction area with mixed housing needing quick same-day appliance turnaround.",
  mahadevapura:
    "IT corridor adjacency drives weekend AC service slots and Faber chimney deep-cleaning bookings.",
  bommanahalli:
    "South-east rental housing creates repeat water purifier and hob repair demand year-round.",
  banashankari:
    "Large South Bangalore zone with multi-brand appliance repair across independent homes and shops.",
  vijayanagar:
    "West Bangalore residential stretch with regular refrigerator compressor and TV panel repair calls.",
  yeshwanthpur:
    "Industrial-residential mix near Peenya sees commercial chimney service and heavy-duty AC repair needs.",
  thanisandra:
    "Fast-growing North corridor with new apartments booking first-year RO and AC installation packages.",
  varthur:
    "East Bangalore lake-side communities need seasonal AC servicing and grease-heavy chimney cleaning.",
  shivajinagar:
    "Central Bangalore commercial-residential blend with compact homes needing space-efficient hob repairs.",
  ulsoor:
    "Central lakeside locality with older buildings requiring legacy RO membrane and chimney filter service.",
  "richmond-town":
    "Premium central neighborhood with high expectations for authorized brand service and punctual doorstep visits.",
}

const SERVICE_PROFILES: Record<
  string,
  { lead: string; brands: string; focus: string; nearMeLabel: string }
> = {
  "water-purifier": {
    lead: "Kent RO",
    brands: "Faber, Aquaguard, Aquasure, Purosis, Aqua Pearl, and LG",
    focus: "filter replacement, RO membrane repair, and AMC plans",
    nearMeLabel: "water purifier repair",
  },
  ac: {
    lead: "Daikin AC",
    brands: "LG, Voltas, Samsung, and Blue Star",
    focus: "gas refill, compressor repair, and seasonal deep cleaning",
    nearMeLabel: "AC repair",
  },
  chimney: {
    lead: "Faber chimney",
    brands: "Elica, Hindware, Gilma, Sunflame, Beyond, and Haier",
    focus: "deep cleaning, motor repair, and filter replacement",
    nearMeLabel: "chimney cleaning",
  },
  hob: {
    lead: "Prestige hob",
    brands: "Faber, Gilma, Glen, Sunflame, Hindware, Kaff, Hafele, and Beyond",
    focus: "burner repair, ignition fixes, and glass top replacement",
    nearMeLabel: "gas stove repair",
  },
  "washing-machine": {
    lead: "LG washing machine",
    brands: "Samsung, IFB, Bosch, and Whirlpool",
    focus: "drum repair, motor replacement, and front-load servicing",
    nearMeLabel: "washing machine repair",
  },
  refrigerator: {
    lead: "LG refrigerator",
    brands: "Samsung, Whirlpool, Godrej, and Haier",
    focus: "compressor repair, gas refill, and thermostat fixes",
    nearMeLabel: "fridge repair",
  },
  dishwasher: {
    lead: "Bosch dishwasher",
    brands: "IFB, LG, Samsung, Siemens, Faber, Hafele, and Kelvinator",
    focus: "installation, pump repair, and drainage troubleshooting",
    nearMeLabel: "dishwasher repair",
  },
  tv: {
    lead: "Samsung TV",
    brands: "LG, Sony, Panasonic, and Mi",
    focus: "screen repair, panel replacement, and smart TV setup",
    nearMeLabel: "TV repair",
  },
}

function patternIndex(key: string, n: number): number {
  let hash = 0
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return n === 0 ? 0 : hash % n
}

function highlightSentence(area: Area): string {
  return (
    AREA_HIGHLIGHTS[area.slug] ??
    `We provide doorstep appliance service across ${area.name} with transparent pricing and warranty-backed repairs.`
  )
}

function highlightLead(area: Area): string {
  return highlightSentence(area).split(".")[0]
}

export function getAreaHeading(area: Area): string {
  const patterns = [
    `Appliance repair in ${area.name}`,
    `${area.name} home appliance service`,
    `RO, AC & chimney service in ${area.name}`,
    `${area.name} doorstep appliance repair`,
  ]
  return patterns[patternIndex(area.slug, patterns.length)]
}

export function getAreaPageTitle(area: Area): string {
  const patterns = [
    `${area.name} appliance repair`,
    `${area.name} RO & AC service`,
    `Appliance service in ${area.name}`,
    `${area.name} chimney & hob repair`,
  ]
  return patterns[patternIndex(`${area.slug}-title`, patterns.length)]
}

export function getAreaFaqs(
  area: Area,
  phone: string
): { question: string; answer: string }[] {
  const highlight = highlightSentence(area)
  const zone = ZONE_CONTEXT[area.zone] ?? "Bangalore neighborhoods"

  return [
    {
      question: `Do you send technicians to ${area.name}?`,
      answer: `Yes. ${COMPANY_NAME} covers ${area.name} as part of ${zone}. ${highlight} Book before 2 PM for a same-day visit.`,
    },
    {
      question: `What appliances do you repair in ${area.name}?`,
      answer: `RO and UV purifiers, split ACs, kitchen chimneys, gas hobs, washing machines, refrigerators, dishwashers and TVs in ${area.name} — including Kent, Daikin, Faber, LG and Samsung.`,
    },
    {
      question: `How fast is same-day service in ${area.name}?`,
      answer: `Our ${area.zone} Bangalore team usually reaches ${area.name} the same day when you book before 2 PM. Evening slots are available after office hours.`,
    },
    {
      question: `What does a visit in ${area.name} cost?`,
      answer: `Doorstep visits in ${area.name} start from ₹399 depending on the appliance. We quote after inspection — no hidden charges. Call ${phone} to check today's slots.`,
    },
  ]
}

export function getAreaIntro(area: Area): string {
  const zone = ZONE_CONTEXT[area.zone] ?? "Bangalore neighborhoods"
  const highlight = highlightSentence(area)
  return `${area.name} is a ${COMPANY_NAME} coverage pocket in ${zone}. ${highlight}`
}

export function getAreaMetaDescription(area: Area): string {
  return `${highlightLead(area)}. Same-day RO, AC, chimney and hob repair in ${area.name}, Bangalore from ${COMPANY_NAME}.`
}

const SERVICE_COMMON_ISSUES: Record<string, string[]> = {
  "water-purifier": [
    "low water flow after filter clogging",
    "TDS spike or foul taste",
    "tank leaks and loose connectors",
    "UV/RO membrane failure",
  ],
  ac: [
    "weak cooling before summer peaks",
    "gas leak and ice on coils",
    "water dripping from indoor unit",
    "PCB or remote sensor faults",
  ],
  chimney: [
    "poor suction from grease-clogged filters",
    "noisy motor or burnt smell",
    "oil dripping onto the hob",
    "duct blockage in apartment kitchens",
  ],
  hob: [
    "ignition click with no flame",
    "uneven burner flames",
    "gas smell from loose valves",
    "cracked glass-top cooktops",
  ],
  "washing-machine": [
    "drum not spinning or loud vibration",
    "drainage errors and blocked pumps",
    "door lock faults on front-load units",
    "error codes after power cuts",
  ],
  refrigerator: [
    "fridge warm while freezer still cold",
    "continuous running compressor",
    "water leakage near vegetable tray",
    "frost buildup on older models",
  ],
  dishwasher: [
    "poor drainage and standing water",
    "cloudy glasses after wash cycles",
    "error codes on control boards",
    "inlet valve and spray-arm clogs",
  ],
  tv: [
    "no picture with sound intact",
    "backlight or panel lines",
    "smart TV reboot loops",
    "HDMI/port connection faults",
  ],
}

const ZONE_SERVICE_NOTE: Record<string, Record<string, string>> = {
  South: {
    "water-purifier": "Hard-water pockets in South Bangalore often shorten RO membrane life — we check TDS on every visit.",
    ac: "Dense apartment corridors mean we carry common AC spare parts to avoid second trips.",
    chimney: "Family kitchens here cook oil-heavy meals; deep cleaning every 4–6 months keeps suction strong.",
    hob: "Independent homes frequently need burner nozzle cleaning after festive cooking spikes.",
  },
  East: {
    "water-purifier": "IT-corridor rentals see frequent tenant changeovers — filter and AMC resets are common jobs.",
    ac: "Long summer work-from-home hours increase AC runtime; gas refill demand peaks April–June.",
    chimney: "Open-plan apartments near Whitefield/Marathahalli need quiet motors after late-night cooking.",
    refrigerator: "Power fluctuations in older East Bangalore blocks often trip fridge PCBs — we test stabilizers too.",
  },
  North: {
    ac: "New towers near Hebbal and Thanisandra book first-year AC installation and gas charging packages.",
    "water-purifier": "Fresh occupancy drives RO installation + first filter kit sales more than repairs.",
    chimney: "Builder-fit chimneys in new projects often need duct correction for proper draft.",
    "washing-machine": "Apartment laundry rooms see drum-bearing wear from continuous shared use.",
  },
  West: {
    "water-purifier": "Older West Bangalore flats often run legacy RO systems that need membrane and pump rebuilds.",
    hob: "Traditional home kitchens still use heavy cast-iron burners that need ignition and valve service.",
    refrigerator: "Long-owned fridges need gasket and thermostat work more often than full replacements.",
    chimney: "Heritage layouts with long ducts need motor upgrades rather than only filter washes.",
  },
  Central: {
    hob: "Compact central homes need space-efficient cooktop repairs without full kitchen teardown.",
    chimney: "Older buildings near Ulsoor and Shivajinagar often have shared shafts that clog with grease.",
    tv: "Wall-mounted living-room TVs need careful panel work without damaging plaster mounts.",
    ac: "Mixed commercial-residential blocks prefer evening slots after office hours.",
  },
}

export function getAreaServiceHeading(
  area: Area,
  serviceSlug: string,
  serviceName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const lead = profile?.lead ?? serviceName
  const label = profile?.nearMeLabel ?? serviceName.toLowerCase()
  const patterns = [
    `${serviceName} repair in ${area.name}`,
    `${area.name} ${serviceName.toLowerCase()} service`,
    `${lead} in ${area.name}`,
    `Doorstep ${label} in ${area.name}`,
  ]
  return patterns[patternIndex(`${area.slug}-${serviceSlug}`, patterns.length)]
}

export function getAreaServiceTitle(
  area: Area,
  serviceSlug: string,
  serviceName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const label = profile?.nearMeLabel ?? serviceName.toLowerCase()
  const patterns = [
    `${label} in ${area.name}`,
    `${area.name} ${serviceName.toLowerCase()}`,
    `${serviceName} — ${area.name}`,
    `${area.name} ${label}`,
  ]
  return patterns[patternIndex(`${area.slug}-${serviceSlug}-title`, patterns.length)]
}

export function getAreaServiceIntro(area: Area, serviceSlug: string): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const zone = ZONE_CONTEXT[area.zone] ?? "Bangalore"
  const highlight = highlightLead(area)
  const serviceLabel = profile?.nearMeLabel ?? "appliance repair"

  if (!profile) {
    return `${highlight}. ${COMPANY_NAME} provides same-day appliance service in ${area.name}, part of ${zone}.`
  }

  return `${highlight}. Book doorstep ${serviceLabel} in ${area.name} for ${profile.lead} plus ${profile.brands} — ${profile.focus}, same-day slots, and a clear quote before work starts.`
}

export function getAreaServiceMetaDescription(area: Area, serviceSlug: string): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const local = highlightLead(area)
  if (!profile) {
    return `${local}. Same-day appliance repair in ${area.name}, Bangalore from ${COMPANY_NAME}.`
  }

  return `${local}. ${profile.lead} ${profile.nearMeLabel} in ${area.name} — ${profile.focus}. Same-day from ${COMPANY_NAME}.`
}

/** Extra unique body copy for area × service pages (helps crawl → index). */
export function getAreaServiceLocalDetails(
  area: Area,
  serviceSlug: string,
  serviceName: string,
  startingPrice: string
): {
  title: string
  paragraphs: string[]
  commonIssues: string[]
} {
  const profile = SERVICE_PROFILES[serviceSlug]
  const highlight = AREA_HIGHLIGHTS[area.slug]
  const zoneNote =
    ZONE_SERVICE_NOTE[area.zone]?.[serviceSlug] ??
    `Our ${area.zone} Bangalore team routes technicians to ${area.name} the same day when you book before 2 PM.`
  const issues = SERVICE_COMMON_ISSUES[serviceSlug] ?? [
    "installation faults",
    "parts wear",
    "power-related failures",
    "maintenance overdue",
  ]

  const paragraphs = [
    `${COMPANY_NAME} handles ${serviceName.toLowerCase()} repair, installation, and AMC for homes in ${area.name}. ${highlight ?? `Residents across ${area.name} book us for transparent pricing and warranty-backed work.`}`,
    zoneNote,
    profile
      ? `Technicians visiting ${area.name} carry tools and common spares for ${profile.lead} and ${profile.brands}. Typical jobs cover ${profile.focus}. Service visits start from ${startingPrice} after a clear inspection quote — no surprise add-ons.`
      : `Doorstep ${serviceName.toLowerCase()} visits in ${area.name} start from ${startingPrice} with a 90-day warranty on eligible repairs.`,
  ]

  return {
    title: `${serviceName} in ${area.name} — what locals book us for`,
    paragraphs,
    commonIssues: issues.map(
      (issue) => `${issue.charAt(0).toUpperCase() + issue.slice(1)} in ${area.name}`
    ),
  }
}

export function getAreaServiceFaqs(
  area: Area,
  serviceName: string,
  serviceSlug: string,
  startingPrice: string,
  brands: readonly string[]
): { question: string; answer: string }[] {
  const brandList = brands.slice(0, 6).join(", ")
  const profile = SERVICE_PROFILES[serviceSlug]
  const focus = profile?.focus ?? "installation, repair, and AMC"

  const local = highlightLead(area)

  return [
    {
      question: `How much does ${serviceName.toLowerCase()} service cost in ${area.name}?`,
      answer: `${local}. ${serviceName} service in ${area.name} starts from ${startingPrice}. Final cost depends on the issue (for example ${focus}). We share an upfront quote after inspection — no hidden charges.`,
    },
    {
      question: `Do you offer same-day ${serviceName.toLowerCase()} repair in ${area.name}?`,
      answer: `Yes. Book before 2 PM for same-day ${serviceName.toLowerCase()} service in ${area.name}. Our ${area.zone} Bangalore team usually reaches ${area.name} the same day with common spare parts.`,
    },
    {
      question: `Which ${serviceName.toLowerCase()} brands do you service in ${area.name}?`,
      answer: `In ${area.name} we service ${brandList}${brands.length > 6 ? ", and more" : ""}. Technicians use genuine parts and test the appliance before leaving.`,
    },
    {
      question: `Is ${serviceName.toLowerCase()} service available at home in ${area.name}?`,
      answer: `Yes — fully doorstep. We cover apartments, independent houses, and small commercial kitchens across ${area.name} and nearby localities.`,
    },
    {
      question: `What warranty do you give on ${serviceName.toLowerCase()} repairs in ${area.name}?`,
      answer: `Eligible ${serviceName.toLowerCase()} repairs in ${area.name} include a 90-day warranty on labour and covered parts. Warranty terms are explained before work begins.`,
    },
  ]
}

export function getAreaServiceTitleLead(serviceSlug: string): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  return profile?.lead ?? "Appliance"
}

export function getAreaZoneGeo(zone: string) {
  return ZONE_GEO[zone] ?? ZONE_GEO.Central
}

export function getAreaBrandHeading(
  area: Area,
  serviceSlug: string,
  brandName: string,
  serviceName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const label = profile?.nearMeLabel ?? serviceName.toLowerCase()
  const patterns = [
    `${brandName} ${serviceName} in ${area.name}`,
    `${area.name} ${brandName} ${label}`,
    `${brandName} repair in ${area.name}`,
    `${brandName} ${label} — ${area.name}`,
  ]
  return patterns[patternIndex(`${area.slug}-${serviceSlug}-${brandName}`, patterns.length)]
}

export function getAreaBrandTitle(
  area: Area,
  serviceSlug: string,
  brandName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const label = profile?.nearMeLabel ?? "repair"
  const patterns = [
    `${brandName} ${label} in ${area.name}`,
    `${area.name} ${brandName} service`,
    `${brandName} ${area.name} repair`,
    `${brandName} in ${area.name}`,
  ]
  return patterns[patternIndex(`${area.slug}-${serviceSlug}-${brandName}-t`, patterns.length)]
}

export function getAreaBrandIntro(
  area: Area,
  serviceSlug: string,
  brandName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const zone = ZONE_CONTEXT[area.zone] ?? "Bangalore"
  const highlight = highlightLead(area)
  const zoneNote =
    ZONE_SERVICE_NOTE[area.zone]?.[serviceSlug] ??
    `Our ${area.zone} Bangalore team routes ${brandName} technicians to ${area.name} the same day.`

  if (!profile) {
    return `${highlight}. ${COMPANY_NAME} provides same-day ${brandName} service in ${area.name} (${zone}). ${zoneNote}`
  }

  return `${highlight}. In ${area.name}, technicians specialise in ${brandName} ${profile.nearMeLabel} — ${profile.focus} with same-day visits and genuine spare parts. ${zoneNote}`
}

export function getAreaBrandMetaDescription(
  area: Area,
  serviceSlug: string,
  brandName: string
): string {
  const profile = SERVICE_PROFILES[serviceSlug]
  const serviceLabel = profile?.nearMeLabel ?? "appliance repair"
  const local = highlightLead(area)

  return `${local}. ${brandName} ${serviceLabel} in ${area.name}, Bangalore — same-day doorstep repair from ${COMPANY_NAME}.`
}
