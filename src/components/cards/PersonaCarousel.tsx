'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

// 5가지 페르소나 정의
const PERSONAS = [
  {
    id: 1,
    title: 'PRO TRADER',
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
    badge: 'GEN 1.0',
    labels: [
      {
        icon: '💎',
        label: 'STATUS',
        value: 'OG MEMBER',
        color: 'text-acid-400',
      },
      {
        icon: '📈',
        label: 'SPENDING',
        value: 'WHALE TIER 1',
        color: 'text-acid-400',
      },
      {
        icon: '⚠️',
        label: 'RISK SCORE',
        value: '12/100 (SAFE)',
        color: 'text-red-500',
      },
      {
        icon: '🌾',
        label: 'STRATEGY',
        value: 'DEGEN FARMER',
        color: 'text-blue-400',
      },
      {
        icon: '⏰',
        label: 'CHURN RISK',
        value: 'LOW',
        color: 'text-purple-400',
      },
    ],
    stats: '8,241 TXS ♦ 42 PROTOCOLS ♦ 892 DAYS',
  },
  {
    id: 2,
    title: 'WHALE HUNTER',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    badge: 'ELITE',
    labels: [
      {
        icon: '🐋',
        label: 'STATUS',
        value: 'MEGA WHALE',
        color: 'text-acid-400',
      },
      {
        icon: '💰',
        label: 'SPENDING',
        value: '$10M+ VOLUME',
        color: 'text-acid-400',
      },
      {
        icon: '✅',
        label: 'RISK SCORE',
        value: '5/100 (ULTRA SAFE)',
        color: 'text-green-500',
      },
      {
        icon: '🎯',
        label: 'STRATEGY',
        value: 'BLUE CHIP HOLDER',
        color: 'text-blue-400',
      },
      {
        icon: '🔒',
        label: 'CHURN RISK',
        value: 'NONE',
        color: 'text-purple-400',
      },
    ],
    stats: '25,389 TXS ♦ 128 PROTOCOLS ♦ 1,456 DAYS',
  },
  {
    id: 3,
    title: 'DEGEN FARMER',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop',
    badge: 'RISK',
    labels: [
      {
        icon: '🌾',
        label: 'STATUS',
        value: 'YIELD CHASER',
        color: 'text-yellow-400',
      },
      {
        icon: '⚡',
        label: 'SPENDING',
        value: 'HIGH VELOCITY',
        color: 'text-acid-400',
      },
      {
        icon: '🔥',
        label: 'RISK SCORE',
        value: '78/100 (HIGH)',
        color: 'text-red-500',
      },
      {
        icon: '🎲',
        label: 'STRATEGY',
        value: 'APY MAXIMIZER',
        color: 'text-blue-400',
      },
      {
        icon: '⚠️',
        label: 'CHURN RISK',
        value: 'MEDIUM',
        color: 'text-orange-400',
      },
    ],
    stats: '15,672 TXS ♦ 89 PROTOCOLS ♦ 342 DAYS',
  },
  {
    id: 4,
    title: 'NFT COLLECTOR',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    badge: 'CULTURE',
    labels: [
      {
        icon: '🖼️',
        label: 'STATUS',
        value: 'ART ENTHUSIAST',
        color: 'text-pink-400',
      },
      {
        icon: '💸',
        label: 'SPENDING',
        value: 'NFT WHALE',
        color: 'text-acid-400',
      },
      {
        icon: '📊',
        label: 'RISK SCORE',
        value: '45/100 (MODERATE)',
        color: 'text-yellow-500',
      },
      {
        icon: '🎨',
        label: 'STRATEGY',
        value: 'BLUE CHIP COLLECTOR',
        color: 'text-blue-400',
      },
      {
        icon: '💎',
        label: 'CHURN RISK',
        value: 'LOW',
        color: 'text-purple-400',
      },
    ],
    stats: '3,892 TXS ♦ 24 PROTOCOLS ♦ 678 DAYS',
  },
  {
    id: 5,
    title: 'AIRDROP HUNTER',
    image:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop',
    badge: 'ALPHA',
    labels: [
      {
        icon: '🎁',
        label: 'STATUS',
        value: 'OPPORTUNIST',
        color: 'text-cyan-400',
      },
      {
        icon: '🔄',
        label: 'SPENDING',
        value: 'GAS OPTIMIZER',
        color: 'text-acid-400',
      },
      {
        icon: '🛡️',
        label: 'RISK SCORE',
        value: '22/100 (LOW)',
        color: 'text-green-500',
      },
      {
        icon: '🎯',
        label: 'STRATEGY',
        value: 'MULTI-CHAIN FARMER',
        color: 'text-blue-400',
      },
      { icon: '🚀', label: 'CHURN RISK', value: 'HIGH', color: 'text-red-400' },
    ],
    stats: '42,156 TXS ♦ 315 PROTOCOLS ♦ 521 DAYS',
  },
]

export const PersonaCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState(0)

  // 프로그레스 바 애니메이션 (5초 동안 0 → 100)
  useEffect(() => {
    setProgress(0) // 카드 변경 시 0으로 리셋

    const startTime = Date.now()
    const duration = 5000 // 5초

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress)
      }
    }

    const animationId = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // 자동 전환 (5초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PERSONAS.length)
      setIsFlipped(false) // 다음 카드로 넘어갈 때 앞면으로 리셋
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentPersona = PERSONAS[currentIndex]

  return (
    <div className="relative h-full w-full">
      {/* 3D Flip Card Container */}
      <div
        role="button"
        tabIndex={0}
        className={`transform-style-3d relative h-full w-full cursor-pointer transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsFlipped(!isFlipped)
          }
        }}
      >
        {/* FRONT: Persona Image */}
        <div className="backface-hidden absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] border border-acid-400/20 bg-[#0a0a0a]">
          {/* biome-ignore lint/performance/noImgElement: external URL, carousel slide */}
          <img
            key={currentPersona.id}
            src={currentPersona.image}
            alt={currentPersona.title}
            className="h-full w-full object-cover opacity-80 contrast-125 filter transition-opacity duration-500"
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
      </div>

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

      {/* Progress Bar (상단) - 5초 카운트다운 */}
      <div className="absolute top-0 right-0 left-0 z-30 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-acid-400 shadow-[0_0_8px_rgba(163,230,53,0.6)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
