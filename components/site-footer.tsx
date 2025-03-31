import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Anhelina Vavzhyniak</h3>
            <p className="text-sm text-muted-foreground">Fotografka s vášní pro zachycení jedinečných okamžiků</p>
            <div className="flex space-x-2">
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigace</h3>
            <ul className="space-y-2 text-sm">
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Služby</h3>
            <ul className="space-y-2 text-sm">
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
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@anhelina.cz" className="hover:text-primary transition-colors">
                  info@anhelina.cz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+420123456789" className="hover:text-primary transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Jihlava, Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anhelina Vavzhyniak. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

