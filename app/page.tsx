"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { MasonryGrid } from "@/components/masonry-grid"
import { mockPins } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HomePage() {
  const [allPins, setAllPins] = useState(mockPins)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Load user-uploaded pins from localStorage and combine with mock data
    const userPins = JSON.parse(localStorage.getItem("trashpost-pins") || "[]")
    // Fix: Ensure each pin has imageWidth and imageHeight for proper aspect ratio
    const fixedUserPins = userPins.map((pin: any) => ({
      ...pin,
      imageWidth: pin.imageWidth || 300,
      imageHeight: pin.imageHeight || 400,
    }))
    const combinedPins = [...fixedUserPins, ...mockPins]
    setAllPins(combinedPins)
  }, [])

  const handleDeletePin = (pinId: string) => {
    const updatedUserPins = JSON.parse(localStorage.getItem("trashpost-pins") || "[]").filter((pin: any) => pin.id !== pinId)
    localStorage.setItem("trashpost-pins", JSON.stringify(updatedUserPins))
    const fixedUserPins = updatedUserPins.map((pin: any) => ({
      ...pin,
      imageWidth: pin.imageWidth || 300,
      imageHeight: pin.imageHeight || 400,
    }))
    const combinedPins = [...fixedUserPins, ...mockPins]
    setAllPins(combinedPins)
  }

  const filteredPins = allPins.filter(pin =>
    !searchTerm || pin.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-balance mb-4">
            Welcome to the <span className="text-primary">chaos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover unconventional visual content, collect what speaks to your rebellious side, and share your own
            creative chaos with the world.
          </p>
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <MasonryGrid pins={filteredPins} onDeletePin={handleDeletePin} />
      </main>
    </div>
  )
}
