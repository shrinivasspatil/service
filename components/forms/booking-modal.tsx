"use client"

import { useState, useEffect } from "react"
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
import { CheckCircle2, Phone, Loader2 } from "lucide-react"

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
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Booking Received!
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team will call you within 30 minutes to confirm.
              </p>
              <div className="flex flex-col gap-3">
                <Button onClick={handleClose} className="w-full">
                  Done
                </Button>
                <a 
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Call us: {COMPANY_PHONE}
                </a>
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
