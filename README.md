# 🌐 Gravii Landing Page

> **Next-Generation Landing Page for Blockchain Behavioral Profiling Platform**

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript)
![Bun](https://img.shields.io/badge/Bun-1.3-000000?style=for-the-badge&logo=bun)

</div>

---

## 📖 Project Overview

**Gravii** is a blockchain profiling platform that analyzes on-chain wallet activity to generate unique behavioral profiles. This landing page provides 5 behavioral classification labels based on transaction data collected from over 8 networks.

### ✨ Core Values

- 🔍 **Sybil Detection**: Wallet clustering and airdrop farming prevention
- 💸 **Spending Analysis**: Transaction velocity and behavioral pattern analysis
- ⚠️ **Risk Assessment**: Wallet interaction risk measurement
- 🌾 **DeFi Engagement**: DeFi farming strategy analysis
- ⏱️ **Churn Prediction**: Wallet inactivity likelihood prediction

---

## 🎯 Key Features

### 1. Interactive Sections (5)

#### 🎬 Hero Section
- Full viewport animated title: "YOUR PERSONAL CONCIERGE"
- GSAP scroll trigger animations
- Collision animation with header logo
- Fixed background texture

#### 👤 Persona Section
- Horizontal scroll carousel (7 slides)
- 3D flip cards for 5 persona types:
  - The Innovator
  - The Analyst
  - The Connector
  - The Executor
  - The Strategist

#### 🔗 Connect Section
- 3 action cards (turquoise background):
  - **Check Any Wallet**: Wallet address search
  - **Connect Wallet**: Main CTA (wallet connection)
  - **Stay Updated**: Newsletter subscription

#### 🆔 ID Section
- Complete on-chain behavioral profile display
- Based on transaction history collected from 8+ chains

#### 🏷️ Labels Section
- Interactive selector for 5 behavioral analysis labels
- Detailed analysis (metrics + use cases)

### 2. Interactions

- ✨ Lenis smooth scrolling
- 🎨 GSAP scroll trigger animations
- 🔄 3D card flip
- 🎭 Paper-edge visual effects (SVG filters)
- 🎹 Keyboard accessibility (Enter/Space)

---

## 🛠️ Tech Stack

### Core
- **Next.js** 16.1.1 (App Router)
- **React** 19.2.3 (React Compiler enabled)
- **TypeScript** 5.9.3 (strict mode)
- **Bun** 1.3.5 (Package manager & runtime)

### Styling
- **Tailwind CSS** v4.1.18
- **CSS Modules** (Component-scoped styling)
- **PostCSS** v4 (nesting, custom functions)

### Animation & 3D
- **GSAP** 3.14.2 (Animation & scroll trigger)
- **Lenis** 1.3.17 (Smooth scrolling)
- **Three.js** 0.182.0
- **React Three Fiber** 9.5.0

### State & UI
- **Zustand** 5.0.10 (State management)
- **@base-ui/react** 1.0.0 (Headless UI)

### CMS & Analytics
- **Sanity** 5.2.0 (Headless CMS)
- **Vercel Analytics** 1.6.1

### Developer Tools
- **Biome** 2.3.11 (Linting & formatting)
- **Turbopack** (Bundler optimization)

---

## 🚀 Getting Started

### Requirements

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | >= 22.0.0 | Required |
| Bun | >= 1.3.5 | Package manager & runtime |

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Start development server
bun dev
```

### Main Scripts

```bash
bun dev              # Development server (http://localhost:3000)
bun dev:https        # HTTPS development server
bun build            # Production build
bun start            # Production server
bun lint             # Linting
bun lint:fix         # Auto-fix linting issues
bun format           # Code formatting
bun typecheck        # TypeScript validation
bun analyze          # Bundle size analysis
```

---

## 📁 Project Structure

```
gravii-lp/
├── app/
│   ├── (home)/                    # Main landing page
│   │   ├── _sections/            # 5 main sections
│   │   │   ├── hero/             # Hero section
│   │   │   ├── persona/          # Persona carousel
│   │   │   ├── connect/          # Wallet connection
│   │   │   ├── id/               # GRAVII ID profile
│   │   │   └── labels/           # Behavioral labels
│   │   └── page.tsx              # Main entry
│   ├── (examples)/               # Demo/example pages
│   └── layout.tsx                # Root layout
│
├── components/
│   ├── layout/                   # Layout components
│   │   ├── wrapper/              # Main page container
│   │   ├── header/               # Top navigation
│   │   ├── footer/               # Footer
│   │   └── lenis/                # Scroll manager
│   └── ui/                       # UI components
│       ├── card-3d/              # 3D flip card
│       ├── card-connect-wallet/  # Wallet connection card
│       ├── card-persona-preview/ # Persona preview
│       ├── action-card/          # Action card
│       └── shared/               # Shared utilities
│
├── lib/
│   ├── styles/                   # Style system
│   │   ├── css/                  # Global styles
│   │   ├── shared/               # Shared styles
│   │   │   ├── vintage-card.module.css
│   │   │   ├── sections.module.css
│   │   │   ├── animations.css
│   │   │   ├── typography.css
│   │   │   └── forms.css
│   │   ├── fonts.ts              # Font definitions (30+)
│   │   └── config.ts             # Design system
│   ├── hooks/                    # Custom React hooks
│   ├── integrations/
│   │   └── sanity/               # Sanity CMS
│   ├── webgl/                    # Three.js components
│   └── utils/                    # Utility functions
│
└── public/
    ├── bg/                       # Background images (12)
    ├── fonts/                    # Custom fonts (30+)
    └── img/                      # Image assets
```

---

## 💻 Development Guide

### Styling Rules

This project uses a combination of **CSS Modules** and **Tailwind CSS**:

```tsx
// Using CSS Modules
import s from './component.module.css'

// Using shared styles (composes)
.card {
  composes: vintageFaceCard3d from '@/lib/styles/shared/vintage-card.module.css';
}
```

### Font Usage

Over 30 custom fonts are included:

```tsx
// Import from fonts.ts
import { display, mono } from '@/lib/styles/fonts'

// Use in CSS
font-family: var(--font-display), sans-serif;
font-family: var(--font-mono), monospace;
```

### Animations

```tsx
// GSAP scroll trigger
gsap.to(ref.current, {
  y: 100,
  scrollTrigger: {
    trigger: ref.current,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
})

// CSS animations (shared utilities)
<div className="animate-float-simple">
```

### Conventions

- **Images**: Use `@/components/ui/image` (never `next/image` directly)
- **Links**: Use `@/components/ui/link` (auto-handles external links)
- **CSS Modules**: `import s from './component.module.css'`
- **Debug Tools**: Toggle with `Cmd/Ctrl + O`

---

## 🎨 Design System

### Color Palette

- **Primary**: `#1a1a1a` (Dark)
- **Secondary**: `#4a4a4a` (Gray)
- **Accent**: `#ff7a00` (Orange)
- **Background**: Vintage paper (`#d4c4a8`)

### Typography

- **Display**: GCBond (Titles, labels)
- **Mono**: ServerMono (Wallet addresses, data)
- **Body**: System UI fallback

### Component Variants

- **Cards**: Vintage paper, 3D flip, Action, Persona preview
- **Inputs**: Dashed border, Monospace font
- **Buttons**: Primary, Secondary, Ghost

---

## 🧪 Testing & Quality

```bash
# Linting
bun lint
bun lint:fix

# Type checking
bun typecheck

# Formatting
bun format

# Run tests
bun test

# Lighthouse performance measurement
bun lighthouse
```

---

## 📦 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

Required environment variables for production deployment:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

---

## 📄 Documentation

| Area | Document |
|------|----------|
| Architecture | [ARCHITECTURE.md](ARCHITECTURE.md) — Key decisions & patterns |
| App Router | [app/README.md](app/README.md) — Pages, layouts, routing |
| Components | [components/README.md](components/README.md) — UI reference |
| Library | [lib/README.md](lib/README.md) — Hooks, utils, integrations |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Auto-formatted with **Biome**
- Follow TypeScript strict mode
- CSS Modules naming: camelCase
- Components: PascalCase

---

## 📝 License

MIT License

---

<div align="center">

**Made with ❤️ by Gravii Team**

</div>
