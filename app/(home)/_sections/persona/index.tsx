'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { PersonaMagazineCard } from '@/components/ui/persona-magazine-card'
import s from './persona.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const PERSONAS = [
  {
    id: 1,
    title: 'The Innovator',
    backText:
      'A creative and innovative thinker who embraces new ideas and is not afraid of change. Solves problems with original approaches and inspires teams through leadership.',
  },
  {
    id: 2,
    title: 'The Analyst',
    backText:
      'An analytical and systematic thinker who makes decisions based on data and facts. Pays close attention to details and builds solid foundations as a reliable partner.',
  },
  {
    id: 3,
    title: 'The Connector',
    backText:
      'Excels at communication and collaboration. Effectively engages with people from diverse backgrounds and fosters team harmony with exceptional empathy.',
  },
  {
    id: 4,
    title: 'The Executor',
    backText:
      'Possesses strong execution and drive. Once a goal is set, sees it through to completion. Never gives up in difficult situations and finds practical solutions quickly.',
  },
  {
    id: 5,
    title: 'The Strategist',
    backText:
      'A strategic thinker with vision. Plans from a long-term perspective with insight to anticipate the future. Sets organizational direction and creates roadmaps for success.',
  },
]

function toHeadline(text: string, maxChars = 62) {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= maxChars) return clean
  const cut = clean.slice(0, maxChars).replace(/[,\s]+$/, '')
  return `${cut}…`
}

export function PersonaSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const cards = [
    { no: 22, ...PERSONAS[0]! },
    { no: 21, ...PERSONAS[1]! },
    { no: 20, ...PERSONAS[2]! },
    { no: 17, ...PERSONAS[3]! },
    { no: 14, ...PERSONAS[4]! },
    {
      no: 13,
      id: 6,
      title: 'GRAVII ID',
      backText:
        'Your complete on-chain behavioral profile, derived from transaction history across 8+ chains.',
    },
  ]

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track) return
    if (!section) return

    const getScrollAmount = () => track.scrollWidth - window.innerWidth

    const animation = gsap.to(track, {
      x: () => -Math.max(0, getScrollAmount()),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(0, getScrollAmount())}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      animation.kill()
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={s.section}
      data-lenis-snap-align="start"
    >
      <div ref={trackRef} className={s.track}>
        {cards.map((p) => (
          <PersonaMagazineCard
            key={p.no}
            className={s.card ?? ''}
            no={p.no}
            category={p.title}
            title={toHeadline(p.backText)}
            imageSrc="/img/persona-card.png"
            imageAlt=""
          />
        ))}
      </div>
    </section>
  )
}
