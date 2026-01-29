import type React from 'react'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { SpendingAnalytics } from '../cards/SpendingAnalytics'

const LABELS = ['SYBIL', 'SPENDING', 'RISK', 'YIELD', 'CHURN']

export const LabelsSection: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-10 pb-20">
      {/* Section Header */}
      <div className="flex justify-center py-10">
        <h2 className="font-gambarino text-6xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:text-8xl">
          LABELS
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* LEFT: BEHAVIORAL LABELS */}
        <div className={`${DESIGN_TOKENS.card.base} p-10 md:p-14`}>
          <div className={DESIGN_TOKENS.card.subtleGlow} />
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-10 border-white/5 border-b pb-4">
              <h3 className="font-gambarino text-2xl text-white/80 uppercase tracking-widest">
                5 Behavioral Labels
              </h3>
            </div>

            <ul className="flex flex-grow flex-col justify-center space-y-6">
              {LABELS.map((label, i) => (
                <li
                  key={label}
                  className="group/item relative flex cursor-default items-center gap-6"
                >
                  {/* Hover Indicator */}
                  <div className="absolute -left-6 h-0 w-1 bg-acid-400 opacity-0 transition-all duration-300 group-hover/item:h-full group-hover/item:opacity-100" />

                  {/* Vertical Bar */}
                  <div className="h-12 w-1 rounded-full bg-white/10 transition-all duration-300 group-hover/item:bg-acid-400/50 group-hover/item:shadow-[0_0_10px_rgba(163,230,53,0.5)]" />

                  {/* Icon Box */}
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 transition-colors duration-300 group-hover/item:border-acid-400/30 group-hover/item:bg-acid-400/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-zinc-500 transition-colors duration-300 group-hover/item:text-acid-400"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      {i === 0 && <polyline points="20 6 9 17 4 12" />}
                      {i === 1 && (
                        <>
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                          <polyline points="17 6 23 6 23 12" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <path d="M12 2.69l5.74 5.88-5.74 5.88-5.74-5.88z" />
                          <path d="M5 13v6h14v-6" />
                        </>
                      )}
                      {i === 4 && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Text */}
                  <span className="font-gambarino text-3xl text-zinc-500 transition-all duration-300 group-hover/item:translate-x-2 group-hover/item:text-white">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: SPENDING ANALYTICS */}
        <div
          className={`${DESIGN_TOKENS.card.base} group flex flex-col p-10 md:p-14`}
        >
          <SpendingAnalytics />
        </div>
      </div>
    </div>
  )
}
