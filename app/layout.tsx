import type React from "react"
import { AuthProvider } from "@/components/auth-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

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
    <html lang="cs" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

