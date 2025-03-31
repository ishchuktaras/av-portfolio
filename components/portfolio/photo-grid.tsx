import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/portfolio/optimized-image"
import type { Photo } from "@/lib/schema"

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nebyly nalezeny žádné fotografie.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div key={photo.id} className="aspect-square bg-muted rounded-md overflow-hidden relative group">
          <OptimizedImage
            src={photo.thumbnailUrl || photo.imageUrl || "/placeholder.svg"}
            alt={photo.title}
            className="object-cover w-full h-full"
            priority={index < 6} // Prioritní načtení prvních 6 obrázků
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

