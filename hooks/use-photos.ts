"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { PhotoFilter } from "@/lib/repositories/photo-repository"
import type { Photo, NewPhoto } from "@/lib/schema"

// Funkce pro získání fotografií
async function fetchPhotos(filter?: PhotoFilter): Promise<Photo[]> {
  const params = new URLSearchParams()

  if (filter) {
    if (filter.categoryId) {
      params.set("category", filter.categoryId.toString())
    }

    if (filter.featured) {
      params.set("featured", "true")
    }

    if (filter.aspectRatio) {
      params.set("aspectRatio", filter.aspectRatio)
    }

    if (filter.sortBy) {
      params.set("sortBy", filter.sortBy)
    }

    if (filter.sortOrder) {
      params.set("sortOrder", filter.sortOrder)
    }

    if (filter.limit) {
      params.set("limit", filter.limit.toString())
    }

    if (filter.offset) {
      params.set("offset", filter.offset.toString())
    }
  }

  const response = await fetch(`/api/photos?${params.toString()}`)

  if (!response.ok) {
    throw new Error("Failed to fetch photos")
  }

  return response.json()
}

// Funkce pro získání fotografie podle ID
async function fetchPhotoById(id: number): Promise<Photo> {
  const response = await fetch(`/api/photos/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch photo with id ${id}`)
  }

  return response.json()
}

// Funkce pro vytvoření fotografie
async function createPhotoApi(data: NewPhoto): Promise<Photo> {
  const response = await fetch("/api/photos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create photo")
  }

  return response.json()
}

// Funkce pro aktualizaci fotografie
async function updatePhotoApi(id: number, data: Partial<NewPhoto>): Promise<Photo> {
  const response = await fetch(`/api/photos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to update photo with id ${id}`)
  }

  return response.json()
}

// Funkce pro smazání fotografie
async function deletePhotoApi(id: number): Promise<void> {
  const response = await fetch(`/api/photos/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error(`Failed to delete photo with id ${id}`)
  }
}

// Hook pro použití fotografií
export function usePhotos(filter?: PhotoFilter) {
  return useQuery({
    queryKey: ["photos", filter],
    queryFn: () => fetchPhotos(filter),
  })
}

// Hook pro použití fotografie podle ID
export function usePhoto(id: number) {
  return useQuery({
    queryKey: ["photo", id],
    queryFn: () => fetchPhotoById(id),
    enabled: !!id,
  })
}

// Hook pro vytvoření fotografie
export function useCreatePhoto() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createPhotoApi,
    onSuccess: () => {
      // Invalidace cache pro fotografie
      queryClient.invalidateQueries({ queryKey: ["photos"] })
    },
  })
}

// Hook pro aktualizaci fotografie
export function useUpdatePhoto() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<NewPhoto> }) => updatePhotoApi(id, data),
    onSuccess: (updatedPhoto) => {
      // Aktualizace cache pro konkrétní fotografii
      queryClient.setQueryData(["photo", updatedPhoto.id], updatedPhoto)
      // Invalidace cache pro seznamy fotografií
      queryClient.invalidateQueries({ queryKey: ["photos"] })
    },
  })
}

// Hook pro smazání fotografie
export function useDeletePhoto() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deletePhotoApi,
    onSuccess: (_, id) => {
      // Invalidace cache pro konkrétní fotografii
      queryClient.removeQueries({ queryKey: ["photo", id] })
      // Invalidace cache pro seznamy fotografií
      queryClient.invalidateQueries({ queryKey: ["photos"] })
    },
  })
}

