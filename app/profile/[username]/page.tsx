import { Header } from "@/components/header"
import { UserProfile } from "@/components/user-profile"
import { mockUsers, mockPins, mockBoards } from "@/lib/mock-data"

interface ProfilePageProps {
  params: {
    username: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  // In a real app, you'd fetch user data based on the username
  const user = mockUsers.find((u) => u.username === params.username) || mockUsers[0]
  const userPins = mockPins.filter((pin) => pin.userId === user.id).map((pin) => ({
    ...pin,
    imageWidth: pin.imageWidth || 300,
    imageHeight: pin.imageHeight || 400,
  }))
  const userBoards = mockBoards.filter((board) => board.userId === user.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <UserProfile user={user} pins={userPins} boards={userBoards} />
      </main>
    </div>
  )
}
