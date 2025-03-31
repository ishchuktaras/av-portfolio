import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, User, ImageIcon } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-600 dark:bg-gray-800 text-white text-center py-24 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Anhelina Vavzhyniak</h1>
          <p className="text-lg md:text-xl mb-8">Fotografka s vášní pro zachycení jedinečných okamžiků</p>
          <div className="flex justify-center gap-4">
            <Link href="/portfolio">
              <Button
                variant="default"
                className="bg-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Prohlédnout portfolio
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/20 dark:border-white dark:text-white dark:hover:bg-white/20"
              >
                Kontaktovat
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O mně</h2>
              <div className="space-y-4">
                <p>
                  Jsem Anhelina Vavzhyniak, studentka Obchodní akademie v Jihlavě a vášnivá fotografka. Moje cesta ve
                  fotografii začala jako koníček, ale rychle se proměnila v něco víc.
                </p>
                <p>
                  Specializuji se na portrétní, módní a komerční fotografii. Mým cílem je zachytit jedinečnost každého
                  subjektu a vytvořit snímky, které vyprávějí příběh.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/o-mne">
                  <Button variant="outline" className="gap-2">
                    <User className="h-4 w-4" />
                    Více o mně
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square bg-muted rounded-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Moje služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Portrétní fotografie</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Individuální a skupinové portréty, které zachycují osobnost a emoce. Ideální pro profesionální
                  profily, rodinné vzpomínky nebo osobní projekty.
                </p>
                <Link href="/sluzby/portretni-fotografie">
                  <Button variant="link" className="gap-1">
                    Zjistit více
                    <span aria-hidden="true">→</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Módní fotografie</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Kreativní módní fotografie pro designéry, modely a značky. Dokážem prezentovat vaše produkty v tom
                  nejpřitažlivějším možném vizuálním příběhu.
                </p>
                <Link href="/sluzby/modni-fotografie">
                  <Button variant="link" className="gap-1">
                    Zjistit více
                    <span aria-hidden="true">→</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Komerční fotografie</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Profesionální fotografie pro firmy a značky. Od produktových fotografií po firemní portréty a
                  marketingové materiály.
                </p>
                <Link href="/sluzby/komercni-fotografie">
                  <Button variant="link" className="gap-1">
                    Zjistit více
                    <span aria-hidden="true">→</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Vybrané práce</h2>
            <Link href="/portfolio">
              <Button variant="outline">Celé portfolio</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-md overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 opacity-20" />
                </div>
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/portfolio/${item}`}>
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white/20 dark:text-white dark:border-white dark:hover:bg-white/20"
                    >
                      Zobrazit
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pojďme spolupracovat</h2>
          <p className="text-lg mb-8">
            Hledáte fotografa pro váš projekt, značku nebo osobní focení? Jsem otevřená novým příležitostem a
            spolupráci.
          </p>
          <Link href="/kontakt">
            <Button className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
              Kontaktujte mě
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

