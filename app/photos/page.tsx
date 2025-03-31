import { getServerPhotos } from "@/lib/server-data"
import { PhotoGrid } from "@/components/photo-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fotografie | Fotografické portfolio",
  description: "Prohlédněte si mé fotografické portfolio.",
}

export default async function PhotosPage() {
  // Use server-safe data fetching
  const photos = await getServerPhotos()

  return (
    <div className="container py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Fotografie</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Všechny</TabsTrigger>
          <TabsTrigger value="portraits" asChild>
            <a href="/photos/portrety">Portréty</a>
          </TabsTrigger>
          <TabsTrigger value="fashion" asChild>
            <a href="/photos/moda">Móda</a>
          </TabsTrigger>
          <TabsTrigger value="creative" asChild>
            <a href="/photos/kreativni">Kreativní</a>
          </TabsTrigger>
          <TabsTrigger value="events" asChild>
            <a href="/photos/udalosti">Události</a>
          </TabsTrigger>
          <TabsTrigger value="commercial" asChild>
            <a href="/photos/komercni">Komerční</a>
          </TabsTrigger>
          <TabsTrigger value="personal" asChild>
            <a href="/photos/osobni">Osobní</a>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {photos.length > 0 ? (
            <PhotoGrid photos={photos} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Žádné fotografie k zobrazení</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

