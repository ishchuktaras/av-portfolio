"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
// Import without file extension
import { useRequireAuth } from "@/lib/firebase-auth"
import { useRouter } from "next/navigation"
import { User, UserPlus, Mail, Key, Shield } from "lucide-react"

interface AdminUser {
  id: string
  email: string
  role: string
  lastLogin: string
}

// Ukázkové data
const mockUsers: AdminUser[] = [
  {
    id: "1",
    email: "admin@example.com",
    role: "Admin",
    lastLogin: "2025-03-30T10:30:00Z",
  },
]

export default function UsersPage() {
  const { isAuthenticated, loading } = useRequireAuth()
  const router = useRouter()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [newUserEmail, setNewUserEmail] = useState("")
  const [newUserPassword, setNewUserPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, loading, router])

  useEffect(() => {
    // V reálné aplikaci byste načetli uživatele z Firebase Admin SDK
    setUsers(mockUsers)
  }, [])

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      // Simulace úspěšného vytvoření uživatele
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSuccess(`Uživatel ${newUserEmail} byl úspěšně vytvořen.`)
      setNewUserEmail("")
      setNewUserPassword("")

      // Přidání nového uživatele do seznamu
      setUsers([
        ...users,
        {
          id: Date.now().toString(),
          email: newUserEmail,
          role: "Editor",
          lastLogin: "Nikdy",
        },
      ])
    } catch (err) {
      setError("Nepodařilo se vytvořit uživatele. Zkuste to znovu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading || !isAuthenticated) {
    return (
      <div className="container py-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">Načítání...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-24">
      <h1 className="text-3xl font-bold mb-6">Správa uživatelů</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Přidat uživatele
            </CardTitle>
            <CardDescription>Vytvořte nový uživatelský účet pro administraci</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-primary/10 border-primary text-primary">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="novy@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Heslo</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Vytváření..." : "Vytvořit uživatele"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Uživatelé
              </CardTitle>
              <CardDescription>Seznam uživatelů s přístupem do administrace</CardDescription>
            </CardHeader>
            <CardContent>
              {users.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Role</th>
                        <th className="text-left py-3 px-4">Poslední přihlášení</th>
                        <th className="text-right py-3 px-4">Akce</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b">
                          <td className="py-3 px-4">{user.email}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <Shield className="h-4 w-4 mr-2 text-primary" />
                              {user.role}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            {user.lastLogin === "Nikdy" ? "Nikdy" : new Date(user.lastLogin).toLocaleString("cs-CZ")}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="outline" size="sm">
                              Upravit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">Žádní uživatelé k zobrazení</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

