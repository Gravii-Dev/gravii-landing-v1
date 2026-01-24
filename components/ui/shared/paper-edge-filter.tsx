interface PaperEdgeFilterProps {
  id?: string
  scale?: number
  baseFrequency?: number
}

export function PaperEdgeFilter({
  id = 'paper-edge',
  scale = 2,
  baseFrequency = 0.04,
}: PaperEdgeFilterProps) {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
    >
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves={5}
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  )
}
