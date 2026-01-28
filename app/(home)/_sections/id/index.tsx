'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { CardPersonaPreview } from '@/components/ui/card-persona-preview'
import s from './id.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function IDSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section,
      { opacity: 0, y: 150, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <span className={s.label}>YOUR PROFILE</span>
          <h2 className={s.title}>GRAVII ID</h2>
          <p className={s.subtitle}>
            Your complete on-chain behavioral profile, derived from transaction
            history across 8+ chains.
          </p>
        </div>

        {/* Reuse CardPersonaPreview */}
        <CardPersonaPreview className={cn(s.card)} />
      </div>
    </section>
  )
}
