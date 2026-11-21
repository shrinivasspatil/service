import { redirect } from "next/navigation"

export default async function BlogSlugAlias({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/blogs/${slug}`)
}
