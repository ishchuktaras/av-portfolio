import { BlogRepository } from "@/lib/repositories/blog-repository"
import { getDb } from "@/lib/mock-db"
import { blogPosts } from "@/lib/schema"
import { expect, jest, describe, beforeEach, afterEach, it } from "@jest/globals"

// Mock the database
jest.mock("@/lib/mock-db", () => ({
  getDb: jest.fn(),
}))

describe("BlogRepository", () => {
  let repository: BlogRepository
  let mockDb: any

  beforeEach(() => {
    // Create a mock database with methods we can spy on
    mockDb = {
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      values: jest.fn().mockReturnThis(),
      returning: jest.fn(),
      update: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
    }

    // Make getDb return our mock
    ;(getDb as jest.Mock).mockReturnValue(mockDb)

    // Create a new repository instance for each test
    repository = new BlogRepository()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("findAll", () => {
    it("should return all blog posts", async () => {
      // Setup
      const mockPosts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]
      mockDb.returning.mockResolvedValue(mockPosts)

      // Execute
      const result = await repository.findAll()

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(blogPosts)
      expect(mockDb.orderBy).toHaveBeenCalled()
      expect(result).toEqual(mockPosts)
    })

    it("should filter by published status when provided", async () => {
      // Setup
      const mockPosts = [{ id: 1, title: "Published Post" }]
      mockDb.returning.mockResolvedValue(mockPosts)

      // Execute
      const result = await repository.findAll({ published: true })

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(blogPosts)
      expect(mockDb.where).toHaveBeenCalled()
      expect(result).toEqual(mockPosts)
    })
  })

  describe("findBySlug", () => {
    it("should return a blog post by slug", async () => {
      // Setup
      const mockPost = { id: 1, title: "Post 1", slug: "post-1" }
      mockDb.returning.mockResolvedValue([mockPost])

      // Execute
      const result = await repository.findBySlug("post-1")

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(blogPosts)
      expect(mockDb.where).toHaveBeenCalled()
      expect(mockDb.limit).toHaveBeenCalledWith(1)
      expect(result).toEqual(mockPost)
    })

    it("should return null if blog post not found", async () => {
      // Setup
      mockDb.returning.mockResolvedValue([])

      // Execute
      const result = await repository.findBySlug("non-existent")

      // Verify
      expect(result).toBeNull()
    })
  })

  // Additional tests for create, update, delete methods would follow a similar pattern
})

