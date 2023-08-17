'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactNode } from 'react'

const TIME_FROM_MS_TO_SECONDS = 1000 * 60 * 30

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: TIME_FROM_MS_TO_SECONDS,
    },
  },
})

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
