"use client"

import { useState } from "react"
import { MoreHorizontal, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import type { Board } from "@/lib/mock-data"

interface BoardGridProps {
  boards: Board[]
}

interface BoardCardProps {
  board: Board
}

function BoardCard({ board }: BoardCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={board.coverImageUrl || "/placeholder.svg"}
            alt={board.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="secondary" className="bg-white/90 hover:bg-white text-black">
                View Board
              </Button>
            </div>
          )}

          {/* Privacy Badge */}
          <div className="absolute top-3 left-3">
            {board.isPrivate ? (
              <Badge variant="secondary" className="bg-black/50 text-white border-0">
                <Lock className="h-3 w-3 mr-1" />
                Private
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-black/50 text-white border-0">
                <Users className="h-3 w-3 mr-1" />
                Public
              </Badge>
            )}
          </div>

          {/* Actions Menu */}
          <div className="absolute top-3 right-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit Board</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Board Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-card-foreground">{board.name}</h3>
          {board.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{board.description}</p>}

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{board.pinCount} pins</span>
            <span>by {board.username}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function BoardGrid({ boards }: BoardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {boards.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </div>
  )
}
