"use client"

import { Phone, Calendar } from "lucide-react"
import { COMPANY_PHONE_TEL } from "@/lib/constants"
import { useBooking } from "@/components/forms/booking-provider"

export function MobileStickyBar() {
  const { openBooking } = useBooking()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden">
      <div className="flex border-t border-slate-200 bg-white shadow-2xl pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${COMPANY_PHONE_TEL}`}
          className="flex flex-1 touch-manipulation flex-col items-center justify-center gap-0.5 py-3 bg-green-500 active:bg-green-700 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5 mb-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Phone className="h-5 w-5 text-white" />
          <span className="text-[11px] font-bold text-white tracking-wide">CALL NOW</span>
        </a>

        <button
          type="button"
          onClick={() => openBooking({ source: "mobile_sticky" })}
          className="flex flex-1 touch-manipulation flex-col items-center justify-center gap-0.5 py-3 bg-primary active:bg-primary/80 transition-colors"
        >
          <Calendar className="h-5 w-5 text-white" />
          <span className="text-[11px] font-bold text-white tracking-wide">BOOK SERVICE</span>
        </button>
      </div>
    </div>
  )
}
