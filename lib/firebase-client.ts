import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  type Firestore,
} from "firebase/firestore"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  updateMetadata,
  getMetadata,
  type FirebaseStorage,
} from "firebase/storage"
import { getFirestoreDb, getFirebaseStorage, isFirebaseInitialized, isDemoMode } from "@/lib/firebase-services"
import type { Photo, PhotoCategory } from "@/lib/firebase-config"

// Ukázková data pro demo režim
const DEMO_PHOTOS: Photo[] = [
  {
    id: "demo1",
    storageUrl: "photos/demo1.jpg",
    title: "Ukázkový portrét",
    description: "Toto je ukázkový portrét v demo režimu",
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
    id: "demo2",
    storageUrl: "photos/demo2.jpg",
    title: "Ukázková móda",
    description: "Toto je ukázková fotografie módy v demo režimu",
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
    id: "demo3",
    storageUrl: "photos/demo3.jpg",
    title: "Kreativní fotografie",
    description: "Toto je ukázková kreativní fotografie v demo režimu",
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

// Bezpečné získání Firestore instance
const getDb = (): Firestore => {
  const db = getFirestoreDb()
  if (!db) {
    throw new Error("Firestore není k dispozici. Zkontrolujte proměnné prostředí.")
  }
  return db
}

// Bezpečné získání Storage instance
const getStorage = (): FirebaseStorage => {
  const storage = getFirebaseStorage()
  if (!storage) {
    throw new Error("Firebase Storage není k dispozici. Zkontrolujte proměnné prostředí.")
  }
  return storage
}

// Kontrola, zda je Firebase inicializována před provedením operace
const checkFirebaseInitialized = () => {
  if (!isFirebaseInitialized() && !isDemoMode()) {
    throw new Error("Firebase není správně inicializována. Zkontrolujte proměnné prostředí.")
  }
}

// Získání všech fotografií
export const getPhotos = async (): Promise<Photo[]> => {
  checkFirebaseInitialized()

  // V demo režimu vracíme ukázková data
  if (isDemoMode()) {
    return DEMO_PHOTOS
  }

  try {
    const db = getDb()
    const photos: Photo[] = []
    const querySnapshot = await getDocs(collection(db, "photos"))
    querySnapshot.forEach((doc) => {
      photos.push({ id: doc.id, ...doc.data() } as Photo)
    })
    return photos
  } catch (error) {
    console.error("Chyba při načítání fotografií:", error)
    return []
  }
}

// Získání fotografií podle kategorie
export const getPhotosByCategory = async (category: PhotoCategory): Promise<Photo[]> => {
  checkFirebaseInitialized()

  // V demo režimu vracíme ukázková data filtrovaná podle kategorie
  if (isDemoMode()) {
    return DEMO_PHOTOS.filter((photo) => photo.category === category)
  }

  try {
    const db = getDb()
    const photos: Photo[] = []
    const q = query(collection(db, "photos"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      photos.push({ id: doc.id, ...doc.data() } as Photo)
    })
    return photos
  } catch (error) {
    console.error(`Chyba při načítání fotografií kategorie ${category}:`, error)
    return []
  }
}

// Získání vybraných fotografií
export const getFeaturedPhotos = async (): Promise<Photo[]> => {
  checkFirebaseInitialized()

  // V demo režimu vracíme ukázková data filtrovaná podle featured
  if (isDemoMode()) {
    return DEMO_PHOTOS.filter((photo) => photo.featured)
  }

  try {
    const db = getDb()
    const photos: Photo[] = []
    const q = query(collection(db, "photos"), where("featured", "==", true))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      photos.push({ id: doc.id, ...doc.data() } as Photo)
    })
    return photos
  } catch (error) {
    console.error("Chyba při načítání vybraných fotografií:", error)
    return []
  }
}

