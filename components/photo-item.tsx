"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { PortfolioItem } from "@/lib/config"

interface PhotoItemProps {
  item: PortfolioItem
  onClick?: () => void
  className?: string
}

export function PhotoItem({ item, onClick, className }: PhotoItemProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Create a fallback image URL using placehold.co
  const imageUrl = item.image.startsWith("/placeholder")
    ? `https://placehold.co/600x400/e2e8f0/1e293b?text=${encodeURIComponent(item.title)}`
    : item.image

  return (
    <div className={cn("group relative overflow-hidden rounded-lg cursor-pointer", className)} onClick={onClick}>
      <div
        className={cn(
          "relative",
          item.aspectRatio === "portrait"
            ? "aspect-[3/4]"
            : item.aspectRatio === "landscape"
              ? "aspect-[4/3]"
              : "aspect-square",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-opacity duration-300",
            isLoading ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
        </div>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={item.title}
          fill
          className={cn(
            "object-cover transition-all duration-300 group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100",
          )}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-medium">{item.title}</h3>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-white/80">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

