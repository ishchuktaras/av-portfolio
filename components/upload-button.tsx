"use client"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadButtonProps {
  onUploadComplete: (url: string, key: string) => void
  isUploading?: boolean
}

export function UploadButton({ onUploadComplete, isUploading }: UploadButtonProps) {
  const [uploading, setUploading] = useState(false)

  // Dočasná implementace bez uploadthing
  const handleUpload = () => {
    setUploading(true)
    // Simulace nahrávání
    setTimeout(() => {
      setUploading(false)
      // Použití placeholder URL
      onUploadComplete("/placeholder.svg?height=300&width=400", "placeholder-key")
      toast({
        title: "Upload successful",
        description: "Your image has been uploaded successfully.",
      })
    }, 1500)
  }

  return (
    <Button
      onClick={handleUpload}
      disabled={uploading || isUploading}
      className="w-full flex items-center justify-center gap-2"
    >
      {uploading || isUploading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Upload className="h-4 w-4" />
          Upload Photo
        </>
      )}
    </Button>
  )
}

