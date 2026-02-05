/**
 * Main page wrapper with Header, Marquee, and Footer.
 * Theme and GSAP footer animation included.
 */
'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Footer } from '@/src/components/layout/footer'
import { Marquee } from '@/src/components/layout/marquee'
import { Theme } from '@/src/components/layout/theme'
import type { ThemeName } from '@/styles/config'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Theme to apply. Defaults to 'dark'. */
  theme?: ThemeName
}

export function Wrapper({
  children,
  theme = 'dark',
  className,
  ...props
}: WrapperProps) {
  const footerSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const footerSection = footerSectionRef.current
    if (!footerSection) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerSection,
        { opacity: 0, y: 150, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerSection,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ctx.revert() // Cleanup GSAP animations and ScrollTriggers
    }
  }, [])

  return (
    <Theme theme={theme} global>
      <main
        id="main-content"
        className={cn('relative flex grow flex-col', className)}
        {...props}
      >
        {children}
      </main>
      <div ref={footerSectionRef} style={{ opacity: 0 }}>
        <Marquee />
        <Footer />
      </div>
    </Theme>
  )
}
