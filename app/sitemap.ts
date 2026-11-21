import { MetadataRoute } from 'next'
import { BANGALORE_AREAS, SERVICES, BRAND_SERVICES, CONTENT_LAST_UPDATED } from '@/lib/constants'
import { getAllBlogPosts, getBlogTotalPages } from '@/lib/blogs'
import { SITE_URL } from '@/lib/seo'

/** Stable lastmod — avoid rewriting every URL to "now" on each deploy (wastes crawl budget). */
function contentLastModified(): Date {
  const parsed = Date.parse(CONTENT_LAST_UPDATED)
  return Number.isNaN(parsed) ? new Date() : new Date(parsed)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const lastModified = contentLastModified()

  // Static pages (brand URLs come from BRAND_SERVICES loop below — do not hardcode duplicates)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Area pages
  const areaPages: MetadataRoute.Sitemap = BANGALORE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Service-Area combo pages (high priority for local SEO)
  const serviceAreaPages: MetadataRoute.Sitemap = []
  for (const area of BANGALORE_AREAS) {
    for (const service of SERVICES) {
      serviceAreaPages.push({
        url: `${baseUrl}/areas/${area.slug}/${service.slug}`,
        lastModified,
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
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      })
    }
  }

  const allBlogPosts = await getAllBlogPosts()
  const blogTotalPages = await getBlogTotalPages()

  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogArchivePages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, blogTotalPages - 1) },
    (_, i) => ({
      url: `${baseUrl}/blogs/pages/${i + 2}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  )

  return [
    ...staticPages,
    ...servicePages,
    ...brandPages,
    ...areaPages,
    ...serviceAreaPages,
    ...blogPages,
    ...blogArchivePages,
  ]
}
