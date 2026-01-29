'use client'

import type React from 'react'
import { useWalletStore } from '@/src/store'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { IdentityCard3D } from '../cards/IdentityCard3D'
import { PersonaCarousel } from '../cards/PersonaCarousel'
import { ConnectWalletCard } from './ConnectWalletCard'
import { LookupCard } from './LookupCard'
import { WaitlistCard } from './WaitlistCard'

export const BentoGrid: React.FC = () => {
  const isConnected = useWalletStore((state) => state.isConnected)

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-black p-6 md:p-12 lg:p-20">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-white/[0.02] blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-zinc-800/[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* --- DASHBOARD --- */}
        <div className="grid aspect-auto auto-rows-fr grid-cols-1 gap-6 md:aspect-[16/10] md:grid-cols-3">
          {/* 1. DYNAMIC CARD: Persona Carousel (Default) OR User's Gravii ID (Connected) */}
          <div
            className={`md:col-span-1 md:row-span-2 ${DESIGN_TOKENS.card.base} perspective-1000`}
          >
            {!isConnected ? <PersonaCarousel /> : <IdentityCard3D />}
          </div>

          {/* 2. CONNECT WALLET (Top Right Wide) */}
          <div
            className={`md:col-span-2 ${DESIGN_TOKENS.card.base} flex flex-col justify-between p-8 md:p-12`}
          >
            <ConnectWalletCard />
          </div>

          {/* 3. WAITLIST (Bottom Middle) */}
          <div
            className={`${DESIGN_TOKENS.card.base} relative flex flex-col p-8 md:p-10`}
          >
            <WaitlistCard />
          </div>

          {/* 4. WALLET LOOKUP (Bottom Right) */}
          <div
            className={`${DESIGN_TOKENS.card.base} relative flex flex-col p-8 md:p-10`}
          >
            <LookupCard />
          </div>
        </div>
      </div>
    </section>
  )
}
