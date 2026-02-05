'use client'

import { Gloria_Hallelujah } from 'next/font/google'

const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
})

export function HeroSection() {
  return (
    <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-white/[0.02] blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-zinc-800/[0.05] blur-[150px]" />
      </div>

      {/* Hero Logo (Replaces Header) */}
      <div className="absolute top-28 left-40 z-[50]">
        <span className="cursor-pointer font-bold text-7xl text-white/90 md:text-8xl">
          Gravii
        </span>
      </div>

      {/* Strong Spotlight Overlay (Covers Header) */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] mix-blend-multiply"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.95) 90%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Title Group */}
        <div className="flex flex-col items-center leading-none blur-[0.5px]">
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text font-gambarino text-8xl text-transparent md:text-[10rem] lg:text-[13rem]">
            Connect once
          </span>
          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text font-gambarino text-8xl text-transparent md:text-[10rem] lg:text-[13rem]">
              Live differently
            </span>
          </div>
        </div>

        {/* Subtitle / Handwritten Text */}
        <div className="relative mt-32 blur-[0.5px]">
          <p
            className={`${gloria.className} text-2xl text-white/50 uppercase tracking-widest md:text-4xl`}
          >
            &ldquo;we&apos;ve burnt the old playbook&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
