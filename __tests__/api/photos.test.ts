import { getPhotos, getPhotoById, createPhoto } from "@/lib/api/photos"
import { PhotoRepository } from "@/lib/repositories/photo-repository"
import { describe, beforeEach, it, expect, jest } from "@jest/globals"

// Mock the PhotoRepository
jest.mock("@/lib/repositories/photo-repository")

describe("Photos API", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("getPhotos", () => {
    it("should call repository.findAll with the provided filters", async () => {
      // Setup
      const mockPhotos = [{ id: 1, title: "Photo 1" }]
      const mockFindAll = jest.fn().mockResolvedValue(mockPhotos)
      ;(PhotoRepository as jest.Mock).mockImplementation(() => ({
        findAll: mockFindAll,
      }))

      // Execute
      const result = await getPhotos({ featured: true })

      // Verify
      expect(mockFindAll).toHaveBeenCalledWith({ featured: true })
      expect(result).toEqual(mockPhotos)
    })
  })

  describe("getPhotoById", () => {
    it("should call repository.findById with the provided id", async () => {
      // Setup
      const mockPhoto = { id: 1, title: "Photo 1" }
      const mockFindById = jest.fn().mockResolvedValue(mockPhoto)
      ;(PhotoRepository as jest.Mock).mockImplementation(() => ({
        findById: mockFindById,
      }))

      // Execute
      const result = await getPhotoById(1)

      // Verify
      expect(mockFindById).toHaveBeenCalledWith(1)
      expect(result).toEqual(mockPhoto)
    })
  })

  describe("createPhoto", () => {
    it("should call repository.create with the provided data", async () => {
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
      const mockCreate = jest.fn().mockResolvedValue(createdPhoto)
      ;(PhotoRepository as jest.Mock).mockImplementation(() => ({
        create: mockCreate,
      }))

      // Execute
      const result = await createPhoto(newPhoto)

      // Verify
      expect(mockCreate).toHaveBeenCalledWith(newPhoto)
      expect(result).toEqual(createdPhoto)
    })
  })

  // Additional tests for updatePhoto and deletePhoto would follow a similar pattern
})

