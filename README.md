# Gravii

A Next.js landing page for **Gravii** — behavioral analytics for Web3. Features a full-screen hero, a bento-style dashboard with persona cards, wallet connection via Reown AppKit, and a WebGPU TV-noise overlay.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router, Turbopack) |
| Language | **TypeScript** |
| UI | **React 19** |
| Styling | **Tailwind CSS v4** |
| Web3 | **Reown AppKit** (WalletConnect) · **Wagmi** · **Viem** |
| State | **Zustand** |
| Animation | **GSAP** (scroll reveals, footer entrance) |
| Graphics | **WebGPU** (TV-noise overlay, SVG fallback) |
| Testing | **Vitest** · **React Testing Library** · **Playwright** (E2E) |
| Tooling | **Biome** (lint & format) · **Storybook 8** · **Lefthook** |

## Prerequisites

- **Node.js 18+**
- A package manager — **Bun**, **npm**, or **pnpm**

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Environment variables

Create `.env.local` in the project root:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Yes | Reown (WalletConnect) project ID — obtain from [cloud.reown.com](https://cloud.reown.com/) |

> Without `NEXT_PUBLIC_REOWN_PROJECT_ID` the wallet connect modal will not function. A console warning is emitted at startup when the variable is missing.

### 3. Run the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, skip link, TV noise overlay
│   ├── page.tsx                # Home page — Hero → Bento → Labels sections
│   ├── providers.tsx           # React Query + Web3 provider tree
│   └── web3-provider.tsx       # Wagmi provider (SSR-safe, lazy-loaded)
│
├── src/
│   ├── components/
│   │   ├── bento/              # Dashboard grid cards
│   │   │   ├── BentoGrid.tsx           # Responsive 3-column grid layout
│   │   │   ├── ConnectWalletCard.tsx   # Wallet link / connected state
│   │   │   ├── LookupCard.tsx          # Address / ENS search
│   │   │   ├── WaitlistCard.tsx        # Email waitlist form
│   │   │   └── LabelsSection.tsx       # Behavioral labels + analytics
│   │   ├── cards/              # Flippable identity cards
│   │   │   ├── PersonaCarousel.tsx     # Auto-rotating persona showcase
│   │   │   ├── IdentityCard3D.tsx      # Connected-wallet Gravii ID
│   │   │   └── SpendingAnalytics.tsx   # Spending metrics card
│   │   ├── effects/
│   │   │   └── tv-noise/               # WebGPU noise overlay + SVG fallback
│   │   ├── layout/             # Page-level layout primitives
│   │   │   ├── HeroSection.tsx         # Full-screen hero
│   │   │   ├── wrapper/                # Page wrapper (theme, footer anim)
│   │   │   ├── header/                 # Scroll-hide header (currently inactive)
│   │   │   ├── footer/                 # Footer with social links
│   │   │   ├── marquee/                # Scrolling text strip
│   │   │   ├── theme/                  # Theme context provider
│   │   │   └── SplineScene.tsx         # 3D Spline scene (dormant)
│   │   ├── ui/                 # Reusable base components
│   │   │   ├── Button.tsx / Input.tsx
│   │   │   ├── ScrollReveal.tsx        # GSAP scroll-triggered reveal
│   │   │   ├── image/                  # next/image wrapper
│   │   │   └── link/                   # Internal / external link router
│   │   └── ErrorBoundary.tsx           # React error boundary
│   ├── config/
│   │   ├── constants.ts        # App-wide constants (art pieces, invite codes, labels)
│   │   ├── personas.ts         # Persona data (carousel + identity card)
│   │   └── web3.ts             # Reown AppKit + Wagmi adapter setup
│   ├── store/
│   │   ├── uiStore.ts          # UI state (art index, card flip, glitch, waitlist)
│   │   └── walletStore.ts      # Wallet state (connection, address, invite code)
│   ├── styles/
│   │   ├── globals.css         # Tailwind v4 theme, animations, safelist
│   │   └── design-tokens.ts    # Shared card styles and color tokens
│   ├── types/index.ts          # Core TypeScript interfaces
│   └── utils/
│       ├── validators.ts       # Ethereum address / ENS / email validation
│       └── image-placeholders.ts  # Base64 blur placeholders for next/image
│
├── styles/                     # Theme definitions used by layout CSS modules
│   ├── colors.ts               # Color palette and theme map
│   └── config.ts               # Theme name exports
├── test/setup.ts               # Vitest global setup (jest-dom)
├── e2e/home.spec.ts            # Playwright smoke test
└── .storybook/                 # Storybook config
```

All component imports use the `@/src/...` alias (configured in `tsconfig.json`).

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Development server (Turbopack) |
| `bun run build` | Production build |
| `bun start` | Serve production build |
| `bun run lint` | Biome check |
| `bun run lint:next` | ESLint (Next.js rules) |
| `bun run lint:all` | Biome + ESLint |
| `bun run test` | Vitest (watch mode) |
| `bun run test:run` | Vitest (single run, CI) |
| `bun run test:e2e` | Playwright E2E |
| `bun run test:e2e:ui` | Playwright E2E with browser UI |
| `bun run storybook` | Storybook dev server (port 6006) |
| `bun run build-storybook` | Static Storybook build |
| `bunx biome check . --write` | Auto-fix lint & format |

---

## Features

### Hero Section
Full-screen dark landing with a large typographic headline ("Connect once / Live differently") set in Gambarino, a handwritten subtitle in Gloria Hallelujah, and layered radial-gradient atmosphere.

### Bento Dashboard
A responsive grid of interactive cards:

- **Persona Carousel** — cycles through 5 Web3 personas. Each card flips on click to reveal a Gravii ID with behavioral labels and stats. Auto-advances every 5 seconds with a progress bar.
- **Gravii Identity Card** — shown in place of the carousel when a wallet is connected. Flippable to reveal the user's on-chain profile.
- **Connect Wallet** — opens the Reown AppKit modal. Once connected, displays a truncated address and a randomly assigned invite code.
- **Waitlist** — email signup form with client-side validation.
- **Lookup** — search field that validates Ethereum addresses and ENS names.

### Labels & Analytics
A two-column section displaying the five behavioral label categories (SYBIL, SPENDING, RISK, YIELD, CHURN) with interactive hover states, alongside a Spending Analytics card detailing key metrics and use cases.

### Layout & Effects
- **Marquee** — an infinite-scroll text strip between the main content and footer.
- **Footer** — brand section with social links; entrance is animated via GSAP `ScrollTrigger`.
- **TV Noise Overlay** — a full-screen noise effect rendered with WebGPU (`TVNoiseOverlay`). Falls back to an SVG `feTurbulence` filter on browsers without WebGPU support. Respects `prefers-reduced-motion`.
- **Scroll Reveal** — all major sections fade and slide in as they enter the viewport, powered by GSAP.

### Web3 Integration
Wallet connection is handled by **Reown AppKit** with the **Wagmi** adapter. Supported networks: Ethereum mainnet, Polygon, Arbitrum. On connection, the app assigns one of three invite codes (`LUX-88`, `NOIR-99`, `VOID-00`) from a shared constant.

---

## Testing

### Unit / Component Tests (Vitest)

```bash
bun run test:run   # single run
bun run test       # watch mode
```

Test files follow the `**/*.test.{ts,tsx}` pattern. Setup lives in `test/setup.ts` (registers `@testing-library/jest-dom`).

Current coverage: **8 test files, 36 tests**.

### E2E Tests (Playwright)

```bash
bunx playwright install   # first-time browser install
bun run test:e2e          # run tests
```

E2E specs live in `e2e/`. If a dev server is already running on the configured port it will be reused.

---

## Storybook

Stories are co-located next to their components (`**/*.stories.tsx`). The project uses Storybook 8 with `@storybook/react-webpack5` and has path-alias and global-style support configured in `.storybook/`.

```bash
bun run storybook          # dev → http://localhost:6006
bun run build-storybook    # static output → storybook-static/
```

---

## Code Quality

| Tool | Role |
|------|------|
| **Biome** | Primary linter and formatter (`biome.json`) |
| **ESLint** | Next.js / core-web-vitals rules (`eslint.config.mjs`) |
| **Lefthook** | Git hooks — runs Biome check and `tsc --noEmit` on pre-commit |

Run the full check suite before committing:

```bash
bun run lint:all && bun run test:run
```

---

## References

- [Reown AppKit Docs](https://docs.reown.com/appkit/overview)
- [Wagmi](https://wagmi.sh/)
- [Next.js 16](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)

---

*Private — all rights reserved.*
