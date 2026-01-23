import { Analytics } from '@vercel/analytics/react'
import { Wrapper } from '@/components/layout/wrapper'
import { SplashGate } from '@/components/ui/splash-gate'
import { ConnectSection } from './(home)/_sections/connect'
import { HeroSection } from './(home)/_sections/hero'
import { IDSection } from './(home)/_sections/id'
import { LabelsSection } from './(home)/_sections/labels'
import { PersonaSection } from './(home)/_sections/persona'

export default function Home() {
  return (
    <SplashGate
      imageSrc="/img/splash-text.png"
      imageAlt="Welcome to Gravii"
      imageMaxWidthPx={1800}
      durationMs={1500}
      bgSrc="/img/splash-bg.webp"
    >
      <Wrapper theme="gravii" lenis={{}}>
        {/* 전체 페이지 고정 배경 */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/bg/black_grid.jpg')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: '0 0',
          }}
        />
        <main id="main-content">
          <HeroSection />
          <PersonaSection />
          <ConnectSection />
          <IDSection />
          <LabelsSection />
        </main>
        <Analytics />
      </Wrapper>
    </SplashGate>
  )
}
