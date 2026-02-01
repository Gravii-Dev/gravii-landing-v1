'use client'

import type React from 'react'
import { useState } from 'react'
import { useUIStore } from '@/src/store'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const WaitlistCard: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const joinedWaitlist = useUIStore((state) => state.joinedWaitlist)
  const setJoinedWaitlist = useUIStore((state) => state.setJoinedWaitlist)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setJoinedWaitlist(true)
    }, 800)
  }

  return (
    <>
      <div className={DESIGN_TOKENS.card.subtleGlow} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6">
          <h3 className="mb-2 font-gambarino text-3xl text-white tracking-tight">
            Waitlist
          </h3>
          <div className="h-px w-8 bg-white/20" />
        </div>

        <div className="flex flex-grow flex-col justify-center gap-4">
          {!joinedWaitlist ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter email..."
                  aria-label="Email address"
                  aria-invalid={!!error}
                  aria-describedby={error ? 'email-error' : undefined}
                  disabled={isSubmitting}
                  required
                />
                {error && (
                  <p
                    id="email-error"
                    className="mt-2 font-gambarino text-red-400 text-sm"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center"
                aria-live="polite"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Joining...</span>
                  </>
                ) : (
                  'Join the Revolution'
                )}
              </Button>
            </form>
          ) : (
            <output className="block py-6 text-center" aria-live="polite">
              <span className="mb-2 block font-gambarino text-3xl text-white">
                You&apos;re in.
              </span>
              <span className="font-gambarino text-sm text-zinc-500">
                We&apos;ll signal when it&apos;s time.
              </span>
            </output>
          )}
        </div>
      </div>
    </>
  )
}
