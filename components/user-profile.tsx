"use client"

import { useState } from "react"
import { Settings, Share, MoreHorizontal, UserPlus, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MasonryGrid } from "@/components/masonry-grid"
import { BoardGrid } from "@/components/board-grid"
import type { User, Pin, Board } from "@/lib/mock-data"

interface UserProfileProps {
  user: User
  pins: Pin[]
  boards: Board[]
}

export function UserProfile({ user, pins, boards }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState("pins")

  return (
    <div className="max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <Avatar className="h-32 w-32 mx-auto mb-4">
          <AvatarImage src={user.avatar || "/placeholder.svg"} />
          <AvatarFallback className="text-2xl">{user.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl font-bold mb-2">{user.displayName}</h1>
        <p className="text-lg text-muted-foreground mb-1">@{user.username}</p>

        {user.bio && <p className="text-muted-foreground max-w-md mx-auto mb-6">{user.bio}</p>}

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-6 text-sm">
          <div className="text-center">
            <div className="font-semibold text-lg">{user.followersCount.toLocaleString()}</div>
            <div className="text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">{user.followingCount.toLocaleString()}</div>
            <div className="text-muted-foreground">Following</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">{user.pinsCount.toLocaleString()}</div>
            <div className="text-muted-foreground">Pins</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">{user.boardsCount.toLocaleString()}</div>
            <div className="text-muted-foreground">Boards</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={() => setIsFollowing(!isFollowing)}
            variant={isFollowing ? "outline" : "default"}
            className="gap-2"
          >
            {isFollowing ? (
              <>
                <UserCheck className="h-4 w-4" />
                Following
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" />
                Follow
              </>
            )}
          </Button>

          <Button variant="outline" className="gap-2 bg-transparent">
            <Share className="h-4 w-4" />
            Share
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>Report User</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="pins">Pins ({pins.length})</TabsTrigger>
          <TabsTrigger value="boards">Boards ({boards.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pins" className="mt-0">
          {pins.length > 0 ? (
            <MasonryGrid pins={pins} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No pins yet</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="boards" className="mt-0">
          {boards.length > 0 ? (
            <BoardGrid boards={boards} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No boards yet</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
