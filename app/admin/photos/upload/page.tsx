"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UploadButton } from "@/components/upload-button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowLeft } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { uploadPhotoAction } from "@/lib/actions/photo-actions"

export default function UploadPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("1")
  const [aspectRatio, setAspectRatio] = useState("square")
  const [tags, setTags] = useState("")
  const [featured, setFeatured] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [uploadKey, setUploadKey] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUploadComplete = (url: string, key: string) => {
    setImageUrl(url)
    setUploadKey(key)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!imageUrl) {
      setError("Please select an image to upload.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Vytvoření FormData objektu
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("categoryId", category)
      formData.append("aspectRatio", aspectRatio)
      formData.append("imageUrl", imageUrl)
      formData.append("thumbnailUrl", imageUrl) // Pro jednoduchost používáme stejné URL
      formData.append("uploadKey", uploadKey)
      formData.append("featured", featured ? "on" : "off")
      formData.append("tags", tags)

      // Použití Server Action
      const result = await uploadPhotoAction(formData)

      if (!result.success) {
        throw new Error(result.error || "Failed to save photo")
      }

      toast({
        title: "Success!",
        description: "Photo uploaded successfully",
      })

      // Přesměrování na seznam fotografií
      router.push("/admin/photos")
      router.refresh()
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Upload New Photo</h1>
        <Link href="/admin/photos">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Photos
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Photo Details</CardTitle>
            <CardDescription>Enter information about your photo</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter photo title"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter photo description"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory} disabled={isSubmitting}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Portréty</SelectItem>
                    <SelectItem value="2">Módní</SelectItem>
                    <SelectItem value="3">Kreativní</SelectItem>
                    <SelectItem value="4">Svatební</SelectItem>
                    <SelectItem value="5">Rodinné</SelectItem>
                    <SelectItem value="6">Boudoir</SelectItem>
                    <SelectItem value="7">Krajina</SelectItem>
                    <SelectItem value="8">Pouliční</SelectItem>
                    <SelectItem value="9">Architektura</SelectItem>
                    <SelectItem value="10">Produktové</SelectItem>
                    <SelectItem value="11">Události</SelectItem>
                    <SelectItem value="12">Cestovní</SelectItem>
                    <SelectItem value="13">Černobílé</SelectItem>
                    <SelectItem value="14">Konceptuální</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aspectRatio">Aspect Ratio</Label>
                <Select value={aspectRatio} onValueChange={setAspectRatio} disabled={isSubmitting}>
                  <SelectTrigger id="aspectRatio">
                    <SelectValue placeholder="Select aspect ratio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="portrait, black and white, studio"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                  disabled={isSubmitting}
                />
                <Label htmlFor="featured">Featured photo</Label>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || !imageUrl}>
                {isSubmitting ? "Saving..." : "Save Photo"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
            <CardDescription>Upload your photo (max 8MB)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!imageUrl ? (
              <div className="border rounded-md p-4">
                <UploadButton onUploadComplete={handleUploadComplete} isUploading={isSubmitting} />
              </div>
            ) : (
              <div className="space-y-4">
                <AspectRatio ratio={aspectRatio === "portrait" ? 3 / 4 : aspectRatio === "landscape" ? 16 / 9 : 1 / 1}>
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Preview"
                    className="rounded-md object-cover w-full h-full"
                  />
                </AspectRatio>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setImageUrl("")
                    setUploadKey("")
                  }}
                  disabled={isSubmitting}
                >
                  Change Image
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

