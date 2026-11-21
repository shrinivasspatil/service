interface AnswerSummaryProps {
  question: string
  answer: string
}

export function AnswerSummary({ question, answer }: AnswerSummaryProps) {
  return (
    <section
      id="answer-summary"
      aria-labelledby="answer-summary-heading"
      className="border-y border-slate-200 bg-slate-50 py-8"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <h2 id="answer-summary-heading" className="text-xl font-semibold text-foreground mb-3">
          {question}
        </h2>
        <p id="answer-summary-text" className="text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </section>
  )
}
