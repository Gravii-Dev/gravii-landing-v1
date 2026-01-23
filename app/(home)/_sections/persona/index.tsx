'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Card3D } from '@/components/ui/card-3d'
import s from './persona.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const PERSONAS = [
  {
    id: 1,
    title: 'Persona 1',
    backText:
      '첫 번째 페르소나는 창의적이고 혁신적인 사고를 가진 사람입니다. 새로운 아이디어를 추구하고 변화를 두려워하지 않습니다. 독창적인 접근 방식으로 문제를 해결하고 리더십으로 팀에 영감을 줍니다.',
  },
  {
    id: 2,
    title: 'Persona 2',
    backText:
      '두 번째 페르소나는 분석적이고 체계적인 사고를 가진 사람입니다. 데이터와 사실에 기반하여 결정을 내리고 세부 사항에 주의를 기울입니다. 안정적이고 신뢰할 수 있는 파트너로서 프로젝트의 기반을 구축합니다.',
  },
  {
    id: 3,
    title: 'Persona 3',
    backText:
      '세 번째 페르소나는 소통과 협업에 뛰어난 사람입니다. 다양한 배경을 가진 사람들과 효과적으로 소통하고 팀의 조화를 이끌어냅니다. 뛰어난 공감 능력으로 타인의 관점을 이해하는 데 탁월합니다.',
  },
  {
    id: 4,
    title: 'Persona 4',
    backText:
      '네 번째 페르소나는 강한 실행력과 추진력을 가진 사람입니다. 목표를 설정하면 끝까지 달성하고, 어려운 상황에서도 포기하지 않습니다. 실용적인 해결책을 찾아 빠르게 행동합니다.',
  },
  {
    id: 5,
    title: 'Persona 5',
    backText:
      '다섯 번째 페르소나는 전략적 사고와 비전을 가진 사람입니다. 장기적인 관점에서 계획을 세우고 미래를 예측하는 통찰력을 가지고 있습니다. 조직의 방향을 제시하고 목표 달성을 위한 로드맵을 만듭니다.',
  },
]

export function PersonaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (!sectionRef.current) return

    const scrollAmount = track.scrollWidth - window.innerWidth

    const animation = gsap.to(track, {
      x: -scrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${scrollAmount}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      animation.kill()
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={s.section}>
      <div ref={trackRef} className={s.track}>
        {PERSONAS.map((persona) => (
          <div key={persona.id} className={s.slide}>
            <div className="text-3d-float">{`Flip me over`}</div>
            <Card3D
              imageSrc="/img/persona-card.png"
              title={persona.title}
              backText={persona.backText}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
