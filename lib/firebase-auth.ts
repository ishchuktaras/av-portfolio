export const useAuth = () => {
  return {
    user: { uid: "test-user-id", email: "test@example.com" },
    isAuthenticated: true,
    loading: false,
    signIn: async (email: string, password: string) => ({ success: true }),
    signOut: async () => ({ success: true }),
    createAccount: async (email: string, password: string) => ({ success: true }),
    resetPassword: async (email: string) => ({ success: true }),
  }
}

export const useRequireAuth = () => {
  return {
    user: { uid: "test-user-id", email: "test@example.com" },
    isAuthenticated: true,
    loading: false,
  }
}

