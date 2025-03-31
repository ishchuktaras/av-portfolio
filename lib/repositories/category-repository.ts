import { eq } from "drizzle-orm"
import { categories } from "@/lib/schema"
import type { Category, NewCategory } from "@/lib/schema"
import type { BaseRepository } from "./base-repository"
import { getDb } from "@/lib/mock-db"

/**
 * Repository pro práci s kategoriemi
 */
export class CategoryRepository implements BaseRepository<Category, NewCategory> {
  async findAll(): Promise<Category[]> {
    try {
      const db = getDb()
      return await db.select().from(categories).orderBy(categories.name)
    } catch (error) {
      console.error("Error fetching categories:", error)
      return []
    }
  }

  async findById(id: number): Promise<Category | null> {
    try {
      const db = getDb()
      const results = await db.select().from(categories).where(eq(categories.id, id)).limit(1)
      return results.length > 0 ? results[0] : null
    } catch (error) {
      console.error(`Error fetching category with id ${id}:`, error)
      return null
    }
  }

  async findBySlug(slug: string): Promise<Category | null> {
    try {
      const db = getDb()
      const results = await db.select().from(categories).where(eq(categories.slug, slug)).limit(1)
      return results.length > 0 ? results[0] : null
    } catch (error) {
      console.error(`Error fetching category with slug ${slug}:`, error)
      return null
    }
  }

  async create(data: NewCategory): Promise<Category> {
    try {
      const db = getDb()
      const result = await db.insert(categories).values(data).returning()
      return result[0]
    } catch (error) {
      console.error("Error creating category:", error)
      throw new Error("Failed to create category")
    }
  }

  async update(id: number, data: Partial<NewCategory>): Promise<Category> {
    try {
      const db = getDb()
      const result = await db.update(categories).set(data).where(eq(categories.id, id)).returning()

      if (result.length === 0) {
        throw new Error(`Category with id ${id} not found`)
      }

      return result[0]
    } catch (error) {
      console.error(`Error updating category with id ${id}:`, error)
      throw new Error("Failed to update category")
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const db = getDb()
      await db.delete(categories).where(eq(categories.id, id))
    } catch (error) {
      console.error(`Error deleting category with id ${id}:`, error)
      throw new Error("Failed to delete category")
    }
  }
}

