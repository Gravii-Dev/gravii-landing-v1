'use client'

import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />
    </div>
  ),
})

export function HeroSection() {
  return (
    <section className="relative z-10 h-screen w-full overflow-hidden bg-black">
      <Spline scene="https://prod.spline.design/oSboiVxAhaakfPhN/scene.splinecode" />
    </section>
  )
}
