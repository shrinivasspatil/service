"use client"

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { BookingModal } from "@/components/forms/booking-modal"
import { trackBookingModalOpen } from "@/lib/analytics"

type BookingOptions = {
  service?: string
  area?: string
  source?: string
}

type BookingContextValue = {
  openBooking: (options?: BookingOptions) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [defaultService, setDefaultService] = useState<string>()
  const [defaultArea, setDefaultArea] = useState<string>()

  const openBooking = useCallback((options?: BookingOptions) => {
    trackBookingModalOpen({
      source: options?.source ?? "unknown",
      service: options?.service,
      area: options?.area,
    })
    setDefaultService(options?.service)
    setDefaultArea(options?.area)
    setOpen(true)
  }, [])

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      setDefaultService(undefined)
      setDefaultArea(undefined)
    }
  }, [])

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        open={open}
        onOpenChange={handleOpenChange}
        defaultService={defaultService}
        defaultArea={defaultArea}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider")
  }
  return context
}
