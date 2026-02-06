'use client'

import type React from 'react'
import { useState } from 'react'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { validateAddressOrENS } from '@/src/utils/validators'
import { Input } from '../ui/Input'

export const LookupCard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError('Please enter an address or ENS name')
      return
    }

    const validation = validateAddressOrENS(searchQuery)

    if (!validation.isValid) {
      setError('Invalid Ethereum address or ENS name')
      return
    }

    setError(null)
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // TODO: Implement actual search logic
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <div className={DESIGN_TOKENS.card.subtleGlow} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-gambarino text-3xl text-white">Lookup</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <p className="mb-6 font-gambarino text-lg text-zinc-500 leading-relaxed">
          Search the ledger. Verify the source. All transactions are final.
        </p>

        <div className="relative mt-auto space-y-2">
          <label htmlFor="wallet-lookup" className="sr-only">
            Search wallet address or ENS name
          </label>
          <div className="relative">
            <Input
              id="wallet-lookup"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                if (error) setError(null)
              }}
              onKeyDown={handleKeyDown}
              placeholder="0x address or ENS..."
              aria-label="Search wallet address or ENS name"
              aria-invalid={!!error}
              aria-describedby={error ? 'lookup-error' : undefined}
              className={error ? 'border-red-500/50' : ''}
            />
            {isLoading ? (
              <output
                className="pointer-events-none absolute top-1/2 right-4 block -translate-y-1/2"
                aria-label="Searching"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(163,230,53,0.6)"
                  strokeWidth="2"
                  className="animate-spin"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeDasharray="60"
                    strokeDashoffset="40"
                  />
                </svg>
              </output>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            )}
          </div>

          {/* Error message with ARIA live region */}
          {error && (
            <div
              id="lookup-error"
              role="alert"
              aria-live="polite"
              className="flex items-center gap-2 font-gambarino text-red-400 text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
