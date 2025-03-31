import { CategoryRepository } from "@/lib/repositories/category-repository"
import type { Category, NewCategory } from "@/lib/schema"

/**
 * API funkce pro práci s kategoriemi
 */
export async function getCategories(): Promise<Category[]> {
  const repo = new CategoryRepository()
  return repo.findAll()
}

export async function getCategoryById(id: number): Promise<Category | null> {
  const repo = new CategoryRepository()
  return repo.findById(id)
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const repo = new CategoryRepository()
  return repo.findBySlug(slug)
}

export async function createCategory(data: NewCategory): Promise<Category> {
  const repo = new CategoryRepository()
  return repo.create(data)
}

export async function updateCategory(id: number, data: Partial<NewCategory>): Promise<Category> {
  const repo = new CategoryRepository()
  return repo.update(id, data)
}

export async function deleteCategory(id: number): Promise<void> {
  const repo = new CategoryRepository()
  return repo.delete(id)
}

