'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { CardConnectWallet } from '@/components/ui/card-connect-wallet'
import { CardPersonaPreview } from '@/components/ui/card-persona-preview'
import { PersonaMagazineCard } from '@/components/ui/persona-magazine-card/index'
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

type PersonaCard =
  | {
      kind: 'magazine'
      no: number
      title: string
      backText: string
    }
  | {
      kind: 'graviiIdPreview'
      no: number
    }
  | {
      kind: 'connectWallet'
      no: number
    }

export function PersonaSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [uniformCardHeight, setUniformCardHeight] = useState<number | null>(
    null
  )
  const isJumpingRef = useRef(false)

  const cards: PersonaCard[] = [
    {
      kind: 'magazine',
      no: 22,
      title: PERSONAS[0]!.title,
      backText: PERSONAS[0]!.backText,
    },
    {
      kind: 'magazine',
      no: 21,
      title: PERSONAS[1]!.title,
      backText: PERSONAS[1]!.backText,
    },
    {
      kind: 'magazine',
      no: 20,
      title: PERSONAS[2]!.title,
      backText: PERSONAS[2]!.backText,
    },
    {
      kind: 'magazine',
      no: 17,
      title: PERSONAS[3]!.title,
      backText: PERSONAS[3]!.backText,
    },
    {
      kind: 'magazine',
      no: 14,
      title: PERSONAS[4]!.title,
      backText: PERSONAS[4]!.backText,
    },

    // 6th card: reuse the exact card used in IDSection
    { kind: 'graviiIdPreview', no: 13 },

    // 7th card: reuse ConnectSection's "Connect Wallet" action card (adapted for this section)
    { kind: 'connectWallet', no: 12 },
  ]

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track) return
    if (!section) return

    // Make card heights match the first (magazine) persona card exactly
    const firstMagazine = track.querySelector<HTMLElement>(`.${s.card}`)
    if (firstMagazine) {
      const update = () => {
        const h = Math.round(firstMagazine.getBoundingClientRect().height)
        setUniformCardHeight(h > 0 ? h : null)
      }

      update()
      const ro = new ResizeObserver(update)
      ro.observe(firstMagazine)
      window.addEventListener('resize', update)

      // keep this cleanup combined with the GSAP cleanup below
      const cleanupSizing = () => {
        ro.disconnect()
        window.removeEventListener('resize', update)
      }

      // Fade in animation
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
        cleanupSizing()
        animation.kill()
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill()
        }
      }
    }

    // Fade in animation
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
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
    }
  }, [])

  function goToConnectSection() {
    if (isJumpingRef.current) return
    isJumpingRef.current = true

    const target = document.getElementById('connect')
    if (!target) {
      isJumpingRef.current = false
      return
    }

    const top = window.scrollY + target.getBoundingClientRect().top
    window.scrollTo({ top, behavior: 'smooth' })

    // Focus management for accessibility
    window.setTimeout(() => {
      target.setAttribute('tabindex', '-1')
      target.focus()
      isJumpingRef.current = false
    }, 900)
  }

  return (
    <section
      ref={sectionRef}
      className={s.section}
      data-lenis-snap-align="start"
    >
      <div ref={trackRef} className={s.track}>
        {cards.map((card) => {
          if (card.kind === 'magazine') {
            return (
              <div key={card.no}>
                <PersonaMagazineCard
                  className={s.card ?? ''}
                  no={card.no}
                  category={card.title}
                  title={toHeadline(card.backText)}
                  imageSrc="/img/persona-card.png"
                  imageAlt=""
                />
              </div>
            )
          }

          if (card.kind === 'graviiIdPreview') {
            return (
              <div key={card.no} className={s.cardFrame ?? ''}>
                <CardPersonaPreview
                  className={cn(s.cardPersonaPreview ?? '')}
                  {...(uniformCardHeight
                    ? { cardHeight: uniformCardHeight }
                    : {})}
                />
              </div>
            )
          }

          return (
            <div key={card.no} className={s.cardFrame ?? ''}>
              <CardConnectWallet
                className={cn(s.cardConnectWallet ?? '')}
                {...(uniformCardHeight
                  ? { cardHeight: uniformCardHeight }
                  : {})}
                onConnect={goToConnectSection}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
