// Mock data for trashpost Pinterest clone
export interface Pin {
  id: string
  title: string
  description: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
  userId: string
  username: string
  userAvatar: string
  boardId?: string
  boardName?: string
  likes: number
  createdAt: string
  tags: string[]
}

export interface Board {
  id: string
  name: string
  description: string
  coverImageUrl: string
  userId: string
  username: string
  pinCount: number
  isPrivate: boolean
  createdAt: string
}

export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  bio: string
  followersCount: number
  followingCount: number
  pinsCount: number
  boardsCount: number
}

export const mockPins: Pin[] = [
  {
    id: "1",
    title: "Cyberpunk Street Art",
    description: "Neon-soaked alleyway with glitched reality vibes",
    imageUrl: "/cyberpunk-street-art-neon-graffiti.jpg",
    imageWidth: 300,
    imageHeight: 400,
    userId: "user1",
    username: "neon_rebel",
    userAvatar: "/punk-avatar.jpg",
    boardId: "board1",
    boardName: "Urban Chaos",
    likes: 127,
    createdAt: "2024-01-15",
    tags: ["cyberpunk", "street-art", "neon", "urban"],
  },
  {
    id: "2",
    title: "Glitch Aesthetic Portrait",
    description: "Digital corruption meets human emotion",
    imageUrl: "/glitch-art-portrait-digital-corruption.jpg",
    imageWidth: 350,
    imageHeight: 500,
    userId: "user2",
    username: "glitch_queen",
    userAvatar: "/glitch-avatar.jpg",
    boardId: "board2",
    boardName: "Digital Decay",
    likes: 89,
    createdAt: "2024-01-14",
    tags: ["glitch", "portrait", "digital-art", "corruption"],
  },
  {
    id: "3",
    title: "Abandoned Factory Vibes",
    description: "Industrial decay with a touch of beauty",
    imageUrl: "/abandoned-factory-industrial-decay.jpg",
    imageWidth: 280,
    imageHeight: 350,
    userId: "user3",
    username: "rust_explorer",
    userAvatar: "/industrial-avatar.jpg",
    likes: 203,
    createdAt: "2024-01-13",
    tags: ["industrial", "abandoned", "decay", "urban-exploration"],
  },
  {
    id: "4",
    title: "Vaporwave Sunset",
    description: "Retro-futuristic dreams in pink and purple",
    imageUrl: "/vaporwave-sunset-retro-futuristic-pink-purple.jpg",
    imageWidth: 400,
    imageHeight: 300,
    userId: "user4",
    username: "vapor_dreams",
    userAvatar: "/vaporwave-avatar.jpg",
    boardId: "board3",
    boardName: "Retro Future",
    likes: 156,
    createdAt: "2024-01-12",
    tags: ["vaporwave", "retro", "sunset", "aesthetic"],
  },
  {
    id: "5",
    title: "Dark Academia Library",
    description: "Gothic knowledge sanctuary with mysterious vibes",
    imageUrl: "/dark-academia-gothic-library-books-candles.jpg",
    imageWidth: 320,
    imageHeight: 450,
    userId: "user5",
    username: "dark_scholar",
    userAvatar: "/gothic-avatar.jpg",
    likes: 78,
    createdAt: "2024-01-11",
    tags: ["dark-academia", "gothic", "library", "books"],
  },
  {
    id: "6",
    title: "Neon Tokyo Night",
    description: "Electric city that never sleeps",
    imageUrl: "/tokyo-neon-night-city-lights.jpg",
    imageWidth: 300,
    imageHeight: 380,
    userId: "user1",
    username: "neon_rebel",
    userAvatar: "/punk-avatar.jpg",
    boardId: "board1",
    boardName: "Urban Chaos",
    likes: 245,
    createdAt: "2024-01-10",
    tags: ["tokyo", "neon", "night", "cityscape"],
  },
]

export const mockBoards: Board[] = [
  {
    id: "board1",
    name: "Urban Chaos",
    description: "Street art, neon lights, and city rebellion",
    coverImageUrl: "/urban-street-art-graffiti.jpg",
    userId: "user1",
    username: "neon_rebel",
    pinCount: 23,
    isPrivate: false,
    createdAt: "2024-01-01",
  },
  {
    id: "board2",
    name: "Digital Decay",
    description: "Glitch art and digital corruption aesthetics",
    coverImageUrl: "/glitch-art-digital-corruption.jpg",
    userId: "user2",
    username: "glitch_queen",
    pinCount: 15,
    isPrivate: false,
    createdAt: "2024-01-02",
  },
  {
    id: "board3",
    name: "Retro Future",
    description: "Vaporwave dreams and synthwave nights",
    coverImageUrl: "/vaporwave-synthwave-retro.jpg",
    userId: "user4",
    username: "vapor_dreams",
    pinCount: 31,
    isPrivate: false,
    createdAt: "2024-01-03",
  },
]

export const mockUsers: User[] = [
  {
    id: "user1",
    username: "neon_rebel",
    displayName: "Neon Rebel",
    avatar: "/punk-avatar.jpg",
    bio: "Street art enthusiast | Neon light collector | Urban explorer",
    followersCount: 1247,
    followingCount: 389,
    pinsCount: 156,
    boardsCount: 12,
  },
  {
    id: "user2",
    username: "glitch_queen",
    displayName: "Glitch Queen",
    avatar: "/glitch-avatar.jpg",
    bio: "Digital artist | Glitch aesthetic | Breaking reality one pixel at a time",
    followersCount: 892,
    followingCount: 234,
    pinsCount: 89,
    boardsCount: 8,
  },
  {
    id: "user3",
    username: "rust_explorer",
    displayName: "Rust Explorer",
    avatar: "/industrial-avatar.jpg",
    bio: "Urban decay photographer | Industrial archaeology | Beauty in abandonment",
    followersCount: 2103,
    followingCount: 567,
    pinsCount: 203,
    boardsCount: 15,
  },
]
