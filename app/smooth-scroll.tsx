'use client'

import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

/**
 * Lenis 스무스 스크롤: 스크롤이 끝날 때 점점 느려지는 중력감(lerp).
 * - lerp 낮을수록 감속이 길고 부드럽게 멈춤 (기본 0.1 → 0.06)
 */
const lenisOptions = {
  lerp: 0.06,
  smoothWheel: true,
  autoRaf: true,
  duration: 1.2,
  orientation: 'vertical' as const,
  wheelMultiplier: 1,
  touchMultiplier: 1,
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}
