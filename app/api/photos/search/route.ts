import { type NextRequest, NextResponse } from "next/server"
import { searchPhotos } from "@/lib/api/photos"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get("q")

    if (!query) {
      return NextResponse.json({ error: "Missing search query" }, { status: 400 })
    }

    const photos = await searchPhotos(query)

    return NextResponse.json(photos)
  } catch (error) {
    console.error("Error searching photos:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

