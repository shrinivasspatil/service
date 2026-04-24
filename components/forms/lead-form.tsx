"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2, Phone, Clock3, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { SERVICES } from "@/lib/constants"
import { createClient } from "@/lib/supabase/client"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter valid 10-digit number").max(10, "Enter valid 10-digit number"),
  pincode: z.string().min(6, "Enter valid 6-digit pincode").max(6, "Enter valid 6-digit pincode"),
  serviceCategory: z.string().min(1, "Please select a service"),
})

type FormValues = z.infer<typeof formSchema>

interface LeadFormProps {
  defaultService?: string
  serviceType?: string
  serviceCategory?: string
  area?: string
  sourcePage?: string
  variant?: "default" | "compact" | "sidebar"
  title?: string
  subtitle?: string
}

export function LeadForm({
  defaultService,
  serviceType = "service",
  serviceCategory,
  area,
  sourcePage = "homepage",
  variant = "default",
  title,
  subtitle
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      pincode: "",
      serviceCategory: defaultService || serviceCategory || "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const supabase = createClient()
      
      const { error } = await supabase.from("leads").insert({
        name: values.name,
        phone: values.phone,
        service_type: serviceType,
        service_category: values.serviceCategory,
        area: area || null,
        address: values.pincode,
        source_page: sourcePage,
      })

      if (error) throw error

      setIsSuccess(true)
      toast.success("Request submitted! We'll call you within 30 minutes.")
      form.reset()
      
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Something went wrong. Please call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-xl overflow-hidden border border-green-200">
        {/* Top banner */}
        <div className="bg-green-600 px-6 py-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <CheckCircle2 className="h-5 w-5 text-white" />
            <span className="text-white font-bold text-lg">You&apos;re All Set!</span>
          </div>
          <p className="text-green-100 text-sm">Your request is confirmed</p>
        </div>

        {/* Body */}
        <div className="bg-green-50 px-6 py-5">
          <p className="text-center text-green-900 font-semibold text-base mb-4">
            Sit back & relax — a certified technician is on the way!
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-0.5">Calling you in</p>
                <p className="text-sm font-semibold text-slate-800">Under 30 Minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Clock3 className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-0.5">Technician visit</p>
                <p className="text-sm font-semibold text-slate-800">Same Day Service</p>
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

          <p className="text-center text-xs text-slate-500 mt-4">
            Need urgent help? Call us directly at{" "}
            <a href="tel:+919876543210" className="font-semibold text-green-700 underline">
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number *</FormLabel>
                <FormControl>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                      +91
                    </span>
                    <Input 
                      placeholder="9876543210" 
                      type="tel" 
                      className="rounded-l-none"
                      maxLength={10}
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area Pincode *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="560034" 
                    type="text" 
                    maxLength={6}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Required *</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES.map((service) => {
                      const Icon = service.icon
                      const isSelected = field.value === service.slug
                      return (
                        <label
                          key={service.slug}
                          className={`relative flex items-center gap-2 cursor-pointer rounded-lg border-2 p-3 transition-all ${
                            isSelected 
                              ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            className="sr-only"
                            value={service.slug}
                            checked={isSelected}
                            onChange={() => field.onChange(service.slug)}
                          />
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${service.iconBg}`}>
                            <Icon className={`h-4 w-4 ${service.iconColor}`} />
                          </div>
                          <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-slate-700'}`}>
                            {service.name}
                          </span>
                          {isSelected && (
                            <div className="absolute top-1 right-1">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                          )}
                        </label>
                      )
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get Free Quote"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            We&apos;ll call you within 30 minutes
          </p>
        </form>
      </Form>
    </div>
  )
}
