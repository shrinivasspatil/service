import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/scripts/'],
    },
    sitemap: 'https://servicehub-bangalore.com/sitemap.xml',
  }
}
