import { NextRequest, NextResponse } from "next/server"
import {
  APEX_ORIGIN,
  AREA_SLUGS,
  SERVICE_SLUGS,
  hasCityBrandPage,
} from "@/lib/legacy-redirects"

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "") || "/"
  }
  return pathname
}

function canonicalAreasPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean)
  if (parts[0] !== "areas") return pathname

  const area = parts[1]
  if (!area) return pathname

  if (area === "bangalore") {
    const service = parts[2]
    const brand = parts[3]
    if (!service) return "/areas"
    if (!SERVICE_SLUGS.has(service)) return "/services"
    if (!brand) return `/services/${service}`
    if (hasCityBrandPage(service, brand)) return `/services/${service}/${brand}`
    return `/services/${service}`
  }

  if (!AREA_SLUGS.has(area)) return "/areas"

  const service = parts[2]
  if (!service) return `/areas/${area}`
  if (!SERVICE_SLUGS.has(service)) return `/areas/${area}`

  // Area × brand URLs duplicate city brand + area × service pages.
  // Flatten so Google has one local URL per area × appliance.
  return `/areas/${area}/${service}`
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || ""
  const isWww = host.toLowerCase().startsWith("www.")
  const incoming = request.nextUrl.pathname
  const stripped = stripTrailingSlash(incoming)
  const canonical = canonicalAreasPath(stripped)

  if (!isWww && canonical === incoming) {
    return NextResponse.next()
  }

  const dest = new URL(`${canonical}${request.nextUrl.search}`, APEX_ORIGIN)
  return NextResponse.redirect(dest, 301)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)",
  ],
}
