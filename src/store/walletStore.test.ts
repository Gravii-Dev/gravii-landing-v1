import { beforeEach, describe, expect, it } from 'vitest'
import { useWalletStore } from './walletStore'

describe('useWalletStore', () => {
  beforeEach(() => {
    useWalletStore.setState({
      isConnected: false,
      address: null,
      inviteCode: null,
    })
  })

  it('has initial state', () => {
    const state = useWalletStore.getState()
    expect(state.isConnected).toBe(false)
    expect(state.address).toBeNull()
    expect(state.inviteCode).toBeNull()
  })

  it('connect sets isConnected and inviteCode', () => {
    useWalletStore
      .getState()
      .connect('0x1234567890123456789012345678901234567890')
    const state = useWalletStore.getState()
    expect(state.isConnected).toBe(true)
    expect(state.address).toBe('0x1234567890123456789012345678901234567890')
    expect(state.inviteCode).toMatch(/^(LUX-88|NOIR-99|VOID-00)$/)
  })

  it('disconnect clears state', () => {
    useWalletStore.getState().connect()
    useWalletStore.getState().disconnect()
    const state = useWalletStore.getState()
    expect(state.isConnected).toBe(false)
    expect(state.address).toBeNull()
    expect(state.inviteCode).toBeNull()
  })

  it('generateInviteCode returns one of the codes', () => {
    const code = useWalletStore.getState().generateInviteCode()
    expect(['LUX-88', 'NOIR-99', 'VOID-00']).toContain(code)
  })
})
