"use client"

import { Header } from "@/components/header"
import { MasonryGrid } from "@/components/masonry-grid"
import { mockPins } from "@/lib/mock-data"
import { TrendingUp, Flame, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState<"today" | "week" | "month">("today")

  // Mock trending logic - sort by likes and recent activity
  const trendingPins = [...mockPins].sort((a, b) => b.likes - a.likes).slice(0, 20)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Trending</h1>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant={timeFilter === "today" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("today")}
            >
              <Flame className="h-4 w-4 mr-1" />
              Today
            </Button>
            <Button
              variant={timeFilter === "week" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("week")}
            >
              <Zap className="h-4 w-4 mr-1" />
              This Week
            </Button>
            <Button
              variant={timeFilter === "month" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("month")}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              This Month
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground">Discover what's hot in the chaos right now</p>
        </div>

        <MasonryGrid
          pins={trendingPins.map((pin) => ({
            ...pin,
            imageWidth: pin.imageWidth || 300,
            imageHeight: pin.imageHeight || 400,
          }))}
        />
      </main>
    </div>
  )
}
