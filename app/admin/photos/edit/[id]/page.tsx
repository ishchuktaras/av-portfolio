import { EditPhotoForm } from "./edit-photo-form"

export default function EditPhotoPage({ params }: any) {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Edit Photo</h1>
      <EditPhotoForm id={params.id} />
    </div>
  )
}

