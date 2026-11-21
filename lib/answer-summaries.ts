import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  SERVICES,
} from "@/lib/constants"
import type { BANGALORE_AREAS } from "@/lib/constants"

type Area = (typeof BANGALORE_AREAS)[number]

const SERVICE_ANSWERS: Record<
  string,
  { question: string; lead: string; brands: string; focus: string; fromPrice: string }
> = {
  "water-purifier": {
    question: "Where can I get Kent RO or Aquaguard service near me in Bangalore?",
    lead: "Kent RO and Faber water purifier",
    brands: "Aquaguard, Aquasure, Aqua, Purosis, Aqua Pearl, Pureit, and LG",
    focus: "filter replacement, RO repair, and AMC",
    fromPrice: "₹499",
  },
  ac: {
    question: "Where can I get Daikin or LG AC service near me in Bangalore?",
    lead: "Daikin and LG air conditioner",
    brands: "Samsung, Voltas, Blue Star, Hitachi, and Carrier",
    focus: "gas refill, compressor repair, installation, and AMC",
    fromPrice: "₹499",
  },
  chimney: {
    question: "Where can I get Faber or Elica chimney cleaning near me in Bangalore?",
    lead: "Faber and Elica kitchen chimney",
    brands: "Hindware, Kaff, Glen, Bosch, Beyond, and Hafele",
    focus: "deep cleaning, motor repair, and filter replacement",
    fromPrice: "₹399",
  },
  hob: {
    question: "Where can I get Prestige or Pigeon hob repair near me in Bangalore?",
    lead: "Prestige and Faber gas hob",
    brands: "Gilma, Glen, Sunflame, Hindware, Kaff, Hafele, and Beyond",
    focus: "burner repair, ignition fix, and glass top replacement",
    fromPrice: "₹450",
  },
  "washing-machine": {
    question: "Where can I get LG or Samsung washing machine repair near me in Bangalore?",
    lead: "LG and Samsung washing machine",
    brands: "IFB, Bosch, Whirlpool, and Godrej",
    focus: "drum repair, motor replacement, and front-load servicing",
    fromPrice: "₹399",
  },
  refrigerator: {
    question: "Where can I get LG or Samsung refrigerator repair near me in Bangalore?",
    lead: "LG and Samsung refrigerator",
    brands: "Whirlpool, Godrej, Haier, and Bosch",
    focus: "compressor repair, gas refill, and thermostat fixes",
    fromPrice: "₹499",
  },
  dishwasher: {
    question: "Where can I get Bosch or IFB dishwasher repair near me in Bangalore?",
    lead: "Bosch and IFB dishwasher",
    brands: "LG, Samsung, Siemens, Faber, Hafele, and Kelvinator",
    focus: "installation, pump repair, and drainage troubleshooting",
    fromPrice: "₹599",
  },
  tv: {
    question: "Where can I get Samsung or LG TV repair near me in Bangalore?",
    lead: "Samsung and LG TV",
    brands: "Sony, Panasonic, Mi, and OnePlus",
    focus: "screen repair, panel replacement, and installation",
    fromPrice: "₹499",
  },
}

export function getHomeAnswerSummary() {
  return {
    question: "Who provides home appliance service near me in Bangalore?",
    answer: `${COMPANY_NAME} is a private independent registered appliance service provider in Bangalore. We offer same-day Kent RO, Daikin AC, Faber chimney, and Prestige hob repair near you across all Bangalore areas. Call ${COMPANY_PHONE} or book online. Services from ₹450 with a 90-day warranty. Office: ${COMPANY_ADDRESS}. Hours: Mon–Sun, 8 AM–9 PM.`,
  }
}

export function getContactAnswerSummary() {
  return {
    question: "How do I contact Service Booking for appliance repair in Bangalore?",
    answer: `Call ${COMPANY_PHONE}, WhatsApp us, or email ${COMPANY_EMAIL}. ${COMPANY_NAME} confirms bookings within 30 minutes and offers same-day doorstep service across Bangalore. Visit us at ${COMPANY_ADDRESS}.`,
  }
}

