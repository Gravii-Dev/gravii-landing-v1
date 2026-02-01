'use client'

import s from './marquee.module.css'

const MARQUEE_TEXT = 'Uniquely you. Effortlessly curated. The world gravitates.'

const MARQUEE_KEYS = ['a', 'b', 'c', 'd'] as const

function MarqueeContent() {
  return (
    <>
      {MARQUEE_KEYS.map((key) => (
        <span key={key} className={s.text}>
          {MARQUEE_TEXT}
        </span>
      ))}
    </>
  )
}

export function Marquee() {
  return (
    <div className={s.marquee}>
      <div className={s.track}>
        <div className={s.content}>
          <MarqueeContent />
        </div>
        <div className={s.content}>
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}
