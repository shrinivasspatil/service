import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { BlogAttribution } from "@/components/blog/blog-attribution"
import { formatBlogDate, type BlogPost } from "@/lib/blogs"
import { cn } from "@/lib/utils"

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blogs" },
]

function blogPageHref(page: number) {
  return page <= 1 ? "/blogs" : `/blogs/pages/${page}`
}

export function BlogArchive({
  posts,
  page,
  totalPages,
  totalPosts,
}: {
  posts: BlogPost[]
  page: number
  totalPages: number
  totalPosts: number
}) {
  const showPagination = totalPages > 1

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="max-w-3xl mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Blog &amp; Service Guides
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Clear, practical advice on water purifiers, ACs, chimneys, hobs, and
              washing machines — written for Bangalore homeowners who want honest
              service guidance.
            </p>
            {showPagination && (
              <p className="mt-3 text-sm text-muted-foreground">
                Showing page {page} of {totalPages} · {totalPosts} articles
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <Link href={`/blogs/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-medium">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatBlogDate(post.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <BlogAttribution
                      post={post}
                      variant="compact"
                      className="mb-4"
                    />
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {showPagination && (
            <nav
              aria-label="Blog pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(
                  "rounded-lg",
                  page <= 1 && "pointer-events-none opacity-40"
                )}
              >
                <Link
                  href={blogPageHref(page - 1)}
                  aria-disabled={page <= 1}
                  rel={page > 1 ? "prev" : undefined}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Link>
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <Button
                    key={pageNum}
                    asChild
                    variant={pageNum === page ? "default" : "outline"}
                    size="sm"
                    className="rounded-lg min-w-9"
                  >
                    <Link
                      href={blogPageHref(pageNum)}
                      aria-current={pageNum === page ? "page" : undefined}
                    >
                      {pageNum}
                    </Link>
                  </Button>
                )
              )}

              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(
                  "rounded-lg",
                  page >= totalPages && "pointer-events-none opacity-40"
                )}
              >
                <Link
                  href={blogPageHref(page + 1)}
                  aria-disabled={page >= totalPages}
                  rel={page < totalPages ? "next" : undefined}
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          )}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need help with an appliance today?
            </p>
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/contact">Book a Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
