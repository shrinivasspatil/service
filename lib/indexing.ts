/** Index every Bangalore area hub — each has unique copy in lib/area-content.ts. */
export function shouldIndexAreaPage(_areaSlug: string): boolean {
  return true
}

/** Index area × service pages — differentiated via getAreaServiceIntro() per URL. */
export function shouldIndexAreaServicePage(): boolean {
  return true
}

/** Index area × service × brand pages — Phase 1 routes only (see lib/area-brand-pages.ts). */
export function shouldIndexAreaBrandPage(): boolean {
  return true
}

export const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
} as const
