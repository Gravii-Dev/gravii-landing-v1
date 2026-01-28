import s from '@/components/ui/splash-gate/splash-gate.module.css'

export default function Loading() {
  return (
    <output className={s.splash} aria-live="polite" aria-label="Loading">
      <p className={s.message}>GRAVII</p>
    </output>
  )
}
