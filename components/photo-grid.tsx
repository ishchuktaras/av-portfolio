"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Edit, MoreVertical, Star, Trash2, Eye } from "lucide-react"
import type { Photo } from "@/lib/schema"

interface PhotoGridProps {
  photos: Photo[]
  isAdmin?: boolean
}

export function PhotoGrid({ photos, isAdmin = false }: PhotoGridProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [deletePhoto, setDeletePhoto] = useState<Photo | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!deletePhoto) return

    setIsDeleting(true)

    try {
      const response = await fetch(`/api/photos/${deletePhoto.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete photo")
      }

      toast({
        title: "Photo deleted",
        description: "The photo has been deleted successfully",
      })

      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete photo. Please try again.",
      })
    } finally {
      setIsDeleting(false)
      setDeletePhoto(null)
    }
  }

  const handleToggleFeatured = async (photo: Photo) => {
    try {
      const response = await fetch(`/api/photos/${photo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          featured: !photo.featured,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update photo")
      }

      toast({
        title: photo.featured ? "Removed from featured" : "Added to featured",
        description: photo.featured
          ? "The photo has been removed from featured photos"
          : "The photo has been added to featured photos",
      })

      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update photo. Please try again.",
      })
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden group">
            <AspectRatio
              ratio={photo.aspectRatio === "portrait" ? 3 / 4 : photo.aspectRatio === "landscape" ? 16 / 9 : 1 / 1}
            >
              <img
                src={photo.imageUrl || "/placeholder.svg"}
                alt={photo.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />

              {isAdmin && (
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/50 text-white hover:bg-black/70">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/photos/edit/${photo.id}`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleToggleFeatured(photo)}>
                        <Star className={`h-4 w-4 mr-2 ${photo.featured ? "fill-yellow-400" : ""}`} />
                        {photo.featured ? "Remove from featured" : "Add to featured"}
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/portfolio/${photo.id}`} target="_blank">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => setDeletePhoto(photo)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </AspectRatio>
            <CardContent className="p-3">
              <h3 className="font-medium truncate">{photo.title}</h3>
              {photo.category && <p className="text-sm text-muted-foreground">{photo.category}</p>}
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deletePhoto} onOpenChange={(open) => !open && setDeletePhoto(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the photo "{deletePhoto?.title}" from your
              portfolio.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

