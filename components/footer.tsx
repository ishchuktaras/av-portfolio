import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Anhelina Vavzhyniak</h3>
            <p className="text-muted-foreground mb-4">
              Fotografka specializující se na portrétní, módní a komerční fotografii.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:info@anhelina-photo.cz" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="text-muted-foreground hover:text-primary">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/o-mne" className="text-muted-foreground hover:text-primary">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-primary">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Služby</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sluzby/portretni-fotografie" className="text-muted-foreground hover:text-primary">
                  Portrétní fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/modni-fotografie" className="text-muted-foreground hover:text-primary">
                  Módní fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/komercni-fotografie" className="text-muted-foreground hover:text-primary">
                  Komerční fotografie
                </Link>
              </li>
              <li>
                <Link href="/sluzby/svatebni-fotografie" className="text-muted-foreground hover:text-primary">
                  Svatební fotografie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@anhelina-photo.cz" className="hover:text-primary">
                  info@anhelina-photo.cz
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+420777888999" className="hover:text-primary">
                  +420 777 888 999
                </a>
              </li>
              <li className="text-muted-foreground mt-4">Jihlava, Česká republika</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anhelina Vavzhyniak. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

