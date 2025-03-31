import { BlogRepository, type BlogFilter } from "@/lib/repositories/blog-repository"
import type { BlogPost, NewBlogPost } from "@/lib/schema"

/**
 * API funkce pro práci s blog posty
 */
export async function getBlogPosts(filter?: BlogFilter): Promise<BlogPost[]> {
  const repo = new BlogRepository()
  return repo.findAll(filter)
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  const repo = new BlogRepository()
  return repo.findById(id)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const repo = new BlogRepository()
  return repo.findBySlug(slug)
}

export async function getPublishedBlogPosts(limit?: number): Promise<BlogPost[]> {
  const repo = new BlogRepository()
  return repo.getPublished(limit)
}

export async function createBlogPost(data: NewBlogPost): Promise<BlogPost> {
  const repo = new BlogRepository()
  return repo.create(data)
}

export async function updateBlogPost(id: number, data: Partial<NewBlogPost>): Promise<BlogPost> {
  const repo = new BlogRepository()
  return repo.update(id, data)
}

export async function deleteBlogPost(id: number): Promise<void> {
  const repo = new BlogRepository()
  return repo.delete(id)
}

