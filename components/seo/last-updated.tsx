import { CONTENT_LAST_UPDATED } from "@/lib/constants"

interface LastUpdatedProps {
  className?: string
}

export function LastUpdated({ className }: LastUpdatedProps) {
  return (
    <p className={className ?? "text-xs text-muted-foreground"}>
      Last updated: {CONTENT_LAST_UPDATED}
    </p>
  )
}
