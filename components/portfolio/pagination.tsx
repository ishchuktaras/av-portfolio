"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

export function Pagination({ totalItems, itemsPerPage, currentPage }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Navigace na stránku
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`?${params.toString()}`)
  }

  // Generování seznamu stránek pro zobrazení
  const getPageNumbers = () => {
    const pages = []

    // Vždy zobrazit první stránku
    pages.push(1)

    // Přidat elipsu, pokud je aktuální stránka vzdálená od první
    if (currentPage > 3) {
      pages.push("...")
    }

    // Přidat stránky kolem aktuální stránky
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }

    // Přidat elipsu, pokud je aktuální stránka vzdálená od poslední
    if (currentPage < totalPages - 2) {
      pages.push("...")
    }

    // Vždy zobrazit poslední stránku, pokud existuje více než jedna stránka
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  // Pokud je jen jedna stránka, nezobrazovat paginaci
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button variant="outline" size="icon" onClick={() => goToPage(1)} disabled={currentPage === 1}>
        <ChevronsLeft className="h-4 w-4" />
        <span className="sr-only">První stránka</span>
      </Button>

      <Button variant="outline" size="icon" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Předchozí stránka</span>
      </Button>

      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <Button key={index} variant={currentPage === page ? "default" : "outline"} onClick={() => goToPage(page)}>
            {page}
          </Button>
        ) : (
          <span key={index} className="px-2">
            {page}
          </span>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Další stránka</span>
      </Button>

      <Button variant="outline" size="icon" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
        <ChevronsRight className="h-4 w-4" />
        <span className="sr-only">Poslední stránka</span>
      </Button>
    </div>
  )
}

