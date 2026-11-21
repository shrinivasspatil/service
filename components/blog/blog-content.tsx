import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { BlogSection } from "@/lib/blogs"

type FaqItem = { question: string; answer: string }

function isFaqHeading(text: string) {
  return /frequently asked|faqs?$/i.test(text.trim())
}

/** Split article body from FAQ Q/A pairs (heading + following paragraph). */
export function splitBlogContent(sections: BlogSection[]): {
  body: BlogSection[]
  faqs: FaqItem[]
} {
  const faqStart = sections.findIndex(
    (s) => s.type === "heading" && isFaqHeading(s.text)
  )
  if (faqStart < 0) return { body: sections, faqs: [] }

  const body = sections.slice(0, faqStart)
  const rest = sections.slice(faqStart + 1)
  const faqs: FaqItem[] = []

  for (let i = 0; i < rest.length; i++) {
    const section = rest[i]
    if (section.type === "heading") {
      const next = rest[i + 1]
      const answer =
        next?.type === "paragraph"
          ? next.text
          : next?.type === "callout"
            ? next.text
            : ""
      if (answer) {
        faqs.push({ question: section.text, answer })
        i += 1
      }
    }
  }

  return { body, faqs }
}

function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!m) return <span key={i}>{part}</span>
        const [, label, href] = m
        const internal = href.startsWith("/")
        if (internal) {
          return (
            <Link
              key={i}
              href={href}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {label}
            </Link>
          )
        }
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {label}
          </a>
        )
      })}
    </>
  )
}

function BodySections({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      {sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-foreground pt-4 text-balance"
            >
              {section.text}
            </h2>
          )
        }

        if (section.type === "list") {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <LinkedText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        if (section.type === "callout") {
          return (
            <div
              key={index}
              className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-foreground"
            >
              <LinkedText text={section.text} />
            </div>
          )
        }

        return (
          <p key={index} className="text-pretty">
            <LinkedText text={section.text} />
          </p>
        )
      })}
    </div>
  )
}

export function BlogContent({
  sections,
}: {
  sections: BlogSection[]
  pagePath?: string
}) {
  const { body, faqs } = splitBlogContent(sections)

  return (
    <div className="space-y-10">
      <BodySections sections={body} />

      {faqs.length > 0 && (
        <section className="pt-2" aria-labelledby="blog-faq-heading">
          <h2
            id="blog-faq-heading"
            className="text-2xl font-bold text-foreground mb-4 text-balance"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Tap a question to expand the answer.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`${faq.question}-${index}`}
                value={`blog-faq-${index}`}
                className="bg-slate-50 rounded-xl border-0 px-5 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  <LinkedText text={faq.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}
    </div>
  )
}
