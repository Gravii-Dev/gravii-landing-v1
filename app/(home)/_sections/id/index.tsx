import cn from 'clsx'
import { CardPersonaPreview } from '@/components/ui/card-persona-preview'
import s from './id.module.css'

export function IDSection() {
  return (
    <section className={s.section} data-lenis-snap-align="start">
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <span className={s.label}>YOUR PROFILE</span>
          <h2 className={s.title}>GRAVII ID</h2>
          <p className={s.subtitle}>
            Your complete on-chain behavioral profile, derived from transaction
            history across 8+ chains.
          </p>
        </div>

        {/* Reuse CardPersonaPreview */}
        <CardPersonaPreview className={cn(s.card)} />
      </div>
    </section>
  )
}
