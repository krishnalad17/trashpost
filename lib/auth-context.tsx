"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  username: string
  email: string
  avatar: string
  bio: string
  followers: number
  following: number
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("trashpost-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    // Mock authentication - in real app, this would call your API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "demo@trashpost.com" && password === "demo123") {
      const mockUser: User = {
        id: "1",
        username: "trashmaster",
        email: "demo@trashpost.com",
        avatar: "/punk-avatar.jpg",
        bio: "Digital rebel exploring the chaos of creativity",
        followers: 1337,
        following: 420,
      }
      setUser(mockUser)
      localStorage.setItem("trashpost-user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    // Mock signup - in real app, this would call your API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: Date.now().toString(),
      username,
      email,
      avatar: "/glitch-avatar.jpg",
      bio: "New to the chaos",
      followers: 0,
      following: 0,
    }

    setUser(mockUser)
    localStorage.setItem("trashpost-user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("trashpost-user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
