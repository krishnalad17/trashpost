"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { MasonryGrid } from "@/components/masonry-grid"
import { useAuth } from "@/lib/auth-context"
import { UploadDialog } from "@/components/upload-dialog"
import { Upload } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [userPins, setUserPins] = useState<any[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    // Load user's uploaded pins from localStorage
    const allPins = JSON.parse(localStorage.getItem("trashpost-pins") || "[]")
    const fixedPins = allPins.map((pin: any) => ({
      ...pin,
      imageWidth: pin.imageWidth || 300,
      imageHeight: pin.imageHeight || 400,
    }))
    const filteredPins = fixedPins.filter((pin: any) => pin.userId === user.id)
    setUserPins(filteredPins)
  }, [user])

  const handleNewUpload = (newPin: any) => {
    setUserPins((prev) => [newPin, ...prev])
  }

  const handleDeletePin = (pinId: string) => {
    const updatedPins = userPins.filter((pin) => pin.id !== pinId)
    setUserPins(updatedPins)
    // Update localStorage as well
    const allPins = JSON.parse(localStorage.getItem("trashpost-pins") || "[]")
    const filteredPins = allPins.filter((pin: any) => pin.id !== pinId)
    localStorage.setItem("trashpost-pins", JSON.stringify(filteredPins))
  }

  if (!user) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Uploads</h1>
            <p className="text-muted-foreground">
              {userPins.length} {userPins.length === 1 ? "post" : "posts"} shared
            </p>
          </div>
          <UploadDialog onUpload={handleNewUpload} />
        </div>

        {userPins.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">No uploads yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start sharing your visual chaos with the community. Upload your first image to get started.
            </p>
            <UploadDialog onUpload={handleNewUpload} />
          </div>
        ) : (
          <MasonryGrid pins={userPins} onDeletePin={handleDeletePin} />
        )}
      </main>
    </div>
  )
}
