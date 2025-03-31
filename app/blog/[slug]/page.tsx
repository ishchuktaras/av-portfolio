import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getBlogPostBySlug } from "@/lib/api/blog"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Příspěvek nenalezen",
    }
  }

  return {
    title: `${post.title} | Blog Anheliny Vavzhyniak`,
    description: post.excerpt || post.content.substring(0, 160),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="container py-12 max-w-4xl">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 -ml-4 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Zpět na blog
        </Button>
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
            <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>

            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} čtení</span>
              </div>
            )}

            {post.category && <Badge variant="secondary">{post.category}</Badge>}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {post.coverImageUrl && (
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={post.coverImageUrl || "/placeholder.svg"}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="blog-content prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

