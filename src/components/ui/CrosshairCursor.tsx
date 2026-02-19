'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'

const BODY_CLASS = 'crosshair-cursor-active'
const POINTER_QUERY = '(pointer: fine)'

const INTERACTIVE_SELECTOR =
  'a, button, input, select, textarea, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"]), [data-interactive], .cursor-pointer'

function isInteractiveElement(el: Element | null): boolean {
  if (!el || el === document.body) return false
  const target = el.closest(INTERACTIVE_SELECTOR)
  return Boolean(target)
}

/** 마우스(정밀 포인터)가 있는 디바이스인지 동기적으로 판별 */
function useIsPointerFine() {
  const subscribe = useCallback((cb: () => void) => {
    const mql = window.matchMedia(POINTER_QUERY)
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
  }, [])
  const getSnapshot = () => window.matchMedia(POINTER_QUERY).matches
  const getServerSnapshot = () => false // SSR에서는 터치 디바이스로 가정
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function CrosshairCursor() {
  const isPointerDevice = useIsPointerFine()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  useEffect(() => {
    if (isPointerDevice) {
      document.body.classList.add(BODY_CLASS)
    } else {
      document.body.classList.remove(BODY_CLASS)
    }
    return () => document.body.classList.remove(BODY_CLASS)
  }, [isPointerDevice])

  useEffect(() => {
    if (!isPointerDevice) return // 터치 디바이스에서는 이벤트 리스너 등록하지 않음

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
  }, [isVisible, isPointerDevice])

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
        style={{
          left: position.x,
          top: position.y,
          animation: isHoveringInteractive
            ? 'crosshair-heartbeat 0.85s ease-in-out infinite'
            : 'none',
        }}
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

      {/* Glow ring: 인터랙티브 요소 위에서 빛나는 원형 후광 */}
      {isHoveringInteractive && (
        <div
          className="absolute size-10 rounded-full"
          style={{
            left: position.x,
            top: position.y,
            background:
              'radial-gradient(circle, var(--color-acid-400, #a3e635) 0%, transparent 70%)',
            animation: 'crosshair-glow 0.85s ease-in-out infinite',
          }}
        />
      )}
    </div>
  )
}