// Nahrání nové fotografie
export const uploadPhoto = async (
  file: File,
  photoData: Omit<Photo, "id" | "storageUrl" | "downloadUrl" | "thumbnailUrl">,
): Promise<Photo> => {
  checkFirebaseInitialized()

  // V demo režimu simulujeme nahrání fotografie
  if (isDemoMode()) {
    const newId = `demo${Date.now()}`
    const newPhoto: Photo = {
      id: newId,
      storageUrl: `photos/${file.name}`,
      downloadUrl: URL.createObjectURL(file),
      thumbnailUrl: URL.createObjectURL(file),
      dateCreated: new Date().toISOString(),
      ...photoData,
    }

    // Přidáme novou fotografii do demo dat
    DEMO_PHOTOS.push(newPhoto)

    return newPhoto
  }

  try {
    const db = getDb()
    const storage = getStorage()

    // Vytvoření reference pro soubor v Firebase Storage
    const storageRef = ref(storage, `photos/${file.name}`)

    // Nahrání souboru
    await uploadBytes(storageRef, file)

    // Získání URL pro stažení
    const downloadUrl = await getDownloadURL(storageRef)

    // Vytvoření záznamu v Firestore
    const newPhoto = {
      ...photoData,
      storageUrl: `photos/${file.name}`,
      downloadUrl,
      thumbnailUrl: downloadUrl, // Pro jednoduchost používáme stejné URL
      dateCreated: new Date().toISOString(),
    }

    const docRef = await addDoc(collection(db, "photos"), newPhoto)

    return {
      id: docRef.id,
      ...newPhoto,
    }
  } catch (error) {
    console.error("Chyba při nahrávání fotografie:", error)
    throw error
  }
}

// Aktualizace fotografie
export const updatePhoto = async (id: string, photoData: Partial<Photo>): Promise<void> => {
  checkFirebaseInitialized()

  // V demo režimu simulujeme aktualizaci fotografie
  if (isDemoMode()) {
    const index = DEMO_PHOTOS.findIndex((photo) => photo.id === id)
    if (index !== -1) {
      DEMO_PHOTOS[index] = { ...DEMO_PHOTOS[index], ...photoData }
    }
    return
  }

  try {
    const db = getDb()
    const photoRef = doc(db, "photos", id)
    await updateDoc(photoRef, photoData)
  } catch (error) {
    console.error(`Chyba při aktualizaci fotografie ${id}:`, error)
    throw error
  }
}

// Aktualizace metadat fotografie v Firebase Storage
export const updatePhotoMetadata = async (storageUrl: string, metadata: Record<string, string>): Promise<void> => {
  checkFirebaseInitialized()

  // V demo režimu simulujeme aktualizaci metadat
  if (isDemoMode()) {
    console.log(`Demo: Aktualizace metadat pro ${storageUrl}`, metadata)
    return
  }

  try {
    const storage = getStorage()
    const fileRef = ref(storage, storageUrl)

    // Získání aktuálních metadat
    const currentMetadata = await getMetadata(fileRef)

    // Sloučení aktuálních a nových metadat
    const newMetadata = {
      ...currentMetadata,
      customMetadata: {
        ...currentMetadata.customMetadata,
        ...metadata,
      },
    }

    // Aktualizace metadat
    await updateMetadata(fileRef, newMetadata)
  } catch (error) {
    console.error(`Chyba při aktualizaci metadat pro ${storageUrl}:`, error)
    throw error
  }
}

// Smazání fotografie
export const deletePhoto = async (photo: Photo): Promise<void> => {
  checkFirebaseInitialized()

  // V demo režimu simulujeme smazání fotografie
  if (isDemoMode()) {
    const index = DEMO_PHOTOS.findIndex((p) => p.id === photo.id)
    if (index !== -1) {
      DEMO_PHOTOS.splice(index, 1)
    }
    return
  }

  try {
    const db = getDb()
    const storage = getStorage()

    // Smazání souboru z Firebase Storage
    const storageRef = ref(storage, photo.storageUrl)
    await deleteObject(storageRef)

    // Smazání záznamu z Firestore
    const photoRef = doc(db, "photos", photo.id)
    await deleteDoc(photoRef)
  } catch (error) {
    console.error(`Chyba při mazání fotografie ${photo.id}:`, error)
    throw error
  }
}

