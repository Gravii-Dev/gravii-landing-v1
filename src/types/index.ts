// Wallet State
export interface WalletState {
  isConnected: boolean
  address: string | null
  inviteCode: string | null
}

// UI State
export interface UIState {
  currentArtIndex: number
  isCardFlipped: boolean
  showGlitch: boolean
  joinedWaitlist: boolean
}
