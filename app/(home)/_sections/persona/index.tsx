'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Card3D } from '@/components/ui/card-3d'
import { CardConnectWallet } from '@/components/ui/card-connect-wallet'
import { CardPersonaPreview } from '@/components/ui/card-persona-preview'
import s from './persona.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type PersonaItem =
  | { id: number; type: 'flip'; title: string; backText: string }
  | { id: number; type: 'preview' }
  | { id: number; type: 'connect' }

const PERSONAS: PersonaItem[] = [
  {
    id: 1,
    type: 'flip',
    title: 'The Innovator',
    backText:
      'A creative and innovative thinker who embraces new ideas and is not afraid of change. Solves problems with original approaches and inspires teams through leadership.',
  },
  {
    id: 2,
    type: 'flip',
    title: 'The Analyst',
    backText:
      'An analytical and systematic thinker who makes decisions based on data and facts. Pays close attention to details and builds solid foundations as a reliable partner.',
  },
  {
    id: 3,
    type: 'flip',
    title: 'The Connector',
    backText:
      'Excels at communication and collaboration. Effectively engages with people from diverse backgrounds and fosters team harmony with exceptional empathy.',
  },
  {
    id: 4,
    type: 'flip',
    title: 'The Executor',
    backText:
      'Possesses strong execution and drive. Once a goal is set, sees it through to completion. Never gives up in difficult situations and finds practical solutions quickly.',
  },
  {
    id: 5,
    type: 'flip',
    title: 'The Strategist',
    backText:
      'A strategic thinker with vision. Plans from a long-term perspective with insight to anticipate the future. Sets organizational direction and creates roadmaps for success.',
  },
  {
    id: 6,
    type: 'preview',
  },
  {
    id: 7,
    type: 'connect',
  },
]

export function PersonaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (!sectionRef.current) return

    const scrollAmount = track.scrollWidth - window.innerWidth

    const animation = gsap.to(track, {
      x: -scrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${scrollAmount}`,
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
        {PERSONAS.map((persona) => (
          <div key={persona.id} className={s.slide}>
            {persona.type === 'flip' && (
              <>
                <div className="text-3d-float">Flip me over</div>
                <Card3D
                  imageSrc="/img/persona-card.png"
                  title={persona.title}
                  backText={persona.backText}
                />
              </>
            )}
            {persona.type === 'preview' && (
              <>
                <div className="text-3d-float">Your Persona</div>
                <CardPersonaPreview />
              </>
            )}
            {persona.type === 'connect' && (
              <>
                <div className="text-3d-float">Get Started</div>
                <CardConnectWallet />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
