import Image from 'next/image'
import Link from 'next/link'
import { BANGALORE_NOTES } from '@/lib/bangalore-notes'

export function HomeNotes() {
  const notes = BANGALORE_NOTES.slice(0, 6)
  if (!notes.length) return null
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">From the bench</h2>
            <p className="mt-2 max-w-xl text-[16px] leading-7 text-slate-600">
              Repair notes with links to published services and areas.
            </p>
          </div>
          <Link href="/blogs" className="text-[15px] font-medium text-primary hover:underline">
            All articles
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3">
          {notes.map((post) => (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image src={post.coverImage} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="mt-3 text-[16px] font-semibold leading-snug text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[14px] leading-6 text-slate-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
