"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackCtaClick, trackPageView, trackPhoneClick } from "@/lib/analytics"

export function GoogleAnalyticsPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastPath = useRef<string | null>(null)

  useEffect(() => {
    if (!pathname) return

    const query = searchParams?.toString()
    const path = query ? `${pathname}?${query}` : pathname

    if (lastPath.current === path) return
    lastPath.current = path

    trackPageView(path, document.title)
  }, [pathname, searchParams])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest("a[href]")
      if (!(link instanceof HTMLAnchorElement)) return

      const href = link.getAttribute("href") ?? ""
      const location = pathname ?? "/"

      if (href.startsWith("tel:")) {
        trackPhoneClick(location)
      } else if (href.includes("wa.me")) {
        trackCtaClick({ name: "whatsapp", location, linkUrl: href })
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [pathname])

  return null
}
