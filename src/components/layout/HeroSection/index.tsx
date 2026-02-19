'use client'

import s from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent px-4 sm:px-6 md:px-8">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className={s.spotlight}>
          <h1 className={s.heroTitle}>
            Connect once,
            <br />
            Live differently
          </h1>
        </div>
        <div className={s.spotlightSubtitle}>
          <p className={s.heroSubtitle}>
            &ldquo;WE&apos;VE BURNT THE OLD PLAYBOOK&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
