import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function FashionPhotographyPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Módní fotografie</h1>
          <p className="text-lg text-muted-foreground">
            Vynikněte v módním průmyslu s profesionálními fotografiemi, které prodávají
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-muted rounded-md overflow-hidden order-2 md:order-1">
              <img
                src="/placeholder.svg?height=800&width=800&text=Módní+fotografie"
                alt="Módní fotografie"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Proč zvolit módní fotografii?</h2>
              <div className="space-y-4">
                <p>
                  Módní fotografie je umění, které spojuje kreativitu, styl a technickou dokonalost. Ať už jste módní
                  návrhář, model, nebo značka, kvalitní módní fotografie jsou klíčem k úspěchu v konkurenčním světě
                  módy.
                </p>
                <p>
                  Mým cílem je vytvořit vizuálně působivé snímky, které vyzdvihnou krásu vašich produktů nebo modelů a
                  zaujmou vaše publikum.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Co můžete očekávat:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Kreativní koncept a stylizace pro vaši značku nebo kolekci</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Profesionální osvětlení a kompozice pro dokonalý výsledek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Pokročilá postprodukce a retušování pro módní standardy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Možnost spolupráce s profesionálními modely, stylisty a vizážisty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Typy módní fotografie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Editoriální fotografie</h3>
              <p className="text-muted-foreground mb-4">
                Vyprávějte příběh prostřednictvím módních editoriálů, které kombinují módu s uměleckým vyjádřením a
                narativem.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Editoriální+fotografie"
                  alt="Editoriální fotografie"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Lookbooky a katalogy</h3>
              <p className="text-muted-foreground mb-4">
                Prezentujte svou kolekci prostřednictvím profesionálních lookbooků a katalogů, které zdůrazní detaily a
                kvalitu vašich produktů.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Lookbooky+a+katalogy"
                  alt="Lookbooky a katalogy"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kampaně a reklama</h3>
              <p className="text-muted-foreground mb-4">
                Vytvořte silnou vizuální identitu pro vaši značku prostřednictvím reklamních kampaní, které zaujmou a
                inspirují.
              </p>
              <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Kampaně+a+reklama"
                  alt="Kampaně a reklama"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pojďme spolupracovat</h2>
          <p className="text-lg mb-8">
            Každý módní projekt je jedinečný. Kontaktujte mě pro konzultaci a vytvoření nabídky na míru vašim potřebám.
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

