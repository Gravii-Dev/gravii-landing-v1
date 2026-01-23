'use client'

import cn from 'clsx'
import { useEffect, useState } from 'react'
import { Image } from '@/components/ui/image'
import s from './splash-gate.module.css'

type Phase = 'show' | 'fade' | 'done'

interface SplashGateProps {
  children: React.ReactNode
  message?: string
  durationMs?: number
  imageSrc?: string
  imageAlt?: string
  imageMaxWidthPx?: number
  bgSrc?: string
}

export function SplashGate({
  children,
  message = 'hello world',
  durationMs = 1500,
  imageSrc,
  imageAlt = 'Splash',
  imageMaxWidthPx = 900,
  bgSrc,
}: SplashGateProps) {
  const [phase, setPhase] = useState<Phase>('show')

  useEffect(() => {
    const fadeDurationMs = 600
    const fadeAtMs = Math.max(0, durationMs - fadeDurationMs)

    const fadeTimer = window.setTimeout(() => setPhase('fade'), fadeAtMs)
    const doneTimer = window.setTimeout(() => setPhase('done'), durationMs)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
    }
  }, [durationMs])

  return (
    <>
      {children}

      {phase !== 'done' && (
        <div
          className={cn(s.splash, phase === 'fade' && s.fadeOut)}
          style={bgSrc ? { backgroundImage: `url('${bgSrc}')` } : undefined}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {imageSrc ? (
            <div
              className={s.imageWrapper}
              style={
                {
                  '--splash-max-w': `${imageMaxWidthPx}px`,
                } as React.CSSProperties
              }
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageMaxWidthPx}
                height={Math.round(imageMaxWidthPx * 0.35)}
                preload
                className={s.image}
              />
            </div>
          ) : (
            <p className={s.message}>{message}</p>
          )}
        </div>
      )}
    </>
  )
}
