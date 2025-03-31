"use client"

import { useEffect, useState } from "react"
import { PhotoGrid } from "@/components/photo-grid"
import { getFeaturedPhotos, getPhotos, getPhotosByCategory } from "@/lib/firebase-client"
import type { Photo, PhotoCategory } from "@/lib/firebase-config"

interface ClientPhotosProps {
  type: "all" | "featured" | "category"
  category?: PhotoCategory
  fallbackPhotos: Photo[]
}

export function ClientPhotos({ type, category, fallbackPhotos }: ClientPhotosProps) {
  const [photos, setPhotos] = useState<Photo[]>(fallbackPhotos)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let fetchedPhotos: Photo[] = []

        if (type === "all") {
          fetchedPhotos = await getPhotos()
        } else if (type === "featured") {
          fetchedPhotos = await getFeaturedPhotos()
        } else if (type === "category" && category) {
          fetchedPhotos = await getPhotosByCategory(category)
        }

        if (fetchedPhotos.length > 0) {
          setPhotos(fetchedPhotos)
        }
      } catch (err) {
        console.error("Error fetching photos:", err)
        setError("Nepodařilo se načíst fotografie")
        // Keep using fallback photos
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [type, category])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  return <PhotoGrid photos={photos} />
}

