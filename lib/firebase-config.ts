// Firebase configuration types and utilities

// Photo types
export type PhotoCategory = "portraits" | "fashion" | "creative" | "events" | "commercial" | "personal"
export type AspectRatio = "portrait" | "landscape" | "square"

export interface Photo {
  id: string
  title: string
  description?: string
  category: PhotoCategory
  aspectRatio: AspectRatio
  storageUrl: string
  downloadUrl: string
  thumbnailUrl: string
  dateCreated: string
  tags?: string[]
  featured?: boolean
}

// Firebase configuration
export function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }
}

