import { type NextRequest, NextResponse } from "next/server"
import { getPhotoById, updatePhoto, deletePhoto } from "@/lib/api/photos"
import { getAuthSession } from "@/lib/auth"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const photo = await getPhotoById(id)

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 })
    }

    return NextResponse.json(photo)
  } catch (error) {
    console.error(`Error fetching photo ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getAuthSession()

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const body = await req.json()

    const updatedPhoto = await updatePhoto(id, body)

    return NextResponse.json(updatedPhoto)
  } catch (error) {
    console.error(`Error updating photo ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getAuthSession()

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    await deletePhoto(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(`Error deleting photo ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

