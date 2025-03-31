import { PhotoRepository } from "@/lib/repositories/photo-repository"
import { getDb } from "@/lib/mock-db"
import { photos } from "@/lib/schema"
import { expect, jest, describe, beforeEach, afterEach, it } from "@jest/globals"

// Mock the database
jest.mock("@/lib/mock-db", () => ({
  getDb: jest.fn(),
}))

describe("PhotoRepository", () => {
  let repository: PhotoRepository
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
    repository = new PhotoRepository()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("findAll", () => {
    it("should return all photos", async () => {
      // Setup
      const mockPhotos = [
        { id: 1, title: "Photo 1" },
        { id: 2, title: "Photo 2" },
      ]
      mockDb.returning.mockResolvedValue(mockPhotos)

      // Execute
      const result = await repository.findAll()

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(photos)
      expect(mockDb.orderBy).toHaveBeenCalled()
      expect(result).toEqual(mockPhotos)
    })

    it("should apply filters when provided", async () => {
      // Setup
      const mockPhotos = [{ id: 1, title: "Featured Photo" }]
      mockDb.returning.mockResolvedValue(mockPhotos)

      // Execute
      const result = await repository.findAll({ featured: true, categoryId: 1 })

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(photos)
      expect(mockDb.where).toHaveBeenCalled()
      expect(result).toEqual(mockPhotos)
    })
  })

  describe("findById", () => {
    it("should return a photo by id", async () => {
      // Setup
      const mockPhoto = { id: 1, title: "Photo 1" }
      mockDb.returning.mockResolvedValue([mockPhoto])

      // Execute
      const result = await repository.findById(1)

      // Verify
      expect(mockDb.select).toHaveBeenCalled()
      expect(mockDb.from).toHaveBeenCalledWith(photos)
      expect(mockDb.where).toHaveBeenCalled()
      expect(mockDb.limit).toHaveBeenCalledWith(1)
      expect(result).toEqual(mockPhoto)
    })

    it("should return null if photo not found", async () => {
      // Setup
      mockDb.returning.mockResolvedValue([])

      // Execute
      const result = await repository.findById(999)

      // Verify
      expect(result).toBeNull()
    })
  })

  describe("create", () => {
    it("should create a new photo", async () => {
      // Setup
      const newPhoto = {
        title: "New Photo",
        categoryId: 1,
        aspectRatio: "square",
        imageUrl: "https://example.com/image.jpg",
        thumbnailUrl: "https://example.com/thumbnail.jpg",
        uploadKey: "key123",
      }
      const createdPhoto = { id: 1, ...newPhoto }
      mockDb.returning.mockResolvedValue([createdPhoto])

      // Execute
      const result = await repository.create(newPhoto)

      // Verify
      expect(mockDb.insert).toHaveBeenCalled()
      expect(mockDb.values).toHaveBeenCalledWith(newPhoto)
      expect(result).toEqual(createdPhoto)
    })
  })

  describe("update", () => {
    it("should update a photo", async () => {
      // Setup
      const updateData = { title: "Updated Title" }
      const updatedPhoto = { id: 1, title: "Updated Title" }
      mockDb.returning.mockResolvedValue([updatedPhoto])

      // Execute
      const result = await repository.update(1, updateData)

      // Verify
      expect(mockDb.update).toHaveBeenCalled()
      expect(mockDb.set).toHaveBeenCalled()
      expect(mockDb.where).toHaveBeenCalled()
      expect(result).toEqual(updatedPhoto)
    })

    it("should throw an error if photo not found", async () => {
      // Setup
      mockDb.returning.mockResolvedValue([])

      // Execute & Verify
      await expect(repository.update(999, { title: "New Title" })).rejects.toThrow("Photo with id 999 not found")
    })
  })

  describe("delete", () => {
    it("should delete a photo", async () => {
      // Setup
      mockDb.returning.mockResolvedValue({ success: true })

      // Execute
      await repository.delete(1)

      // Verify
      expect(mockDb.delete).toHaveBeenCalled()
      expect(mockDb.where).toHaveBeenCalled()
    })
  })
})

