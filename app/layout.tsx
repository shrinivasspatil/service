import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: "ServiceHub Bangalore - Kent RO, Daikin AC, Faber Chimney, Prestige Hob Service",
    template: "%s | ServiceHub Bangalore"
  },
  description: "Authorized Kent RO service, Aquaguard repair, Daikin AC service, LG AC repair, Faber chimney cleaning, Elica service, Prestige hob repair in Bangalore. Same-day service in Koramangala, Whitefield, HSR Layout, Electronic City & all areas.",
  keywords: [
    "Kent RO service Bangalore", "Aquaguard service center Bangalore", "Pureit service Bangalore",
    "Daikin AC service Bangalore", "LG AC repair Bangalore", "Voltas AC service", "Samsung AC repair",
    "Faber chimney cleaning Bangalore", "Elica chimney service", "Hindware chimney repair",
    "Prestige hob repair Bangalore", "Pigeon gas stove service", "Sunflame cooktop repair",
    "water purifier service Koramangala", "AC repair Whitefield", "chimney cleaning HSR Layout"
  ],
  authors: [{ name: "ServiceHub Bangalore" }],
  creator: "ServiceHub Bangalore",
  publisher: "ServiceHub Bangalore",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://servicehub-bangalore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://servicehub-bangalore.com",
    siteName: "ServiceHub Bangalore",
    title: "ServiceHub Bangalore - Kent, Aquaguard, Daikin, Faber Authorized Service",
    description: "Authorized service for Kent RO, Aquaguard, Daikin AC, LG AC, Faber Chimney, Elica, Prestige Hob in Bangalore. 50,000+ customers served.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceHub Bangalore - Kent, Aquaguard, Daikin, Faber Service Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceHub Bangalore - Kent, Aquaguard, Daikin, Faber Service",
    description: "Authorized service for Kent RO, Aquaguard, Daikin AC, Faber Chimney, Prestige Hob in Bangalore.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
