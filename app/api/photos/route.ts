import { type NextRequest, NextResponse } from "next/server"
import { getPhotos, createPhoto } from "@/lib/api/photos"
import { getAuthSession } from "@/lib/auth"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const categoryId = searchParams.get("category") ? Number.parseInt(searchParams.get("category")!) : undefined
    const featured = searchParams.get("featured") === "true"

    const photos = await getPhotos({
      categoryId,
      featured,
    })

    return NextResponse.json(photos)
  } catch (error) {
    console.error("Error fetching photos:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession()

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { title, description, categoryId, aspectRatio, imageUrl, thumbnailUrl, uploadKey, featured, tags } = body

    if (!title || !imageUrl || !uploadKey) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newPhoto = await createPhoto({
      title,
      description,
      categoryId,
      aspectRatio,
      imageUrl,
      thumbnailUrl,
      uploadKey,
      featured: featured || false,
      tags,
    })

    return NextResponse.json(newPhoto)
  } catch (error) {
    console.error("Error creating photo:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

