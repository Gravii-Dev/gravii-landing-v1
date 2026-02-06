import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Image } from './index'

vi.mock('next/image', () => ({
  default: function MockImage({
    src,
    alt,
    ...props
  }: {
    src: string
    alt?: string
    [key: string]: unknown
  }) {
    // biome-ignore lint/performance/noImgElement: intentional <img> mock for next/image in tests
    return <img src={src} alt={alt ?? ''} data-testid="next-image" {...props} />
  },
}))

describe('Image', () => {
  it('renders with src and alt', () => {
    render(<Image src="/test.jpg" alt="Test image" width={100} height={100} />)
    const img = screen.getByTestId('next-image')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('/test.jpg'))
    expect(img).toHaveAttribute('alt', 'Test image')
  })

  it('forwards width and height', () => {
    render(<Image src="/a.png" alt="A" width={200} height={150} />)
    const img = screen.getByTestId('next-image')
    expect(img).toHaveAttribute('width', '200')
    expect(img).toHaveAttribute('height', '150')
  })
})
