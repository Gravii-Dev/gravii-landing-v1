'use client'

import cn from 'clsx'
import { useState } from 'react'
import { Image } from '@/components/ui/image'
import s from './card-3d.module.css'

interface Card3DProps {
  imageSrc: string
  backText: string
  title?: string
  className?: string
}

export function Card3D({ imageSrc, backText, title, className }: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={cn(s.wrapper, s.wrapperFloat, className)}>
      <button
        type="button"
        className={cn(s.card, isFlipped && s.cardFlipped)}
        onClick={() => setIsFlipped(!isFlipped)}
        aria-pressed={isFlipped}
      >
        {/* 앞면 - 이미지 */}
        <div className={cn(s.face, s.front)}>
          <div className={s.imageWrapper}>
            <Image
              src={imageSrc}
              alt={title || 'Persona'}
              fill
              className={s.image}
            />
          </div>
        </div>

        {/* 뒷면 - 텍스트 */}
        <div className={cn(s.face, s.back)}>
          <div className={s.backContent}>
            {title && <h3 className={s.title}>{title}</h3>}
            <p className={s.text}>{backText}</p>
          </div>
        </div>
      </button>
    </div>
  )
}
