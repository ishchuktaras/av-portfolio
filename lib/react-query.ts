// Zakomentovat nebo nahradit dočasným řešením:

// Dočasná náhrada za QueryClient
export const queryClient = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
}

