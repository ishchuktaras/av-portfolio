"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import FirebaseImage from "@/components/firebase-image"
import type { Photo } from "@/lib/firebase-config"

interface PhotoCardProps {
  photo: Photo
  className?: string
  aspectRatio?: "portrait" | "landscape" | "square"
  width?: number
  height?: number
  priority?: boolean
  href?: string
  onClick?: () => void
}

export function PhotoCard({
  photo,
  className,
  aspectRatio = "square",
  width = 600,
  height = 600,
  priority = false,
  href,
  onClick,
}: PhotoCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  const imageUrl = photo.downloadUrl || photo.thumbnailUrl || ""
  const imageAlt = photo.title || "Fotografie"

  const cardContent = (
    <CardContent className="p-0 overflow-hidden">
      <div
        className={cn(
          "overflow-hidden",
          aspectRatio === "portrait" && "aspect-[3/4]",
          aspectRatio === "landscape" && "aspect-[4/3]",
          aspectRatio === "square" && "aspect-square",
        )}
      >
        <FirebaseImage
          src={imageUrl}
          alt={imageAlt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full transition-all hover:scale-105 duration-300"
          objectFit="cover"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </CardContent>
  )

  return (
    <Card className={cn("rounded-lg overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow", className)}>
      {href ? (
        <Link href={href} className="cursor-pointer">
          {cardContent}
        </Link>
      ) : onClick ? (
        <div onClick={onClick} className="cursor-pointer">
          {cardContent}
        </div>
      ) : (
        cardContent
      )}
    </Card>
  )
}

