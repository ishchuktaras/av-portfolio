"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FirebaseImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  onLoad?: () => void
}

export default function FirebaseImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover",
  onLoad,
}: FirebaseImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
    if (onLoad) {
      onLoad()
    }
  }

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
        </div>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          objectFit === "contain" && "object-contain",
          objectFit === "cover" && "object-cover",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
        )}
        priority={priority}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

