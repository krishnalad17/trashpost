import { Header } from "@/components/header"
import { BoardGrid } from "@/components/board-grid"
import { CreateBoardDialog } from "@/components/create-board-dialog"
import { mockBoards } from "@/lib/mock-data"

export default function BoardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-balance mb-2">Your Boards</h1>
            <p className="text-muted-foreground">Organize your chaos into collections</p>
          </div>
          <CreateBoardDialog />
        </div>

        <BoardGrid boards={mockBoards} />
      </main>
    </div>
  )
}
