"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { MasonryGrid } from "@/components/masonry-grid"
import { mockPins } from "@/lib/mock-data"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CATEGORIES = ["All", "Cyberpunk", "Glitch Art", "Street Art", "Digital Chaos", "Urban Decay", "Neon Aesthetics"]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [filteredPins, setFilteredPins] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState<"recent" | "popular">("recent")

  useEffect(() => {
    // Combine mock pins with user uploads
    const userPins = JSON.parse(localStorage.getItem("trashpost-pins") || "[]")
    const allPins = [...userPins, ...mockPins]

    let filtered = allPins

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (pin) =>
          pin.title.toLowerCase().includes(query.toLowerCase()) ||
          pin.description.toLowerCase().includes(query.toLowerCase()) ||
          pin.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase())) ||
          pin.username.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((pin) => pin.tags.some((tag: string) => tag.toLowerCase() === selectedCategory.toLowerCase()))
    }

    // Sort results
    if (sortBy === "popular") {
      filtered.sort((a, b) => b.likes - a.likes)
    } else {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    setFilteredPins(filtered)
  }, [query, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-2xl font-bold">{query ? `Search results for "${query}"` : "Search"}</h1>
          </div>

          {query && (
            <p className="text-muted-foreground mb-6">
              Found {filteredPins.length} {filteredPins.length === 1 ? "result" : "results"}
            </p>
          )}

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(value: "recent" | "popular") => setSortBy(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>

            {(selectedCategory !== "All" || sortBy !== "recent") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory("All")
                  setSortBy("recent")
                }}
              >
                Clear filters
              </Button>
            )}
          </div>

          {/* Active filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="gap-1">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
            {sortBy !== "recent" && (
              <Badge variant="secondary" className="gap-1">
                Sort: {sortBy === "popular" ? "Popular" : "Recent"}
                <button
                  onClick={() => setSortBy("recent")}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {filteredPins.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No results found</h2>
            <p className="text-muted-foreground">
              {query
                ? `No posts found for "${query}". Try different keywords or browse categories.`
                : "Start searching to discover amazing content."}
            </p>
          </div>
        ) : (
          <MasonryGrid pins={filteredPins} />
        )}
      </main>
    </div>
  )
}
