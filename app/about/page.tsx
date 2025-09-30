import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Upload, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-primary">trashpost</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">Where conventional beauty meets digital rebellion</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Trashpost is a visual discovery platform that celebrates the unconventional, the glitched, and the
                beautifully chaotic. We believe that not all art needs to be perfect - sometimes the most powerful
                expressions come from embracing the digital decay and urban grit.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join a community of digital rebels, glitch artists, cyberpunk enthusiasts, and urban explorers. Share
                your visual chaos, discover underground aesthetics, and connect with creators who see beauty in the
                broken and power in the pixelated.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Upload & Share</h3>
              <p className="text-sm text-muted-foreground">
                Share your digital art, glitch photography, street art, and cyberpunk creations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Curate Collections</h3>
              <p className="text-sm text-muted-foreground">
                Organize your favorite chaos into themed boards and collections
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Discover Trends</h3>
              <p className="text-sm text-muted-foreground">
                Explore trending content and discover new forms of digital expression
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Categories We Love</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary">Cyberpunk</Badge>
            <Badge variant="secondary">Glitch Art</Badge>
            <Badge variant="secondary">Street Art</Badge>
            <Badge variant="secondary">Digital Chaos</Badge>
            <Badge variant="secondary">Urban Decay</Badge>
            <Badge variant="secondary">Neon Aesthetics</Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trashpost was born from the idea that beauty exists in imperfection, that there's art in the discarded, and
            that sometimes the most powerful visual statements come from embracing the chaos of our digital age.
          </p>
        </div>
      </main>
    </div>
  )
}
