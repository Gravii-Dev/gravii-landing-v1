import localFont from 'next/font/local'

// ============================================
// 메인 디스플레이 폰트 (전역 사용)
// 폰트 변경 시 여기만 수정하면 됨!
// ============================================
const display = localFont({
  src: [{ path: '../../public/fonts/Grift-Black.woff2', weight: '900' }],
  display: 'swap',
  variable: '--font-display',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// ============================================
// Mono Fonts (코드용)
// ============================================
const mono = localFont({
  src: '../../public/fonts/Grift-Black.woff2',
  display: 'swap',
  // Tailwind theme expects this Next.js variable name
  variable: '--next-font-mono',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// ============================================
// 추가 폰트들 (필요시 사용)
// ============================================
const dripdrop = localFont({
  src: '../../public/fonts/Dripdrop.woff2',
  display: 'swap',
  variable: '--font-dripdrop',
  fallback: ['system-ui', 'sans-serif'],
})

const dripdropExtras = localFont({
  src: '../../public/fonts/DripdropExtras.woff2',
  display: 'swap',
  variable: '--font-dripdrop-extras',
  fallback: ['system-ui', 'sans-serif'],
})

const technul = localFont({
  src: '../../public/fonts/403Technul-Soft.ttf',
  display: 'swap',
  variable: '--font-technul',
  fallback: ['system-ui', 'sans-serif'],
})

const aotLostContact = localFont({
  src: '../../public/fonts/AOT Lost Contact.woff2',
  display: 'swap',
  variable: '--font-aot',
  fallback: ['system-ui', 'sans-serif'],
})

const aotLostContactRound = localFont({
  src: '../../public/fonts/AOT Lost Contact Round.woff2',
  display: 'swap',
  variable: '--font-aot-round',
  fallback: ['system-ui', 'sans-serif'],
})

const boomme = localFont({
  src: '../../public/fonts/Boomme.woff2',
  display: 'swap',
  variable: '--font-boomme',
  fallback: ['system-ui', 'sans-serif'],
})

const bredast = localFont({
  src: '../../public/fonts/Bredast.woff2',
  display: 'swap',
  variable: '--font-bredast',
  fallback: ['system-ui', 'sans-serif'],
})

const brumder = localFont({
  src: '../../public/fonts/Brumder-Regular.ttf',
  display: 'swap',
  variable: '--font-brumder',
  fallback: ['system-ui', 'sans-serif'],
})

const cookConthic = localFont({
  src: '../../public/fonts/CookConthic.woff2',
  display: 'swap',
  variable: '--font-cook-conthic',
  fallback: ['system-ui', 'sans-serif'],
})

const dailyMontana = localFont({
  src: '../../public/fonts/DailyMontana-Regular.woff2',
  display: 'swap',
  variable: '--font-daily-montana',
  fallback: ['system-ui', 'sans-serif'],
})

const enligas = localFont({
  src: '../../public/fonts/Enligas-Regular.woff2',
  display: 'swap',
  variable: '--font-enligas',
  fallback: ['system-ui', 'sans-serif'],
})

const gcVank = localFont({
  src: '../../public/fonts/GC Vank.woff2',
  display: 'swap',
  variable: '--font-gc-vank',
  fallback: ['system-ui', 'sans-serif'],
})

const godger = localFont({
  src: '../../public/fonts/Godger-Regular.ttf',
  display: 'swap',
  variable: '--font-godger',
  fallback: ['system-ui', 'sans-serif'],
})

const gostica = localFont({
  src: '../../public/fonts/Gostica.woff',
  display: 'swap',
  variable: '--font-gostica',
  fallback: ['system-ui', 'sans-serif'],
})

const grift = localFont({
  src: [
    { path: '../../public/fonts/Grift-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/Grift-Bold.woff2', weight: '700' },
  ],
  display: 'swap',
  variable: '--font-grift',
  fallback: ['system-ui', 'sans-serif'],
})

const helvena = localFont({
  src: '../../public/fonts/Helvena Variable.woff2',
  display: 'swap',
  variable: '--font-helvena',
  fallback: ['system-ui', 'sans-serif'],
})

const hitchcut = localFont({
  src: '../../public/fonts/Hitchcut-Regular.ttf',
  display: 'swap',
  variable: '--font-hitchcut',
  fallback: ['system-ui', 'sans-serif'],
})

const jeffesta = localFont({
  src: '../../public/fonts/jeffesta-regular-webfont.woff2',
  display: 'swap',
  variable: '--font-jeffesta',
  fallback: ['system-ui', 'sans-serif'],
})

const maltiner = localFont({
  src: '../../public/fonts/Maltiner Display.woff',
  display: 'swap',
  variable: '--font-maltiner',
  fallback: ['system-ui', 'sans-serif'],
})

const meuga = localFont({
  src: '../../public/fonts/Meuga-Regular.woff',
  display: 'swap',
  variable: '--font-meuga',
  fallback: ['system-ui', 'sans-serif'],
})

const moara = localFont({
  src: '../../public/fonts/Moara-Bold.otf',
  display: 'swap',
  variable: '--font-moara',
  fallback: ['system-ui', 'sans-serif'],
})

const mogars = localFont({
  src: '../../public/fonts/Mogars.woff2',
  display: 'swap',
  variable: '--font-mogars',
  fallback: ['system-ui', 'sans-serif'],
})

const pixelyze = localFont({
  src: '../../public/fonts/Pixelyze.woff2',
  display: 'swap',
  variable: '--font-pixelyze',
  fallback: ['system-ui', 'sans-serif'],
})

const puffBalloon = localFont({
  src: '../../public/fonts/PuffBalloon-subset.woff2',
  display: 'swap',
  variable: '--font-puff-balloon',
  fallback: ['system-ui', 'sans-serif'],
})

const relaxe = localFont({
  src: '../../public/fonts/Relaxe.woff2',
  display: 'swap',
  variable: '--font-relaxe',
  fallback: ['system-ui', 'sans-serif'],
})

const sanAndres = localFont({
  src: '../../public/fonts/SanAndres-Regular.woff',
  display: 'swap',
  variable: '--font-san-andres',
  fallback: ['system-ui', 'sans-serif'],
})

const solderwood = localFont({
  src: '../../public/fonts/SOLDERWOOD.woff2',
  display: 'swap',
  variable: '--font-solderwood',
  fallback: ['system-ui', 'sans-serif'],
})

const viltrum = localFont({
  src: '../../public/fonts/Viltrum.woff2',
  display: 'swap',
  variable: '--font-viltrum',
  fallback: ['system-ui', 'sans-serif'],
})

// ============================================
// Export
// ============================================
const fonts = [
  // 메인 폰트
  display,
  // Mono
  mono,
  // 추가 폰트
  dripdrop,
  dripdropExtras,
  technul,
  aotLostContact,
  aotLostContactRound,
  boomme,
  bredast,
  brumder,
  cookConthic,
  dailyMontana,
  enligas,
  gcVank,
  godger,
  gostica,
  grift,
  helvena,
  hitchcut,
  jeffesta,
  maltiner,
  meuga,
  moara,
  mogars,
  pixelyze,
  puffBalloon,
  relaxe,
  sanAndres,
  solderwood,
  viltrum,
]

const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }
