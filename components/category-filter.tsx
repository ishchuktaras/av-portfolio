"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListFilter } from "lucide-react"
import type { Category } from "@/lib/schema"

interface CategoryFilterProps {
  categories: Category[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    const categoryId = searchParams.get("category")
    setSelectedCategory(categoryId || "all")
  }, [searchParams])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)

    const params = new URLSearchParams(searchParams.toString())

    if (value === "all") {
      params.delete("category")
    } else {
      params.set("category", value)
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
      <ListFilter className="h-4 w-4 text-muted-foreground" />
      <Select value={selectedCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

