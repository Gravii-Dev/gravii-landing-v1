'use client'

import cn from 'clsx'
import { Image } from '@/components/ui/image'
import s from './persona-magazine-card.module.css'

export interface PersonaMagazineCardProps {
  className?: string
  no: number
  category: string
  title: string
  imageSrc: string
  imageAlt?: string
}

function padNo(no: number) {
  return String(no).padStart(3, '0')
}

export function PersonaMagazineCard({
  className,
  no,
  category,
  title,
  imageSrc,
  imageAlt = '',
}: PersonaMagazineCardProps) {
  return (
    <article className={cn(s.card, className)}>
      <header className={s.chrome}>
        <div className={s.dots} aria-hidden="true">
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.dot} />
        </div>
        <div className={s.dash} aria-hidden="true" />
        <div className={s.no}>[NO.{padNo(no)}]</div>
      </header>

      <div className={s.mediaFrame}>
        <div className={s.media}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            block={false}
            aspectRatio={4 / 3}
            objectFit="cover"
            mobileSize="100vw"
            desktopSize="33vw"
          />
        </div>
      </div>

      <div className={s.meta}>
        <span className={s.category}>{category}</span>
      </div>

      <h3 className={s.title}>{title}</h3>
    </article>
  )
}
