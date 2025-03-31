"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Camera, Home, Image, User, Settings, Upload, Folder } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { LogoutButton } from "@/components/logout-button"
import { useAuth } from "@/lib/auth-hooks"

export function AppSidebar() {
  const { user } = useAuth()
  const pathname = usePathname()

  // Don't render sidebar on login page
  if (pathname === "/admin/login") {
    return null
  }

  return (
    <Sidebar>
      <SidebarHeader className="pb-0">
        <div className="flex items-center px-2 py-3">
          <Camera className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-lg font-semibold">Foto Portfolio</h2>
        </div>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin"}>
                  <Link href="/admin">
                    <Home className="mr-2" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/photos"}>
                  <Link href="/admin/photos">
                    <Image className="mr-2" />
                    <span>Fotografie</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/photos/upload"}>
                  <Link href="/admin/photos/upload">
                    <Upload className="mr-2" />
                    <span>Nahrát fotografie</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/categories"}>
                  <Link href="/admin/categories">
                    <Folder className="mr-2" />
                    <span>Kategorie</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <SidebarGroupLabel>Nastavení</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/profile"}>
                  <Link href="/admin/profile">
                    <User className="mr-2" />
                    <span>Profil</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/settings"}>
                  <Link href="/admin/settings">
                    <Settings className="mr-2" />
                    <span>Nastavení</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

