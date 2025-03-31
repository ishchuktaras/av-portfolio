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
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
    xl: "h-12 w-12 text-lg",
  }

  // Barvy pro světlý a tmavý režim
  const lightColors = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    accent: "text-accent bg-accent/10",
  }

  const darkColors = {
    primary: "dark:text-primary-foreground dark:bg-primary/90",
    secondary: "dark:text-secondary-foreground dark:bg-secondary/90",
    accent: "dark:text-accent-foreground dark:bg-accent/90",
  }

  if (variant === "minimal") {
    return (
      <div className={cn("font-semibold flex items-center", className)}>
        <span
          className={cn(
            "transition-colors",
            isDark ? "text-primary-foreground" : "text-primary",
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
    <div className={cn("flex items-center gap-1", className)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center font-semibold transition-colors",
          sizes[size],
          lightColors.primary,
          darkColors.primary,
        )}
      >
        A
      </div>
      <div
        className={cn(
          "rounded-full flex items-center justify-center font-semibold transition-colors",
          sizes[size],
          lightColors.secondary,
          darkColors.secondary,
        )}
      >
        V
      </div>
    </div>
  )
}

