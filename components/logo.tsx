import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  /** Render as a plain element instead of a link (e.g. inside another link). */
  asChild?: boolean
  /** Visual size of the logo. */
  size?: "sm" | "md" | "lg"
  /** Use a light backing — for dark backgrounds like the footer. */
  variant?: "default" | "light"
  onClick?: () => void
}

// Intrinsic dimensions of the source artwork (keeps aspect ratio correct).
const LOGO_W = 880
const LOGO_H = 210

const sizeMap = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
} as const

export function Logo({ className, asChild = false, size = "md", variant = "default", onClick }: LogoProps) {
  const content = (
    <Image
      src="/service-booking-logo.png"
      alt="Service Booking - Your Trusted Service Partner"
      width={LOGO_W}
      height={LOGO_H}
      priority
      className={cn("w-auto", sizeMap[size])}
    />
  )

  const wrapperClass = cn(
    "inline-flex items-center",
    variant === "light" && "rounded-lg bg-white px-3 py-2 shadow-sm",
    className,
  )

  if (asChild) {
    return <span className={wrapperClass}>{content}</span>
  }

  return (
    <Link href="/" onClick={onClick} className={wrapperClass} aria-label="Service Booking home">
      {content}
    </Link>
  )
}
