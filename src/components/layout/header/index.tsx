'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import s from './header.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const lenis = useLenis()

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { lerp: 0.08 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!headerRef.current) return

    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: 'power2.out',
      })
      .progress(1)

    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1) {
          showAnim.reverse()
        } else {
          showAnim.play()
        }
      },
    })

    return () => {
      trigger.kill()
      showAnim.kill()
    }
  }, [])

  // Lenis 스크롤과 GSAP ScrollTrigger 동기화
  useEffect(() => {
    if (!lenis) return
    lenis.on('scroll', ScrollTrigger.update)
    return () => {
      lenis.off('scroll', ScrollTrigger.update)
    }
  }, [lenis])

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.nav}>
        <div className={s.container}>
          <button
            id="header-logo"
            type="button"
            className={s.logo}
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
          >
            Gravii
          </button>
        </div>
      </nav>
    </header>
  )
}
