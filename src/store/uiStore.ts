import { create } from 'zustand'
import type { UIState } from '../types'

interface UIStore extends UIState {
  setCurrentArtIndex: (index: number) => void
  incrementArtIndex: (max: number) => void
  setCardFlipped: (flipped: boolean) => void
  setShowGlitch: (show: boolean) => void
  setJoinedWaitlist: (joined: boolean) => void
  resetCardState: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  currentArtIndex: 0,
  isCardFlipped: false,
  showGlitch: false,
  joinedWaitlist: false,

  setCurrentArtIndex: (index) => set({ currentArtIndex: index }),
  incrementArtIndex: (max) => set((state) => ({ currentArtIndex: (state.currentArtIndex + 1) % max })),
  setCardFlipped: (flipped) => set({ isCardFlipped: flipped }),
  setShowGlitch: (show) => set({ showGlitch: show }),
  setJoinedWaitlist: (joined) => set({ joinedWaitlist: joined }),
  resetCardState: () => set({ isCardFlipped: false }),
}))
