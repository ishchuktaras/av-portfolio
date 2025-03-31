import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EditPhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Edit Photo {params.id}</h1>
        <Link href="/admin/photos">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to photos
          </Button>
        </Link>
      </div>

      <div className="p-8 border rounded-lg bg-muted/20">
        <p className="text-center text-muted-foreground">
          Edit form would go here. This is a placeholder to fix the build error.
        </p>
      </div>
    </div>
  )
}

