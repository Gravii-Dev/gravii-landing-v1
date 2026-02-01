'use client'

import type React from 'react'
import { useEffect, useEffectEvent, useState } from 'react'
import { Image } from '@/src/components/ui/image'
import { PERSONAS } from '@/src/config/personas'
import { DARK_BLUR_PLACEHOLDER } from '@/src/utils/image-placeholders'

export const PersonaCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  const handlePrev = useEffectEvent(() => {
    setCurrentIndex((prev) => (prev - 1 + PERSONAS.length) % PERSONAS.length)
    setIsFlipped(false)
    setProgressKey((prev) => prev + 1)
  })

  const handleNext = useEffectEvent(() => {
    setCurrentIndex((prev) => (prev + 1) % PERSONAS.length)
    setIsFlipped(false)
    setProgressKey((prev) => prev + 1)
  })

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      else if (e.key === 'ArrowRight') handleNext()
      else if (e.key === ' ' || e.key === 'Enter') {
        if (document.activeElement?.getAttribute('role') === 'button') return
        setIsFlipped((prev) => !prev)
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [])

  const currentPersona = PERSONAS[currentIndex]

  return (
    <section
      className="relative h-full w-full"
      aria-label="User persona carousel"
      aria-live="polite"
    >
      {/* 3D Flip Card Container */}
      <button
        type="button"
        className={`transform-style-3d relative h-full w-full cursor-pointer border-none bg-transparent p-0 text-left transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        aria-label={`${currentPersona.title} persona card. Click to ${isFlipped ? 'show front' : 'reveal details'}`}
        aria-pressed={isFlipped}
      >
        {/* FRONT: Persona Image */}
        <div className="backface-hidden absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] border border-acid-400/20 bg-[#0a0a0a]">
          <Image
            key={currentPersona.id}
            src={currentPersona.image}
            alt={currentPersona.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            priority={currentIndex === 0}
            placeholder="blur"
            blurDataURL={DARK_BLUR_PLACEHOLDER}
            className="object-cover opacity-80 contrast-125 filter transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-acid-900/80 via-transparent to-transparent opacity-60" />

          {/* Overlay Text */}
          <div className="absolute right-8 bottom-8 left-8 z-20">
            <h2 className="mb-2 font-gambarino text-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:text-5xl">
              {currentPersona.title}
            </h2>
            <div className="flex items-center justify-between">
              <span className="rounded border border-acid-400/50 bg-black/50 px-3 py-1 font-gambarino text-acid-400 text-sm tracking-[0.2em] backdrop-blur">
                {currentPersona.badge}
              </span>
              <span className="animate-pulse font-gambarino text-white/80 text-xs tracking-widest">
                [ CLICK TO REVEAL ]
              </span>
            </div>
          </div>
        </div>

        {/* BACK: Gravii ID */}
        <div className="backface-hidden absolute inset-0 flex h-full w-full rotate-y-180 flex-col overflow-y-auto rounded-[2rem] border border-acid-400/30 bg-[#080808] p-4 md:p-6">
          <div className="relative flex h-full w-full flex-col rounded-xl border border-white/5 bg-[#050505] p-3 md:p-4">
            {/* Header */}
            <div className="mb-4 border-white/10 border-b border-dashed pb-3 text-center">
              <p className="mb-1 font-gambarino text-[10px] text-zinc-500 uppercase tracking-[0.3em]">
                Your Profile
              </p>
              <h2 className="font-gambarino text-2xl text-white md:text-4xl">
                GRAVII ID
              </h2>
            </div>

            {/* Wallet Info */}
            <div className="mb-4 flex items-center justify-between rounded-lg bg-white/5 p-2 md:p-3">
              <div>
                <span className="block font-gambarino text-[10px] text-zinc-500">
                  WALLET ADDRESS
                </span>
                <span className="font-gambarino text-acid-400 text-sm md:text-lg">
                  0x71C...9A21
                </span>
              </div>
              <span className="rounded border border-zinc-700 px-2 py-1 font-gambarino text-[8px] text-zinc-600 md:text-[10px]">
                SCAN
              </span>
            </div>

            {/* Behavioral Labels */}
            <div className="flex-grow space-y-2 md:space-y-4">
              <h3 className="mb-2 font-gambarino text-white/50 text-xs uppercase tracking-widest md:text-sm">
                5 Behavioral Labels
              </h3>

              <div className="space-y-2">
                {currentPersona.labels.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-6 w-1 ${item.color.replace('text-', 'bg-')} rounded-full`}
                      />
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-gambarino text-xs text-zinc-400">
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={`font-gambarino ${item.color} font-bold text-sm md:text-lg`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-4 border-white border-t-2 pt-3 text-center">
              <p className="font-bold font-gambarino text-[9px] text-zinc-500 tracking-widest md:text-xs">
                {currentPersona.stats}
              </p>
            </div>
          </div>
          {/* ID number */}
          <div className="absolute top-2 right-4 font-mono text-[10px] text-zinc-700 tracking-widest">
            [NO.00{currentPersona.id}]
          </div>
        </div>
      </button>

      {/* Indicators (하단 중앙) */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-sm">
        {PERSONAS.map((persona, idx) => (
          <button
            type="button"
            key={persona.id}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(idx)
              setIsFlipped(false)
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 hover:scale-125 ${
              idx === currentIndex
                ? 'w-6 bg-acid-400 shadow-[0_0_8px_rgba(163,230,53,0.6)]'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to ${persona.title}`}
          />
        ))}
      </div>

      {/* Progress Bar (상단) - 5초 카운트다운 - CSS animation for better performance */}
      <div className="absolute top-0 right-0 left-0 z-30 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          key={progressKey}
          className="h-full w-0 animate-progress bg-acid-400 shadow-[0_0_8px_rgba(163,230,53,0.6)]"
        />
      </div>
    </section>
  )
}
