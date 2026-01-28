'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import s from './labels.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const LABELS_DATA = [
  {
    id: 'sybil',
    name: 'SYBIL',
    color: '#22c55e',
    description: 'Detects wallet clustering and airdrop farming patterns.',
    analytics: {
      title: 'SYBIL ANALYTICS',
      description:
        'Identifies coordinated wallet behavior, farming patterns, and suspicious clustering to detect potential sybil activity.',
      metrics: ['Cluster detection', 'Farming patterns', 'Link analysis'],
      useCases: ['Airdrop protection', 'Bot detection', 'Fraud prevention'],
    },
  },
  {
    id: 'spending',
    name: 'SPENDING',
    color: '#a855f7',
    description:
      'Quantifies on-chain spending behavior and transaction velocity.',
    analytics: {
      title: 'SPENDING ANALYTICS',
      description:
        'Tracks historical transaction values, gas spending patterns, protocol interactions, and overall capital flow to build a comprehensive spending profile.',
      metrics: [
        'Transaction volume',
        'Avg. transaction size',
        'Gas efficiency',
      ],
      useCases: ['Credit scoring', 'Whale detection', 'User segmentation'],
    },
  },
  {
    id: 'risk',
    name: 'RISK',
    color: '#ef4444',
    description: 'Evaluates wallet risk based on interaction history.',
    analytics: {
      title: 'RISK ANALYTICS',
      description:
        'Analyzes wallet interactions with known risky protocols, suspicious contracts, and blacklisted addresses.',
      metrics: ['Risk score', 'Interaction flags', 'Protocol safety'],
      useCases: ['KYC/AML', 'Risk assessment', 'Compliance'],
    },
  },
  {
    id: 'yield',
    name: 'YIELD',
    color: '#3b82f6',
    description: 'Identifies active DeFi participation and yield strategies.',
    analytics: {
      title: 'YIELD ANALYTICS',
      description:
        'Tracks DeFi protocol usage, liquidity provision, staking activity, and yield farming strategies.',
      metrics: ['LP positions', 'Staking ratio', 'APY tracking'],
      useCases: ['DeFi scoring', 'Investor profiling', 'Strategy analysis'],
    },
  },
  {
    id: 'churn',
    name: 'CHURN',
    color: '#f59e0b',
    description: 'Predicts likelihood of wallet inactivity within 30 days.',
    analytics: {
      title: 'CHURN ANALYTICS',
      description:
        'Uses activity patterns, transaction frequency, and behavioral signals to predict wallet dormancy.',
      metrics: ['Activity score', 'Frequency trend', 'Engagement level'],
      useCases: ['Retention targeting', 'Re-engagement', 'Lifecycle analysis'],
    },
  },
]

export function LabelsSection() {
  const [activeLabel, setActiveLabel] = useState(LABELS_DATA[1]!) // Default to SPENDING
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section,
      { opacity: 0, y: 150, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.title}>LABELS</h2>
        </div>

        {/* Content Grid */}
        <div className={s.content}>
          {/* Left Card - Label List */}
          <div className={s.card}>
            {/* Chrome Header */}
            <header className={s.chrome}>
              <div className={s.dots} aria-hidden="true">
                <span className={s.dot} />
                <span className={s.dot} />
                <span className={s.dot} />
              </div>
              <div className={s.dash} aria-hidden="true" />
              <div className={s.no}>[LABELS]</div>
            </header>

            <div className={s.contentFrame}>
              <div className={s.cardInner}>
                <h3 className={s.cardTitle}>5 BEHAVIORAL LABELS</h3>
                <div className={s.labelsList}>
                  {LABELS_DATA.map((label) => (
                    <button
                      key={label.id}
                      type="button"
                      className={`${s.labelItem} ${activeLabel.id === label.id ? s.active : ''}`}
                      onClick={() => setActiveLabel(label)}
                    >
                      <div className={s.labelLeft}>
                        <span
                          className={s.labelIndicator}
                          style={{ backgroundColor: label.color }}
                        />
                        <span className={s.labelIcon}>
                          {label.id === 'sybil' && '✓'}
                          {label.id === 'spending' && '📈'}
                          {label.id === 'risk' && '⚠️'}
                          {label.id === 'yield' && '🌾'}
                          {label.id === 'churn' && '⏱️'}
                        </span>
                        <span className={s.labelName}>{label.name}</span>
                      </div>
                      <span className={s.labelArrow}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Analytics Panel */}
          <div className={s.card}>
            {/* Chrome Header */}
            <header className={s.chrome}>
              <div className={s.dots} aria-hidden="true">
                <span className={s.dot} />
                <span className={s.dot} />
                <span className={s.dot} />
              </div>
              <div className={s.dash} aria-hidden="true" />
              <div className={s.no}>[ANALYTICS]</div>
            </header>

            <div className={s.contentFrame}>
              <div className={s.cardInner}>
                <div
                  className={s.panelTag}
                  style={{ backgroundColor: activeLabel.color }}
                >
                  {activeLabel.name}
                </div>
                <div className={s.panelIcon}>
                  {activeLabel.id === 'sybil' && '✓'}
                  {activeLabel.id === 'spending' && '📈'}
                  {activeLabel.id === 'risk' && '⚠️'}
                  {activeLabel.id === 'yield' && '🌾'}
                  {activeLabel.id === 'churn' && '⏱️'}
                </div>
                <h3 className={s.panelTitle}>{activeLabel.analytics.title}</h3>
                <p className={s.panelDesc}>
                  {activeLabel.analytics.description}
                </p>

                <div className={s.metricsSection}>
                  <span className={s.metricsTitle}>KEY METRICS</span>
                  <div className={s.metricsTags}>
                    {activeLabel.analytics.metrics.map((metric) => (
                      <span key={metric} className={s.metricTag}>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={s.useCasesSection}>
                  <span className={s.useCasesTitle}>USE CASES</span>
                  <div className={s.useCasesList}>
                    {activeLabel.analytics.useCases.map((useCase) => (
                      <span key={useCase} className={s.useCase}>
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
