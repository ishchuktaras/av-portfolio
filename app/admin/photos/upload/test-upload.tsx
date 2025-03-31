"use client"

import type React from "react"

import { useState } from "react"
import { uploadPhoto } from "@/lib/firebase-storage"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ImageIcon, Upload } from "lucide-react"

export default function TestUploadPage() {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image to upload.")
      return
    }

    setUploading(true)
    setError(null)
    setSuccess(false)

    try {
      await uploadPhoto(image, {
        title: image.name.split(".")[0],
        category: "personal",
        aspectRatio: "square",
      })
      setSuccess(true)
      setImage(null)
      setPreview(null)
    } catch (e: any) {
      setError(e.message || "An error occurred during upload.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Test Photo Upload</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-primary/10 border-primary text-primary">
                <AlertDescription>Photo uploaded successfully!</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Select an image</Label>
                <Input id="file" type="file" accept="image/*" onChange={handleImageChange} disabled={uploading} />
              </div>

              <Button onClick={handleUpload} disabled={uploading || !image} className="w-full">
                {uploading ? "Uploading..." : "Upload Photo"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              {preview ? (
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-center p-8 text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>Select an image to see preview</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

