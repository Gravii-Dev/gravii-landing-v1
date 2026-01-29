export const DESIGN_TOKENS = {
  // Typography
  fonts: {
    title: 'font-gambarino',
    body: 'font-gambarino',
    accent: 'font-gambarino',
  },

  // Card Styles
  card: {
    base: `
      relative overflow-hidden rounded-[2rem]
      bg-[#050505]
      border border-white/10
      backdrop-blur-sm
      shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
      group transition-all duration-500 ease-out
      hover:border-acid-400/30
      hover:-translate-y-2
      hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
    `,
    subtleGlow:
      'absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none',
  },

  // Colors
  colors: {
    acid: {
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      900: '#365314',
    },
  },

  // Animations
  animations: {
    float: 'animate-float',
    glitchEntry: 'animate-glitch-entry',
  },
}
