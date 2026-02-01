'use client'

import NextImage from 'next/image'
import type { ComponentProps } from 'react'

/**
 * Project Image component. Wraps next/image for consistent usage and future defaults.
 * Use this instead of next/image directly.
 */
export function Image(props: ComponentProps<typeof NextImage>) {
  return <NextImage {...props} />
}
