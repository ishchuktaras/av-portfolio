"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRequireAuth } from "@/lib/auth-hooks"
import type { PhotoCategory, AspectRatio, Photo } from "@/lib/firebase-config"
import { Edit, ImageIcon, ArrowLeft } from "lucide-react"

interface EditPhotoFormProps {
  id: string
}

export function EditPhotoForm({ id }: EditPhotoFormProps) {
  const { isAuthenticated, loading } = useRequireAuth()
  const router = useRouter()
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState<PhotoCategory>("portraits")
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("square")
  const [tags, setTags] = useState("")
  const [featured, setFeatured] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock loading photo data - in a real app, you'd fetch from Firebase
    const loadPhoto = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock photo data
        const mockPhoto: Photo = {
          id,
          title: "Sample Photo",
          description: "This is a sample photo description",
          category: "portraits",
          aspectRatio: "square",
          storageUrl: "/path/to/photo.jpg",
          downloadUrl: "/placeholder.svg?height=800&width=800",
          thumbnailUrl: "/placeholder.svg?height=300&width=300",
          dateCreated: new Date().toISOString(),
          tags: ["sample", "demo"],
          featured: false,
        }

        setPhoto(mockPhoto)
        setTitle(mockPhoto.title)
        setDescription(mockPhoto.description || "")
        setCategory(mockPhoto.category)
        setAspectRatio(mockPhoto.aspectRatio)
        setTags(mockPhoto.tags?.join(", ") || "")
        setFeatured(mockPhoto.featured || false)
      } catch (err) {
        setError("Failed to load photo data")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated && !loading) {
      loadPhoto()
    }
  }, [id, isAuthenticated, loading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    setError(null)
    setSuccess(null)

    try {
      // Simulate update
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess("Photo was successfully updated")

      // Redirect to photos list after 2 seconds
      setTimeout(() => {
        router.push("/admin/photos")
      }, 2000)
    } catch (err) {
      console.error("Error updating:", err)
      setError("An error occurred while updating the photo")
    } finally {
      setIsUpdating(false)
    }
  }

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    router.push("/admin/login")
    return null
  }

  if (!photo && !isLoading) {
    return (
      <div>
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>Photo not found</AlertDescription>
        </Alert>
        <Link href="/admin/photos">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to photos
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin/photos">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to photos
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              Edit Photo
            </CardTitle>
            <CardDescription>Update photo information</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-primary/10 border-primary text-primary">
                <AlertDescription>{success}</AlertDescription>
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
                  disabled={isUpdating}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter photo description"
                  disabled={isUpdating}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category}
                  onValueChange={(value) => setCategory(value as PhotoCategory)}
                  disabled={isUpdating}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portraits">Portraits</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aspectRatio">Aspect Ratio</Label>
                <Select
                  value={aspectRatio}
                  onValueChange={(value) => setAspectRatio(value as AspectRatio)}
                  disabled={isUpdating}
                >
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
                  disabled={isUpdating}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                  disabled={isUpdating}
                />
                <Label htmlFor="featured">Featured photo</Label>
              </div>

              <Button type="submit" className="w-full" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Update Photo"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Preview
            </CardTitle>
            <CardDescription>Current photo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              {photo ? (
                <img
                  src={photo.downloadUrl || "/placeholder.svg"}
                  alt={photo.title}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-center p-8 text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>Photo not found</p>
                </div>
              )}
            </div>
            {photo && (
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Uploaded: {new Date(photo.dateCreated).toLocaleDateString()}</p>
                <p>Category: {photo.category}</p>
                <p>ID: {photo.id}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

