import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Image, LogOut, Settings, User } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="/admin" className="font-semibold text-lg">
            Admin Dashboard
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/admin/photos">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Photos
              </Button>
            </Link>
            <Link href="/admin/profile">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                View Site
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

