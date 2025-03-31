"use client"

import { useState } from "react"
import { PhotoCard } from "@/components/photo-card"
import { PhotoGallery } from "@/components/photo-gallery"
import type { Photo } from "@/lib/firebase-config"

interface PhotoGridProps {
  photos: Photo[]
  columns?: number
}

export function PhotoGrid({ photos, columns = 3 }: PhotoGridProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const openGallery = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeGallery = () => {
    setSelectedPhotoIndex(null)
  }

  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-6`}>
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            aspectRatio={photo.aspectRatio || "square"}
            onClick={() => openGallery(index)}
          />
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <PhotoGallery photos={photos} initialIndex={selectedPhotoIndex} onClose={closeGallery} />
      )}
    </div>
  )
}

