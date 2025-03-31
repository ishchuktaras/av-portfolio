import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Stránka nenalezena</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
      </p>
      <Link href="/">
        <Button className="gap-2">
          <Home className="h-4 w-4" />
          Zpět na domovskou stránku
        </Button>
      </Link>
    </div>
  )
}

