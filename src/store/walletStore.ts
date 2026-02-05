import { create } from 'zustand'
import { INVITE_CODES } from '../config/constants'
import type { WalletState } from '../types'

interface WalletStore extends WalletState {
  connect: (address?: string) => void
  disconnect: () => void
}

export const useWalletStore = create<WalletStore>((set) => ({
  isConnected: false,
  address: null,
  inviteCode: null,

  connect: (address?: string) => {
    const inviteCode =
      INVITE_CODES[Math.floor(Math.random() * INVITE_CODES.length)]

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
}))