export function getServicesIndexAnswerSummary() {
  return {
    question: "What home appliance services does Service Booking offer in Bangalore?",
    answer: `${COMPANY_NAME} repairs and maintains water purifiers, ACs, chimneys, hobs, washing machines, refrigerators, dishwashers, and TVs across Bangalore. Same-day service for 50+ brands including Kent, Daikin, Faber, and Prestige. Call ${COMPANY_PHONE}.`,
  }
}

export function getAreasIndexAnswerSummary() {
  return {
    question: "Which Bangalore areas does Service Booking cover for appliance repair?",
    answer: `${COMPANY_NAME} covers 30+ Bangalore localities including Koramangala, HSR Layout, Whitefield, Indiranagar, Electronic City, Jayanagar, and JP Nagar. Same-day Kent RO, Daikin AC, Faber chimney, Prestige hob, and TV repair near you. Call ${COMPANY_PHONE} or pick your area below.`,
  }
}

export function getAreaAnswerSummary(area: Area) {
  return {
    question: `Where can I get home appliance repair near me in ${area.name}, Bangalore?`,
    answer: `${COMPANY_NAME} offers same-day Kent RO, Daikin AC, Faber chimney, and Prestige hob repair near you in ${area.name}, Bangalore. Book online or call ${COMPANY_PHONE}. Technicians typically reach ${area.name} the same day with transparent pricing and a 90-day warranty.`,
  }
}

export function getAreaServiceAnswerSummary(area: Area, serviceSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const profile = SERVICE_ANSWERS[serviceSlug]
  if (!service || !profile) {
    return getAreaAnswerSummary(area)
  }
  return {
    question: `Where can I get ${service.name.toLowerCase()} repair near me in ${area.name}, Bangalore?`,
    answer: `${COMPANY_NAME} provides same-day ${service.name.toLowerCase()} repair, installation, and AMC near you in ${area.name}, Bangalore — covering ${profile.lead} and ${profile.brands}. Focus areas: ${profile.focus}. Services from ${service.startingPrice}. Call ${COMPANY_PHONE} — technicians reach ${area.name} the same day with a 90-day warranty on eligible repairs.`,
  }
}

export function getServiceHubAnswerSummary(serviceSlug: string) {
  const profile = SERVICE_ANSWERS[serviceSlug]
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  if (!profile || !service) {
    return {
      question: `Where can I get appliance repair near me in Bangalore?`,
      answer: `${COMPANY_NAME} provides same-day appliance repair across Bangalore. Call ${COMPANY_PHONE}.`,
    }
  }
  return {
    question: profile.question,
    answer: `${COMPANY_NAME} is an independent multi-brand service provider for ${profile.lead} and ${profile.brands} in Bangalore. We offer ${profile.focus} with same-day doorstep service from ${profile.fromPrice}. Call ${COMPANY_PHONE} — 90-day warranty on repairs. Serving Koramangala, HSR Layout, Whitefield, and all Bangalore areas.`,
  }
}

export function getBrandAnswerSummary(brandName: string, serviceName: string, serviceSlug: string) {
  const profile = SERVICE_ANSWERS[serviceSlug]
  return {
    question: `Where can I get ${brandName} ${serviceName.toLowerCase()} service near me in Bangalore?`,
    answer: `${COMPANY_NAME} provides independent ${brandName} ${serviceName.toLowerCase()} repair, installation, and AMC in Bangalore. Same-day doorstep service — call ${COMPANY_PHONE}. ${profile ? `Related brands we also service: ${profile.brands}.` : ""} 90-day warranty on eligible repairs. Not an OEM authorised centre.`,
  }
}

export function getAreaBrandAnswerSummary(
  area: Area,
  serviceSlug: string,
  brandName: string,
  serviceName: string
) {
  const profile = SERVICE_ANSWERS[serviceSlug]
  const fromPrice = profile?.fromPrice ?? "₹450"

  return {
    question: `Where can I get ${brandName} ${serviceName.toLowerCase()} repair near me in ${area.name}, Bangalore?`,
    answer: `${COMPANY_NAME} provides same-day ${brandName} ${serviceName.toLowerCase()} repair, installation, and AMC near you in ${area.name}, Bangalore. Services from ${fromPrice}. Call ${COMPANY_PHONE} — technicians reach ${area.name} the same day with a 90-day warranty on repairs.`,
  }
}
