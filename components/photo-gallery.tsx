"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Photo } from "@/lib/firebase-config"
import type { PortfolioItem } from "@/lib/config"

// Create a union type that can be either Photo or PortfolioItem
type GalleryItem = Photo | PortfolioItem

// Helper function to determine if an item is a Photo or PortfolioItem
function isPhoto(item: GalleryItem): item is Photo {
  return "downloadUrl" in item
}

interface PhotoGalleryProps {
  photos: GalleryItem[]
  initialIndex: number
  onClose: () => void
}

export function PhotoGallery({ photos, initialIndex, onClose }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  const currentItem = photos[currentIndex]

  // Helper function to get the image URL based on item type
  const getImageUrl = (item: GalleryItem): string => {
    if (isPhoto(item)) {
      return item.downloadUrl || "/placeholder.svg"
    } else {
      return item.image || "/placeholder.svg"
    }
  }

  // Helper function to get the title based on item type
  const getTitle = (item: GalleryItem): string => {
    return item.title || "Fotografie"
  }

  // Helper function to get the description based on item type
  const getDescription = (item: GalleryItem): string | undefined => {
    return item.description
  }

  // Helper function to get tags based on item type
  const getTags = (item: GalleryItem): string[] => {
    if (isPhoto(item)) {
      return item.tags || []
    } else {
      return item.tags || []
    }
  }

  const goToPrevious = () => {
    setIsLoading(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setIsLoading(true)
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
  }

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true)
  }, [currentIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!currentItem) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-black/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Zavřít</span>
        </Button>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Předchozí</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 z-10 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToNext}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Další</span>
        </Button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-10">
          <div
            className={cn(
              "relative max-w-full max-h-full transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100",
            )}
          >
            <Image
              src={getImageUrl(currentItem) || "/placeholder.svg"}
              alt={getTitle(currentItem)}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto h-auto object-contain"
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <h3 className="text-xl font-medium">{getTitle(currentItem)}</h3>
            {getDescription(currentItem) && (
              <p className="mt-1 text-white/80 max-w-xl mx-auto">{getDescription(currentItem)}</p>
            )}
            {getTags(currentItem).length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {getTags(currentItem).map((tag) => (
                  <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

