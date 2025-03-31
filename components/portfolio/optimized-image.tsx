"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)

  // Funkce pro načtení obrázku
  useEffect(() => {
    if (priority || !src) return

    const img = new Image()
    img.src = src
    img.crossOrigin = "anonymous" // Add this to avoid CORS issues
    img.onload = () => setIsLoading(false)
    img.onerror = () => {
      setIsLoading(false)
      setError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, priority])

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground">Obrázek nelze načíst</span>
      </div>
    )
  }

  if (isLoading) {
    return <Skeleton className={className} style={{ width, height }} />
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      crossOrigin="anonymous" // Add this to avoid CORS issues
    />
  )
}

