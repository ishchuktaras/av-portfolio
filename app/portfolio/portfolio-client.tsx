"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhotoItem } from "@/components/photo-item"
import { PhotoGallery } from "@/components/photo-gallery"
import type { PortfolioItem } from "@/lib/config"

interface PortfolioClientProps {
  items: PortfolioItem[]
  categories: { id: string; name: string }[]
}

export function PortfolioClient({ items, categories }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [galleryOpen, setGalleryOpen] = useState(false)

  // Filter items based on active category
  const filteredItems = activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)

  // Open gallery with selected item
  const openGallery = (item: PortfolioItem) => {
    setSelectedItem(item)
    setGalleryOpen(true)
  }

  // Close gallery
  const closeGallery = () => {
    setGalleryOpen(false)
    setSelectedItem(null)
  }

  return (
    <div>
      {/* Hero section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Mé portfolio</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Prohlédněte si výběr mých prací z oblasti portrétní, módní a komerční fotografie. Každý projekt je jedinečný
            a odráží mou vášeň pro zachycení okamžiků a příběhů.
          </p>
        </div>
      </section>

      {/* Portfolio gallery */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mx-auto flex justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-8">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <PhotoItem key={item.id} item={item} onClick={() => openGallery(item)} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Žádné fotografie k zobrazení v této kategorii</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Photo Gallery */}
      {galleryOpen && selectedItem && (
        <PhotoGallery
          photos={filteredItems}
          initialIndex={filteredItems.findIndex((item) => item.id === selectedItem.id)}
          onClose={closeGallery}
        />
      )}

      {/* Call to action */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Líbí se vám moje práce?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Pokud vás moje portfolio zaujalo a máte zájem o spolupráci, neváhejte mě kontaktovat. Ráda s vámi proberu
            vaše představy a možnosti.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Kontaktujte mě</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

