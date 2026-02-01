/**
 * Centralized Persona Data Configuration
 * Used across PersonaCarousel, IdentityCard3D, and other components
 */

export interface PersonaLabel {
  icon: string
  label: string
  value: string
  color: string
}

export interface Persona {
  id: number
  title: string
  image: string
  badge: string
  labels: PersonaLabel[]
  stats: string
}

export const PERSONAS: Persona[] = [
  {
    id: 1,
    title: 'PRO TRADER',
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
    badge: 'GEN 1.0',
    labels: [
      {
        icon: '💎',
        label: 'STATUS',
        value: 'OG MEMBER',
        color: 'text-acid-400',
      },
      {
        icon: '📈',
        label: 'SPENDING',
        value: 'WHALE TIER 1',
        color: 'text-acid-400',
      },
      {
        icon: '⚠️',
        label: 'RISK SCORE',
        value: '12/100 (SAFE)',
        color: 'text-red-500',
      },
      {
        icon: '🌾',
        label: 'STRATEGY',
        value: 'DEGEN FARMER',
        color: 'text-blue-400',
      },
      {
        icon: '⏰',
        label: 'CHURN RISK',
        value: 'LOW',
        color: 'text-purple-400',
      },
    ],
    stats: '8,241 TXS ♦ 42 PROTOCOLS ♦ 892 DAYS',
  },
  {
    id: 2,
    title: 'WHALE HUNTER',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    badge: 'ELITE',
    labels: [
      {
        icon: '🐋',
        label: 'STATUS',
        value: 'MEGA WHALE',
        color: 'text-acid-400',
      },
      {
        icon: '💰',
        label: 'SPENDING',
        value: '$10M+ VOLUME',
        color: 'text-acid-400',
      },
      {
        icon: '✅',
        label: 'RISK SCORE',
        value: '5/100 (ULTRA SAFE)',
        color: 'text-green-500',
      },
      {
        icon: '🎯',
        label: 'STRATEGY',
        value: 'BLUE CHIP HOLDER',
        color: 'text-blue-400',
      },
      {
        icon: '🔒',
        label: 'CHURN RISK',
        value: 'NONE',
        color: 'text-purple-400',
      },
    ],
    stats: '25,389 TXS ♦ 128 PROTOCOLS ♦ 1,456 DAYS',
  },
  {
    id: 3,
    title: 'DEGEN FARMER',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop',
    badge: 'RISK',
    labels: [
      {
        icon: '🌾',
        label: 'STATUS',
        value: 'YIELD CHASER',
        color: 'text-yellow-400',
      },
      {
        icon: '⚡',
        label: 'SPENDING',
        value: 'HIGH VELOCITY',
        color: 'text-acid-400',
      },
      {
        icon: '🔥',
        label: 'RISK SCORE',
        value: '78/100 (HIGH)',
        color: 'text-red-500',
      },
      {
        icon: '🎲',
        label: 'STRATEGY',
        value: 'APY MAXIMIZER',
        color: 'text-blue-400',
      },
      {
        icon: '⚠️',
        label: 'CHURN RISK',
        value: 'MEDIUM',
        color: 'text-orange-400',
      },
    ],
    stats: '15,672 TXS ♦ 89 PROTOCOLS ♦ 342 DAYS',
  },
  {
    id: 4,
    title: 'NFT COLLECTOR',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    badge: 'CULTURE',
    labels: [
      {
        icon: '🖼️',
        label: 'STATUS',
        value: 'ART ENTHUSIAST',
        color: 'text-pink-400',
      },
      {
        icon: '💸',
        label: 'SPENDING',
        value: 'NFT WHALE',
        color: 'text-acid-400',
      },
      {
        icon: '📊',
        label: 'RISK SCORE',
        value: '45/100 (MODERATE)',
        color: 'text-yellow-500',
      },
      {
        icon: '🎨',
        label: 'STRATEGY',
        value: 'BLUE CHIP COLLECTOR',
        color: 'text-blue-400',
      },
      {
        icon: '💎',
        label: 'CHURN RISK',
        value: 'LOW',
        color: 'text-purple-400',
      },
    ],
    stats: '3,892 TXS ♦ 24 PROTOCOLS ♦ 678 DAYS',
  },
  {
    id: 5,
    title: 'AIRDROP HUNTER',
    image:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop',
    badge: 'ALPHA',
    labels: [
      {
        icon: '🎁',
        label: 'STATUS',
        value: 'OPPORTUNIST',
        color: 'text-cyan-400',
      },
      {
        icon: '🔄',
        label: 'SPENDING',
        value: 'GAS OPTIMIZER',
        color: 'text-acid-400',
      },
      {
        icon: '🛡️',
        label: 'RISK SCORE',
        value: '22/100 (LOW)',
        color: 'text-green-500',
      },
      {
        icon: '🎯',
        label: 'STRATEGY',
        value: 'MULTI-CHAIN FARMER',
        color: 'text-blue-400',
      },
      { icon: '🚀', label: 'CHURN RISK', value: 'HIGH', color: 'text-red-400' },
    ],
    stats: '42,156 TXS ♦ 315 PROTOCOLS ♦ 521 DAYS',
  },
]

// Export first persona for convenience (used in IdentityCard3D)
export const PRO_TRADER_PERSONA = PERSONAS[0]
