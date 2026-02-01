import { beforeEach, describe, expect, it } from 'vitest'
import { useUIStore } from './uiStore'

describe('useUIStore', () => {
  beforeEach(() => {
    useUIStore.setState({
      currentArtIndex: 0,
      isCardFlipped: false,
      showGlitch: false,
      joinedWaitlist: false,
    })
  })

  it('has initial state', () => {
    const state = useUIStore.getState()
    expect(state.currentArtIndex).toBe(0)
    expect(state.isCardFlipped).toBe(false)
    expect(state.showGlitch).toBe(false)
    expect(state.joinedWaitlist).toBe(false)
  })

  it('setCurrentArtIndex updates state', () => {
    useUIStore.getState().setCurrentArtIndex(2)
    expect(useUIStore.getState().currentArtIndex).toBe(2)
  })

  it('setCardFlipped updates state', () => {
    useUIStore.getState().setCardFlipped(true)
    expect(useUIStore.getState().isCardFlipped).toBe(true)
  })

  it('setJoinedWaitlist updates state', () => {
    useUIStore.getState().setJoinedWaitlist(true)
    expect(useUIStore.getState().joinedWaitlist).toBe(true)
  })

  it('resetCardState resets isCardFlipped', () => {
    useUIStore.getState().setCardFlipped(true)
    useUIStore.getState().resetCardState()
    expect(useUIStore.getState().isCardFlipped).toBe(false)
  })
})
