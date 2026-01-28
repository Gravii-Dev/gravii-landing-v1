'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleWrapRef = useRef<HTMLDivElement | null>(null)
  const toggleTrackRef = useRef<HTMLDivElement | null>(null)
  const toggleFillRef = useRef<HTMLDivElement | null>(null)
  const toggleKnobRef = useRef<HTMLDivElement | null>(null)
  const shadeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const titleWrap = titleWrapRef.current
    const shade = shadeRef.current
    const toggleTrack = toggleTrackRef.current
    const toggleFill = toggleFillRef.current
    const toggleKnob = toggleKnobRef.current

    if (!section) return
    if (!titleWrap) return
    if (!shade) return
    if (!toggleTrack) return
    if (!toggleFill) return
    if (!toggleKnob) return

    const words = section.querySelectorAll('.hero-title-word')

    const introTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.3,
    })

    introTl.from(words, {
      y: '120%',
      duration: 1,
      stagger: 0.1,
    })

    introTl.from(
      toggleTrack,
      {
        scale: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '-=0.8'
    )

    const getMoveDistance = () => {
      const titleWidth = titleWrap.scrollWidth
      const viewportWidth = window.innerWidth
      return Math.max(0, titleWidth - viewportWidth + 500)
    }

    const getKnobMoveDistance = () => {
      const trackWidth = toggleTrack.getBoundingClientRect().width
      const knobWidth = toggleKnob.getBoundingClientRect().width
      const styles = window.getComputedStyle(toggleTrack)
      const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0
      const paddingRight = Number.parseFloat(styles.paddingRight) || 0
      return Math.max(0, trackWidth - knobWidth - (paddingLeft + paddingRight))
    }

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        preventOverlaps: true,
      },
    })

    scrollTl.to(titleWrap, { x: () => -getMoveDistance(), ease: 'none' }, 0)
    scrollTl.to(
      shade,
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'none' },
      0
    )
    scrollTl.to(
      toggleKnob,
      { x: () => getKnobMoveDistance(), ease: 'power2.out', duration: 0.25 },
      0
    )
    scrollTl.to(
      toggleFill,
      { width: '100%', ease: 'power2.out', duration: 0.25 },
      0
    )

    return () => {
      introTl.kill()
      scrollTl.scrollTrigger?.kill()
      scrollTl.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={s.section}
      data-lenis-snap-align="start"
    >
      <div className={s.sticky}>
        <div className={s.container}>
          <div className={s.titleOuter}>
            <div ref={titleWrapRef} className={s.titleWrap}>
              <div className={s.titleRow}>
                <h1 className={`hero-title-word ${s.word} ${s.wordBlack}`}>
                  YOUR
                </h1>

                <div
                  ref={toggleTrackRef}
                  className={`hero-toggle-track ${s.toggleTrack}`}
                >
                  <div
                    ref={toggleFillRef}
                    className={`hero-toggle-fill ${s.toggleFill}`}
                  />
                  <div
                    ref={toggleKnobRef}
                    className={`hero-toggle-knob ${s.toggleKnob}`}
                  />
                </div>

                <h1 className={`hero-title-word ${s.word} ${s.wordGrey}`}>
                  PERSONAL
                </h1>
                <h1 className={`hero-title-word ${s.word} ${s.wordGrey}`}>
                  CONCIERGE
                </h1>
              </div>

              <div ref={shadeRef} className={s.shade} aria-hidden="true">
                <div className={s.titleRow}>
                  <h1 className={`${s.word} ${s.wordBlack} ${s.wordGhost}`}>
                    YOUR
                  </h1>
                  <div className={s.toggleGhost} />
                  <h1 className={`${s.word} ${s.wordBlack}`}>PERSONAL</h1>
                  <h1 className={`${s.word} ${s.wordBlack}`}>CONCIERGE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
