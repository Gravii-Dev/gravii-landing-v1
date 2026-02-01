'use client'

import type React from 'react'
import { useEffect } from 'react'
import { Image } from '@/src/components/ui/image'
import { ART_PIECES } from '@/src/config/constants'
import { useUIStore } from '@/src/store'
import { DESIGN_TOKENS } from '@/src/styles/design-tokens'
import { DARK_BLUR_PLACEHOLDER } from '@/src/utils/image-placeholders'

export const ArtCard: React.FC = () => {
  const currentArtIndex = useUIStore((state) => state.currentArtIndex)
  const setCurrentArtIndex = useUIStore((state) => state.setCurrentArtIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtIndex((currentArtIndex + 1) % ART_PIECES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentArtIndex, setCurrentArtIndex])

  return (
    <>
      <div className={DESIGN_TOKENS.card.subtleGlow} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative flex-grow overflow-hidden">
          {ART_PIECES.map((art, index) => (
            <div
              key={art.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentArtIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 z-10 bg-black/20" />
              <Image
                src={art.url}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL={DARK_BLUR_PLACEHOLDER}
                className="object-cover opacity-80 contrast-125 grayscale filter transition-transform duration-[20s] group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 z-20 w-full p-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-8 bg-white/50" />
                  <span className="font-gambarino text-sm text-white/60 uppercase tracking-[0.2em]">
                    Collection 0{art.id}
                  </span>
                </div>
                <h2 className="font-gambarino text-4xl text-white leading-tight">
                  {art.title}
                </h2>
                <p className="mt-2 font-gambarino text-xl text-zinc-400">
                  by {art.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-0">
          <p className="max-w-[90%] font-gambarino text-lg text-white/40 leading-relaxed">
            A curated view of the new world. Abstract representations of
            decentralized connection.
          </p>
        </div>
      </div>
    </>
  )
}
