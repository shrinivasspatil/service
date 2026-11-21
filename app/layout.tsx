import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { clipTitle, SITE_URL } from "@/lib/seo"
import { COMPANY_NAME } from "@/lib/constants"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/json-ld"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { BookingProvider } from "@/components/forms/booking-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: clipTitle(`${COMPANY_NAME} | Appliance Repair Bangalore`, true),
    template: `%s | ${COMPANY_NAME}`
  },
  description: "Expert home appliance repair services in Bangalore, including Kent RO, Aquaguard, Daikin AC, LG AC, Faber chimney cleaning, and more. Same-day service available.",
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} - Trusted Home Appliance Services`,
    description: "Expert home appliance repair services in Bangalore, including Kent RO, Aquaguard, Daikin AC, LG AC, Faber chimney cleaning, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Trusted Home Appliance Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} - Trusted Home Appliance Services`,
    description: "Expert home appliance repair services in Bangalore, including Kent RO, Aquaguard, Daikin AC, LG AC, Faber chimney cleaning, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
}

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9116;77.6473" />
        <meta name="ICBM" content="12.9116, 77.6473" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI.txt" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <OrganizationSchema />
        <WebsiteSchema />
        <BookingProvider>
          <Header />
          <main className="min-h-screen pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
          <WhatsAppFloat />
          <Toaster position="top-right" />
        </BookingProvider>
        <GoogleAnalytics />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}