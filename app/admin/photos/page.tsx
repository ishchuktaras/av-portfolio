import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Grid, ImageIcon } from "lucide-react"
import { db } from "@/lib/db"
import { photos, categories } from "@/lib/schema"
import { PhotoGrid } from "@/components/photo-grid"
import { CategoryFilter } from "@/components/category-filter"

export const revalidate = 0

export default async function PhotosAdminPage() {
  const allPhotos = await db.select().from(photos).orderBy(photos.createdAt)
  const allCategories = await db.select().from(categories)

  const featuredPhotos = allPhotos.filter((photo) => photo.featured)

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Photo Management</h1>
        <Link href="/admin/photos/upload">
          <Button className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload New Photo
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Grid className="h-4 w-4" />
              All Photos
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Featured
            </TabsTrigger>
          </TabsList>

          <CategoryFilter categories={allCategories} />
        </div>

        <TabsContent value="all">
          {allPhotos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No photos yet</h3>
                <p className="text-muted-foreground mb-4">Upload your first photo to get started</p>
                <Link href="/admin/photos/upload">
                  <Button>Upload Photo</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <PhotoGrid photos={allPhotos} isAdmin />
          )}
        </TabsContent>

        <TabsContent value="featured">
          {featuredPhotos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No featured photos</h3>
                <p className="text-muted-foreground mb-4">Mark photos as featured to display them here</p>
              </CardContent>
            </Card>
          ) : (
            <PhotoGrid photos={featuredPhotos} isAdmin />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

