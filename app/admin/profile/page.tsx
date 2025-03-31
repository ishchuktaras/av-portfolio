"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth-hooks" // Updated import
import { User } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()
  const [name, setName] = useState("Jane Doe")
  const [bio, setBio] = useState("Professional photographer with 10+ years of experience.")
  const [email, setEmail] = useState(user?.email || "")
  const [phone, setPhone] = useState("+1 (555) 123-4567")
  const [website, setWebsite] = useState("https://example.com")
  const [instagram, setInstagram] = useState("@janedoephotos")
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSuccess(null)

    // Simulate saving
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSuccess("Profile updated successfully")
    setIsSaving(false)
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              {success && (
                <Alert className="mb-4 bg-primary/10 border-primary text-primary">
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://your-website.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@username"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Profile Preview</CardTitle>
              <CardDescription>How others see you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary/40" />
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{email}</p>
                <p className="mt-4 text-sm">{bio}</p>

                {website && (
                  <div className="mt-4 text-sm">
                    <span className="font-semibold">Website:</span> {website}
                  </div>
                )}

                {instagram && (
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">Instagram:</span> {instagram}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

