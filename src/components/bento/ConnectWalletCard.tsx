'use client'

import { useAppKit } from '@reown/appkit/react'
import type React from 'react'
import { useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { useUIStore, useWalletStore } from '@/src/store'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { Button } from '../ui/Button'

export const ConnectWalletCard: React.FC = () => {
  const { open } = useAppKit()
  const { address, isConnected: wagmiConnected } = useAccount()
  const { disconnect: wagmiDisconnect } = useDisconnect()

  const { isConnected, inviteCode, connect, disconnect } = useWalletStore()
  const setShowGlitch = useUIStore((state) => state.setShowGlitch)

  // Sync wagmi connection state with our store
  useEffect(() => {
    if (wagmiConnected && address) {
      connect(address)
      // Trigger glitch effect on mount of the new card
      setShowGlitch(true)
      setTimeout(() => setShowGlitch(false), 500)
    } else if (!wagmiConnected && isConnected) {
      disconnect()
      useUIStore.getState().resetCardState()
    }
  }, [wagmiConnected, address, isConnected, connect, disconnect, setShowGlitch])

  const handleConnect = () => {
    open()
  }

  const handleDisconnect = () => {
    wagmiDisconnect()
    disconnect()
    useUIStore.getState().resetCardState()
  }

  return (
    <>
      <div className={DESIGN_TOKENS.card.subtleGlow} />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h2 className="mb-2 font-gambarino text-5xl text-white md:text-6xl">
            Connect
          </h2>
          <p className="max-w-md font-gambarino text-white/40 text-xl">
            Establish a secure link to the Gravii network.
          </p>
        </div>
        {/* Subtle Status Indicator */}
        <div className="flex flex-col items-end">
          <div
            className={`h-2 w-2 rounded-full ${
              isConnected
                ? 'bg-acid-400 shadow-[0_0_10px_rgba(163,230,53,0.4)]'
                : 'bg-red-500/50'
            }`}
          />
          <span className="mt-2 font-gambarino text-sm text-zinc-500">
            {isConnected ? 'live' : 'offline'}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-col items-center gap-6 md:mt-0 md:flex-row">
        {!isConnected ? (
          <Button onClick={handleConnect} className="w-full md:w-auto">
            <span>Link Wallet</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </Button>
        ) : (
          <div className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-6">
            <div className="z-10 flex flex-col">
              <span className="font-gambarino text-3xl text-white">
                Connected
              </span>
              <span className="font-gambarino text-sm text-zinc-500">
                {address
                  ? `${address.slice(0, 6)}...${address.slice(-4)}`
                  : '0x71C...9A21'}
              </span>
              <button
                type="button"
                onClick={handleDisconnect}
                className="mt-2 flex w-fit items-center gap-1 font-gambarino text-red-500/40 text-xs transition-colors hover:text-red-400"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                  <line x1="12" y1="2" x2="12" y2="12" />
                </svg>
                DISCONNECT
              </button>
            </div>
            <div className="z-10 text-right">
              <span className="font-gambarino text-2xl text-acid-400">
                {inviteCode}
              </span>
              <span className="block font-gambarino text-sm text-zinc-600">
                ACCESS GRANTED
              </span>
            </div>

            {/* Background effect for connected state */}
            <div className="pointer-events-none absolute inset-0 bg-acid-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        )}
      </div>
    </>
  )
}
