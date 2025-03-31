import { uploadPhotoAction } from "@/lib/actions/photo-actions"
import { createPhoto } from "@/lib/api/photos"
import { revalidatePath } from "next/cache"
import { describe, beforeEach, it, expect, jest } from "@jest/globals"

// Mock the API functions and revalidatePath
jest.mock("@/lib/api/photos")
jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}))

describe("Photo Actions", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("uploadPhotoAction", () => {
    it("should create a photo and revalidate paths on success", async () => {
      // Setup
      const formData = new FormData()
      formData.append("title", "Test Photo")
      formData.append("categoryId", "1")
      formData.append("aspectRatio", "square")
      formData.append("imageUrl", "https://example.com/image.jpg")
      formData.append("thumbnailUrl", "https://example.com/thumbnail.jpg")
      formData.append("uploadKey", "key123")
      formData.append("tags", "test, photo")

      const createdPhoto = {
        id: 1,
        title: "Test Photo",
        categoryId: 1,
        aspectRatio: "square",
        imageUrl: "https://example.com/image.jpg",
        thumbnailUrl: "https://example.com/thumbnail.jpg",
        uploadKey: "key123",
        tags: ["test", "photo"],
      }
      ;(createPhoto as jest.Mock).mockResolvedValue(createdPhoto)

      // Execute
      const result = await uploadPhotoAction(formData)

      // Verify
      expect(createPhoto).toHaveBeenCalled()
      expect(revalidatePath).toHaveBeenCalledWith("/admin/photos")
      expect(revalidatePath).toHaveBeenCalledWith("/portfolio")
      expect(result).toEqual({ success: true, photo: createdPhoto })
    })

    it("should return an error if required fields are missing", async () => {
      // Setup
      const formData = new FormData()
      formData.append("title", "Test Photo")
      // Missing required fields

      // Execute
      const result = await uploadPhotoAction(formData)

      // Verify
      expect(createPhoto).not.toHaveBeenCalled()
      expect(result).toEqual({ success: false, error: "Chybí povinné údaje" })
    })
  })

  // Additional tests for updatePhotoAction and deletePhotoAction would follow a similar pattern
})

