"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, Filter } from "lucide-react"
import type { Category } from "@/lib/schema"

interface FilterBarProps {
  categories: Category[]
}

export function FilterBar({ categories }: FilterBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("all")
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [sortBy, setSortBy] = useState<string>("createdAt")
  const [sortOrder, setSortOrder] = useState<string>("desc")

  // Synchronizace stavu s URL parametry při načtení komponenty
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "")
    setSelectedCategory(searchParams.get("category") || "all")
    setSelectedAspectRatio(searchParams.get("aspectRatio") || "all")
    setFeaturedOnly(searchParams.get("featured") === "true")
    setSortBy(searchParams.get("sortBy") || "createdAt")
    setSortOrder(searchParams.get("sortOrder") || "desc")
  }, [searchParams])

  // Aplikace filtrů
  const applyFilters = () => {
    const params = new URLSearchParams()

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    if (selectedCategory !== "all") {
      params.set("category", selectedCategory)
    }

    if (selectedAspectRatio !== "all") {
      params.set("aspectRatio", selectedAspectRatio)
    }

    if (featuredOnly) {
      params.set("featured", "true")
    }

    if (sortBy !== "createdAt") {
      params.set("sortBy", sortBy)
    }

    if (sortOrder !== "desc") {
      params.set("sortOrder", sortOrder)
    }

    router.push(`/portfolio?${params.toString()}`)
  }

  // Reset filtrů
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedAspectRatio("all")
    setFeaturedOnly(false)
    setSortBy("createdAt")
    setSortOrder("desc")
    router.push("/portfolio")
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Hledat fotografie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={applyFilters}>Hledat</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="category">Kategorie</Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Vyberte kategorii" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Všechny kategorie</SelectItem>
              <SelectItem value="portraits">Portréty</SelectItem>
              <SelectItem value="fashion">Módní</SelectItem>
              <SelectItem value="commercial">Komerční</SelectItem>
              <SelectItem value="wedding">Svatební</SelectItem>
              <SelectItem value="family">Rodinné</SelectItem>
              <SelectItem value="boudoir">Boudoir</SelectItem>
              <SelectItem value="landscape">Krajina</SelectItem>
              <SelectItem value="street">Pouliční</SelectItem>
              <SelectItem value="architecture">Architektura</SelectItem>
              <SelectItem value="product">Produktové</SelectItem>
              <SelectItem value="event">Události</SelectItem>
              <SelectItem value="travel">Cestovní</SelectItem>
              <SelectItem value="blackandwhite">Černobílé</SelectItem>
              <SelectItem value="conceptual">Konceptuální</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="aspectRatio">Poměr stran</Label>
          <Select value={selectedAspectRatio} onValueChange={setSelectedAspectRatio}>
            <SelectTrigger id="aspectRatio">
              <SelectValue placeholder="Vyberte poměr stran" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Všechny poměry</SelectItem>
              <SelectItem value="portrait">Portrét</SelectItem>
              <SelectItem value="landscape">Krajina</SelectItem>
              <SelectItem value="square">Čtverec</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sortBy">Řadit podle</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger id="sortBy">
              <SelectValue placeholder="Řadit podle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Data přidání</SelectItem>
              <SelectItem value="title">A-Z</SelectItem>
              <SelectItem value="relevance">Relevantnost</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sortOrder">Směr řazení</Label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger id="sortOrder">
              <SelectValue placeholder="Směr řazení" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Sestupně</SelectItem>
              <SelectItem value="asc">Vzestupně</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="featured"
          checked={featuredOnly}
          onChange={(e) => setFeaturedOnly(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 focus:ring-primary"
        />
        <Label
          htmlFor="featured"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Pouze vybrané fotografie
        </Label>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={resetFilters}>
          Resetovat filtry
        </Button>
        <Button onClick={applyFilters}>
          <Filter className="mr-2 h-4 w-4" />
          Aplikovat filtry
        </Button>
      </div>
    </div>
  )
}

