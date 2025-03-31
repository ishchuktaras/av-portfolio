import { FilterBar } from "@/components/portfolio/filter-bar"
import { Pagination } from "@/components/portfolio/pagination"
import { PhotoGrid } from "@/components/portfolio/photo-grid"
import { getPhotos, getPhotosCount, searchPhotos } from "@/lib/api/photos"
import { getCategories } from "@/lib/api/categories"
import type { PhotoFilter } from "@/lib/repositories/photo-repository"

export const revalidate = 0

interface PortfolioPageProps {
  searchParams: {
    q?: string
    category?: string
    aspectRatio?: string
    featured?: string
    sortBy?: string
    sortOrder?: string
    page?: string
  }
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  // Parsování parametrů
  const query = searchParams.q
  const categoryId = searchParams.category ? Number.parseInt(searchParams.category) : undefined
  const aspectRatio = searchParams.aspectRatio !== "all" ? searchParams.aspectRatio : undefined
  const featured = searchParams.featured === "true"
  const sortBy = searchParams.sortBy as "createdAt" | "title" | "relevance" | undefined
  const sortOrder = searchParams.sortOrder as "asc" | "desc" | undefined
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const itemsPerPage = 12

  // Vytvoření filtru
  const filter: PhotoFilter = {
    categoryId,
    aspectRatio,
    featured: searchParams.featured === "true" ? true : undefined,
    sortBy,
    sortOrder,
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
  }

  // Získání dat
  const categories = await getCategories()
  const photos = query ? await searchPhotos(query) : await getPhotos(filter)
  const totalItems = await getPhotosCount({
    categoryId,
    aspectRatio,
    featured: searchParams.featured === "true" ? true : undefined,
  })

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
          {/* Filter bar */}
          <div className="mb-8">
            <FilterBar categories={categories} />
          </div>

          {/* Results info */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              {totalItems === 0
                ? "Nebyly nalezeny žádné fotografie"
                : `Zobrazuji ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, totalItems)} z ${totalItems} fotografií`}
            </p>
          </div>

          {/* Photo grid */}
          <PhotoGrid photos={photos} />

          {/* Pagination */}
          <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} />
        </div>
      </section>
    </>
  )
}

