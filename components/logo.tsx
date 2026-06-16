import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoMarkProps {
  className?: string
}

/**
 * ServiceHub brand mark.
 * A rounded badge holding a wrench (repair/service) crossed with a
 * spark/gear accent (the "hub"). Scales cleanly at any size and is
 * theme-aware via the primary token.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="ServiceHub logo"
      className={cn("text-primary", className)}
    >
      {/* Badge */}
      <rect x="0" y="0" width="40" height="40" rx="11" className="fill-current" />

      {/* Wrench */}
      <path
        d="M27.2 11.6a5.6 5.6 0 0 1-7.05 7.2L13 26a2.2 2.2 0 1 1-3.1-3.1l7.2-7.15a5.6 5.6 0 0 1 7.2-7.05l-3.4 3.4a1.4 1.4 0 0 0 0 2l1.35 1.35a1.4 1.4 0 0 0 2 0l3.95-3.85z"
        fill="none"
        stroke="oklch(0.99 0 0)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Service spark accent */}
      <circle cx="28.5" cy="26.5" r="4.2" fill="oklch(0.78 0.16 75)" />
      <circle cx="28.5" cy="26.5" r="1.5" fill="oklch(0.99 0 0)" />
    </svg>
  )
}

interface LogoProps {
  className?: string
  /** Render as a plain element instead of a link (e.g. inside another link). */
  asChild?: boolean
  /** Visual size of the wordmark + mark. */
  size?: "sm" | "md" | "lg"
  /** Use light text — for dark backgrounds like the footer. */
  variant?: "default" | "light"
  /** Hide the wordmark and show only the badge. */
  markOnly?: boolean
  onClick?: () => void
}

const sizeMap = {
  sm: { mark: "h-8 w-8", title: "text-base", sub: "text-[9px]" },
  md: { mark: "h-9 w-9", title: "text-lg", sub: "text-[10px]" },
  lg: { mark: "h-11 w-11", title: "text-xl", sub: "text-xs" },
} as const

export function Logo({
  className,
  asChild = false,
  size = "md",
  variant = "default",
  markOnly = false,
  onClick,
}: LogoProps) {
  const s = sizeMap[size]

  const content = (
    <>
      <LogoMark className={cn(s.mark, "shrink-0 rounded-[11px] shadow-sm shadow-primary/20")} />
      {!markOnly && (
        <span className="flex flex-col">
          <span
            className={cn(
              "font-bold leading-none tracking-tight",
              s.title,
              variant === "light" ? "text-white" : "text-foreground",
            )}
          >
            ServiceHub
          </span>
          <span
            className={cn(
              "font-medium leading-none tracking-wide",
              s.sub,
              variant === "light" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Bangalore
          </span>
        </span>
      )}
    </>
  )

  if (asChild) {
    return <span className={cn("flex items-center gap-2", className)}>{content}</span>
  }

  return (
    <Link href="/" onClick={onClick} className={cn("flex items-center gap-2", className)}>
      {content}
    </Link>
  )
}
