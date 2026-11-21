import type { BlogPost } from "./blogs"

const REVALIDATE_SECONDS = 60

function apiBase(): string | null {
  const base = process.env.PLATFORM_BLOG_API_URL?.trim()
  if (!base) return null
  return base.replace(/\/$/, "")
}

function businessSlug(): string | null {
  const slug = process.env.PLATFORM_BUSINESS_SLUG?.trim()
  return slug || null
}

function apiHeaders(): HeadersInit {
  const key = process.env.PLATFORM_BLOG_API_KEY?.trim()
  return key ? { "x-api-key": key } : {}
}

/**
 * Fetch published posts from the AI Growth Platform CMS.
 * Returns [] when env is unset or the request fails (static blogs still work).
 */
export async function fetchPlatformBlogPosts(): Promise<BlogPost[]> {
  const base = apiBase()
  const slug = businessSlug()
  if (!base || !slug) return []

  try {
    const res = await fetch(`${base}/api/public/blogs/${encodeURIComponent(slug)}`, {
      headers: apiHeaders(),
      next: { revalidate: REVALIDATE_SECONDS, tags: ["platform-blogs"] },
    })
    if (!res.ok) return []
    const data = (await res.json()) as { posts?: BlogPost[] }
    return Array.isArray(data.posts) ? data.posts : []
  } catch {
    return []
  }
}

export async function fetchPlatformBlogPost(
  postSlug: string
): Promise<BlogPost | null> {
  const base = apiBase()
  const slug = businessSlug()
  if (!base || !slug) return null

  try {
    const res = await fetch(
      `${base}/api/public/blogs/${encodeURIComponent(slug)}/${encodeURIComponent(postSlug)}`,
      {
        headers: apiHeaders(),
        next: { revalidate: REVALIDATE_SECONDS, tags: ["platform-blogs"] },
      }
    )
    if (!res.ok) return null
    const data = (await res.json()) as { post?: BlogPost }
    return data.post ?? null
  } catch {
    return null
  }
}
