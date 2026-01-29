import { arbitrum, mainnet, polygon } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Reown Project ID (from environment variables)
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID

if (!projectId) {
  console.warn(
    'NEXT_PUBLIC_REOWN_PROJECT_ID is not set. Web3 wallet connection will not work.'
  )
}

// Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, polygon, arbitrum],
  projectId: projectId || 'placeholder',
})

// AppKit Configuration
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, polygon, arbitrum],
  projectId: projectId || 'placeholder',
  metadata: {
    name: 'Gravii',
    description: 'Behavioral Analytics for Web3',
    url:
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://gravii.io',
    icons: ['https://gravii.io/icon.png'],
  },
  features: {
    analytics: false, // Disable analytics to reduce external calls
    email: false, // Disable email login
    socials: false, // Disable social logins (Google, Discord, etc.)
    emailShowWallets: true, // Show wallet options first
  },
  enableWallets: true, // Only enable wallet connections
})
