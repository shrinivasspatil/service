import { SERVICES } from "@/lib/constants"

export function getServiceName(serviceSlug: string): string {
  const match = SERVICES.find((service) => service.slug === serviceSlug)
  return match?.name ?? serviceSlug
}
