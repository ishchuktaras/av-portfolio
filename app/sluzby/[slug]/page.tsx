import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

// Simulace dat služeb
const services = [
  {
    id: "portretni-fotografie",
    title: "Portrétní fotografie",
    description: "Zachycení vaší osobnosti a emocí v profesionálních portrétech.",
    longDescription: `
      Portrétní fotografie je umění zachytit osobnost, emoce a příběh člověka prostřednictvím obrazu. 
      Jako portrétní fotografka se zaměřuji na vytvoření autentických a působivých portrétů, 
      které vystihují jedinečnost každého klienta.
      
      Při portrétním focení kladu důraz na přirozenost a komfort. Mým cílem je, abyste se během 
      focení cítili uvolněně a sebevědomě, což se odrazí na výsledných fotografiích. Pracuji 
      s přirozeným i umělým osvětlením a různými lokacemi podle vašich preferencí a po��adovaného stylu.
      
      Nabízím různé typy portrétních focení - od klasických portrétů přes profesionální business 
      portréty až po kreativní a umělecké portréty. Každé focení je přizpůsobeno vašim individuálním 
      potřebám a představám.
    `,
    image: "/placeholder.svg?height=800&width=600&text=Portrétní+fotografie",
    gallery: [
      "/placeholder.svg?height=800&width=600&text=Portrét+1",
      "/placeholder.svg?height=600&width=800&text=Portrét+2",
      "/placeholder.svg?height=800&width=600&text=Portrét+3",
      "/placeholder.svg?height=600&width=800&text=Portrét+4",
    ],
    features: [
      "Individuální portrétní focení",
      "Rodinné portréty",
      "Profesionální business portréty",
      "Umělecké portréty",
      "Retušování a úprava fotografií",
      "Digitální i tištěné fotografie",
    ],
    packages: [
      {
        name: "Základní",
        price: "1 500 Kč",
        features: ["1 hodina focení", "1 lokace", "5 upravených fotografií", "Digitální dodání"],
      },
      {
        name: "Standard",
        price: "2 500 Kč",
        features: [
          "2 hodiny focení",
          "2 lokace",
          "10 upravených fotografií",
          "Digitální dodání",
          "Základní retušování",
        ],
      },
      {
        name: "Premium",
        price: "4 000 Kč",
        features: [
          "3 hodiny focení",
          "Neomezený počet lokací",
          "20 upravených fotografií",
          "Digitální i tištěné fotografie",
          "Pokročilé retušování",
          "Asistence se stylingem",
        ],
      },
    ],
  },
  {
    id: "modni-fotografie",
    title: "Módní fotografie",
    description: "Kreativní módní fotografie pro designéry, modely a značky.",
    longDescription: `
      Módní fotografie je dynamický a kreativní žánr, který kombinuje umění, design a příběh. 
      Jako módní fotografka se zaměřuji na vytváření poutavých vizuálních příběhů, které zdůrazňují 
      krásu a jedinečnost módních kolekcí, doplňků a modelů.
      
      Při módním focení kladu důraz na koncepci, styling a atmosféru. Spolupracuji s vámi na vytvoření 
      kreativního konceptu, který nejlépe vystihne vaši značku, kolekci nebo osobní styl. Pracuji 
      s různými lokacemi, osvětlením a kompozicemi, abych vytvořila jedinečné a působivé fotografie.
      
      Nabízím módní focení pro designéry, značky, e-shopy i začínající modely. Ať už potřebujete 
      lookbook pro vaši novou kolekci, produktové fotografie pro e-shop nebo portfolio pro modeling, 
      společně vytvoříme fotografie, které zaujmou a inspirují.
    `,
    image: "/placeholder.svg?height=800&width=600&text=Módní+fotografie",
    gallery: [
      "/placeholder.svg?height=800&width=600&text=Móda+1",
      "/placeholder.svg?height=600&width=800&text=Móda+2",
      "/placeholder.svg?height=800&width=600&text=Móda+3",
      "/placeholder.svg?height=600&width=800&text=Móda+4",
    ],
    features: [
      "Módní editorialy",
      "Lookbooky",
      "Portfolia pro modely",
      "Produktová módní fotografie",
      "Styling a koncepce",
      "Post-produkce a retušování",
    ],
    packages: [
      {
        name: "Základní",
        price: "2 500 Kč",
        features: ["2 hodiny focení", "1 lokace", "1 model/ka", "10 upravených fotografií", "Digitální dodání"],
      },
      {
        name: "Standard",
        price: "4 500 Kč",
        features: [
          "4 hodiny focení",
          "2 lokace",
          "1-2 modely/ky",
          "20 upravených fotografií",
          "Digitální dodání",
          "Základní styling",
        ],
      },
      {
        name: "Premium",
        price: "8 000 Kč",
        features: [
          "Celodenní focení (8 hodin)",
          "Neomezený počet lokací",
          "Více modelů/ek",
          "30+ upravených fotografií",
          "Digitální i tištěné fotografie",
          "Kompletní styling a koncepce",
          "Možnost spolupráce s vizážistou/kadeřníkem (za příplatek)",
        ],
      },
    ],
  },
  {
    id: "komercni-fotografie",
    title: "Komerční fotografie",
    description: "Profesionální fotografie pro firmy, značky a marketingové účely.",
    longDescription: `
      Komerční fotografie je klíčovým prvkem úspěšného marketingu a brandingu. Jako komerční 
      fotografka se zaměřuji na vytváření profesionálních a atraktivních fotografií, které 
      pomohou prezentovat vaši značku, produkty nebo služby v tom nejlepším světle.
      
      Při komerčním focení kladu důraz na kvalitu, detail a soulad s vaší firemní identitou. 
      Spolupracuji s vámi na vytvoření konceptu, který nejlépe vystihne vaši značku a osloví 
      vaši cílovou skupinu. Pracuji s různými technikami a styly podle vašich potřeb a požadavků.
      
      Nabízím širokou škálu komerčních fotografických služeb - od produktové fotografie přes 
      firemní portréty až po fotografie pro sociální sítě a webové stránky. Mým cílem je 
      poskytnout vám fotografie, které budou efektivně komunikovat vaše sdělení a posílí 
      vaši značku.
    `,
    image: "/placeholder.svg?height=800&width=600&text=Komerční+fotografie",
    gallery: [
      "/placeholder.svg?height=800&width=600&text=Komerční+1",
      "/placeholder.svg?height=600&width=800&text=Komerční+2",
      "/placeholder.svg?height=800&width=600&text=Komerční+3",
      "/placeholder.svg?height=600&width=800&text=Komerční+4",
    ],
    features: [
      "Produktová fotografie",
      "Firemní portréty",
      "Fotografie pro sociální sítě",
      "Fotografie interiérů a exteriérů",
      "Fotografie pro webové stránky",
      "Reklamní fotografie",
    ],
    packages: [
      {
        name: "Základní",
        price: "3 000 Kč",
        features: [
          "2 hodiny focení",
          "Do 10 produktů",
          "10 upravených fotografií",
          "Digitální dodání",
          "Základní post-produkce",
        ],
      },
      {
        name: "Standard",
        price: "5 500 Kč",
        features: [
          "4 hodiny focení",
          "Do 20 produktů",
          "20 upravených fotografií",
          "Digitální dodání",
          "Pokročilá post-produkce",
          "Konzultace ke stylingu a kompozici",
        ],
      },
      {
        name: "Premium",
        price: "10 000 Kč",
        features: [
          "Celodenní focení (8 hodin)",
          "Neomezený počet produktů",
          "30+ upravených fotografií",
          "Digitální dodání v různých formátech",
          "Profesionální post-produkce",
          "Kompletní styling a art direction",
          "Možnost focení na více lokacích",
        ],
      },
    ],
  },
  {
    id: "svatebni-fotografie",
    title: "Svatební fotografie",
    description: "Zachycení vašeho výjimečného dne s důrazem na emoce a detaily.",
    longDescription: `
      Svatební fotografie je umění zachytit jeden z nejdůležitějších dnů vašeho života. Jako 
      svatební fotografka se zaměřuji na vytváření autentických a emotivních fotografií, které 
      budou připomínat váš výjimečný den po mnoho let.
      
      Při svatebním focení kladu důraz na přirozenost, emoce a detaily. Mým cílem je zachytit 
      nejen klíčové momenty, ale i spontánní okamžiky, které dělají váš den jedinečným. Pracuji 
      diskrétně a nenápadně, abych zachytila autentické emoce a atmosféru.
      
      Nabízím komplexní svatební fotografické služby - od příprav nevěsty a ženicha přes obřad 
      až po večerní oslavu. Každá svatba je jedinečná, proto přizpůsobuji svůj přístup a styl 
      vašim představám a potřebám.
    `,
    image: "/placeholder.svg?height=800&width=600&text=Svatební+fotografie",
    gallery: [
      "/placeholder.svg?height=800&width=600&text=Svatba+1",
      "/placeholder.svg?height=600&width=800&text=Svatba+2",
      "/placeholder.svg?height=800&width=600&text=Svatba+3",
      "/placeholder.svg?height=600&width=800&text=Svatba+4",
    ],
    features: [
      "Celodenní reportáž",
      "Předsvatební focení",
      "Portrétní fotografie novomanželů",
      "Zachycení klíčových momentů",
      "Fotografie detailů a atmosféry",
      "Úprava a retušování fotografií",
    ],
    packages: [
      {
        name: "Základní",
        price: "15 000 Kč",
        features: [
          "8 hodin focení",
          "Obřad a část oslavy",
          "Min. 300 upravených fotografií",
          "Online galerie",
          "Digitální dodání",
        ],
      },
      {
        name: "Standard",
        price: "25 000 Kč",
        features: [
          "12 hodin focení",
          "Přípravy, obřad, oslava",
          "Min. 500 upravených fotografií",
          "Online galerie",
          "Digitální dodání",
          "Předsvatební mini focení",
          "Fotokniha",
        ],
      },
      {
        name: "Premium",
        price: "35 000 Kč",
        features: [
          "Neomezený čas focení",
          "Kompletní pokrytí svatebního dne",
          "Min. 700 upravených fotografií",
          "Online galerie",
          "Digitální i tištěné fotografie",
          "Předsvatební focení",
          "Luxusní fotokniha",
          "Druhý fotograf",
        ],
      },
    ],
  },
]

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    return {
      title: "Služba nenalezena",
      description: "Požadovaná služba nebyla nalezena.",
    }
  }

  return {
    title: `${service.title} | Anhelina Vavzhyniak`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div>
      {/* Hero sekce */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Popis služby */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">O službě</h2>

            {service.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph.trim()}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Ukázky prací</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} - ukázka ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balíčky */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Balíčky a ceny</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-2xl font-bold mt-2">{pkg.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="/kontakt">Objednat</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-muted-foreground">
            Ceny jsou orientační a mohou se lišit podle specifických požadavků a rozsahu projektu. Pro přesnou kalkulaci
            mě prosím kontaktujte.
          </p>
        </div>
      </section>

      {/* Výzva k akci */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Máte zájem o tuto službu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktujte mě pro nezávaznou konzultaci. Ráda s vámi proberu vaše představy a možnosti spolupráce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-medium text-white border-white hover:bg-white/10"
            >
              <Link href="/kontakt">Kontaktujte mě</Link>
            </Button>
            <Button asChild size="lg" className="font-medium bg-white text-primary hover:bg-white/90">
              <Link href="/portfolio">
                Prohlédnout portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

