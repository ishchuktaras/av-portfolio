import { getBlogPosts, getBlogPostBySlug } from "@/lib/api/blog"
import { BlogRepository } from "@/lib/repositories/blog-repository"
import { describe, beforeEach, it, expect, jest } from "@jest/globals"

// Mock the BlogRepository
jest.mock("@/lib/repositories/blog-repository")

describe("Blog API", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("getBlogPosts", () => {
    it("should call repository.findAll with the provided filters", async () => {
      // Setup
      const mockPosts = [{ id: 1, title: "Post 1" }]
      const mockFindAll = jest.fn().mockResolvedValue(mockPosts)
      ;(BlogRepository as jest.Mock).mockImplementation(() => ({
        findAll: mockFindAll,
      }))

      // Execute
      const result = await getBlogPosts({ published: true })

      // Verify
      expect(mockFindAll).toHaveBeenCalledWith({ published: true })
      expect(result).toEqual(mockPosts)
    })
  })

  describe("getBlogPostBySlug", () => {
    it("should call repository.findBySlug with the provided slug", async () => {
      // Setup
      const mockPost = { id: 1, title: "Post 1", slug: "post-1" }
      const mockFindBySlug = jest.fn().mockResolvedValue(mockPost)
      ;(BlogRepository as jest.Mock).mockImplementation(() => ({
        findBySlug: mockFindBySlug,
      }))

      // Execute
      const result = await getBlogPostBySlug("post-1")

      // Verify
      expect(mockFindBySlug).toHaveBeenCalledWith("post-1")
      expect(result).toEqual(mockPost)
    })
  })

  // Additional tests for createBlogPost, updateBlogPost, and deleteBlogPost would follow a similar pattern
})

