import type { Photo, PhotoCategory } from "@/lib/firebase-config"

// Demo photos for server-side rendering
const SERVER_DEMO_PHOTOS: Photo[] = [
  {
    id: "server-demo1",
    storageUrl: "photos/demo1.jpg",
    title: "Ukázkový portrét",
    description: "Toto je ukázkový portrét pro server-side rendering",
    category: "portraits",
    aspectRatio: "portrait",
    tags: ["demo", "portrét"],
    featured: true,
    dateCreated: new Date().toISOString(),
    downloadUrl: "/placeholder.svg?height=800&width=600",
    thumbnailUrl: "/placeholder.svg?height=400&width=300",
    width: 600,
    height: 800,
  },
  {
    id: "server-demo2",
    storageUrl: "photos/demo2.jpg",
    title: "Ukázková móda",
    description: "Toto je ukázková fotografie módy pro server-side rendering",
    category: "fashion",
    aspectRatio: "landscape",
    tags: ["demo", "móda"],
    featured: false,
    dateCreated: new Date().toISOString(),
    downloadUrl: "/placeholder.svg?height=600&width=800",
    thumbnailUrl: "/placeholder.svg?height=300&width=400",
    width: 800,
    height: 600,
  },
  {
    id: "server-demo3",
    storageUrl: "photos/demo3.jpg",
    title: "Kreativní fotografie",
    description: "Toto je ukázková kreativní fotografie pro server-side rendering",
    category: "creative",
    aspectRatio: "square",
    tags: ["demo", "kreativní"],
    featured: true,
    dateCreated: new Date().toISOString(),
    downloadUrl: "/placeholder.svg?height=700&width=700",
    thumbnailUrl: "/placeholder.svg?height=350&width=350",
    width: 700,
    height: 700,
  },
]

// Server-safe functions that don't attempt to access Firebase
export const getServerPhotos = async (): Promise<Photo[]> => {
  console.log("Using server-safe getServerPhotos function")
  return SERVER_DEMO_PHOTOS
}

export const getServerPhotosByCategory = async (category: PhotoCategory): Promise<Photo[]> => {
  console.log(`Using server-safe getServerPhotosByCategory function for ${category}`)
  return SERVER_DEMO_PHOTOS.filter((photo) => photo.category === category)
}

export const getServerFeaturedPhotos = async (): Promise<Photo[]> => {
  console.log("Using server-safe getServerFeaturedPhotos function")
  return SERVER_DEMO_PHOTOS.filter((photo) => photo.featured)
}

