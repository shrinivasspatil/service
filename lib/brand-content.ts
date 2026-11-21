import { COMPANY_NAME } from "@/lib/constants"

const SERVICE_LABEL: Record<string, string> = {
  "water-purifier": "RO service",
  ac: "AC repair",
  chimney: "chimney cleaning",
  hob: "hob repair",
  "washing-machine": "washing machine repair",
  refrigerator: "fridge repair",
  dishwasher: "dishwasher service",
  tv: "TV repair",
}

const BRAND_NOTES: Record<string, string> = {
  sunflame:
    "Sunflame units in Bangalore kitchens often need motor cleaning after festive cooking — we carry filter kits on the van.",
  hindware:
    "Hindware chimney and hob calls are usually suction drop or ignition click with no flame; we diagnose before quoting parts.",
  gilma:
    "Gilma chimneys in apartment ducts clog with grease faster — we check the duct run, not only the mesh filters.",
  glen:
    "Glen hobs here fail most often on the igniter and burner nozzle after oil spills; glass-top swaps are quoted first.",
  faber:
    "Faber is the brand we service most in Bangalore — motor rewind, filter wash and auto-clean PCB faults are common jobs.",
  whirlpool:
    "Whirlpool AC and laundry calls spike before summer; we stock gas and common drum-bearing kits for same-day fixes.",
  hitachi:
    "Hitachi fridge jobs in Bangalore are typically compressor heat, frost on older frost-free units, and PCB trips after power cuts.",
  "ao smith":
    "AO Smith RO tanks lose flow when membranes clog on hard water; we test TDS on every visit before recommending a kit.",
  "ao-smith":
    "AO Smith RO tanks lose flow when membranes clog on hard water; we test TDS on every visit before recommending a kit.",
  lg: "LG dual-inverter ACs and front-load washers need error-code diagnosis — we read the board before swapping parts.",
  samsung:
    "Samsung Wind-Free ACs and QLED TVs need model-specific boards; we confirm the part before the visit when you share the model number.",
  daikin:
    "Daikin split ACs in Bangalore IT corridors run long hours — gas leak and PCB faults show up before summer peaks.",
  kent: "Kent RO low-flow and high-TDS complaints are the bulk of our purifier calls; we replace filters only after a TDS check.",
  aquaguard:
    "Aquaguard UV/RO combos often need UV lamp and sediment filter service after monsoon water-quality swings.",
  elica:
    "Elica chimney motors get noisy after grease load; we balance the impeller and replace the capacitor when needed.",
}

function patternIndex(key: string, n: number): number {
  let hash = 0
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return n === 0 ? 0 : hash % n
}

export function getCityBrandHeading(
  brandName: string,
  serviceName: string,
  serviceSlug: string
): string {
  const label = SERVICE_LABEL[serviceSlug] ?? serviceName.toLowerCase()
  const patterns = [
    `${brandName} ${serviceName} service in Bangalore`,
    `${brandName} ${label} in Bangalore`,
    `Bangalore ${brandName} ${serviceName.toLowerCase()} repair`,
    `${brandName} doorstep ${label}`,
  ]
  return patterns[patternIndex(`${serviceSlug}-${brandName}`, patterns.length)]
}

export function getCityBrandIntro(
  brandName: string,
  serviceName: string,
  serviceSlug: string,
  jobs: string[],
  startingPrice: string
): string {
  const note =
    BRAND_NOTES[brandName.toLowerCase()] ??
    BRAND_NOTES[brandName.toLowerCase().replace(/\s+/g, "-")] ??
    `${COMPANY_NAME} technicians carry common ${brandName} spare parts for same-day Bangalore visits.`
  const jobList = jobs.slice(0, 4).join(", ")
  return `${note} Independent ${brandName} ${serviceName.toLowerCase()} repair, installation and AMC from ${startingPrice}. Typical jobs: ${jobList}. Not an OEM authorised centre.`
}
