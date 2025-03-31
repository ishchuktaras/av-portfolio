"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { UploadButton } from "@/components/upload-button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/schema"

interface BlogPostFormProps {
  post?: BlogPost
}

export function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter()
  const { toast } = useToast()

  const [title, setTitle] = useState(post?.title || "")
  const [slug, setSlug] = useState(post?.slug || "")
  const [content, setContent] = useState(post?.content || "")
  const [excerpt, setExcerpt] = useState(post?.excerpt || "")
  const [coverImageUrl, setCoverImageUrl] = useState(post?.coverImageUrl || "")
  const [uploadKey, setUploadKey] = useState("")
  const [published, setPublished] = useState(post?.published || false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleUploadComplete = (url: string, key: string) => {
    setCoverImageUrl(url)
    setUploadKey(key)
  }

  const generateSlug = () => {
    if (!title) return

    const slugified = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    setSlug(slugified)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !slug || !content) {
      toast({
        variant: "destructive",
        title: "Chybějící údaje",
        description: "Vyplňte prosím všechna povinná pole",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const url = post ? `/api/blog/${post.id}` : "/api/blog"

      const method = post ? "PATCH" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          content,
          excerpt,
          coverImageUrl,
          uploadKey,
          published,
        }),
      })

      if (!response.ok) {
        throw new Error("Nepodařilo se uložit příspěvek")
      }

      toast({
        title: "Úspěch!",
        description: post ? "Příspěvek byl aktualizován" : "Příspěvek byl vytvořen",
      })

      router.push("/admin/blog")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Chyba",
        description: "Nepodařilo se uložit příspěvek. Zkuste to prosím znovu.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex justify-between">
        <Link href="/admin/blog">
          <Button variant="outline" type="button" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Zpět
          </Button>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="published" checked={published} onCheckedChange={setPublished} disabled={isSubmitting} />
            <Label htmlFor="published">{published ? "Publikováno" : "Koncept"}</Label>
          </div>

          <Button type="submit" disabled={isSubmitting} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            {isSubmitting ? "Ukládám..." : "Uložit"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Název</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => !slug && generateSlug()}
              placeholder="Zadejte název příspěvku"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">URL adresa</Label>
            <div className="flex gap-2">
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="nazev-prispevku"
                required
                disabled={isSubmitting}
              />
              <Button type="button" variant="outline" onClick={generateSlug} disabled={!title || isSubmitting}>
                Generovat
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Obsah</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Napište obsah vašeho příspěvku..."
              required
              disabled={isSubmitting}
              className="min-h-[300px]"
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Úvodní obrázek</Label>
                  {!coverImageUrl ? (
                    <div className="border rounded-md p-4">
                      <UploadButton onUploadComplete={handleUploadComplete} isUploading={isSubmitting} />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={coverImageUrl || "/placeholder.svg"}
                          alt="Úvodní obrázek"
                          className="rounded-md object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setCoverImageUrl("")
                          setUploadKey("")
                        }}
                        disabled={isSubmitting}
                        type="button"
                      >
                        Změnit obrázek
                      </Button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Perex</Label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Krátké shrnutí příspěvku"
                    disabled={isSubmitting}
                    rows={4}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}

