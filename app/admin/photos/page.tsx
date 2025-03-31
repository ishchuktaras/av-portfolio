import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function PhotosAdminPage() {
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

      <div className="bg-muted/40 rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Your uploaded photos will appear here. Start by uploading a new photo.</p>
        <div className="mt-4">
          <Link href="/admin/photos/upload/test">
            <Button variant="outline">Test Upload Page</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

