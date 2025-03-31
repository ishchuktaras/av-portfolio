"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Předejít hydratačním chybám tím, že komponenta bude renderována až po načtení na klientovi
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Přepnout téma"
      title={theme === "dark" ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
      className="text-foreground hover:text-primary hover:bg-primary/10 dark:text-foreground dark:hover:text-primary dark:hover:bg-primary/10"
    >
      {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}

