'use client'

import type React from 'react'
import { useState } from 'react'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { Input } from '../ui/Input'

export const LookupCard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

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

        <div className="relative mt-auto">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="0x address or ENS..."
          />
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
        </div>
      </div>
    </>
  )
}
