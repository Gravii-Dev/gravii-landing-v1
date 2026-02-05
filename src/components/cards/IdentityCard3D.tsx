'use client'

import type React from 'react'
import { Image } from '@/src/components/ui/image'
import { PRO_TRADER_PERSONA } from '@/src/config/personas'
import { useUIStore } from '@/src/store'
import { DARK_BLUR_PLACEHOLDER } from '@/src/utils/image-placeholders'

export const IdentityCard3D: React.FC = () => {
  const isCardFlipped = useUIStore((state) => state.isCardFlipped)
  const showGlitch = useUIStore((state) => state.showGlitch)
  const setCardFlipped = useUIStore((state) => state.setCardFlipped)

  return (
    <button
      type="button"
      onClick={() => setCardFlipped(!isCardFlipped)}
      aria-label={`Gravii ID card. Click to ${isCardFlipped ? 'show front' : 'reveal details'}`}
      aria-pressed={isCardFlipped}
      className={`transform-style-3d relative h-full w-full cursor-pointer border-none bg-transparent p-0 text-left transition-transform duration-700 ${
        isCardFlipped ? 'rotate-y-180' : 'animate-float'
      } ${showGlitch ? 'animate-glitch-entry' : ''}`}
    >
      {/* FRONT: Pro Trader Image */}
      <div className="backface-hidden absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] border border-acid-400/20 bg-[#0a0a0a]">
        <Image
          src={PRO_TRADER_PERSONA.image}
          alt={PRO_TRADER_PERSONA.title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          priority
          placeholder="blur"
          blurDataURL={DARK_BLUR_PLACEHOLDER}
          className="object-cover opacity-80 contrast-125 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-acid-900/80 via-transparent to-transparent opacity-60" />

        {/* Overlay Text */}
        <div className="absolute right-8 bottom-8 left-8 z-20">
          <h2 className="mb-2 font-gambarino text-5xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {PRO_TRADER_PERSONA.title}
          </h2>
          <div className="flex items-center justify-between">
            <span className="rounded border border-acid-400/50 bg-black/50 px-3 py-1 font-gambarino text-acid-400 text-sm tracking-[0.2em] backdrop-blur">
              {PRO_TRADER_PERSONA.badge}
            </span>
            <span className="animate-pulse font-gambarino text-white/80 text-xs tracking-widest">
              [ CLICK TO REVEAL ]
            </span>
          </div>
        </div>
      </div>

      {/* BACK: Gravii ID (Acid Theme) */}
      <div className="backface-hidden absolute inset-0 flex h-full w-full rotate-y-180 flex-col rounded-[2rem] border border-acid-400/30 bg-[#080808] p-6">
        <div className="relative flex h-full w-full flex-col rounded-xl border border-white/5 bg-[#050505] p-4">
          {/* Header */}
          <div className="mb-6 border-white/10 border-b border-dashed pb-4 text-center">
            <p className="mb-1 font-gambarino text-xs text-zinc-500 uppercase tracking-[0.3em]">
              Your Profile
            </p>
            <h2 className="font-gambarino text-4xl text-white">GRAVII ID</h2>
          </div>

          {/* Wallet Info */}
          <div className="mb-6 flex items-center justify-between rounded-lg bg-white/5 p-3">
            <div>
              <span className="block font-gambarino text-xs text-zinc-500">
                WALLET ADDRESS
              </span>
              <span className="font-gambarino text-acid-400 text-lg">
                0x71C...9A21
              </span>
            </div>
            <span className="rounded border border-zinc-700 px-2 py-1 font-gambarino text-[10px] text-zinc-600">
              SCAN
            </span>
          </div>

          {/* Behavioral Labels - REAL DATA */}
          <div className="flex-grow space-y-4">
            <h3 className="mb-2 font-gambarino text-sm text-white/50 uppercase tracking-widest">
              5 Behavioral Labels
            </h3>

            <div className="space-y-3">
              {/* 1. Loyalty */}
              <div className="group/row flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-acid-400 shadow-[0_0_8px_rgba(163,230,53,0.5)]" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-acid-400"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span className="font-gambarino text-sm text-zinc-400">
                    STATUS
                  </span>
                </div>
                <span className="font-gambarino text-lg text-white">
                  OG MEMBER
                </span>
              </div>

              {/* 2. Spending */}
              <div className="group/row flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-acid-400" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-acid-400"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                  <span className="font-gambarino text-sm text-zinc-400">
                    SPENDING
                  </span>
                </div>
                <span className="font-gambarino text-lg text-white">
                  WHALE TIER 1
                </span>
              </div>

              {/* 3. Risk */}
              <div className="group/row flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-red-500" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-red-500"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="font-gambarino text-sm text-zinc-400">
                    RISK SCORE
                  </span>
                </div>
                <span className="font-gambarino text-lg text-white">
                  12/100 (SAFE)
                </span>
              </div>

              {/* 4. Yield */}
              <div className="group/row flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-blue-400" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-400"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
                    <line x1="12" y1="11" x2="12" y2="21" />
                  </svg>
                  <span className="font-gambarino text-sm text-zinc-400">
                    STRATEGY
                  </span>
                </div>
                <span className="font-gambarino text-lg text-white">
                  DEGEN FARMER
                </span>
              </div>

              {/* 5. Churn */}
              <div className="group/row flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-purple-400" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-purple-400"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="font-gambarino text-sm text-zinc-400">
                    CHURN RISK
                  </span>
                </div>
                <span className="font-gambarino text-lg text-white">LOW</span>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="mt-4 border-white border-t-2 pt-4 text-center">
            <p className="font-bold font-gambarino text-[10px] text-zinc-500 tracking-widest md:text-xs">
              8,241 TXS <span className="mx-1 text-acid-400">♦</span> 42
              PROTOCOLS <span className="mx-1 text-acid-400">♦</span> 892 DAYS
            </p>
          </div>
        </div>
        {/* ID number absolute */}
        <div className="absolute top-2 right-4 font-mono text-[10px] text-zinc-700 tracking-widest">
          [NO.001]
        </div>
      </div>
    </button>
  )
}
