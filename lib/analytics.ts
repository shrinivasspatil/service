const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

type GtagCommand = "config" | "event" | "js" | "set"

declare global {
  interface Window {
    gtag?: (command: GtagCommand, ...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return
  window.gtag(...(args as [GtagCommand, ...unknown[]]))
}

export function isAnalyticsEnabled() {
  return Boolean(GA_ID && typeof window !== "undefined")
}

/** SPA route change — call on pathname updates. */
export function trackPageView(path: string, title?: string) {
  if (!GA_ID) return

  gtag("config", GA_ID, {
    page_path: path,
    ...(title ? { page_title: title } : {}),
  })

  const context = parsePathContext(path)
  if (!context) return

  gtag("event", context.eventName, context.params)
}

type PathContext = {
  eventName: string
  params: Record<string, string>
}

function parsePathContext(path: string): PathContext | null {
  const segments = path.split("/").filter(Boolean)

  if (segments[0] === "areas") {
    const [, area, service, brand] = segments
    if (brand && service && area) {
      return {
        eventName: "area_brand_page_view",
        params: { area_slug: area, service_slug: service, brand_slug: brand },
      }
    }
    if (service && area) {
      return {
        eventName: "area_service_page_view",
        params: { area_slug: area, service_slug: service },
      }
    }
    if (area) {
      return {
        eventName: "area_page_view",
        params: { area_slug: area },
      }
    }
    return { eventName: "areas_index_view", params: {} }
  }

  if (segments[0] === "services") {
    const [, service, brand] = segments
    if (brand && service) {
      return {
        eventName: "brand_page_view",
        params: { service_slug: service, brand_slug: brand },
      }
    }
    if (service) {
      return {
        eventName: "service_hub_page_view",
        params: { service_slug: service },
      }
    }
    return { eventName: "services_index_view", params: {} }
  }

  return null
}

export function trackCtaClick({
  name,
  location,
  linkUrl,
}: {
  name: "call" | "book" | "whatsapp" | "book_modal_open"
  location: string
  linkUrl?: string
}) {
  gtag("event", "cta_click", {
    cta_name: name,
    cta_location: location,
    ...(linkUrl ? { link_url: linkUrl } : {}),
  })
}

export function trackBookingModalOpen({
  source,
  service,
  area,
}: {
  source: string
  service?: string
  area?: string
}) {
  gtag("event", "booking_modal_open", {
    source,
    ...(service ? { service_slug: service } : {}),
    ...(area ? { area_name: area } : {}),
  })
}

/** GA4 recommended conversion event for form submissions. */
export function trackGenerateLead({
  formType,
  service,
  area,
  sourcePage,
}: {
  formType: "lead" | "booking"
  service?: string
  area?: string
  sourcePage?: string
}) {
  gtag("event", "generate_lead", {
    form_type: formType,
    ...(service ? { service_slug: service } : {}),
    ...(area ? { area_name: area } : {}),
    ...(sourcePage ? { source_page: sourcePage } : {}),
  })
}

export function trackPhoneClick(location: string) {
  trackCtaClick({ name: "call", location })
}
