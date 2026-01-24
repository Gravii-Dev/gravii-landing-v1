'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    const logoElement = document.querySelector('#header-logo')

    if (!textElement) return
    if (!containerRef.current) return

    // 초기화: GSAP으로 중앙 정렬 설정
    gsap.set(textElement, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
      scale: 1,
    })

    const targetTop = 32
    const targetScale = 0.12

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
      },
    })

    // 위로 올라가며 작아짐
    tl.to(textElement, {
      top: targetTop,
      yPercent: 0,
      scale: targetScale,
      transformOrigin: 'center top',
      ease: 'power2.inOut',
      duration: 1,
    })

    // 충돌 애니메이션
    if (logoElement) {
      tl.to(logoElement, {
        x: '42vw',
        ease: 'power1.in',
        duration: 0.15,
      })

      tl.to(
        textElement,
        {
          x: '100vw',
          opacity: 0,
          rotation: 90,
          duration: 0.2,
          ease: 'power4.out',
        },
        '<+=0.1'
      )
    }

    return () => {
      tl.kill()
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={s.section}
      data-lenis-snap-align="start"
    >
      <h1 ref={textRef} className={s.title}>
        YOUR
        <br />
        PERSONAL
        <br />
        CONCIERGE
      </h1>
    </section>
  )
}
