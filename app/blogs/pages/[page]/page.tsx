import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { pageMetadata } from "@/lib/seo"
import { COMPANY_NAME } from "@/lib/constants"
import { getBlogPage, getBlogTotalPages } from "@/lib/blogs"
import { BlogArchive } from "@/components/blog/blog-archive"

export const revalidate = 60
export const dynamicParams = true

type PageProps = {
  params: Promise<{ page: string }>
}

export async function generateStaticParams() {
  const totalPages = await getBlogTotalPages()
  // Page 1 lives at /blogs — only emit /blogs/pages/2+
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page: pageParam } = await params
  const pageNum = Number(pageParam)

  if (!Number.isInteger(pageNum) || pageNum < 2) {
    return { title: "Blog" }
  }

  return pageMetadata({
    title: `Blog — Page ${pageNum}`,
    description: `More home appliance service guides from ${COMPANY_NAME}. Page ${pageNum} of tips on RO, AC, chimney, and repair in Bangalore.`,
    path: `/blogs/pages/${pageNum}`,
  })
}

export default async function BlogsPaginatedPage({ params }: PageProps) {
  const { page: pageParam } = await params
  const pageNum = Number(pageParam)

  if (!Number.isInteger(pageNum) || pageNum < 1) notFound()
  if (pageNum === 1) redirect("/blogs")

  const totalPages = await getBlogTotalPages()
  if (pageNum > totalPages) notFound()

  const { posts, page, totalPosts } = await getBlogPage(pageNum)

  return (
    <BlogArchive
      posts={posts}
      page={page}
      totalPages={totalPages}
      totalPosts={totalPosts}
    />
  )
}
