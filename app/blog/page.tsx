import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPublishedBlogPosts } from "@/lib/api/blog"
import { formatDate } from "@/lib/utils"
import { Clock } from "lucide-react"

export const revalidate = 0

export default async function BlogPage() {
  // Získání dat pomocí API funkcí
  const posts = await getPublishedBlogPosts()

  return (
    <>
      <section className="bg-muted/30 py-6 sm:py-12">
        <div className="container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Můj blog</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Moje myšlenky, příběhy a postřehy ze světa fotografie a kreativního života
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Připravuji pro vás zajímavé články</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Pracuji na několika inspirativních příspěvcích. Brzy se můžete těšit na nový obsah!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full">
                  <CardHeader className="pb-2 sm:pb-4">
                    {post.coverImageUrl && (
                      <div className="aspect-video rounded-md overflow-hidden mb-3 sm:mb-4">
                        <img
                          src={post.coverImageUrl || "/placeholder.svg"}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <CardTitle className="text-base sm:text-lg md:text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                      <CardDescription className="mr-1 sm:mr-2 text-xs sm:text-sm">
                        {formatDate(post.createdAt)}
                      </CardDescription>

                      {post.readingTime && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.readingTime}</span>
                        </div>
                      )}

                      {post.category && (
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2 sm:pb-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2 sm:gap-3 pt-0">
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-1.5 sm:mb-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{post.tags.length - 3}</span>
                        )}
                      </div>
                    )}
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="text-xs sm:text-sm">
                        Číst více
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

