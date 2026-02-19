'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const queryClient = new QueryClient()

// Dynamically import Web3Provider to avoid SSR issues
const Web3Provider = dynamic(
  () => import('./web3-provider').then((mod) => mod.Web3Provider),
  { ssr: false }
)

const SmoothScroll = dynamic(
  () => import('./smooth-scroll').then((mod) => mod.SmoothScroll),
  { ssr: false }
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <SmoothScroll>{children}</SmoothScroll>
      </Web3Provider>
    </QueryClientProvider>
  )
}
