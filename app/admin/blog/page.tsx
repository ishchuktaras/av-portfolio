import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"
import { blogPosts } from "@/lib/schema"
import { formatDate } from "@/lib/utils"
import { Edit, Eye, Plus } from "lucide-react"

export const revalidate = 0

export default async function AdminBlogPage() {
  const posts = await db.select().from(blogPosts).orderBy(blogPosts.createdAt)

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Správa blogu</h1>
        <Link href="/admin/blog/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nový příspěvek
          </Button>
        </Link>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <h3 className="text-lg font-medium mb-2">Zatím nemáte žádné příspěvky</h3>
            <p className="text-muted-foreground mb-4">
              Vytvořte svůj první blogový příspěvek a sdílejte své fotografické zkušenosti
            </p>
            <Link href="/admin/blog/new">
              <Button>Vytvořit příspěvek</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>
                      {formatDate(post.createdAt)} • {post.published ? "Publikováno" : "Koncept"}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/blog/edit/${post.id}`}>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Edit className="h-3 w-3" />
                        Upravit
                      </Button>
                    </Link>
                    {post.published && (
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          Zobrazit
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt || post.content.substring(0, 150) + "..."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

