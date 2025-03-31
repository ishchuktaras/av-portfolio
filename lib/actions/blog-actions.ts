"use server"

import { revalidatePath } from "next/cache"
import { createBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/api/blog"
import type { NewBlogPost } from "@/lib/schema"

/**
 * Server Action pro vytvoření nového blog postu
 */
export async function createBlogPostAction(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const coverImageUrl = formData.get("coverImageUrl") as string
    const published = formData.get("published") === "on"

    if (!title || !slug || !content) {
      return { success: false, error: "Chybí povinné údaje" }
    }

    const postData: NewBlogPost = {
      title,
      slug,
      content,
      excerpt,
      coverImageUrl,
      published,
    }

    const post = await createBlogPost(postData)

    revalidatePath("/admin/blog")
    revalidatePath("/blog")

    return { success: true, post }
  } catch (error) {
    console.error("Error creating blog post:", error)
    return { success: false, error: "Nepodařilo se vytvořit blog post" }
  }
}

/**
 * Server Action pro aktualizaci blog postu
 */
export async function updateBlogPostAction(id: number, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const coverImageUrl = formData.get("coverImageUrl") as string
    const published = formData.get("published") === "on"

    if (!title || !slug || !content) {
      return { success: false, error: "Chybí povinné údaje" }
    }

    const postData: Partial<NewBlogPost> = {
      title,
      slug,
      content,
      excerpt,
      coverImageUrl,
      published,
    }

    const post = await updateBlogPost(id, postData)

    revalidatePath("/admin/blog")
    revalidatePath(`/admin/blog/edit/${id}`)
    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)

    return { success: true, post }
  } catch (error) {
    console.error(`Error updating blog post ${id}:`, error)
    return { success: false, error: "Nepodařilo se aktualizovat blog post" }
  }
}

/**
 * Server Action pro smazání blog postu
 */
export async function deleteBlogPostAction(id: number) {
  try {
    await deleteBlogPost(id)

    revalidatePath("/admin/blog")
    revalidatePath("/blog")

    return { success: true }
  } catch (error) {
    console.error(`Error deleting blog post ${id}:`, error)
    return { success: false, error: "Nepodařilo se smazat blog post" }
  }
}

/**
 * Server Action pro přepnutí published stavu blog postu
 */
export async function toggleBlogPostPublishedAction(id: number, published: boolean) {
  try {
    const post = await updateBlogPost(id, { published })

    revalidatePath("/admin/blog")
    revalidatePath("/blog")

    return { success: true, post }
  } catch (error) {
    console.error(`Error toggling published state for blog post ${id}:`, error)
    return { success: false, error: "Nepodařilo se změnit stav blog postu" }
  }
}

