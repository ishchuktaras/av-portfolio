import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, ImageIcon, Camera, Check, Heart } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted/30 py-6 sm:py-12">
        <div className="container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Služby</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Nabízím širokou škálu fotografických služeb pro jednotlivce i firmy.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="mb-3 sm:mb-4 w-fit p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Portrétní fotografie</CardTitle>
                <CardDescription>Zachyťte svou osobnost a jedinečnost</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Individuální a skupinové portréty, které zachycují osobnost a emoce. Ideální pro profesionální
                    profily, rodinné vzpomínky nebo osobní projekty.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Individuální portréty</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Rodinné fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Profesionální headshoty</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Umělecké portréty</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/portretni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="mb-3 sm:mb-4 w-fit p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Módní fotografie</CardTitle>
                <CardDescription>Vynikněte v módním průmyslu</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Kreativní módní fotografie pro designéry, modely a značky. Dokážem prezentovat vaše produkty v tom
                    nejpřitažlivějším možném vizuálním příběhu.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Editoriální fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Lookbooky</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Katalogové fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Módní kampaně</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/modni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="mb-3 sm:mb-4 w-fit p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Komerční fotografie</CardTitle>
                <CardDescription>Posílení vaší značky vizuálně</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Profesionální fotografie pro firmy a značky. Od produktových fotografií po firemní portréty a
                    marketingové materiály.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Produktová fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Firemní portréty</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Fotografie pro sociální sítě</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Reklamní fotografie</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/komercni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="mb-3 sm:mb-4 w-fit p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Spolupráce s modelkami</CardTitle>
                <CardDescription>Vzájemně výhodná spolupráce pro začínající modelky</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Nabízím spolupráci na bázi TFP (Time for Photos) nebo za velmi zvýhodněných podmínek pro začínající
                    modelky, které potřebují vybudovat portfolio.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>TFP spolupráce (Time for Photos)</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Zvýhodněné focení pro modelky</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Dlouhodobá spolupráce</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Budování portfolia</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/spoluprace-s-modelkami" className="w-full">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="mb-3 sm:mb-4 w-fit p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                  >
                    <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z" />
                    <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
                  </svg>
                </div>
                <CardTitle className="text-lg sm:text-xl">Filmový záznam</CardTitle>
                <CardDescription>Profesionální video produkce a editace</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Nabízím kompletní služby v oblasti video produkce - od natáčení po finální editaci. Ideální pro
                    firemní prezentace, svatební videa, produktové prezentace nebo osobní projekty.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Svatební videografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Firemní a produktová videa</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Módní a kreativní videoklipy</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      <span>Profesionální editace a postprodukce</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/filmovy-zaznam" className="w-full">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">Potřebujete něco specifického?</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
            Každý projekt je jedinečný. Kontaktujte mě pro individuální nabídku přizpůsobenou vašim potřebám.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="text-xs sm:text-sm">
              Kontaktujte mě
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

