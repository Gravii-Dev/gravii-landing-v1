import type { ReactNode } from 'react'

// Wallet State
export interface WalletState {
  isConnected: boolean
  address: string | null
  inviteCode: string | null
}

// User Profile (Gravii ID)
export interface UserProfile {
  address: string
  labels: BehavioralLabel[]
  stats: UserStats
}

// Behavioral Label
export interface BehavioralLabel {
  id: string
  type: 'loyalty' | 'spending' | 'risk' | 'yield' | 'churn'
  value: string
  icon: ReactNode
  color: string
}

// User Stats
export interface UserStats {
  totalSpent: string
  avgTransaction: string
  preferredChain: string
}

// UI State
export interface UIState {
  currentArtIndex: number
  isCardFlipped: boolean
  showGlitch: boolean
  joinedWaitlist: boolean
}

// Form Data
export interface WaitlistFormData {
  email: string
}

export interface LookupFormData {
  searchQuery: string
}

// Art Item
export interface ArtItem {
  id: number
  src: string
  alt: string
}
