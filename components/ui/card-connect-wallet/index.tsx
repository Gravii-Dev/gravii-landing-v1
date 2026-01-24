'use client'

import cn from 'clsx'
import { PaperEdgeFilter } from '@/components/ui/shared/paper-edge-filter'
import s from './card-connect-wallet.module.css'

interface CardConnectWalletProps {
  className?: string
  onConnect?: () => void
}

export function CardConnectWallet({
  className,
  onConnect,
}: CardConnectWalletProps) {
  const handleClick = () => {
    if (onConnect) {
      onConnect()
    } else {
      // Default: scroll to connect section
      const connectSection = document.getElementById('connect')
      if (connectSection) {
        connectSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className={cn(s.wrapper, className)}>
      <PaperEdgeFilter id="paper-edge" scale={3} />
      <button
        type="button"
        className={cn(s.card, s.cardFloat)}
        onClick={handleClick}
      >
        <div className={s.face}>
          <div className={s.content}>
            {/* Header */}
            <div className={s.header}>
              <div className={s.walletIcon}>
                <svg
                  width="32"
                  height="32"
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
              </div>
              <span className={s.connectLabel}>CLICK TO CONNECT</span>
            </div>

            {/* Main Content */}
            <div className={s.main}>
              <h2 className={s.title}>
                CONNECT
                <br />
                WALLET
              </h2>
              <p className={s.description}>
                Scan your wallet and discover your behavioral profile instantly.
                No transaction fees, no approvals—just sign a message to verify
                ownership.
              </p>
            </div>

            {/* Footer */}
            <div className={s.footer}>
              <span className={s.cta}>GET STARTED</span>
              <span className={s.arrow}>→</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
