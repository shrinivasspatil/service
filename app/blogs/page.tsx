import { pageMetadata } from "@/lib/seo"
import { COMPANY_NAME } from "@/lib/constants"
import { getBlogPage } from "@/lib/blogs"
import { BlogArchive } from "@/components/blog/blog-archive"

/** Refresh archive when platform CMS publishes (Hostinger live). */
export const revalidate = 60

export const metadata = pageMetadata({
  title: `Home Appliance Tips & Service Guides | ${COMPANY_NAME} Blog`,
  description:
    "Practical guides on Kent RO, Daikin AC, chimney cleaning, washing machine repair, and same-day appliance service across Bangalore.",
  path: "/blogs",
  keywords: [
    "home appliance tips Bangalore",
    "Kent RO service guide",
    "AC repair tips",
    "chimney cleaning guide",
  ],
})

export default async function BlogsArchivePage() {
  const { posts, page, totalPages, totalPosts } = await getBlogPage(1)

  return (
    <BlogArchive
      posts={posts}
      page={page}
      totalPages={totalPages}
      totalPosts={totalPosts}
    />
  )
}
