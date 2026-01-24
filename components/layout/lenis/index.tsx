'use client'

import type { LenisOptions } from 'lenis'
import 'lenis/dist/lenis.css'
import type { LenisRef, LenisProps as ReactLenisProps } from 'lenis/react'
import { ReactLenis, useLenis } from 'lenis/react'
import Snap from 'lenis/snap'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { useTempus } from 'tempus/react'
import { useStore } from '@/lib/hooks/store'

const LenisScrollTriggerSync = dynamic(
  () => import('./scroll-trigger').then((mod) => mod.LenisScrollTriggerSync),
  {
    ssr: false,
  }
)

interface LenisProps extends Omit<ReactLenisProps, 'ref'> {
  root: boolean
  options: LenisOptions
  syncScrollTrigger?: boolean
  /** Enable scroll snapping to sections with data-lenis-snap-align attribute */
  snap?: boolean
}

function LenisSnapManager({ enabled }: { enabled: boolean }) {
  const lenis = useLenis()
  const snapRef = useRef<Snap | null>(null)

  useEffect(() => {
    if (!(enabled && lenis)) return

    // Snap 인스턴스 생성 (슬라이드쇼 모드)
    const snap = new Snap(lenis, {
      type: 'lock',
      debounce: 0,
    })
    snapRef.current = snap

    // data-lenis-snap-align 속성이 있는 모든 섹션을 스냅 포인트로 추가
    const sections = document.querySelectorAll<HTMLElement>(
      '[data-lenis-snap-align]'
    )
    snap.addElements(Array.from(sections), {
      align: 'start',
    })

    return () => {
      snap.stop()
    }
  }, [enabled, lenis])

  return null
}

export function Lenis({
  root,
  options,
  syncScrollTrigger = false,
  snap = false,
}: LenisProps) {
  const lenisRef = useRef<LenisRef>(null)
  const isNavOpened = useStore(
    (state: { isNavOpened: boolean }) => state.isNavOpened
  )

  useTempus((time: number) => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.raf(time)
    }
  })

  useEffect(() => {
    const isOverflowHidden = isNavOpened
    document.documentElement.classList.toggle(
      'overflow-hidden',
      isOverflowHidden
    )
  }, [isNavOpened])

  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        lerp: options?.lerp ?? 0.125,
        autoRaf: false,
        anchors: true,
        autoToggle: true,
        prevent: (node: Element | null) =>
          node?.nodeName === 'VERCEL-LIVE-FEEDBACK' ||
          node?.id === 'theatrejs-studio-root',
      }}
    >
      {syncScrollTrigger && root && <LenisScrollTriggerSync />}
      {snap && <LenisSnapManager enabled={snap} />}
    </ReactLenis>
  )
}
