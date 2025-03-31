"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface MenuItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface MainMenuProps {
  items: MenuItem[]
  className?: string
  onItemClick?: () => void
}

export function MainMenu({ items, className, onItemClick }: MainMenuProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex items-center space-x-10", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors flex items-center gap-2",
              isActive ? "text-primary" : "text-foreground hover:text-primary",
            )}
            onClick={onItemClick}
          >
            {item.icon && item.icon}
            <span>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

