import { BlogPostForm } from "@/components/blog-post-form"

export default function NewBlogPostPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Nový blogový příspěvek</h1>
      <BlogPostForm />
    </div>
  )
}

