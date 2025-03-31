import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage"
import { getFirebaseStorage, isFirebaseInitialized, isDemoMode } from "@/lib/firebase-services"
import type { Photo } from "@/lib/firebase-config"

// Demo mode handling - generate mock URLs and data
const createMockUrl = (file: File) => {
  // For demo mode, create a data URL from the file
  return new Promise<string>((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(file)
  })
}

// Function to upload a photo to Firebase Storage
export const uploadPhotoToStorage = async (file: File, path = "photos"): Promise<{ url: string; fullPath: string }> => {
  // Handle demo mode
  if (isDemoMode()) {
    console.log("Running in demo mode. Storage operations will be simulated.")
    const mockUrl = await createMockUrl(file)
    return {
      url: mockUrl,
      fullPath: `${path}/${Date.now()}_${file.name}`,
    }
  }

  if (!isFirebaseInitialized()) {
    throw new Error("Firebase is not initialized")
  }

  const storage = getFirebaseStorage()
  if (!storage) {
    throw new Error("Firebase Storage is not available")
  }

  // Create a unique filename
  const timestamp = Date.now()
  const filename = `${timestamp}_${file.name.replace(/\s+/g, "_")}`
  const fullPath = `${path}/${filename}`

  // Create a reference to the file location
  const storageRef = ref(storage, fullPath)

  // Upload the file
  await uploadBytes(storageRef, file)

  // Get the download URL
  const url = await getDownloadURL(storageRef)

  return { url, fullPath }
}

// Function to delete a photo from Firebase Storage
export const deletePhotoFromStorage = async (fullPath: string): Promise<void> => {
  // Handle demo mode
  if (isDemoMode()) {
    console.log(`Demo: Deleting file at ${fullPath}`)
    return
  }

  if (!isFirebaseInitialized()) {
    throw new Error("Firebase is not initialized")
  }

  const storage = getFirebaseStorage()
  if (!storage) {
    throw new Error("Firebase Storage is not available")
  }

  const storageRef = ref(storage, fullPath)
  await deleteObject(storageRef)
}

// Function to list all photos in a directory
export const listPhotosFromStorage = async (path = "photos"): Promise<string[]> => {
  // Handle demo mode
  if (isDemoMode()) {
    return [
      "/placeholder.svg?height=800&width=600&text=Demo+Photo+1",
      "/placeholder.svg?height=600&width=800&text=Demo+Photo+2",
      "/placeholder.svg?height=700&width=700&text=Demo+Photo+3",
    ]
  }

  if (!isFirebaseInitialized()) {
    throw new Error("Firebase is not initialized")
  }

  const storage = getFirebaseStorage()
  if (!storage) {
    throw new Error("Firebase Storage is not available")
  }

  const storageRef = ref(storage, path)
  const result = await listAll(storageRef)

  // Get download URLs for all items
  const urls = await Promise.all(
    result.items.map(async (itemRef) => {
      return await getDownloadURL(itemRef)
    }),
  )

  return urls
}

// Update the uploadPhoto function to use Firebase Storage
export const uploadPhoto = async (
  file: File,
  photoData: Omit<Photo, "id" | "storageUrl" | "downloadUrl" | "thumbnailUrl"> = {
    title: file.name,
    category: "personal",
    aspectRatio: "square",
    dateCreated: new Date().toISOString(),
  },
): Promise<Photo> => {
  try {
    // Check if we're in demo mode
    if (isDemoMode()) {
      console.log("Running in demo mode. Photo upload will be simulated.")

      // Create a mock URL for the image
      const mockUrl = await createMockUrl(file)

      // Create the photo object with mock data
      const newPhoto: Photo = {
        id: Date.now().toString(),
        storageUrl: `demo/${Date.now()}_${file.name}`,
        downloadUrl: mockUrl,
        thumbnailUrl: mockUrl,
        ...photoData,
      }

      console.log("Demo photo created:", newPhoto)
      return newPhoto
    }

    // Upload to Firebase Storage
    const { url, fullPath } = await uploadPhotoToStorage(file)

    // Create the photo object
    const newPhoto: Photo = {
      id: Date.now().toString(), // This will be replaced with the Firestore document ID
      storageUrl: fullPath,
      downloadUrl: url,
      thumbnailUrl: url, // For simplicity, using the same URL for thumbnail
      ...photoData,
    }

    // In a real implementation, you would save this to Firestore here
    console.log("Photo uploaded successfully:", newPhoto)

    return newPhoto
  } catch (error) {
    console.error("Error uploading photo:", error)
    throw error
  }
}

