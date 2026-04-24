import { MetadataRoute } from 'next'
import { BANGALORE_AREAS, SERVICES, BRAND_SERVICES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://servicehub-bangalore.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Area pages
  const areaPages: MetadataRoute.Sitemap = BANGALORE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Service-Area combo pages (high priority for local SEO)
  const serviceAreaPages: MetadataRoute.Sitemap = []
  for (const area of BANGALORE_AREAS) {
    for (const service of SERVICES) {
      serviceAreaPages.push({
        url: `${baseUrl}/areas/${area.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      })
    }
  }

  // Brand-specific service pages (critical for SEO)
  const brandPages: MetadataRoute.Sitemap = []
  for (const [serviceSlug, brands] of Object.entries(BRAND_SERVICES)) {
    for (const brandData of brands) {
      const brandSlug = brandData.brand.toLowerCase().replace(/\s+/g, '-')
      brandPages.push({
        url: `${baseUrl}/services/${serviceSlug}/${brandSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      })
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...brandPages,
    ...areaPages,
    ...serviceAreaPages,
  ]
}
