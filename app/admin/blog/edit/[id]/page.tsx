import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { blogPosts } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { BlogPostForm } from "@/components/blog-post-form"

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const post = await db.query.blogPosts.findFirst({
    where: eq(blogPosts.id, Number.parseInt(params.id)),
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <BlogPostForm post={post} />
    </div>
  )
}

