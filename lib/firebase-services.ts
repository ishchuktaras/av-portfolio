import { initializeApp, getApps, type FirebaseApp } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"
import { getStorage, type FirebaseStorage } from "firebase/storage"
import { getAuth, type Auth } from "firebase/auth"

// Variables for services
let app: FirebaseApp | null = null
let db: Firestore | null = null
let storage: FirebaseStorage | null = null
let auth: Auth | null = null
let isInitialized = false
let isDemo = false

// Safe initialization of Firebase
export const initializeFirebase = () => {
  try {
    // Check if Firebase is already initialized
    if (getApps().length > 0) {
      app = getApps()[0]
      isInitialized = true
      console.log("Firebase was already initialized")

      // Initialize services
      db = getFirestore(app)
      storage = getStorage(app)
      auth = getAuth(app)

      return true
    }

    // Get Firebase config from environment variables
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    }

    // Check if we have a valid configuration
    if (!firebaseConfig.apiKey) {
      console.warn("Firebase API key is missing - switching to demo mode")
      isDemo = true
      return false
    }

    // Initialize Firebase
    app = initializeApp(firebaseConfig)
    console.log("Firebase was successfully initialized")

    // Initialize services
    db = getFirestore(app)
    storage = getStorage(app)
    auth = getAuth(app)

    isInitialized = true
    return true
  } catch (error) {
    console.error("Error initializing Firebase:", error)
    isDemo = true
    return false
  }
}

// Initialize Firebase on module load
initializeFirebase()

// Safe exports
export const getFirebaseApp = () => app
export const getFirestoreDb = () => db
export const getFirebaseStorage = () => storage
export const getFirebaseAuth = () => auth
export const isFirebaseInitialized = () => isInitialized
export const isDemoMode = () => isDemo

