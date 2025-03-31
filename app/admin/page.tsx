import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon, FileText, User } from "lucide-react"
import { getDb } from "@/lib/mock-db"
import { photos, blogPosts } from "@/lib/schema"
import { count } from "drizzle-orm"

export const revalidate = 0

export default async function AdminPage() {
  let photoCount = [{ count: 0 }]
  let blogCount = [{ count: 0 }]

  try {
    const db = getDb()

    // Try to get counts, handle potential errors
    try {
      photoCount = await db.select({ count: count() }).from(photos)
    } catch (error) {
      console.error("Error fetching photo count:", error)
      // Use mock data
      photoCount = [{ count: 2 }] // Assuming we have 2 mock photos
    }

    try {
      blogCount = await db.select({ count: count() }).from(blogPosts)
    } catch (error) {
      console.error("Error fetching blog count:", error)
      // Use mock data
      blogCount = [{ count: 2 }] // Assuming we have 2 mock blog posts
    }
  } catch (error) {
    console.error("Database error:", error)
    // Use default values if there's an error
    photoCount = [{ count: 2 }]
    blogCount = [{ count: 2 }]
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/photos">
          <Card className="hover:bg-muted/20 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Photos</CardTitle>
              </div>
              <CardDescription>Manage your photo portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{photoCount[0]?.count || 0}</div>
              <p className="text-sm text-muted-foreground">Total photos in your portfolio</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/blog">
          <Card className="hover:bg-muted/20 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Blog</CardTitle>
              </div>
              <CardDescription>Manage your blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogCount[0]?.count || 0}</div>
              <p className="text-sm text-muted-foreground">Total blog posts</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/profile">
          <Card className="hover:bg-muted/20 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Profile</CardTitle>
              </div>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Manage your personal information and settings</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

