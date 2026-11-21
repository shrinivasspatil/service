"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SERVICES, COMPANY_PHONE_TEL, COMPANY_PHONE } from "@/lib/constants"
import { submitLead } from "@/lib/submit-lead"
import { trackGenerateLead } from "@/lib/analytics"
import { Loader2, CheckCircle2, Phone, Clock3, BadgeCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(10, "Enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
  service: z.string().min(1, "Please select a service"),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultService?: string
  defaultArea?: string
}

export function BookingModal({
  open,
  onOpenChange,
  defaultService,
  defaultArea,
}: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      pincode: "",
      service: defaultService || "",
    },
  })

  useEffect(() => {
    if (defaultService) {
      setValue("service", defaultService, { shouldValidate: true })
    }
  }, [defaultService, setValue])

  const selectedService = watch("service")

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      onOpenChange(nextOpen)
      if (!nextOpen) {
        setTimeout(() => {
          setIsSuccess(false)
          setSubmitError(null)
          reset({
            name: "",
            phone: "",
            pincode: "",
            service: defaultService || "",
          })
        }, 300)
      }
    },
    [onOpenChange, reset, defaultService]
  )

  useEffect(() => {
    if (isSuccess) {
      successTimeoutRef.current = setTimeout(() => {
        handleOpenChange(false)
      }, 5000)
    }
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current)
      }
    }
  }, [isSuccess, handleOpenChange])

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    const result = await submitLead({
      name: data.name,
      phone: data.phone,
      pincode: data.pincode,
      service: data.service,
      formType: "booking",
      area: defaultArea,
      sourcePage: "booking-modal",
    })

    setIsSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.message)
      return
    }

    trackGenerateLead({
      formType: "booking",
      service: data.service,
      area: defaultArea,
      sourcePage: "booking-modal",
    })

    setIsSuccess(true)
    reset()
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="z-[110] flex max-h-[min(92dvh,720px)] w-[calc(100%-1.5rem)] max-w-[400px] flex-col gap-0 overflow-hidden p-0 sm:w-full">
        <div className="max-h-[min(92dvh,720px)] overflow-y-auto overscroll-contain">
          {isSuccess ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>Booking Confirmed</DialogTitle>
                <DialogDescription>
                  Your booking has been received successfully
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden">
                <div className="bg-green-600 px-6 py-4 text-center">
                  <div className="mb-1 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="text-lg font-bold text-white">
                      Booking Confirmed!
                    </span>
                  </div>
                  <p className="text-sm text-green-100">
                    Your service request is locked in
                  </p>
                </div>

                <div className="bg-green-50 px-6 py-5">
                  <p className="mb-4 text-center text-base font-semibold text-green-900">
                    Sit back & relax — we&apos;ll call you shortly!
                  </p>

                  <div className="mb-4 space-y-3">
                    <div className="flex items-center gap-3 rounded-lg border border-green-100 bg-white px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Phone className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="mb-0.5 text-xs leading-none text-slate-500">
                          We&apos;ll call in
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          Under 30 Minutes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg border border-green-100 bg-white px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                        <Clock3 className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="mb-0.5 text-xs leading-none text-slate-500">
                          Service within
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          Same Day
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg border border-green-100 bg-white px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <BadgeCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="mb-0.5 text-xs leading-none text-slate-500">
                          Service guarantee
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          90 Days Warranty
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-xs text-slate-500">
                    Need urgent help? Call us directly at{" "}
                    <a
                      href={`tel:${COMPANY_PHONE_TEL}`}
                      className="font-semibold text-green-700 underline"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </p>

                  <div className="mt-4 border-t border-green-200 pt-3 text-center">
                    <p className="text-xs font-medium text-green-700">
                      ✓ Request received — our team will call you shortly
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader className="bg-primary p-5 pb-3 text-primary-foreground">
                <DialogTitle className="text-lg font-semibold">
                  Book a Service
                </DialogTitle>
                <DialogDescription className="text-sm text-primary-foreground/80">
                  We&apos;ll call you back within 30 minutes
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 p-5 pb-6"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="booking-name" className="text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="booking-name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="booking-phone" className="text-sm font-medium">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                      +91
                    </span>
                    <Input
                      id="booking-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="10-digit number"
                      maxLength={10}
                      {...register("phone")}
                      className={cn(
                        "rounded-l-none",
                        errors.phone ? "border-red-500" : ""
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="booking-pincode" className="text-sm font-medium">
                    Area Pincode <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="booking-pincode"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="6-digit pincode"
                    maxLength={6}
                    {...register("pincode")}
                    className={errors.pincode ? "border-red-500" : ""}
                  />
                  {errors.pincode && (
                    <p className="text-xs text-red-500">
                      {errors.pincode.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="booking-service" className="text-sm font-medium">
                    Select Service <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="booking-service"
                    value={selectedService}
                    onChange={(event) =>
                      setValue("service", event.target.value, {
                        shouldValidate: true,
                      })
                    }
                    className={cn(
                      "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                      errors.service ? "border-red-500" : ""
                    )}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full touch-manipulation text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </Button>

                {submitError && (
                  <p className="text-center text-xs text-red-600">{submitError}</p>
                )}

                <p className="text-center text-xs text-muted-foreground">
                  Expert technician at your doorstep. Same-day service, genuine
                  parts &amp; upfront pricing.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
