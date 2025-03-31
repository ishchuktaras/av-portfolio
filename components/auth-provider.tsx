"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the auth context type
type AuthContextType = {
  user: { uid: string; email: string } | null
  isAuthenticated: boolean
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<{ success: boolean }>
}

// Create the auth context
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  signIn: async () => ({ success: false, error: "Not implemented" }),
  signOut: async () => ({ success: false }),
})

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ uid: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)

  // Simulate auth initialization
  useEffect(() => {
    // For demo purposes, we'll auto-authenticate
    setUser({ uid: "test-user-id", email: "test@example.com" })
    setLoading(false)
  }, [])

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      // For demo purposes, we'll always succeed
      setUser({ uid: "test-user-id", email })
      return { success: true }
    } catch (error) {
      return { success: false, error: "Invalid credentials" }
    }
  }

  // Sign out function
  const signOut = async () => {
    setUser(null)
    return { success: true }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hooks to use the auth context
export const useAuth = () => useContext(AuthContext)

export const useRequireAuth = () => {
  const auth = useAuth()
  return {
    ...auth,
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    loading: auth.loading,
  }
}

