import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function PortraitPhotographyPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Portrétní fotografie</h1>
          <p className="text-lg text-muted-foreground">
            Zachyťte svou osobnost a jedinečnost prostřednictvím profesionálních portrétů
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proč zvolit portrétní fotografii?</h2>
              <div className="space-y-4">
                <p>
                  Portrétní fotografie zachycuje osobnost, emoce a jedinečnost každého člověka. Ať už potřebujete
                  profesionální headshot pro vaši kariéru, rodinný portrét nebo uměleckou fotografii, mým cílem je
                  vytvořit snímky, které vás budou reprezentovat v tom nejlepším světle.
                </p>
                <p>
                  Při portrétním focení kladu důraz na přirozenost, pohodlí a vytvoření uvolněné atmosféry, která vám
                  pomůže se před objektivem cítit sebevědomě.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Co můžete očekávat:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Konzultace před focením pro pochopení vašich představ a potřeb</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Profesionální osvětlení a vybavení pro dosažení nejlepších výsledků</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Retušování a úprava fotografií pro dokonalý výsledek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Možnost focení v ateliéru nebo na vámi vybraném místě</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-square bg-muted rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800&text=Portrétní+fotografie"
                alt="Portrétní fotografie"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Typy portrétních fotografií</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Individuální portréty</h3>
              <p className="text-muted-foreground mb-4">
                Profesionální portréty pro osobní nebo pracovní účely, které zachycují vaši osobnost a charakter.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Individuální+portréty"
                  alt="Individuální portréty"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Rodinné portréty</h3>
              <p className="text-muted-foreground mb-4">
                Zachyťte společné okamžiky s vašimi nejbližšími. Rodinné portréty, které budete s láskou uchovávat po
                generace.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Rodinné+portréty"
                  alt="Rodinné portréty"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Umělecké portréty</h3>
              <p className="text-muted-foreground mb-4">
                Kreativní a umělecké portréty, které posouvají hranice tradiční fotografie a vytváří jedinečná umělecká
                díla.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Umělecké+portréty"
                  alt="Umělecké portréty"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ceník portrétní fotografie</h2>
          <p className="text-lg mb-8">
            Ceny se odvíjí od typu focení, lokace a vašich specifických požadavků. Pro vytvoření nabídky na míru mě
            neváhejte kontaktovat.
          </p>
          <div className="flex justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="gap-2">
                Kontaktujte mě
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

