import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function CommercialPhotographyPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Komerční fotografie</h1>
          <p className="text-lg text-muted-foreground">
            Posílení vaší značky vizuálně atraktivními a profesionálními fotografiemi
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proč zvolit komerční fotografii?</h2>
              <div className="space-y-4">
                <p>
                  V dnešním vizuálně orientovaném světě jsou kvalitní fotografie klíčem k úspěchu vaší značky nebo
                  produktu. Komerční fotografie pomáhá vytvořit silnou vizuální identitu, která rezonuje s vaším
                  publikem a odlišuje vás od konkurence.
                </p>
                <p>
                  Ať už potřebujete produktové fotografie, firemní portréty nebo obsah pro sociální sítě, mým cílem je
                  vytvořit profesionální snímky, které podpoří vaše marketingové cíle a posílí vaši značku.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Co můžete očekávat:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Strategický přístup zaměřený na vaše obchodní cíle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Profesionální osvětlení a kompozice pro dokonalou prezentaci</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Postprodukce a retušování pro konzistentní vizuální styl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Flexibilita a přizpůsobení vašim specifickým potřebám</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-square bg-muted rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800&text=Komerční+fotografie"
                alt="Komerční fotografie"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Typy komerční fotografie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Produktová fotografie</h3>
              <p className="text-muted-foreground mb-4">
                Prezentujte své produkty v tom nejlepším světle. Detailní a atraktivní produktové fotografie, které
                zvyšují konverze.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Produktová+fotografie"
                  alt="Produktová fotografie"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Firemní portréty</h3>
              <p className="text-muted-foreground mb-4">
                Profesionální portréty vašeho týmu, které budují důvěru a přidávají lidský rozměr vaší značce.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Firemní+portréty"
                  alt="Firemní portréty"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Obsah pro sociální sítě</h3>
              <p className="text-muted-foreground mb-4">
                Atraktivní a konzistentní vizuální obsah pro vaše sociální sítě, který zaujme vaše publikum a posílí
                vaši online přítomnost.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Obsah+pro+sociální+sítě"
                  alt="Obsah pro sociální sítě"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Investice do vaší značky</h2>
          <p className="text-lg mb-8">
            Ceny se odvíjí od rozsahu projektu, počtu fotografií a vašich specifických požadavků. Pro vytvoření nabídky
            na míru mě neváhejte kontaktovat.
          </p>
          <div className="flex justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="gap-2">
                Vyžádat nabídku
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

