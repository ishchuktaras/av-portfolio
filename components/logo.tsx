"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "minimal"
}

export function Logo({ className, size = "md", variant = "default" }: LogoProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Definice velikostí
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-14 w-14 text-lg",
  }

  // Barvy pro světlý a tmavý režim
  const lightModeClasses = "bg-primary/10 text-primary"
  const darkModeClasses = "dark:bg-black dark:text-white"

  if (variant === "minimal") {
    return (
      <div className={cn("font-semibold flex items-center", className)}>
        <span
          className={cn(
            "transition-colors",
            isDark ? "text-white" : "text-primary",
            sizes[size]
              .split(" ")
              .pop(), // Použijeme pouze část s velikostí textu
          )}
        >
          AV
        </span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center font-semibold transition-colors",
          sizes[size],
          lightModeClasses,
          darkModeClasses,
        )}
      >
        AV
      </div>
    </div>
  )
}

