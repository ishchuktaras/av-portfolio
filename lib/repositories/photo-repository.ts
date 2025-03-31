import { eq, sql, and, gte, lte, asc, desc } from "drizzle-orm"
import { photos } from "@/lib/schema"
import { getDb } from "@/lib/mock-db"
import type { BaseRepository } from "./base-repository"
import type { Photo, NewPhoto } from "@/lib/schema"

export interface PhotoFilter {
  categoryId?: number
  featured?: boolean
  aspectRatio?: string
  tags?: string[]
  startDate?: Date
  endDate?: Date
  limit?: number
  offset?: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

/**
 * Repository pro práci s fotografiemi
 */
export class PhotoRepository implements BaseRepository<Photo, NewPhoto> {
  // Přidání metody pro počítání fotografií
  async count(filter?: Omit<PhotoFilter, "limit" | "offset" | "sortBy" | "sortOrder">): Promise<number> {
    const db = getDb()

    try {
      let query = db.select({ count: sql`count(*)` }).from(photos)

      // Aplikace filtrů
      if (filter) {
        const conditions = []

        if (filter.categoryId) {
          conditions.push(eq(photos.categoryId, filter.categoryId))
        }

        if (filter.featured !== undefined) {
          conditions.push(eq(photos.featured, filter.featured))
        }

        if (filter.aspectRatio) {
          conditions.push(eq(photos.aspectRatio, filter.aspectRatio))
        }

        if (filter.tags && filter.tags.length > 0) {
          filter.tags.forEach((tag) => {
            conditions.push(sql`${photos.tags}::text ILIKE ${`%${tag}%`}`)
          })
        }

        if (filter.startDate) {
          conditions.push(gte(photos.createdAt, filter.startDate))
        }

        if (filter.endDate) {
          conditions.push(lte(photos.createdAt, filter.endDate))
        }

        if (conditions.length > 0) {
          query = query.where(and(...conditions))
        }
      }

      const result = await query
      return Number(result[0]?.count || 0)
    } catch (error) {
      console.error("Error counting photos:", error)
      return 0
    }
  }

  // Optimalizace metody findAll pro efektivnější dotazy
  async findAll(filter?: PhotoFilter): Promise<Photo[]> {
    const db = getDb()

    try {
      // Vytvoření základního dotazu с optimalizovaným výběrem sloupců
      let query = db.select().from(photos)

      // Aplikace filtrů
      if (filter) {
        const conditions = []

        if (filter.categoryId) {
          conditions.push(eq(photos.categoryId, filter.categoryId))
        }

        if (filter.featured !== undefined) {
          conditions.push(eq(photos.featured, filter.featured))
        }

        if (filter.aspectRatio) {
          conditions.push(eq(photos.aspectRatio, filter.aspectRatio))
        }

        if (filter.tags && filter.tags.length > 0) {
          filter.tags.forEach((tag) => {
            conditions.push(sql`${photos.tags}::text ILIKE ${`%${tag}%`}`)
          })
        }

        if (filter.startDate) {
          conditions.push(gte(photos.createdAt, filter.startDate))
        }

        if (filter.endDate) {
          conditions.push(lte(photos.createdAt, filter.endDate))
        }

        if (conditions.length > 0) {
          query = query.where(and(...conditions))
        }
      }

      // Optimalizace: Přidání indexovaných sloupců do ORDER BY
      if (filter?.sortBy) {
        let orderColumn
        if (filter.sortBy === "title") {
          orderColumn = photos.title
        } else if (filter.sortBy === "relevance") {
          // For relevance sorting, we might use a combination of factors
          // For now, we'll default to featured photos first, then by date
          if (filter.sortOrder === "asc") {
            query = query.orderBy(asc(photos.featured), asc(photos.createdAt), asc(photos.id))
            return query
          } else {
            query = query.orderBy(desc(photos.featured), desc(photos.createdAt), desc(photos.id))
            return query
          }
        } else {
          orderColumn = photos.createdAt
        }

        const orderDirection = filter.sortOrder === "asc" ? asc : desc

        // Přidání ID do řazení pro konzistentní výsledky při stránkování
        query = query.orderBy(orderDirection(orderColumn), desc(photos.id))
      } else {
        query = query.orderBy(desc(photos.createdAt), desc(photos.id))
      }

      // Get the results first
      let results = await query

      // Then apply pagination manually if needed
      if (filter?.limit && typeof filter.limit === "number") {
        const start = filter.offset || 0
        const end = start + filter.limit
        results = results.slice(start, end)
      }

      return results
    } catch (error) {
      console.error("Error fetching photos:", error)
      return []
    }
  }

  // Optimalizace metody findById pro efektivnější dotaz
  async findById(id: number): Promise<Photo | null> {
    const db = getDb()

    try {
      // Use where instead of relying on limit
      const results = await db.select().from(photos).where(eq(photos.id, id))
      return results.length > 0 ? results[0] : null
    } catch (error) {
      console.error(`Error fetching photo with id ${id}:`, error)
      return null
    }
  }

  // Implementace create metody
  async create(data: NewPhoto): Promise<Photo> {
    const db = getDb()

    try {
      const result = await db.insert(photos).values(data).returning()
      return result[0]
    } catch (error) {
      console.error("Error creating photo:", error)
      throw new Error("Failed to create photo")
    }
  }

  // Implementace update metody
  async update(id: number, data: Partial<NewPhoto>): Promise<Photo> {
    const db = getDb()

    try {
      const result = await db
        .update(photos)
        .set({
          ...data,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(photos.id, id))
        .returning()

      if (result.length === 0) {
        throw new Error(`Photo with id ${id} not found`)
      }

      return result[0]
    } catch (error) {
      console.error(`Error updating photo with id ${id}:`, error)
      throw new Error("Failed to update photo")
    }
  }

  // Implementace delete metody
  async delete(id: number): Promise<void> {
    const db = getDb()

    try {
      await db.delete(photos).where(eq(photos.id, id))
    } catch (error) {
      console.error(`Error deleting photo with id ${id}:`, error)
      throw new Error("Failed to delete photo")
    }
  }

  // Metoda pro vyhledávání fotografií
  async search(query: string): Promise<Photo[]> {
    const db = getDb()

    try {
      // For mock DB, just do a simple title/description search
      const results = await db.select().from(photos)

      // Filter results manually for the mock DB
      return results.filter((photo) => {
        const searchText = `${photo.title} ${photo.description || ""}`.toLowerCase()
        const searchTerms = query.toLowerCase().split(/\s+/)
        return searchTerms.every((term) => searchText.includes(term))
      })
    } catch (error) {
      console.error(`Error searching photos with query "${query}":`, error)
      return []
    }
  }

  // Metoda pro získání počtu fotografií
  async getPhotosCount(filter?: Omit<PhotoFilter, "limit" | "offset" | "sortBy" | "sortOrder">): Promise<number> {
    return this.count(filter)
  }
}

