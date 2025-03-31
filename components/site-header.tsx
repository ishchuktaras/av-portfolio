"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Camera, Instagram, Facebook } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <span className="font-semibold">Anhelina Vavzhyniak</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Domů
          </Link>
          <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link href="/sluzby" className="text-sm font-medium transition-colors hover:text-primary">
            Služby
          </Link>
          <Link href="/o-mne" className="text-sm font-medium transition-colors hover:text-primary">
            O mně
          </Link>
          <Link href="/kontakt" className="text-sm font-medium transition-colors hover:text-primary">
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
        <div className="md:hidden">
          <div className="container py-4 space-y-2">
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

