import Image from "next/image"
import Link from "next/link"
import type { BlogPerson, BlogPost } from "@/lib/blogs"
import { cn } from "@/lib/utils"

function Card({ person, label }: { person: BlogPerson; label: string }) {
  const href = `/blogs/${person.kind ?? "author"}/${person.id}`
  return (
    <Link href={href} className="inline-flex min-w-0 items-center gap-2 text-sm text-slate-600 hover:text-primary">
      {person.image ? (
        <Image src={person.image} alt={person.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
      ) : null}
      <span className="min-w-0">
        <span className="block text-[11px] font-medium uppercase tracking-wide text-primary">{label}</span>
        <span className="block truncate font-medium text-slate-900">{person.name}</span>
      </span>
    </Link>
  )
}

export function BlogAttribution({
  post,
  className,
}: {
  post: BlogPost
  variant?: "full" | "compact"
  className?: string
}) {
  return (
    <div className={cn("flex flex-wrap gap-x-8 gap-y-4", className)}>
      <Card person={post.author} label="Author" />
      <Card person={post.reviewedBy} label="Reviewer" />
      <Card person={post.verifiedBy} label="Verified" />
    </div>
  )
}
