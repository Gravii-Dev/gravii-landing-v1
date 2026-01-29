'use client'

import type React from 'react'
import { useState } from 'react'
import { useUIStore } from '@/src/store'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const WaitlistCard: React.FC = () => {
  const [email, setEmail] = useState('')
  const joinedWaitlist = useUIStore((state) => state.joinedWaitlist)
  const setJoinedWaitlist = useUIStore((state) => state.setJoinedWaitlist)

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
            <>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email..."
              />
              <Button
                onClick={() => setJoinedWaitlist(true)}
                className="w-full justify-center"
              >
                Join the Revolution
              </Button>
            </>
          ) : (
            <div className="py-6 text-center">
              <span className="mb-2 block font-gambarino text-3xl text-white">
                You're in.
              </span>
              <span className="font-gambarino text-sm text-zinc-500">
                We'll signal when it's time.
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
