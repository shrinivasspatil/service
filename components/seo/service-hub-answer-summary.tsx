import { AnswerSummary } from "@/components/seo/answer-summary"
import { getServiceHubAnswerSummary } from "@/lib/answer-summaries"

export function ServiceHubAnswerSummary({ serviceSlug }: { serviceSlug: string }) {
  const { question, answer } = getServiceHubAnswerSummary(serviceSlug)
  return <AnswerSummary question={question} answer={answer} />
}
