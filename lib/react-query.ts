import { QueryClient } from "@tanstack/react-query"

// Vytvoření QueryClient s výchozí konfigurací
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minuta
      cacheTime: 5 * 60 * 1000, // 5 minut
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

