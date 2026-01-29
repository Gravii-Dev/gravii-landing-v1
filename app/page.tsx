import { Wrapper } from '@/components/layout/wrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BentoGrid } from '../src/components/bento/BentoGrid'
import { LabelsSection } from '../src/components/bento/LabelsSection'
import { SplineScene } from '../src/components/layout/SplineScene'

export default function Home() {
  return (
    <Wrapper theme="dark" className="w-full bg-black">
      {/* Section 1: 3D Spline Scene (Sticky/Fixed) */}
      <ScrollReveal as="section" className="relative z-10 h-screen w-full">
        <SplineScene />
        <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </ScrollReveal>

      {/* Section 2: Bento Grid (Overlapping/scrolling over) */}
      <ScrollReveal as="section" className="relative z-20 pb-20">
        <BentoGrid />
      </ScrollReveal>

      {/* Section 3: Labels & Analytics */}
      <ScrollReveal as="section" className="relative z-20 pb-20">
        <div className="flex min-h-screen w-full items-center justify-center bg-black p-6 md:p-12 lg:p-20">
          <div className="w-full max-w-7xl">
            <LabelsSection />
          </div>
        </div>
      </ScrollReveal>
    </Wrapper>
  )
}
