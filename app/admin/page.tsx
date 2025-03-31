import Link from "next/link"
import { ImageIcon, Settings, User } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/photos">
          <div className="border rounded-lg p-6 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Photos</h2>
            </div>
            <p className="text-muted-foreground">Manage your photo portfolio</p>
          </div>
        </Link>

        <Link href="/admin/profile">
          <div className="border rounded-lg p-6 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>
            <p className="text-muted-foreground">Update your profile information</p>
          </div>
        </Link>

        <Link href="/admin/settings">
          <div className="border rounded-lg p-6 hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Settings</h2>
            </div>
            <p className="text-muted-foreground">Configure website settings</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

