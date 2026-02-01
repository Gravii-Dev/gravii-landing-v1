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
- **Storybook 8** (component development & docs)
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
| `bun run lint` | Biome lint + format check |
| `bun run lint:next` | ESLint (Next/core-web-vitals) |
| `bun run lint:all` | Biome + ESLint |
| `bun run test` | Run tests (Vitest watch) |
| `bun run test:run` | Run tests once (CI) |
| `bun run test:e2e` | Playwright E2E (starts dev if needed) |
| `bun run test:e2e:ui` | Playwright E2E with UI |
| `bun run storybook` | Start Storybook (port 6006) |
| `bun run build-storybook` | Build static Storybook |
| `bunx biome check . --write` | Biome lint + format (fix) |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout & providers
│   ├── page.tsx            # Home (Spline, Bento, Labels sections)
│   ├── providers.tsx       # React Query, Web3 providers
│   └── web3-provider.tsx   # Reown AppKit + Wagmi setup
├── src/
│   ├── components/         # 레이아웃·UI·페이지 컴포넌트 (@/src/components)
│   │   ├── bento/          # BentoGrid, ConnectWalletCard, LabelsSection, etc.
│   │   ├── cards/          # IdentityCard3D, PersonaCarousel, SpendingAnalytics
│   │   ├── layout/         # Header, Footer, Marquee, Theme, Wrapper, SplineScene
│   │   └── ui/             # Link, Image, Button, Input, ScrollReveal
│   ├── config/             # Web3 & app constants
│   ├── store/              # Zustand (walletStore, uiStore)
│   ├── styles/             # globals.css, design-tokens
│   └── utils/              # validators, image-placeholders
├── test/                   # Vitest setup (test/setup.ts)
└── styles/                 # Theme (colors, config) for layout components
```

**컴포넌트 위치**: 모든 컴포넌트는 `src/components/`에 통합. import 시 `@/src/components/...` 사용.

## E2E (Playwright)

E2E 테스트는 `e2e/` 디렉터리에 있으며, `bun run test:e2e`로 실행합니다. 최초 실행 전 브라우저 설치가 필요합니다:

```bash
bunx playwright install
```

이미 `bun dev`가 실행 중이면 기존 서버를 재사용합니다.

## Features

- **Hero**: Full-screen Spline 3D intro (iframe).
- **Bento grid**: Persona carousel (or 3D Identity Card when wallet connected), Connect Wallet, Waitlist, Lookup cards.
- **Labels section**: 5 behavioral labels (SYBIL, SPENDING, RISK, YIELD, CHURN) and Spending Analytics.
- **Layout**: Fixed header (GSAP scroll-hide), marquee strip, footer with GSAP scroll-in.
- **Web3**: Connect wallet via Reown AppKit; connected state shows Gravii ID and invite code.

## Storybook

Component stories live under `src/**/*.stories.tsx` and `components/**/*.stories.tsx`. The project uses **Storybook 8** with `@storybook/react-webpack5` (Next.js 16 does not support `@storybook/nextjs` preset yet). Global styles (`src/styles/globals.css`) and path alias `@/` are configured in `.storybook/`.

- Run: `bun run storybook` → [http://localhost:6006](http://localhost:6006)
- Build: `bun run build-storybook` (output: `storybook-static/`)

## Testing

- **Vitest** + **React Testing Library** for unit and component tests.
- Setup: `test/setup.ts` (jest-dom), `vitest.config.ts` (path alias `@/`).
- Run: `bun run test` (watch), `bun run test:run` (single run, CI).
- Tests: `**/*.test.{ts,tsx}`, `**/*.spec.{ts,tsx}` (e.g. `src/components/ui/Button.test.tsx`, `src/utils/validators.test.ts`).

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
