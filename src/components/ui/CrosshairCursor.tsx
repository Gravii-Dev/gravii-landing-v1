'use client'

import { useEffect, useState } from 'react'

const BODY_CLASS = 'crosshair-cursor-active'

const INTERACTIVE_SELECTOR =
  'a, button, input, select, textarea, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"]), [data-interactive], .cursor-pointer'

function isInteractiveElement(el: Element | null): boolean {
  if (!el || el === document.body) return false
  const target = el.closest(INTERACTIVE_SELECTOR)
  return Boolean(target)
}

export function CrosshairCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  useEffect(() => {
    document.body.classList.add(BODY_CLASS)
    return () => document.body.classList.remove(BODY_CLASS)
  }, [])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsHoveringInteractive(isInteractiveElement(el))
    }
    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseleave', handleLeave)
    document.body.addEventListener('mouseenter', handleEnter)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.body.removeEventListener('mouseenter', handleEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  const crossColor = isHoveringInteractive
    ? 'var(--color-acid-400, #a3e635)'
    : 'white'

  return (
    <div className="pointer-events-none fixed inset-0 z-9999" aria-hidden>
      {/* Vertical guide line (full height, through cursor) */}
      <div
        className="absolute w-0.5 bg-white/50"
        style={{
          left: position.x,
          top: 0,
          height: '100vh',
          transform: 'translateX(-50%)',
        }}
      />
      {/* Horizontal guide line (full width, through cursor) */}
      <div
        className="absolute h-0.5 bg-white/50"
        style={{
          top: position.y,
          left: 0,
          width: '100vw',
          transform: 'translateY(-50%)',
        }}
      />
      {/* Crosshair center: 연두색 when over interactive, else white */}
      <div
        className="absolute size-6 -translate-x-1/2 -translate-y-1/2"
        style={{ left: position.x, top: position.y }}
      >
        <span
          className="absolute top-0 left-1/2 block h-6 w-0.5 -translate-x-px transition-colors duration-150"
          style={{ backgroundColor: crossColor }}
        />
        <span
          className="absolute top-1/2 left-0 block h-0.5 w-6 -translate-y-px transition-colors duration-150"
          style={{ backgroundColor: crossColor }}
        />
      </div>
    </div>
  )
}
