import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/src/components/ErrorBoundary'
import { HeroSection } from '@/src/components/layout/HeroSection'
import { Wrapper } from '@/src/components/layout/wrapper'
import { ScrollReveal } from '@/src/components/ui/ScrollReveal'

const DashboardLayout = dynamic(
  () => import('@/src/components/dashboard/DashboardLayout').then((m) => m.DashboardLayout),
  {
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-acid-400 border-r-transparent" />
      </div>
    ),
  }
)

const LabelsSection = dynamic(
  () =>
    import('@/src/components/dashboard/LabelsSection').then((m) => m.LabelsSection),
  { loading: () => <div className="min-h-[60vh]" /> }
)

export default function Home() {
  return (
    <Wrapper theme="dark" className="w-full bg-black">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Dashboard Layout (Overlapping/scrolling over) */}
      <ScrollReveal as="section" className="relative z-20 pb-20">
        <ErrorBoundary>
          <DashboardLayout />
        </ErrorBoundary>
      </ScrollReveal>

      {/* Section 3: Labels & Analytics - same bg atmosphere */}
      <ScrollReveal as="section" className="relative z-20 pb-20">
        <div className="relative flex min-h-screen w-full items-center justify-center bg-black p-6 md:p-12 lg:p-20">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-white/[0.02] blur-[150px]" />
            <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-zinc-800/[0.05] blur-[150px]" />
          </div>
          <div className="relative z-10 w-full max-w-7xl">
            <LabelsSection />
          </div>
        </div>
      </ScrollReveal>
    </Wrapper>
  )
}
