"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [publicProfile, setPublicProfile] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSuccess(null)

    // Simulate saving
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSuccess("Settings updated successfully")
    setIsSaving(false)
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Website Settings
          </CardTitle>
          <CardDescription>Configure your website preferences</CardDescription>
        </CardHeader>
        <CardContent>
          {success && (
            <Alert className="mb-4 bg-primary/10 border-primary text-primary">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode" className="text-base">
                    Dark Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the admin interface</p>
                </div>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications" className="text-base">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications for new messages</p>
                </div>
                <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="public-profile" className="text-base">
                    Public Profile
                  </Label>
                  <p className="text-sm text-muted-foreground">Make your profile visible to the public</p>
                </div>
                <Switch id="public-profile" checked={publicProfile} onCheckedChange={setPublicProfile} />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

