# Gravii - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
bun install
```

### Step 2: Configure Environment Variables
1. Get your Reown Project ID from https://cloud.reown.com/
2. Update `.env.local`:
```bash
VITE_REOWN_PROJECT_ID=your_actual_project_id_here
```

### Step 3: Start Development Server
```bash
bun run dev
```

Visit http://localhost:3000 (or the port shown in your terminal)

---

## 🧪 Test the Refactored Features

### 1. Art Card Auto-Rotation
- Wait 4 seconds to see art images automatically rotate
- Displays abstract Web3 art pieces

### 2. Wallet Connection (Web3)
- Click **"Link Wallet"** button
- Connect MetaMask or use WalletConnect
- See your wallet address displayed
- Get a random invite code (LUX-88, NOIR-99, or VOID-00)

### 3. 3D Identity Card
- After connecting wallet, art card transforms into Identity Card
- Click the card to flip and reveal **Gravii ID** with 5 behavioral labels
- Click again to flip back

### 4. State Management
- Open Redux DevTools in browser
- See Zustand stores: `walletStore` and `uiStore`
- Watch state changes in real-time

### 5. Responsive Design
- Resize browser window
- Test on mobile, tablet, desktop viewports
- All cards adapt smoothly

---

## 📦 Available Scripts

```bash
# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type check
bun run tsc --noEmit

# Install dependencies
bun install
```

---

## 🏗️ Architecture Overview

### Component Hierarchy
```
App (Web3 Providers)
├── SplineScene (3D background)
└── DashboardLayout
    ├── ArtCard / IdentityCard3D (dynamic)
    ├── ConnectWalletCard
    ├── WaitlistCard
    ├── LookupCard
    └── LabelsSection
        ├── Behavioral Labels List
        └── SpendingAnalytics Card
```

### State Management
```
Zustand Stores
├── walletStore (wallet connection state)
│   ├── isConnected
│   ├── address
│   └── inviteCode
└── uiStore (UI interaction state)
    ├── currentArtIndex
    ├── isCardFlipped
    ├── showGlitch
    └── joinedWaitlist
```

---

## 🎨 Design System

All design tokens are in `src/styles/design-tokens.ts`:

```typescript
import { DESIGN_TOKENS } from './styles/design-tokens';

// Use in components
<div className={DESIGN_TOKENS.card.base}>
  <div className={DESIGN_TOKENS.card.subtleGlow}></div>
</div>
```

**Available Tokens:**
- `card.base` - Base card styling with hover effects
- `card.subtleGlow` - Subtle gradient overlay
- `colors.acid` - Acid lime color palette (300, 400, 500, 900)
- `fonts.title` - Title font (Gambarino)

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_REOWN_PROJECT_ID` | Reown AppKit project ID | ✅ Yes |
| `VITE_SPLINE_SCENE_URL` | Spline 3D scene URL | ⚠️ Optional |

**Get Reown Project ID:**
1. Visit https://cloud.reown.com/
2. Sign up / Log in
3. Create new project
4. Copy Project ID
5. Paste into `.env.local`

---

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Brave
- ⚠️ Requires MetaMask or WalletConnect-compatible wallet

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Vite will automatically try ports 3000, 3001, 3002, etc.
# Just use the port shown in the terminal output
```

### Wallet Connection Fails
1. Check `.env.local` has valid `VITE_REOWN_PROJECT_ID`
2. Restart dev server
3. Clear browser cache
4. Try incognito/private mode

### TypeScript Errors
```bash
# Make sure you have the latest dependencies
bun install

# Check for type errors
bun run tsc --noEmit
```

---

## 📚 Learn More

- **Zustand Docs:** https://zustand-demo.pmnd.rs/
- **Reown AppKit:** https://docs.reown.com/appkit/overview
- **Wagmi Hooks:** https://wagmi.sh/
- **Vite Guide:** https://vite.dev/guide/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 🎯 Next Steps

1. ✅ Get Reown Project ID and update `.env.local`
2. ✅ Test wallet connection with MetaMask
3. ✅ Explore 3D card flip interaction
4. 🔜 Add your own Spline scene URL (optional)
5. 🔜 Customize behavioral labels data
6. 🔜 Integrate real backend API

---

**Happy Coding! 🚀**
