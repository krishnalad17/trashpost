"use client"

import { useState } from "react"
import { Heart, Share, MoreHorizontal, Bookmark, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import type { Pin } from "@/lib/mock-data"

interface MasonryGridProps {
  pins: Pin[]
  onDeletePin?: (pinId: string) => void
}

interface PinCardProps {
  pin: Pin
  onDeletePin?: (pinId: string) => void
}

function PinCard({ pin, onDeletePin }: PinCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={pin.imageUrl || "/placeholder.svg"}
            alt={pin.title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: `${pin.imageWidth}/${pin.imageHeight}` }}
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white text-black"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Bookmark className={`h-4 w-4 mr-1 ${isSaved ? "fill-current" : ""}`} />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                    {onDeletePin && (
                      <DropdownMenuItem onClick={() => onDeletePin(pin.id)}>Delete</DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-card-foreground">{pin.title}</h3>

          {pin.description && <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{pin.description}</p>}

          {/* Tags */}
          {pin.tags && pin.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {pin.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* User Info and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={pin.userAvatar || "/placeholder.svg"} />
                <AvatarFallback className="text-xs">{pin.username ? pin.username.slice(0, 2).toUpperCase() : ""}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-muted-foreground">{pin.username}</span>
            </div>

            <div className="flex items-center gap-1">
              {onDeletePin && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => onDeletePin(pin.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                <span className="text-xs ml-1">{pin.likes + (isLiked ? 1 : 0)}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function MasonryGrid({ pins, onDeletePin }: MasonryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
      {pins.map((pin) => (
        <div key={pin.id} className="break-inside-avoid mb-4">
          <PinCard pin={pin} onDeletePin={onDeletePin} />
        </div>
      ))}
    </div>
  )
}
