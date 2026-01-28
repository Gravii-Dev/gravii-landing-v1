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
    <SplashGate message="GRAVII" durationMs={1500}>
      <Wrapper theme="gravii" webgl>
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
