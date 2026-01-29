import { create } from 'zustand'
import type { WalletState } from '../types'

interface WalletStore extends WalletState {
  connect: (address?: string) => void
  disconnect: () => void
  generateInviteCode: () => string
}

export const useWalletStore = create<WalletStore>((set) => ({
  isConnected: false,
  address: null,
  inviteCode: null,

  connect: (address?: string) => {
    const codes = ['LUX-88', 'NOIR-99', 'VOID-00']
    const inviteCode = codes[Math.floor(Math.random() * codes.length)]

    set({
      isConnected: true,
      address: address || null,
      inviteCode,
    })
  },

  disconnect: () => {
    set({
      isConnected: false,
      address: null,
      inviteCode: null,
    })
  },

  generateInviteCode: () => {
    const codes = ['LUX-88', 'NOIR-99', 'VOID-00']
    return codes[Math.floor(Math.random() * codes.length)]
  },
}))
