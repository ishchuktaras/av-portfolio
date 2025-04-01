// Dočasná implementace bez uploadthing
import { Button } from "@/components/ui/button"

export function UploadButton() {
  return <Button disabled>Nahrávání dočasně nedostupné</Button>
}

// Simulace UploadDropzone
export function UploadDropzone({ endpoint }: { endpoint: string }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
      <p>Nahrávání souborů je dočasně nedostupné</p>
    </div>
  )
}

