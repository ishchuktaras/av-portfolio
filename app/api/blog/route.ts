import { type NextRequest, NextResponse } from "next/server"
import { getBlogPosts, createBlogPost } from "@/lib/api/blog"
import { getAuthSession } from "@/lib/auth"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const published = searchParams.get("published") === "true"

    const posts = await getBlogPosts({ published })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
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
    const { title, slug, content, excerpt, coverImageUrl, published } = body

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newPost = await createBlogPost({
      title,
      slug,
      content,
      excerpt,
      coverImageUrl,
      published: published || false,
    })

    return NextResponse.json(newPost)
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

