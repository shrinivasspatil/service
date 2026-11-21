import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const SITE_URL = "https://servicebooking.in"
export const LOCAL_CITY = "Bangalore"

export const TITLE_LIMIT = 60
export const DESCRIPTION_LIMIT = 155
export const TITLE_TEMPLATE_SUFFIX = ` | ${COMPANY_NAME}`

export function clipMeta(value: string, max: number): string {
  const trimmed = value.replace(/\s+/g, " ").trim()
  if (trimmed.length <= max) return trimmed
  const cut = trimmed.slice(0, Math.max(1, max - 1))
  const space = cut.lastIndexOf(" ")
  return `${(space > Math.floor(max / 2) ? cut.slice(0, space) : cut).trim()}…`
}

export function clipTitle(value: string, absolute = false): string {
  const budget = absolute ? TITLE_LIMIT : TITLE_LIMIT - TITLE_TEMPLATE_SUFFIX.length
  return clipMeta(value, budget)
}

export function clipDescription(value: string): string {
  return clipMeta(value, DESCRIPTION_LIMIT)
}

/** Short page title. Area pages should use getAreaPageTitle instead of stuffing every brand. */
export function nearMeTitle(primary: string, area?: string): string {
  if (area) return `${primary} in ${area}`
  return primary
}

/** @deprecated Meta keywords are ignored by Google — kept as no-op helper. */
export function nearMeKeywords(..._phrases: string[]): string {
  return ""
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export type BreadcrumbInput =
  | { name: string; url: string }
  | { label: string; href: string }

/** Normalize breadcrumb items for BreadcrumbList JSON-LD (dedupe Home, require names). */
export function normalizeBreadcrumbSchemaItems(
  items: BreadcrumbInput[]
): { name: string; url: string }[] {
  const mapped = items
    .map((item) => {
      const name = ("name" in item ? item.name : item.label)?.trim()
      const path = "url" in item ? item.url : item.href
      if (!name) return null
      return { name, url: absoluteUrl(path) }
    })
    .filter((item): item is { name: string; url: string } => item !== null)

  const deduped: { name: string; url: string }[] = []
  for (const item of mapped) {
    const prev = deduped[deduped.length - 1]
    if (prev && prev.name === item.name && prev.url === item.url) continue
    deduped.push(item)
  }

  const homeUrl = absoluteUrl("/")
  if (deduped.length === 0 || deduped[0].url !== homeUrl) {
    deduped.unshift({ name: "Home", url: homeUrl })
  }

  return deduped
}

export function canonicalUrl(path: string): string {
  return absoluteUrl(path)
}

type RobotsDirective = {
  index: boolean
  follow?: boolean
}

export function pageMetadata({
  title,
  description,
  path,
  keywords: _keywords,
  robots,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  /** Ignored — Google does not use meta keywords. */
  keywords?: string | string[]
  robots?: RobotsDirective
  absoluteTitle?: boolean
}): Metadata {
  const clippedTitle = clipTitle(title, absoluteTitle)
  const clippedDescription = clipDescription(description)
  const canonical = canonicalUrl(path)
  const index = robots?.index ?? true
  const follow = robots?.follow ?? true

  return {
    title: absoluteTitle ? { absolute: clippedTitle } : clippedTitle,
    description: clippedDescription,
    alternates: { canonical },
    robots: {
      index,
      follow,
      googleBot: { index, follow },
    },
    openGraph: {
      title: clippedTitle,
      description: clippedDescription,
      type: "website",
      locale: "en_IN",
      url: canonical,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_NAME} — home appliance service`,
        },
      ],
    },
  }
}
