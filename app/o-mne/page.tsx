import { Button } from "@/components/ui/button"
import { ImageIcon, Camera, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">O mně</h1>
          <p className="text-lg text-muted-foreground">Poznejte mě a mou fotografickou cestu.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-muted rounded-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 opacity-20" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Anhelina Vavzhyniak</h2>
              <div className="space-y-4">
                <p>
                  Jsem Anhelina Vavzhyniak, studentka Východní akademie v Jihlavě a vášnivá fotografka. Moje cesta ve
                  fotografii začala jako koníček, ale rychle se proměnila v něco víc.
                </p>
                <p>
                  Specializuji se na portrétní, módní a komerční fotografii. Mým cílem je zachytit jedinečnost každého
                  subjektu a vytvořit snímky, které vyprávějí příběh.
                </p>
                <p>
                  Fotografie je pro mě způsob, jak zachytit krásu okamžiku a emoce, které by jinak mohly být zapomenuty.
                  Každý projekt je pro mě příležitostí k vytvoření něčeho jedinečného a osobního.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/kontakt">
                  <Button className="gap-2">Spolupracujme</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Moje přístup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kreativita</h3>
              <p className="text-muted-foreground">
                Ke každému projektu přistupuji s čerstvým pohledem a kreativními nápady, které pomohou vyniknout vašemu
                příběhu.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kvalita</h3>
              <p className="text-muted-foreground">
                Používám profesionální vybavení a techniky, abych zajistila nejvyšší kvalitu každé fotografie.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vášeň</h3>
              <p className="text-muted-foreground">
                Fotografie je mou vášní, což se odráží v každém snímku, který vytvořím. Dávám do své práce srdce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pojďme spolupracovat</h2>
          <p className="text-lg mb-8">
            Hledáte fotografa pro váš projekt, značku nebo osobní focení? Jsem otevřená novým příležitostem a
            spolupráci.
          </p>
          <Link href="/kontakt">
            <Button size="lg">Kontaktujte mě</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

