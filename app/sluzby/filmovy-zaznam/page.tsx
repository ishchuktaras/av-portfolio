import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function FilmovyZaznamPage() {
  return (
    <>
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Filmový záznam a video produkce</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Profesionální video služby pro zachycení vašich nejdůležitějších okamžiků nebo prezentaci vašeho
                podnikání.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button size="lg">Nezávazná konzultace</Button>
                </Link>
                <Link href="/portfolio?category=video">
                  <Button variant="outline" size="lg">
                    Ukázky prací
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Video+produkce"
                alt="Video produkce"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Nabízené video služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Svatební videografie</h3>
              <p className="text-muted-foreground mb-4">
                Zachytím nejkrásnější momenty vašeho velkého dne způsobem, který vám umožní znovu prožít tyto okamžiky i
                po letech.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Celodenní dokumentace od příprav po večerní oslavu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Krátký highlight film (3-5 minut) i delší dokument</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Profesionální zvukový záznam slibů a proslovů</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Firemní a produktová videa</h3>
              <p className="text-muted-foreground mb-4">
                Pomohu vám prezentovat vaši značku, produkty nebo služby prostřednictvím profesionálních videí, která
                zaujmou vaše zákazníky.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Produktová videa s důrazem na detail a kvalitu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Firemní prezentace a rozhovory se zaměstnanci</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reklamní spoty pro sociální sítě a web</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Módní a kreativní videa</h3>
              <p className="text-muted-foreground mb-4">
                Vytvářím umělecké videoklipy pro módní značky, designéry, modely a umělce, které vyzdvihnou vaši
                kreativní vizi.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Módní lookbooky a kampaně v pohybu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Kreativní koncepty a experimentální přístupy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hudební videoklipy a umělecké projekty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Můj přístup k video produkci</h2>
              <p className="mb-4">
                Při tvorbě videí kladu důraz na vyprávění příběhu, kvalitní obrazovou kompozici a plynulou editaci.
                Každý projekt je jedinečný a vyžaduje individuální přístup.
              </p>
              <p className="mb-4">
                Používám profesionální vybavení včetně full-frame kamer, stabilizačních systémů a kvalitních mikrofonů
                pro záznam čistého zvuku. V postprodukci pracuji s profesionálním softwarem pro střih, barevné korekce a
                zvukový design.
              </p>
              <p className="mb-6">
                Mým cílem je vytvořit pro vás video, které nejen zachytí důležité momenty, ale také vyvolá emoce a
                zanechá trvalý dojem.
              </p>
              <Link href="/kontakt">
                <Button className="gap-2">
                  Kontaktujte mě <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Video+1"
                  alt="Video ukázka 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Video+2"
                  alt="Video ukázka 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Video+3"
                  alt="Video ukázka 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Video+4"
                  alt="Video ukázka 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Často kladené otázky</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Jak dlouho trvá vytvoření videa?</h3>
              <p className="text-muted-foreground">
                Doba produkce závisí na typu a rozsahu projektu. Svatební highlight video obvykle dodávám do 3-4 týdnů,
                zatímco komplexnější firemní projekty mohou trvat 4-8 týdnů od natáčení po finální verzi.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Jaké vybavení používáte?</h3>
              <p className="text-muted-foreground">
                Pracuji s profesionálními full-frame kamerami Sony, kvalitními objektivy, stabilizačními systémy DJI a
                profesionálním zvukovým vybavením. Pro každý projekt vybírám nejvhodnější techniku.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Jak probíhá spolupráce?</h3>
              <p className="text-muted-foreground">
                Začínáme konzultací, kde probereme vaše představy a požadavky. Následuje příprava konceptu, natáčení a
                postprodukce. Během celého procesu jsem s vámi v kontaktu a zapracovávám vaše připomínky.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Kolik stojí video produkce?</h3>
              <p className="text-muted-foreground">
                Ceny se odvíjí od rozsahu projektu, délky natáčení, náročnosti postprodukce a dalších faktorů. Pro
                přesnou kalkulaci mě prosím kontaktujte s detaily vašeho projektu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Připraveni začít s vaším video projektem?</h2>
          <p className="text-lg mb-8">
            Kontaktujte mě pro nezávaznou konzultaci. Společně probereme vaše představy a možnosti realizace.
          </p>
          <Link href="/kontakt">
            <Button size="lg">Kontaktujte mě</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

