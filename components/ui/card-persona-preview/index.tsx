'use client'

import cn from 'clsx'
import { PaperEdgeFilter } from '@/components/ui/shared/paper-edge-filter'
import s from './card-persona-preview.module.css'

interface CardPersonaPreviewProps {
  className?: string
  /**
   * Override the internal card height.
   * Useful when this card needs to visually match other card types.
   */
  cardHeight?: number
}

export function CardPersonaPreview({
  className,
  cardHeight,
}: CardPersonaPreviewProps) {
  return (
    <div className={cn(s.wrapper, className)}>
      <PaperEdgeFilter id="paper-edge" scale={3} />
      <div
        className={cn(s.card, s.cardFloat)}
        style={cardHeight ? { height: `${cardHeight}px` } : undefined}
      >
        <div className={s.face}>
          {/* Chrome Header */}
          <header className={s.chrome}>
            <div className={s.dots} aria-hidden="true">
              <span className={s.dot} />
              <span className={s.dot} />
              <span className={s.dot} />
            </div>
            <div className={s.dash} aria-hidden="true" />
            <div className={s.no}>[NO.001]</div>
          </header>

          {/* Content Frame */}
          <div className={s.contentFrame}>
            <div className={s.content}>
              {/* Header */}
              <div className={s.header}>
                <div className={s.headerLeft}>
                  <h3 className={s.label}>WALLET ADDRESS</h3>
                  <p className={s.walletAddress}>0x????...????</p>
                </div>
                <div className={s.headerRight}>
                  <span className={s.scanLabel}>SCAN TO REVEAL</span>
                </div>
              </div>

              {/* Behavioral Labels */}
              <div className={s.section}>
                <h4 className={s.sectionTitle}>5 BEHAVIORAL LABELS</h4>

                <div className={s.labelsList}>
                  <div className={s.labelRow}>
                    <div className={s.labelLeft}>
                      <span className={cn(s.indicator, s.green)} />
                      <span className={s.icon}>♡</span>
                    </div>
                    <span className={s.labelValue}>???</span>
                  </div>

                  <div className={s.labelRow}>
                    <div className={s.labelLeft}>
                      <span className={cn(s.indicator, s.dark)} />
                      <span className={s.icon}>↗</span>
                      <span className={s.labelName}>SPENDING TIER</span>
                    </div>
                    <span className={s.labelValue}>???</span>
                  </div>

                  <div className={s.labelRow}>
                    <div className={s.labelLeft}>
                      <span className={cn(s.indicator, s.red)} />
                      <span className={s.icon}>⚠</span>
                      <span className={s.labelName}>RISK SCORE</span>
                    </div>
                    <span className={s.labelValue}>??/100</span>
                  </div>

                  <div className={s.labelRow}>
                    <div className={s.labelLeft}>
                      <span className={cn(s.indicator, s.blue)} />
                      <span className={s.icon}>⟲</span>
                      <span className={s.labelName}>YIELD FARMER</span>
                    </div>
                    <span className={s.labelValue}>???</span>
                  </div>

                  <div className={s.labelRow}>
                    <div className={s.labelLeft}>
                      <span className={cn(s.indicator, s.purple)} />
                      <span className={s.icon}>⏱</span>
                      <span className={s.labelName}>CHURN RISK</span>
                    </div>
                    <span className={s.labelValue}>???</span>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className={s.footer}>
                <span>??? TXS</span>
                <span className={s.dot}>·</span>
                <span>??? PROTOCOLS</span>
                <span className={s.dot}>·</span>
                <span>??? DAYS ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
