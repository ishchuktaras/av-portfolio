"use server"

import { revalidatePath } from "next/cache"
import { createPhoto, updatePhoto, deletePhoto } from "@/lib/api/photos"
import type { NewPhoto } from "@/lib/schema"

/**
 * Server Action pro nahrání nové fotografie
 */
export async function uploadPhotoAction(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const categoryId = Number.parseInt(formData.get("categoryId") as string)
    const aspectRatio = formData.get("aspectRatio") as string
    const imageUrl = formData.get("imageUrl") as string
    const thumbnailUrl = formData.get("thumbnailUrl") as string
    const uploadKey = formData.get("uploadKey") as string
    const featured = formData.get("featured") === "on"

    const tagsString = formData.get("tags") as string
    const tags = tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    if (!title || !imageUrl || !uploadKey || !categoryId) {
      return { success: false, error: "Chybí povinné údaje" }
    }

    const photoData: NewPhoto = {
      title,
      description,
      categoryId,
      aspectRatio: aspectRatio || "square",
      imageUrl,
      thumbnailUrl: thumbnailUrl || imageUrl,
      uploadKey,
      featured,
      tags,
    }

    const photo = await createPhoto(photoData)

    revalidatePath("/admin/photos")
    revalidatePath("/portfolio")

    return { success: true, photo }
  } catch (error) {
    console.error("Error uploading photo:", error)
    return { success: false, error: "Nepodařilo se nahrát fotografii" }
  }
}

/**
 * Server Action pro aktualizaci fotografie
 */
export async function updatePhotoAction(id: number, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const categoryId = Number.parseInt(formData.get("categoryId") as string)
    const aspectRatio = formData.get("aspectRatio") as string
    const featured = formData.get("featured") === "on"

    const tagsString = formData.get("tags") as string
    const tags = tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    if (!title || !categoryId) {
      return { success: false, error: "Chybí povinné údaje" }
    }

    const photoData: Partial<NewPhoto> = {
      title,
      description,
      categoryId,
      aspectRatio,
      featured,
      tags,
    }

    const photo = await updatePhoto(id, photoData)

    revalidatePath("/admin/photos")
    revalidatePath(`/admin/photos/edit/${id}`)
    revalidatePath("/portfolio")
    revalidatePath(`/portfolio/${id}`)

    return { success: true, photo }
  } catch (error) {
    console.error(`Error updating photo ${id}:`, error)
    return { success: false, error: "Nepodařilo se aktualizovat fotografii" }
  }
}

/**
 * Server Action pro smazání fotografie
 */
export async function deletePhotoAction(id: number) {
  try {
    await deletePhoto(id)

    revalidatePath("/admin/photos")
    revalidatePath("/portfolio")

    return { success: true }
  } catch (error) {
    console.error(`Error deleting photo ${id}:`, error)
    return { success: false, error: "Nepodařilo se smazat fotografii" }
  }
}

/**
 * Server Action pro přepnutí featured stavu fotografie
 */
export async function togglePhotoFeaturedAction(id: number, featured: boolean) {
  try {
    const photo = await updatePhoto(id, { featured })

    revalidatePath("/admin/photos")
    revalidatePath("/portfolio")
    revalidatePath("/")

    return { success: true, photo }
  } catch (error) {
    console.error(`Error toggling featured state for photo ${id}:`, error)
    return { success: false, error: "Nepodařilo se změnit stav fotografie" }
  }
}

