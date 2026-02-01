import type React from 'react'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'

export const SpendingAnalytics: React.FC = () => {
  return (
    <>
      <div className={DESIGN_TOKENS.card.subtleGlow} />
      <div className="relative z-10 flex h-full flex-col">
        <header className="mb-10 border-white/5 border-b pb-4">
          <h3
            id="spending-analytics-heading"
            className="font-gambarino text-white/80 text-xl uppercase tracking-widest sm:text-2xl"
          >
            Spending Analytics
          </h3>
        </header>

        {/* Icon & Title */}
        <div className="mb-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors group-hover:border-acid-400/30">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-acid-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
          </div>
          <h2 className="mb-6 font-gambarino text-5xl text-white md:text-6xl">
            SPENDING ANALYTICS
          </h2>
          <p className="max-w-lg font-gambarino text-xl text-zinc-400 leading-relaxed">
            Tracks historical transaction values, gas spending patterns,
            protocol interactions, and overall capital flow to build a
            comprehensive spending profile.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-auto space-y-8">
          <div>
            <h4 className="mb-4 font-gambarino text-acid-400/70 text-xl tracking-wider">
              KEY METRICS
            </h4>
            <div className="flex flex-wrap gap-3">
              <div className="cursor-default rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-gambarino text-lg text-zinc-300 transition-all hover:border-acid-400/30 hover:bg-acid-400/10 hover:text-acid-300">
                Transaction volume
              </div>
              <div className="cursor-default rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-gambarino text-lg text-zinc-300 transition-all hover:border-acid-400/30 hover:bg-acid-400/10 hover:text-acid-300">
                Avg. transaction size
              </div>
              <div className="cursor-default rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-gambarino text-lg text-zinc-300 transition-all hover:border-acid-400/30 hover:bg-acid-400/10 hover:text-acid-300">
                Gas efficiency
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-gambarino text-acid-400/70 text-xl tracking-wider">
              USE CASES
            </h4>
            <div className="flex flex-wrap gap-6">
              <span className="cursor-default border-transparent border-b pb-1 font-gambarino text-xl text-zinc-400 transition-all hover:border-acid-400 hover:text-white">
                Credit scoring
              </span>
              <span className="cursor-default border-transparent border-b pb-1 font-gambarino text-xl text-zinc-400 transition-all hover:border-acid-400 hover:text-white">
                Whale detection
              </span>
              <span className="cursor-default border-transparent border-b pb-1 font-gambarino text-xl text-zinc-400 transition-all hover:border-acid-400 hover:text-white">
                User segmentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
