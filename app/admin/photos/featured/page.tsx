"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
// Import without file extension
import { useRequireAuth } from "@/lib/firebase-auth"
import { getPhotos, updatePhoto } from "@/lib/firebase-client"
import { PhotoCard } from "@/components/photo-card"
import { Star, StarOff } from "lucide-react"
import type { Photo } from "@/lib/firebase-config"

export default function FeaturedPhotosPage() {
  const { isAuthenticated, loading } = useRequireAuth()
  const router = useRouter()
  const [photos, setPhotos] = useState<Photo[]>([])
  const [featuredPhotos, setFeaturedPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, loading, router])

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true)
      try {
        const allPhotos = await getPhotos()
        setPhotos(allPhotos)
        setFeaturedPhotos(allPhotos.filter((photo) => photo.featured))
      } catch (error) {
        console.error("Error fetching photos:", error)
        setError("Nastala chyba při načítání fotografií")
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchPhotos()
    }
  }, [isAuthenticated])

  const toggleFeatured = async (photo: Photo) => {
    try {
      const newFeaturedValue = !photo.featured
      await updatePhoto(photo.id, { featured: newFeaturedValue })

      // Aktualizace lokálního stavu
      const updatedPhotos = photos.map((p) => (p.id === photo.id ? { ...p, featured: newFeaturedValue } : p))
      setPhotos(updatedPhotos)
      setFeaturedPhotos(updatedPhotos.filter((p) => p.featured))

      setSuccess(`Fotografie byla ${newFeaturedValue ? "přidána mezi" : "odebrána z"} vybrané`)

      // Skrytí zprávy o úspěchu po 3 sekundách
      setTimeout(() => {
        setSuccess(null)
      }, 3000)
    } catch (error) {
      console.error("Error updating photo:", error)
      setError("Nastala chyba při aktualizaci fotografie")
    }
  }

  if (loading || isLoading) {
    return (
      <div className="container py-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">Načítání...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container py-24">
      <h1 className="text-3xl font-bold mb-6">Správa vybraných fotografií</h1>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 bg-primary/10 border-primary text-primary">
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-400 fill-yellow-400" />
          Vybrané fotografie ({featuredPhotos.length})
        </h2>

        {featuredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredPhotos.map((photo) => (
              <div key={photo.id} className="relative group">
                <PhotoCard photo={photo} aspectRatio={photo.aspectRatio || "square"} />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleFeatured(photo)}
                    className="flex items-center gap-1"
                  >
                    <StarOff className="h-4 w-4" />
                    Odebrat z vybraných
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Žádné vybrané fotografie</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Ostatní fotografie ({photos.length - featuredPhotos.length})</h2>

        {photos.length > featuredPhotos.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos
              .filter((photo) => !photo.featured)
              .map((photo) => (
                <div key={photo.id} className="relative group">
                  <PhotoCard photo={photo} aspectRatio={photo.aspectRatio || "square"} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleFeatured(photo)}
                      className="flex items-center gap-1"
                    >
                      <Star className="h-4 w-4" />
                      Přidat mezi vybrané
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Všechny fotografie jsou označeny jako vybrané</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

