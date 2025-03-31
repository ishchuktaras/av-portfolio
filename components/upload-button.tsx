"use client"

import { useState } from "react"
import { UploadButton as UTUploadButton } from "@/lib/uploadthing"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Upload } from "lucide-react"

interface UploadButtonProps {
  onUploadComplete: (url: string, key: string) => void
  isUploading?: boolean
}

export function UploadButton({ onUploadComplete, isUploading }: UploadButtonProps) {
  const [uploading, setUploading] = useState(false)

  return (
    <UTUploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        setUploading(false)
        if (res && res[0]) {
          onUploadComplete(res[0].url, res[0].key)
          toast({
            title: "Upload successful",
            description: "Your image has been uploaded successfully.",
          })
        }
      }}
      onUploadError={(error: Error) => {
        setUploading(false)
        toast({
          variant: "destructive",
          title: "Upload failed",
          description: error.message || "Something went wrong. Please try again.",
        })
      }}
      onUploadBegin={() => {
        setUploading(true)
      }}
      className="ut-button:w-full ut-button:flex ut-button:items-center ut-button:justify-center ut-button:gap-2"
      content={{
        button({ ready }) {
          if (!ready) return "Loading..."
          if (uploading || isUploading) return <Loader2 className="h-4 w-4 animate-spin" />
          return (
            <>
              <Upload className="h-4 w-4" />
              Upload Photo
            </>
          )
        },
        allowedContent({ ready, isUploading }) {
          if (!ready) return "Loading..."
          if (isUploading) return "Uploading..."
          return "Drag and drop or click to upload"
        },
      }}
    />
  )
}

