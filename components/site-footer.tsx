import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="bg-muted/40 dark:bg-muted/10">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Logo variant="minimal" size="lg" />
            </div>
            <p className="text-sm text-muted-foreground">
              Profesionální fotografka se zaměřením na portrétní, módní a komerční fotografii.
            </p>
            <div className="flex space-x-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 md:h-8 md:w-8 text-foreground hover:text-primary hover:bg-primary/10"
                >
                  <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 md:h-8 md:w-8 text-foreground hover:text-primary hover:bg-primary/10"
                >
                  <Facebook className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Navigace</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-primary transition-colors">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/o-mne" className="hover:text-primary transition-colors">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Služby</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/sluzby/portretni-fotografie" className="hover:text-primary transition-colors">
                  Portrétní fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/modni-fotografie" className="hover:text-primary transition-colors">
                  Módní fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/komercni-fotografie" className="hover:text-primary transition-colors">
                  Komerční fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/filmovy-zaznam" className="hover:text-primary transition-colors">
                  Filmový záznam
                </Link>
              </li>
              <li>
                <Link href="/sluzby/spoluprace-s-modelkami" className="hover:text-primary transition-colors">
                  Spolupráce s modelkami
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <a href="mailto:info@anhelina.cz" className="hover:text-primary transition-colors">
                  info@anhelina.cz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <a href="tel:+420123456789" className="hover:text-primary transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5" />
                <span>Jihlava, Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anhelina Vavzhyniak. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

