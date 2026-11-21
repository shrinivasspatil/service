import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BLOG_AUTHORS } from "@/lib/blogs"

export function generateStaticParams() {
  return BLOG_AUTHORS.map((person) => ({ id: person.id }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const person = BLOG_AUTHORS.find((item) => item.id === id)
  if (!person) notFound()
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <Link href="/blogs">Blog</Link>
      <div className="mt-4 flex items-center gap-4">
        <Image src={person.image} alt={person.name} width={72} height={72} className="rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{person.name}</h1>
          <p>{person.title}</p>
        </div>
      </div>
      <p className="mt-4">{person.bio}</p>
    </main>
  )
}
