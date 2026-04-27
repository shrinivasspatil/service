"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { COMPANY_PHONE } from "@/lib/constants"

export function MobileStickyBar() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Hide bar when any input/textarea/select is focused (keyboard open)
    const handleFocusIn = (e: FocusEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase()
      if (["input", "textarea", "select"].includes(tag)) {
        setIsHidden(true)
      }
    }

    const handleFocusOut = () => {
      // Small delay so the bar doesn't flash back immediately
      setTimeout(() => setIsHidden(false), 300)
    }

    // Also hide when a Dialog is open (data-state="open" on body overlay)
    const observer = new MutationObserver(() => {
      const dialogOpen = document.querySelector("[data-radix-dialog-overlay]")
      setIsHidden(!!dialogOpen)
    })

    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener("focusin", handleFocusIn)
    document.addEventListener("focusout", handleFocusOut)

    return () => {
      document.removeEventListener("focusin", handleFocusIn)
      document.removeEventListener("focusout", handleFocusOut)
      observer.disconnect()
    }
  }, [])

  if (isHidden) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex border-t border-slate-200 bg-white shadow-2xl">
        <a
          href={`tel:${COMPANY_PHONE}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 bg-green-500 active:bg-green-700 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5 mb-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Phone className="h-5 w-5 text-white" />
          <span className="text-[11px] font-bold text-white tracking-wide">CALL NOW</span>
        </a>

        <a
          href="#booking"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 bg-primary active:bg-primary/80 transition-colors"
        >
          <span className="text-lg leading-none mb-0.5">📅</span>
          <span className="text-[11px] font-bold text-white tracking-wide">BOOK SERVICE</span>
        </a>
      </div>
    </div>
  )
}
