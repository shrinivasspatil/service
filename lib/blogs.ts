import { BANGALORE_NOTES } from "./bangalore-notes"
import { PLATFORM_BLOG_POSTS } from "./platform-blogs"
import { fetchPlatformBlogPosts } from "./platform-blog-api"

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }

export type BlogPerson = {
  id: string
  name: string
  title: string
  image: string
  kind?: "author" | "reviewer" | "verified"
  bio?: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: string
  coverImageAlt: string
  author: BlogPerson
  reviewedBy: BlogPerson
  verifiedBy: BlogPerson
  publishedAt: string
  updatedAt?: string
  readTime: string
  keywords: string[]
  relatedServiceSlug?: string
  content: BlogSection[]
}

/** 20 unique authors & reviewers — pick by id when adding posts. */
export const BLOG_TEAM: BlogPerson[] = [
  { id: "01", name: "Ananya Rao", title: "Content Writer", image: "/images/authors/01.jpg" },
  { id: "02", name: "Ravi Kumar", title: "Senior Service Technician", image: "/images/authors/02.jpg" },
  { id: "03", name: "Meera Krishnan", title: "Appliance Content Specialist", image: "/images/authors/03.jpg" },
  { id: "04", name: "Suresh Menon", title: "RO Specialist", image: "/images/authors/04.jpg" },
  { id: "05", name: "Divya Sharma", title: "Home Services Editor", image: "/images/authors/05.jpg" },
  { id: "06", name: "Karthik Iyer", title: "Senior AC Technician", image: "/images/authors/06.jpg" },
  { id: "07", name: "Lakshmi Nair", title: "Quality Reviewer", image: "/images/authors/07.jpg" },
  { id: "08", name: "Arjun Reddy", title: "Washing Machine Specialist", image: "/images/authors/08.jpg" },
  { id: "09", name: "Neha Patel", title: "Content Writer", image: "/images/authors/09.jpg" },
  { id: "10", name: "Vikram Shetty", title: "Kitchen Appliance Technician", image: "/images/authors/10.jpg" },
  { id: "11", name: "Pooja Desai", title: "Service Guide Author", image: "/images/authors/11.jpg" },
  { id: "12", name: "Rahul Verma", title: "Field Technician Lead", image: "/images/authors/12.jpg" },
  { id: "13", name: "Sneha Iyer", title: "Technical Content Writer", image: "/images/authors/13.jpg" },
  { id: "14", name: "Manoj Pillai", title: "Chimney Service Expert", image: "/images/authors/14.jpg" },
  { id: "15", name: "Aisha Khan", title: "Customer Education Writer", image: "/images/authors/15.jpg" },
  { id: "16", name: "Deepak Rao", title: "Hob & Cooktop Specialist", image: "/images/authors/16.jpg" },
  { id: "17", name: "Kavitha Raj", title: "Editorial Reviewer", image: "/images/authors/17.jpg" },
  { id: "18", name: "Nikhil Joshi", title: "Appliance Repair Technician", image: "/images/authors/18.jpg" },
  { id: "19", name: "Shalini Gupta", title: "Senior Content Strategist", image: "/images/authors/19.jpg" },
  { id: "20", name: "Prakash Nair", title: "Master Technician", image: "/images/authors/20.jpg" },
]

export const BLOG_AUTHORS = BLOG_TEAM.slice(0, 5).map((person) => ({
  ...person,
  kind: "author" as const,
  bio: `${person.name} writes booking-ticket notes for Service Booking. ${person.title}.`,
}))
export const BLOG_REVIEWERS = BLOG_TEAM.slice(5, 10).map((person) => ({
  ...person,
  kind: "reviewer" as const,
  bio: `${person.name} reviews Service Booking notes. ${person.title}.`,
}))
export const BLOG_VERIFIERS = BLOG_TEAM.slice(10, 15).map((person) => ({
  ...person,
  kind: "verified" as const,
  bio: `${person.name} checks NAP and live URLs before a Service Booking note is marked verified. ${person.title}.`,
}))

export function deskForSlug(slug: string) {
  let n = 0
  for (const ch of slug) n += ch.charCodeAt(0)
  return {
    author: BLOG_AUTHORS[n % 5],
    reviewedBy: BLOG_REVIEWERS[n % 5],
    verifiedBy: BLOG_VERIFIERS[n % 5],
  }
}

export function withDesk(post: BlogPost): BlogPost {
  const desk = deskForSlug(post.slug)
  return { ...post, ...desk }
}

export function getBlogTeamMember(id: string): BlogPerson {
  const person = BLOG_TEAM.find((member) => member.id === id)
  if (!person) {
    throw new Error(`Unknown blog team member id: ${id}`)
  }
  return person
}

/** Pick author + reviewer by team ids (must be different people). */
export function blogCredits(authorId: string, reviewerId: string) {
  if (authorId === reviewerId) {
    throw new Error("Author and reviewer must be different people")
  }
  return {
    author: getBlogTeamMember(authorId),
    reviewedBy: getBlogTeamMember(reviewerId),
  }
}

/** Bundled posts. Bangalore notes override platform slugs, including Austin leftovers. */
export const BLOG_POSTS: BlogPost[] = mergeBlogPosts(
  PLATFORM_BLOG_POSTS as BlogPost[],
  BANGALORE_NOTES,
)

function mergeBlogPosts(staticPosts: BlogPost[], remotePosts: BlogPost[]): BlogPost[] {
  const bySlug = new Map<string, BlogPost>()
  for (const post of staticPosts) bySlug.set(post.slug, post)
  for (const post of remotePosts) bySlug.set(post.slug, post)
  return [...bySlug.values()].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const remote = await fetchPlatformBlogPosts()
  return mergeBlogPosts(mergeBlogPosts(BLOG_POSTS, remote), BANGALORE_NOTES).map(withDesk)
}

/** Posts per archive page. Pagination UI only appears when total posts exceed this. */
export const BLOGS_PER_PAGE = 12

export async function getBlogTotalPages(perPage = BLOGS_PER_PAGE): Promise<number> {
  const all = await getAllBlogPosts()
  return Math.max(1, Math.ceil(all.length / perPage))
}

export async function getBlogPage(
  page: number,
  perPage = BLOGS_PER_PAGE
): Promise<{
  posts: BlogPost[]
  page: number
  totalPages: number
  totalPosts: number
  hasPrev: boolean
  hasNext: boolean
}> {
  const all = await getAllBlogPosts()
  const totalPosts = all.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage

  return {
    posts: all.slice(start, start + perPage),
    page: safePage,
    totalPages,
    totalPosts,
    hasPrev: safePage > 1,
    hasNext: safePage < totalPages,
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getAllBlogPosts()
  return all.find((post) => post.slug === slug)
}

export async function getRelatedBlogPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getAllBlogPosts()
  const current = all.find((post) => post.slug === slug)
  if (!current) return all.slice(0, limit)

  const sameCategory = all.filter(
    (post) => post.slug !== slug && post.category === current.category
  )
  const others = all.filter(
    (post) => post.slug !== slug && post.category !== current.category
  )

  return [...sameCategory, ...others].slice(0, limit)
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
