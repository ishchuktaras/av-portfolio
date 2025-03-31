import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"

// Categories for filtering
const categories = [
  { id: "all", name: "Vše" },
  { id: "portraits", name: "Portréty" },
  { id: "fashion", name: "Móda" },
  { id: "commercial", name: "Komerční" },
  { id: "events", name: "Události" },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Prohlédněte si mé vybrané práce z různých fotografických žánrů.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === "all" ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-square bg-muted rounded-md overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 opacity-20" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/portfolio/${index + 1}`}>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Zobrazit
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

