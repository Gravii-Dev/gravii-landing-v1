import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Link } from './index'

describe('Link', () => {
  it('renders internal link as next/link', () => {
    render(<Link href="/about">About</Link>)
    const link = screen.getByRole('link', { name: /about/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders external link with target _blank and rel', () => {
    render(<Link href="https://example.com">External</Link>)
    const link = screen.getByRole('link', { name: /external/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders children when href is empty', () => {
    render(<Link href="">Empty</Link>)
    expect(screen.getByText(/empty/i)).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
