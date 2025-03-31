"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram, Facebook } from "lucide-react"
// Přidejte import Logo komponenty
import { Logo } from "@/components/logo"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        {/* Nahraďte stávající logo v Link elementu */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo size="md" />
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          <Link href="/" className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Domů
          </Link>
          <Link
            href="/portfolio"
            className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1"
          >
            Portfolio
          </Link>
          <Link
            href="/sluzby"
            className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1"
          >
            Služby
          </Link>
          <Link href="/blog" className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Blog
          </Link>
          <Link href="/o-mne" className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            O mně
          </Link>
          <Link
            href="/kontakt"
            className="text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1"
          >
            Kontakt
          </Link>
          <div className="flex items-center space-x-1">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b z-50">
          <div className="container py-3 space-y-1">
            <Link href="/" className="flex items-center py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Domů
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/sluzby"
              className="flex items-center py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Služby
            </Link>
            <Link
              href="/blog"
              className="flex items-center py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/o-mne"
              className="flex items-center py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              O mně
            </Link>
            <Link
              href="/kontakt"
              className="flex items-center py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="flex items-center space-x-2 py-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

