'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'

/**
 * Link component: internal routes use next/link, external URLs use <a> with target="_blank".
 */
export function Link({
  href,
  children,
  className,
  ...props
}: ComponentProps<typeof NextLink>) {
  if (!href) return <>{children}</>

  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http://') || href.startsWith('https://'))

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  )
}
