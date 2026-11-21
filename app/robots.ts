import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

/** AI / answer-engine crawlers — explicit allow for llms.txt + public pages (AEO/GEO). */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "cohere-ai",
] as const

const PUBLIC_DISALLOW = ["/api/", "/scripts/"]

type RobotsRule = {
  userAgent: string
  allow: string[]
  disallow: string[]
}

const rules: RobotsRule[] = [
  {
    userAgent: "*",
    allow: ["/llms.txt", "/ai.txt", "/"],
    disallow: PUBLIC_DISALLOW,
  },
  ...AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: ["/llms.txt", "/ai.txt", "/"],
    disallow: PUBLIC_DISALLOW,
  })),
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules,
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
