'use client'

/**
 * 전역 노이즈 오버레이. 모든 섹션 위에 은은한 필름 그레인 적용.
 * pointer-events: none 이므로 클릭/스크롤 방해하지 않음.
 */
export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-35 opacity-[0.035] mix-blend-overlay"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />
  )
}
