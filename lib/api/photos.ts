import { PhotoRepository, type PhotoFilter } from "@/lib/repositories/photo-repository"
import type { Photo, NewPhoto } from "@/lib/schema"
import { cache } from "@/lib/cache"

// Funkce pro získání fotografií
export async function getPhotos(filter?: PhotoFilter): Promise<Photo[]> {
  // Vytvoření klíče cache na základě filtru
  const cacheKey = `photos:${JSON.stringify(filter || {})}`

  // Pokus o získání dat z cache
  const cachedData = cache.get<Photo[]>(cacheKey)
  if (cachedData) {
    return cachedData
  }

  // Pokud data nejsou v cache, získat je z repository
  const repo = new PhotoRepository()
  const photos = await repo.findAll(filter)

  // Uložit data do cache na 5 minut
  cache.set(cacheKey, photos, 300)

  return photos
}

// Funkce pro získání fotografie podle ID
export async function getPhotoById(id: number): Promise<Photo | null> {
  const cacheKey = `photo:${id}`

  // Pokus o získání dat z cache
  const cachedData = cache.get<Photo>(cacheKey)
  if (cachedData) {
    return cachedData
  }

  const repo = new PhotoRepository()
  const photo = await repo.findById(id)

  if (photo) {
    // Uložit data do cache na 5 minut
    cache.set(cacheKey, photo, 300)
  }

  return photo
}

// Funkce pro vytvoření fotografie
export async function createPhoto(data: NewPhoto): Promise<Photo> {
  const repo = new PhotoRepository()
  const photo = await repo.create(data)

  // Invalidace cache pro fotografie
  cache.clearByPrefix("photos:")

  return photo
}

// Funkce pro aktualizaci fotografie
export async function updatePhoto(id: number, data: Partial<NewPhoto>): Promise<Photo> {
  const repo = new PhotoRepository()
  const photo = await repo.update(id, data)

  // Invalidace cache pro fotografie
  cache.clearByPrefix("photos:")
  cache.delete(`photo:${id}`)

  return photo
}

// Funkce pro smazání fotografie
export async function deletePhoto(id: number): Promise<void> {
  const repo = new PhotoRepository()
  await repo.delete(id)

  // Invalidace cache pro fotografie
  cache.clearByPrefix("photos:")
  cache.delete(`photo:${id}`)
}

// Funkce pro vyhledávání fotografií
export async function searchPhotos(query: string): Promise<Photo[]> {
  const repo = new PhotoRepository()
  return repo.search(query)
}

// Funkce pro získání počtu fotografií
export async function getPhotosCount(
  filter?: Omit<PhotoFilter, "limit" | "offset" | "sortBy" | "sortOrder">,
): Promise<number> {
  const repo = new PhotoRepository()
  return repo.getPhotosCount(filter)
}

