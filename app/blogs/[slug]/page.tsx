import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/forms/lead-form"
import { BlogAttribution } from "@/components/blog/blog-attribution"
import { BlogContent } from "@/components/blog/blog-content"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { COMPANY_NAME, SERVICES } from "@/lib/constants"
import {
  formatBlogDate,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blogs"

export const revalidate = 60
export const dynamicParams = true

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: "Article Not Found" }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    keywords: post.keywords,
  })
}

function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  image,
  authorName,
  authorUrl,
  reviewerName,
  reviewerUrl,
  verifiedName,
  verifiedUrl,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  image: string
  authorName: string
  authorUrl: string
  reviewerName: string
  reviewerUrl: string
  verifiedName: string
  verifiedUrl: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { "@type": "Person", name: authorName, url: authorUrl },
    editor: { "@type": "Person", name: reviewerName, url: reviewerUrl },
    contributor: { "@type": "Person", name: verifiedName, url: verifiedUrl },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blogs/${slug}`),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  const related = await getRelatedBlogPosts(post.slug)
  const relatedService = post.relatedServiceSlug
    ? SERVICES.find((service) => service.slug === post.relatedServiceSlug)
    : undefined

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: post.title, href: `/blogs/${post.slug}` },
  ]

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        image={post.coverImage}
        authorName={post.author.name}
        authorUrl={absoluteUrl(`/blogs/author/${post.author.id}`)}
        reviewerName={post.reviewedBy.name}
        reviewerUrl={absoluteUrl(`/blogs/reviewer/${post.reviewedBy.id}`)}
        verifiedName={post.verifiedBy.name}
        verifiedUrl={absoluteUrl(`/blogs/verified/${post.verifiedBy.id}`)}
      />

      <section className="bg-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {post.category || "Insights"}
            </p>
            <h1 className="mt-3 text-3xl md:text-[2.75rem] md:leading-tight font-semibold tracking-tight text-foreground text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {post.excerpt}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {formatBlogDate(post.publishedAt)}
              {post.updatedAt && post.updatedAt !== post.publishedAt
                ? ` · Updated ${formatBlogDate(post.updatedAt)}`
                : ""}
              {" · "}
              {post.readTime}
            </p>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <BlogAttribution post={post} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 max-w-6xl mx-auto">
            <article>
              <div className="relative aspect-[16/9] overflow-hidden mb-10 bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>

              <BlogContent
                sections={post.content}
                pagePath={`/blogs/${post.slug}`}
              />

              <aside className="mt-10 rounded-lg border border-primary/15 bg-primary/5 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Key takeaway</p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800">{post.excerpt}</p>
              </aside>

              <section className="mt-12 border-t border-slate-100 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Written, reviewed and verified
                </p>
                <div className="mt-5">
                  <BlogAttribution post={post} />
                </div>
              </section>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/blogs">
                    <ArrowLeft className="h-4 w-4" />
                    All articles
                  </Link>
                </Button>
                {relatedService && (
                  <Button asChild className="rounded-xl">
                    <Link href={`/services/${relatedService.slug}`}>
                      View {relatedService.name} service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Need service today?
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Same-day doorstep repair across Bangalore. Share your details
                  and we&apos;ll call you shortly.
                </p>
                <LeadForm
                  sourcePage={`/blogs/${post.slug}`}
                  defaultService={post.relatedServiceSlug}
                  variant="compact"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={item.coverImage}
                      alt={item.coverImageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-primary font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-slate-500">{item.author.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
