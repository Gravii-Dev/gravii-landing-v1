/**
 * Generate blur placeholder for images
 * Creates a minimal base64 encoded SVG for progressive loading
 */
export function getImagePlaceholder(width = 40, height = 40): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `

  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Common blur placeholder for dark themed images
 */
export const DARK_BLUR_PLACEHOLDER = getImagePlaceholder()

/**
 * Shimmer effect placeholder for loading states
 */
export function getShimmerPlaceholder(width = 40, height = 40): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1">
            <animate attributeName="stop-color" values="#0a0a0a;#1a1a1a;#0a0a0a" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1">
            <animate attributeName="stop-color" values="#0a0a0a;#1a1a1a;#0a0a0a" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shimmer)" />
    </svg>
  `

  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}
