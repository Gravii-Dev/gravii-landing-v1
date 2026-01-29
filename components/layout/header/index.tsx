'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './header.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.nav}>
        <div className={s.container}>
          <button
            id="header-logo"
            onClick={scrollToTop}
            className={s.logo}
            type="button"
          >
            Gravii
          </button>
          <div className={s.actions}>
            <button className={s.walletButton} type="button">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
