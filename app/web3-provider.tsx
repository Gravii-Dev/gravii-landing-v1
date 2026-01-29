'use client'

import { WagmiProvider } from 'wagmi'
import { wagmiAdapter } from '../src/config/web3'

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>{children}</WagmiProvider>
  )
}
