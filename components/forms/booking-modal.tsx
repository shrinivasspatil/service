"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SERVICES, COMPANY_PHONE } from "@/lib/constants"
import { Loader2 } from "lucide-react"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(10, "Enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  service: z.string().min(1, "Please select a service"),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultService?: string
  defaultArea?: string
}

export function BookingModal({ open, onOpenChange, defaultService, defaultArea }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const successTimeoutRef = useRef<NodeJS.Timeout>()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: defaultService || "",
    }
  })

  // Update service when defaultService changes
  useEffect(() => {
    if (defaultService) {
      setValue("service", defaultService)
    }
  }, [defaultService, setValue])

  const selectedService = watch("service")

  // Auto-close success message after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      successTimeoutRef.current = setTimeout(() => {
        handleClose()
      }, 5000)
    }
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current)
      }
    }
  }, [isSuccess])

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          service_type: "booking",
          service_category: data.service,
          area: defaultArea || "",
          source_page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      }
    } catch (error) {
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden">
        {isSuccess ? (
          <>
            <DialogHeader className="sr-only">
              <DialogTitle>Booking Confirmed</DialogTitle>
              <DialogDescription>Your booking has been received successfully</DialogDescription>
            </DialogHeader>
            
            <div className="overflow-hidden">
              {/* Top banner */}
              <div className="bg-green-600 px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span className="text-white font-bold text-lg">Booking Confirmed!</span>
                </div>
                <p className="text-green-100 text-sm">Your service request is locked in</p>
              </div>

              {/* Body */}
              <div className="bg-green-50 px-6 py-5">
                <p className="text-center text-green-900 font-semibold text-base mb-4">
                  Sit back & relax — we&apos;ll call you shortly!
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 leading-none mb-0.5">We&apos;ll call in</p>
                      <p className="text-sm font-semibold text-slate-800">Under 30 Minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Clock3 className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 leading-none mb-0.5">Service within</p>
                      <p className="text-sm font-semibold text-slate-800">Same Day</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <BadgeCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 leading-none mb-0.5">Service guarantee</p>
                      <p className="text-sm font-semibold text-slate-800">90 Days Warranty</p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-500">
                  Need urgent help? Call us directly at{" "}
                  <a href={`tel:${COMPANY_PHONE}`} className="font-semibold text-green-700 underline">
                    {COMPANY_PHONE}
                  </a>
                </p>

                <div className="mt-4 pt-3 border-t border-green-200 text-center">
                  <p className="text-xs text-green-700 font-medium">
                    ✓ Booking confirmation sent to your number
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="p-5 pb-3 bg-primary text-primary-foreground">
              <DialogTitle className="text-lg font-semibold">Book a Service</DialogTitle>
              <DialogDescription className="text-primary-foreground/80 text-sm">
                We&apos;ll call you back within 30 minutes
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
              {/* Name Field */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                    +91
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10-digit number"
                    maxLength={10}
                    {...register("phone")}
                    className={`rounded-l-none ${errors.phone ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Service Select */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                  Select Service <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={selectedService}
                  onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
                >
                  <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((service) => {
                      const Icon = service.icon
                      return (
                        <SelectItem key={service.slug} value={service.slug}>
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${service.iconColor}`} />
                            <span>{service.name}</span>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-xs text-red-500">{errors.service.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-11 text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Book Now"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Free consultation. No spam calls.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
