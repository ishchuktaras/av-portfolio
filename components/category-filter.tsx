"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Category {
  id: number
  name: string
}

interface CategoryFilterProps {
  categories: Category[]
  onChange?: (categoryId: number | null) => void
}

export function CategoryFilter({ categories, onChange }: CategoryFilterProps) {
  return (
    <Select onValueChange={(value) => onChange?.(value ? Number(value) : null)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id.toString()}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

