'use client'

import cn from 'clsx'
import type { ReactNode } from 'react'
import { PaperEdgeFilter } from '@/components/ui/shared/paper-edge-filter'
import s from './action-card.module.css'

interface ActionCardProps {
  icon: ReactNode
  title: string
  description: string
  ctaText: string
  onAction?: () => void
  children?: ReactNode
  className?: string
}

export function ActionCard({
  icon,
  title,
  description,
  ctaText,
  onAction,
  children,
  className,
}: ActionCardProps) {
  return (
    <div className={cn(s.wrapper, s.wrapperFloat, className)}>
      <PaperEdgeFilter id="paper-edge-action" scale={2} />
      <div className={s.card}>
        <div className={s.face}>
          {/* Chrome Header */}
          <header className={s.chrome}>
            <div className={s.dots} aria-hidden="true">
              <span className={s.dot} />
              <span className={s.dot} />
              <span className={s.dot} />
            </div>
            <div className={s.dash} aria-hidden="true" />
            <div className={s.no}>[ACTION]</div>
          </header>

          {/* Content Frame */}
          <div className={s.contentFrame}>
            <div className={s.content}>
              {/* Icon */}
              <div className={s.icon}>{icon}</div>

              {/* Title */}
              <h3 className={s.title}>{title}</h3>

              {/* Custom content or description */}
              {children || <p className={s.description}>{description}</p>}

              {/* CTA */}
              <button type="button" className={s.cta} onClick={onAction}>
                <span>{ctaText}</span>
                <span className={s.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
