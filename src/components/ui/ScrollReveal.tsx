'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type ReactNode, useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  as?: React.ElementType
  delay?: number
}

export function ScrollReveal({
  children,
  className,
  as: Component = 'div',
  delay = 0,
}: ScrollRevealProps) {
  const el = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = el.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 150, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ctx.revert() // Cleanup all GSAP animations and ScrollTriggers
    }
  }, [delay])

  return (
    <Component
      ref={el}
      className={cn('opacity-0', className)}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </Component>
  )
}
