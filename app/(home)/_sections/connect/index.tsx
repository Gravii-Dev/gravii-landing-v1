'use client'

import { ActionCard } from '@/components/ui/action-card'
import s from './connect.module.css'

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="16" cy="14" r="2" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function ConnectSection() {
  return (
    <section id="connect" className={s.section} data-lenis-snap-align="start">
      <div className={s.container}>
        <div className={s.cards}>
          {/* Check Any Wallet */}
          <ActionCard
            icon={<SearchIcon />}
            title="CHECK ANY WALLET"
            description=""
            ctaText="LOOKUP"
            onAction={() => console.log('Check wallet')}
          >
            <div className={s.inputWrapper}>
              <input type="text" placeholder="0x..." className={s.input} />
              <div className={s.hint}>
                <span className={s.hintIcon}>i</span>
                <span>
                  You can enter any wallet address, but accessible Persona
                  details are limited. Connect as the owner to unlock full data.
                </span>
              </div>
            </div>
          </ActionCard>

          {/* Connect Wallet - Center */}
          <ActionCard
            icon={<WalletIcon />}
            title="CONNECT WALLET"
            description="Scan your wallet and discover your behavioral profile instantly."
            ctaText="GET STARTED"
            onAction={() => console.log('Connect wallet')}
          />

          {/* Stay Updated */}
          <ActionCard
            icon={<MailIcon />}
            title="STAY UPDATED"
            description="Get notified about API access, new features, and protocol updates."
            ctaText="SUBSCRIBE"
            onAction={() => console.log('Subscribe')}
          />
        </div>
      </div>
    </section>
  )
}
