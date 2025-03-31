"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import AdobeImage from "@/components/adobe-image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { demoAlbums, demoAssets, isAdobeDemoMode, type AdobeAlbum, type AdobeAsset } from "@/lib/adobe-config"

export default function PortfolioClientPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [albums, setAlbums] = useState<AdobeAlbum[]>([])
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)
  const [assets, setAssets] = useState<AdobeAsset[]>([])
  const [selectedAsset, setSelectedAsset] = useState<AdobeAsset | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Fetch albums on component mount
  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true)
      try {
        // In a real implementation, you would fetch from Adobe API
        // For now, we'll use demo data
        if (isAdobeDemoMode()) {
          setAlbums(demoAlbums)
        } else {
          // Here you would implement the actual Adobe API call
          // const response = await fetch('/api/adobe/albums')
          // const data = await response.json()
          // setAlbums(data)
          setAlbums(demoAlbums) // Fallback to demo data
        }
      } catch (error) {
        console.error("Error fetching albums:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAlbums()
  }, [])

  // Fetch assets when an album is selected
  useEffect(() => {
    if (!selectedAlbum) return

    const fetchAssets = async () => {
      setIsLoading(true)
      try {
        // In a real implementation, you would fetch from Adobe API
        // For now, we'll use demo data
        if (isAdobeDemoMode()) {
          setAssets(demoAssets[selectedAlbum] || [])
        } else {
          // Here you would implement the actual Adobe API call
          // const response = await fetch(`/api/adobe/albums/${selectedAlbum}/assets`)
          // const data = await response.json()
          // setAssets(data)
          setAssets(demoAssets[selectedAlbum] || []) // Fallback to demo data
        }
      } catch (error) {
        console.error("Error fetching assets:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAssets()
  }, [selectedAlbum])

  // Filter albums based on active category
  const filteredAlbums =
    activeCategory === "all"
      ? albums
      : albums.filter((album) => {
          // In a real implementation, you would have category information in your albums
          // For now, we'll map album names to categories
          const albumNameToCategory: Record<string, string> = {
            Portréty: "portraits",
            Móda: "fashion",
            Kreativní: "creative",
            Události: "events",
            Komerční: "commercial",
            Osobní: "personal",
          }
          return albumNameToCategory[album.name] === activeCategory
        })

  // Handle asset selection and navigation
  const openAssetDialog = (asset: AdobeAsset) => {
    setSelectedAsset(asset)
    setIsDialogOpen(true)
  }

  const navigateAsset = (direction: "next" | "prev") => {
    if (!selectedAsset || assets.length <= 1) return

    const currentIndex = assets.findIndex((asset) => asset.id === selectedAsset.id)
    if (currentIndex === -1) return

    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % assets.length
    } else {
      newIndex = (currentIndex - 1 + assets.length) % assets.length
    }

    setSelectedAsset(assets[newIndex])
  }

  return (
    <div>
      {/* Hero sekce */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Mé portfolio</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Prohlédněte si výběr mých prací z oblasti portrétní, módní a komerční fotografie. Každý projekt je jedinečný
            a odráží mou vášeň pro zachycení okamžiků a příběhů.
          </p>
        </div>
      </section>

      {/* Portfolio galerie */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mx-auto flex justify-center">
              {siteConfig.categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-8">
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="h-12 w-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              ) : filteredAlbums.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAlbums.map((album) => (
                    <div
                      key={album.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedAlbum(album.id)}
                    >
                      <div className="relative aspect-square">
                        <AdobeImage
                          src={album.cover?.url || "/placeholder.svg"}
                          alt={album.name}
                          width={600}
                          height={600}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-medium">{album.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Žádné fotografie k zobrazení v této kategorii</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Selected Album View */}
          {selectedAlbum && (
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <Button variant="outline" onClick={() => setSelectedAlbum(null)} className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Zpět na alba
                </Button>
                <h2 className="text-2xl font-bold">{albums.find((album) => album.id === selectedAlbum)?.name}</h2>
              </div>

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="h-12 w-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              ) : assets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {assets.map((asset) => (
                    <div
                      key={asset.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => openAssetDialog(asset)}
                    >
                      <div className="relative aspect-square">
                        <AdobeImage
                          src={asset.links.rendition?.href || "/placeholder.svg"}
                          alt={asset.payload.develop?.title || "Fotografie"}
                          width={600}
                          height={600}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-medium">{asset.payload.develop?.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Žádné fotografie k zobrazení v tomto albu</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none">
          <div className="relative h-[80vh] flex items-center justify-center">
            {/* Close button */}
            <DialogClose className="absolute top-4 right-4 z-10 text-white hover:bg-black/20 rounded-full p-2">
              <X className="h-6 w-6" />
              <span className="sr-only">Zavřít</span>
            </DialogClose>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => navigateAsset("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Předchozí</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => navigateAsset("next")}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Další</span>
            </Button>

            {/* Image */}
            {selectedAsset && (
              <div className="relative max-w-full max-h-full p-4 md:p-10">
                <AdobeImage
                  src={selectedAsset.links.rendition?.href || "/placeholder.svg"}
                  alt={selectedAsset.payload.develop?.title || "Fotografie"}
                  width={1200}
                  height={800}
                  className="max-h-[75vh] w-auto h-auto object-contain"
                  objectFit="contain"
                  priority
                />

                {/* Image info */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <h3 className="text-lg font-medium">{selectedAsset.payload.develop?.title}</h3>
                  {selectedAsset.payload.develop?.tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {selectedAsset.payload.develop.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Výzva k akci */}
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

