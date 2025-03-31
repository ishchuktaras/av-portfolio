"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePhotos } from "@/hooks/use-photos"
import { Skeleton } from "@/components/ui/skeleton"
import { OptimizedImage } from "@/components/portfolio/optimized-image"
import type { PhotoFilter } from "@/lib/repositories/photo-repository"

interface ClientPhotoGridProps {
  initialFilter?: PhotoFilter
}

export function ClientPhotoGrid({ initialFilter }: ClientPhotoGridProps) {
  const [filter, setFilter] = useState<PhotoFilter | undefined>(initialFilter)
  const { data: photos, isLoading, error } = usePhotos(filter)

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square rounded-md" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Nepodařilo se načíst fotografie. Zkuste to prosím později.</p>
      </div>
    )
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nebyly nalezeny žádné fotografie.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-square bg-muted rounded-md overflow-hidden relative group">
          <OptimizedImage
            src={photo.thumbnailUrl || photo.imageUrl || "/placeholder.svg"}
            alt={photo.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Link href={`/portfolio/${photo.id}`}>
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                Zobrazit
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

