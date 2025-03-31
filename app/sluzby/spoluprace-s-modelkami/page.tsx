import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star, Users, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModelCollaborationPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Spolupráce s modelkami</h1>
          <p className="text-lg text-muted-foreground">
            Vzájemně výhodná spolupráce pro začínající modelky i fotografy
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Začněme spolupracovat</h2>
              <div className="space-y-4">
                <p>
                  Hledáte profesionální fotografie pro své portfolio, ale nemáte dostatečný rozpočet? Jsem fotografka,
                  která hledá modelky pro rozšíření svého portfolia a získání praxe v různých fotografických stylech.
                </p>
                <p>
                  Nabízím spolupráci na bázi TFP (Time for Photos) nebo za velmi zvýhodněných podmínek, kde vy získáte
                  profesionální fotografie pro své portfolio a já získám možnost tvořit a experimentovat s novými styly.
                </p>
                <p className="font-medium">Tato nabídka je ideální pro:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Začínající modelky, které potřebují vybudovat portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Zkušené modelky, které chtějí vyzkoušet nové styly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Influencery hledající kvalitní obsah pro sociální sítě</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Kreativní duše se zájmem o umělecké fotografie</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-square bg-muted rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800&text=Spolupráce+s+modelkami"
                alt="Spolupráce s modelkami"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Typy spolupráce</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">TFP (Time for Photos)</CardTitle>
                <CardDescription className="text-center">Vzájemně výhodná spolupráce</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Vy věnujete svůj čas, já své fotografické dovednosti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Získáte 5-10 upravených fotografií zdarma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Možnost dokoupit další fotografie za zvýhodněnou cenu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Vzájemná propagace na sociálních sítích</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    Ideální pro kreativní projekty a experimentování s různými styly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Zvýhodněné focení</CardTitle>
                <CardDescription className="text-center">Profesionální fotografie za nízkou cenu</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Symbolická cena za profesionální focení</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Získáte 10-15 upravených fotografií</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Větší kontrola nad výsledným stylem a úpravami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Možnost využití studia nebo exteriéru dle dohody</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    Vhodné pro modelky, které potřebují konkrétní typ fotografií do svého portfolia.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Dlouhodobá spolupráce</CardTitle>
                <CardDescription className="text-center">Pravidelné focení a budování portfolia</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Pravidelné focení (např. měsíčně)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Postupné budování komplexního portfolia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Kombinace TFP a placených focení</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Možnost účasti na společných kreativních projektech</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    Ideální pro modelky, které chtějí systematicky budovat svou kariéru a portfolio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-muted rounded-md overflow-hidden order-2 md:order-1">
              <img
                src="/placeholder.svg?height=800&width=800&text=Jak+to+funguje"
                alt="Jak to funguje"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Jak to funguje?</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">1. Kontaktujte mě</h3>
                  <p className="text-muted-foreground">
                    Napište mi e-mail nebo zprávu přes kontaktní formulář. Popište, jaký typ fotografií hledáte a jaké
                    máte zkušenosti.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2. Úvodní konzultace</h3>
                  <p className="text-muted-foreground">
                    Probereme vaše představy, možné styly focení a dohodneme se na typu spolupráce, který bude vyhovovat
                    oběma stranám.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">3. Plánování focení</h3>
                  <p className="text-muted-foreground">
                    Společně naplánujeme datum, lokaci a styl focení. Poradím vám s výběrem oblečení a přípravou na
                    focení.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">4. Focení a výběr fotografií</h3>
                  <p className="text-muted-foreground">
                    Po focení vám zašlu náhledy, ze kterých si vyberete fotografie k úpravě podle dohodnutých podmínek.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">5. Úprava a předání</h3>
                  <p className="text-muted-foreground">
                    Vybrané fotografie upravím a předám vám je v digitální podobě ve vysokém rozlišení.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Často kladené otázky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Potřebuji mít zkušenosti s modelingem?</h3>
              <p className="text-muted-foreground">
                Ne, spolupracuji i s úplnými začátečníky. Během focení vás povedu a poradím vám s pózováním.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Mohu si přivést vizážistku nebo stylistku?</h3>
              <p className="text-muted-foreground">
                Ano, můžete si přivést vlastní tým nebo vám mohu doporučit profesionály, se kterými spolupracuji.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Jak dlouho trvá focení?</h3>
              <p className="text-muted-foreground">
                Běžné focení trvá 2-3 hodiny, ale záleží na typu projektu a počtu plánovaných outfitů a lokací.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Jak rychle dostanu fotografie?</h3>
              <p className="text-muted-foreground">
                Náhledy obdržíte do týdne od focení, finální upravené fotografie obvykle do 2-3 týdnů.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Mohu fotografie použít komerčně?</h3>
              <p className="text-muted-foreground">
                Podmínky použití fotografií jsou součástí dohody o spolupráci. U TFP focení je obvykle povoleno
                nekomerční použití.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Co když se mi výsledné fotografie nebudou líbit?</h3>
              <p className="text-muted-foreground">
                Před focením si vždy ujasníme očekávání a styl. Pokud nebudete spokojeni, budu se snažit najít řešení.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pojďme spolupracovat</h2>
          <p className="text-lg mb-8">
            Máte zájem o spolupráci? Neváhejte mě kontaktovat pro více informací a domluvení podmínek.
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

