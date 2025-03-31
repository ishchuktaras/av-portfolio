import { eq, desc, and } from "drizzle-orm"
import { blogPosts } from "@/lib/schema"
import type { BlogPost, NewBlogPost } from "@/lib/schema"
import type { BaseRepository } from "./base-repository"
import { getDb } from "@/lib/mock-db"

export interface BlogFilter {
  published?: boolean
  limit?: number
}

/**
 * Repository pro práci s blog posty
 */
export class BlogRepository implements BaseRepository<BlogPost, NewBlogPost> {
  async findAll(filter?: BlogFilter): Promise<BlogPost[]> {
    const db = getDb()

    try {
      let query = db.select().from(blogPosts)

      // Aplikace filtrů
      if (filter) {
        const conditions = []

        if (filter.published !== undefined) {
          conditions.push(eq(blogPosts.published, filter.published))
        }

        if (conditions.length > 0) {
          query = query.where(and(...conditions))
        }
      }

      // Řazení a limit
      query = query.orderBy(desc(blogPosts.createdAt))

      if (filter?.limit) {
        query = query.limit(filter.limit)
      }

      return await query
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      return []
    }
  }

  async findById(id: number): Promise<BlogPost | null> {
    const db = getDb()

    try {
      const results = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1)
      return results.length > 0 ? results[0] : null
    } catch (error) {
      console.error(`Error fetching blog post with id ${id}:`, error)
      return null
    }
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    const db = getDb()

    try {
      if ("query" in db && db.query.blogPosts && db.query.blogPosts.findFirst) {
        // Use the query API if available (for mock DB)
        return await db.query.blogPosts.findFirst({
          where: { slug: slug },
        })
      } else {
        // Fallback to standard query
        const results = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1)
        return results.length > 0 ? results[0] : null
      }
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error)

      // Fallback to manual search in mock data for development
      try {
        const allPosts = await this.findAll()
        return allPosts.find((post) => post.slug === slug) || null
      } catch (innerError) {
        console.error(`Fallback search also failed for slug ${slug}:`, innerError)
        return null
      }
    }
  }

  async create(data: NewBlogPost): Promise<BlogPost> {
    const db = getDb()

    try {
      const result = await db.insert(blogPosts).values(data).returning()
      return result[0]
    } catch (error) {
      console.error("Error creating blog post:", error)
      throw new Error("Failed to create blog post")
    }
  }

  async update(id: number, data: Partial<NewBlogPost>): Promise<BlogPost> {
    const db = getDb()

    try {
      const result = await db
        .update(blogPosts)
        .set({
          ...data,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(blogPosts.id, id))
        .returning()

      if (result.length === 0) {
        throw new Error(`Blog post with id ${id} not found`)
      }

      return result[0]
    } catch (error) {
      console.error(`Error updating blog post with id ${id}:`, error)
      throw new Error("Failed to update blog post")
    }
  }

  async delete(id: number): Promise<void> {
    const db = getDb()

    try {
      await db.delete(blogPosts).where(eq(blogPosts.id, id))
    } catch (error) {
      console.error(`Error deleting blog post with id ${id}:`, error)
      throw new Error("Failed to delete blog post")
    }
  }

  async getPublished(limit?: number): Promise<BlogPost[]> {
    return this.findAll({ published: true, limit })
  }
}

