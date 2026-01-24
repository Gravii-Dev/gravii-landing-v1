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
    <SplashGate message="GRAVII" durationMs={1500} bgSrc="/bg/gray-wall.png">
      <Wrapper theme="gravii" lenis={{}} snap>
        {/* Hero/Persona 섹션 고정 배경 */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/bg/gray-wall.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
