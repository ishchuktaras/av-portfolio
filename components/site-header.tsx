"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram, Facebook } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainMenu } from "@/components/main-menu"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Definice položek menu jako pole objektů
  const menuItems = [
    { label: "Domů", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Služby", href: "/sluzby" },
    { label: "Blog", href: "/blog" },
    { label: "O mně", href: "/o-mne" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-16 sm:h-20 items-center">
        {/* Logo - vlevo, větší a výraznější */}
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Logo size="lg" className="transition-transform hover:scale-105" />
          </Link>
        </div>

        {/* Mobile menu button - zobrazí se pouze na mobilních zařízeních */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:bg-primary/10 hover:text-primary"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop navigation - uprostřed */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <MainMenu items={menuItems} />
        </nav>

        {/* Theme toggle a sociální sítě - vpravo */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-foreground hover:text-primary hover:bg-primary/10"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-foreground hover:text-primary hover:bg-primary/10"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b z-50">
          <div className="container py-3 space-y-1">
            <MainMenu
              items={menuItems}
              className="flex-col items-start space-y-2 space-x-0"
              onItemClick={() => setIsMenuOpen(false)}
            />
            <div className="flex items-center space-x-2 py-2 mt-2">
              <ThemeToggle />
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
                >
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

