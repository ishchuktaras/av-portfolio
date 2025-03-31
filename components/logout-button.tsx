"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-hooks"

export function LogoutButton() {
  const router = useRouter()
  const { signOut } = useAuth()

  const handleLogout = async () => {
    try {
      await signOut()
      // The redirect will be handled by the AuthWrapper in admin/layout.tsx
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-2">
      <LogOut className="h-4 w-4" />
      <span>Odhlásit se</span>
    </Button>
  )
}

