"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Domů",
      active: pathname === "/",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      active: pathname === "/portfolio" || pathname.startsWith("/portfolio/"),
    },
    {
      href: "/sluzby",
      label: "Služby",
      active: pathname === "/sluzby" || pathname.startsWith("/sluzby/"),
    },
    {
      href: "/o-mne",
      label: "O mně",
      active: pathname === "/o-mne",
    },
    {
      href: "/kontakt",
      label: "Kontakt",
      active: pathname === "/kontakt",
    },
  ]

  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/" className="font-bold text-xl">
        Anhelina Vavzhyniak
      </Link>

      {/* Desktop navigation - simplified horizontal menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Otevřít menu</span>
      </Button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16">
          <nav className="container flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-medium py-2 transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

