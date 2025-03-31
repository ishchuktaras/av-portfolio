import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, ImageIcon, Camera, Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Služby</h1>
          <p className="text-lg text-muted-foreground">
            Nabízím širokou škálu fotografických služeb pro jednotlivce i firmy.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4 w-fit p-2 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Portrétní fotografie</CardTitle>
                <CardDescription>Zachyťte svou osobnost a jedinečnost</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Individuální a skupinové portréty, které zachycují osobnost a emoce. Ideální pro profesionální
                    profily, rodinné vzpomínky nebo osobní projekty.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Individuální portréty</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Rodinné fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Profesionální headshoty</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Umělecké portréty</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/portretni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 w-fit p-2 rounded-full bg-primary/10">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Módní fotografie</CardTitle>
                <CardDescription>Vynikněte v módním průmyslu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Kreativní módní fotografie pro designéry, modely a značky. Dokážem prezentovat vaše produkty v tom
                    nejpřitažlivějším možném vizuálním příběhu.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Editoriální fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Lookbooky</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Katalogové fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Módní kampaně</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/modni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 w-fit p-2 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Komerční fotografie</CardTitle>
                <CardDescription>Posílení vaší značky vizuálně</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Profesionální fotografie pro firmy a značky. Od produktových fotografií po firemní portréty a
                    marketingové materiály.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Produktová fotografie</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Firemní portréty</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Fotografie pro sociální sítě</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Reklamní fotografie</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/sluzby/komercni-fotografie" className="w-full">
                  <Button variant="outline" className="w-full">
                    Více informací
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Potřebujete něco specifického?</h2>
          <p className="text-lg mb-8">
            Každý projekt je jedinečný. Kontaktujte mě pro individuální nabídku přizpůsobenou vašim potřebám.
          </p>
          <Link href="/kontakt">
            <Button size="lg">Kontaktujte mě</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

