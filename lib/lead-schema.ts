import * as z from "zod"

export const leadPayloadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(10, "Enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  pincode: z
    .string()
    .regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
  service: z.string().min(1, "Please select a service"),
  formType: z.enum(["lead", "booking"]).default("lead"),
  area: z.string().optional(),
  sourcePage: z.string().optional(),
  website: z.string().max(0).optional(),
})

export type LeadPayload = z.infer<typeof leadPayloadSchema>
