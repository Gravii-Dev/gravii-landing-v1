'use client'

import type { Application } from '@splinetool/runtime'
import { useEffect, useRef, useState } from 'react'

export function SplineScene(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const appRef = useRef<Application | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Intersection Observer - only load when viewport is near
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
          setIsLoading(true)
        }
      },
      { rootMargin: '100px' } // Start loading 100px before entering viewport
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Load Spline only after component becomes visible
  useEffect(() => {
    if (!(isVisible && canvasRef.current)) return

    let app: Application | null = null

    const loadSpline = async () => {
      try {
        // Dynamic import - only load @splinetool/runtime when needed
        const { Application } = await import('@splinetool/runtime')

        if (!canvasRef.current) return

        app = new Application(canvasRef.current)
        appRef.current = app

        const res = await fetch('/spline-scene-data.json')
        if (!res.ok) throw new Error('Failed to load 3D scene')

        const data = await res.json()
        app.start(data as ArrayBuffer)
        setIsLoading(false)
      } catch (err) {
        console.error('Spline scene load failed:', err)
        setError('Unable to load 3D experience')
        setIsLoading(false)
      }
    }

    loadSpline()

    return () => {
      if (app) {
        app.dispose()
      }
      appRef.current = null
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="relative h-full w-full bg-black">
      {/* Skeleton State - before Spline is loaded */}
      {!isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-black">
          <div className="animate-pulse text-center">
            <div className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-acid-400/20 bg-acid-400/10" />
            <div className="mx-auto h-4 w-48 rounded bg-acid-400/10" />
          </div>
        </div>
      )}

      {/* Loading State - Spline is downloading */}
      {isLoading && (
        <output
          className="absolute inset-0 z-10 flex items-center justify-center bg-black"
          aria-live="polite"
        >
          <div className="text-center">
            <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-acid-400 border-r-transparent" />
            <p className="font-gambarino text-lg text-white/60">
              Loading 3D Experience...
            </p>
          </div>
        </output>
      )}

      {/* Error State */}
      {error && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black"
          role="alert"
        >
          <div className="max-w-md rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="font-gambarino text-white text-xl">{error}</p>
            <p className="mt-2 font-gambarino text-sm text-white/40">
              Please refresh the page to try again
            </p>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        id="canvas3d"
        className="block h-full w-full outline-none"
        style={{ display: 'block' }}
        aria-label="3D interactive scene"
      />
    </div>
  )
}
