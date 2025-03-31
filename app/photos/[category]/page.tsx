import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PhotoGrid } from "@/components/photo-grid"
import { getServerPhotosByCategory } from "@/lib/server-data"
import type { PhotoCategory } from "@/lib/firebase-config"

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Mapování URL parametrů na kategorie
const categoryMap: Record<string, PhotoCategory> = {
  portrety: "portraits",
  moda: "fashion",
  kreativni: "creative",
  udalosti: "events",
  komercni: "commercial",
  osobni: "personal",
}

// Mapování kategorií na české názvy
const categoryNames: Record<PhotoCategory, string> = {
  portraits: "Portréty",
  fashion: "Móda",
  creative: "Kreativní fotografie",
  events: "Události",
  commercial: "Komerční fotografie",
  personal: "Osobní projekty",
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categorySlug = params.category
  const category = categoryMap[categorySlug]

  if (!category) {
    return {
      title: "Kategorie nenalezena",
      description: "Požadovaná kategorie fotografií nebyla nalezena.",
    }
  }

  const categoryName = categoryNames[category]

  return {
    title: `${categoryName} | Fotografické portfolio`,
    description: `Prohlédněte si fotografie v kategorii ${categoryName.toLowerCase()}.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category
  const category = categoryMap[categorySlug]

  if (!category) {
    notFound()
  }

  // Use server-safe data fetching
  const photos = await getServerPhotosByCategory(category)
  const categoryName = categoryNames[category]

  return (
    <div className="container py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{categoryName}</h1>

      {photos.length > 0 ? (
        <PhotoGrid photos={photos} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">V této kategorii zatím nejsou žádné fotografie.</p>
        </div>
      )}
    </div>
  )
}

