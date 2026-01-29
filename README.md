# Gravii Landing Page

A Next.js landing page for **Gravii** — behavioral analytics for Web3. Features a 3D Spline hero, bento-style dashboard, wallet connection via Reown AppKit, and persona/identity cards.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Reown AppKit** (WalletConnect) + **Wagmi** + **Viem**
- **Zustand** (global state)
- **GSAP** (header/footer animations)
- **Biome** (lint & format)

## Prerequisites

- **Bun** (package manager & runtime). [Install Bun](https://bun.sh/)

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Reown (WalletConnect) project ID from [cloud.reown.com](https://cloud.reown.com/) |
| `NEXT_PUBLIC_SPLINE_SCENE_URL` | (Optional) Spline scene URL for the hero |

### 3. Run development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Scripts

| Command | Description |
|--------|-------------|
| `bun dev` | Start dev server (Turbopack) |
| `bun run build` | Production build |
| `bun start` | Run production server |
| `bun run lint` | Next.js lint |
| `bunx biome check . --write` | Biome lint + format |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout & providers
│   ├── page.tsx            # Home (Spline, Bento, Labels sections)
│   ├── providers.tsx       # React Query, Web3 providers
│   └── web3-provider.tsx   # Reown AppKit + Wagmi setup
├── components/
│   ├── layout/
│   │   ├── header/         # Fixed header (GSAP scroll-hide)
│   │   ├── footer/         # Footer (GSAP scroll-in)
│   │   ├── marquee/        # Marquee strip
│   │   ├── theme/          # Theme provider
│   │   └── wrapper/        # Page wrapper (Header + Marquee + Footer)
│   └── ui/                 # Link, ScrollReveal
├── src/
│   ├── components/
│   │   ├── bento/          # BentoGrid, ConnectWalletCard, LabelsSection, etc.
│   │   ├── cards/          # IdentityCard3D, PersonaCarousel, SpendingAnalytics
│   │   └── layout/         # SplineScene
│   ├── config/             # Web3 & app constants
│   ├── store/              # Zustand (walletStore, uiStore)
│   └── styles/             # globals.css, design-tokens
└── styles/                 # Theme (colors, config) for layout components
```

## Features

- **Hero**: Full-screen Spline 3D intro (iframe).
- **Bento grid**: Persona carousel (or 3D Identity Card when wallet connected), Connect Wallet, Waitlist, Lookup cards.
- **Labels section**: 5 behavioral labels (SYBIL, SPENDING, RISK, YIELD, CHURN) and Spending Analytics.
- **Layout**: Fixed header (GSAP scroll-hide), marquee strip, footer with GSAP scroll-in.
- **Web3**: Connect wallet via Reown AppKit; connected state shows Gravii ID and invite code.

## Code Quality

- **Biome** for lint and format (see `biome.json`).
- **Lefthook** runs `biome check` and typecheck on pre-commit.
- Use `@/src/...` for imports under `src/` to satisfy the no-deep-relative-imports rule.

## Learn More

- [Reown AppKit](https://docs.reown.com/appkit/overview)
- [Wagmi](https://wagmi.sh/)
- [Next.js 16](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

## License

Private. All rights reserved.
