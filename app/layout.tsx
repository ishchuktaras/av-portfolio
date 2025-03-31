import type React from "react"
import { Inter } from "next/font/google"
import { Providers } from "@/app/providers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Anhelina Vavzhyniak | Fotografka",
  description: "Fotografka s vášní pro zachycení jedinečných okamžiků",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning className={`${fontSans.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

