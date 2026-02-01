import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" />)
    const input = screen.getByPlaceholderText(/enter email/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter email')
  })

  it('forwards value and onChange', async () => {
    const user = userEvent.setup()
    render(<Input placeholder="Name" />)
    const input = screen.getByPlaceholderText(/name/i)
    await user.type(input, 'test')
    expect(input).toHaveValue('test')
  })

  it('supports disabled state', () => {
    render(<Input disabled placeholder="Disabled" />)
    expect(screen.getByPlaceholderText(/disabled/i)).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom" />)
    const input = screen.getByPlaceholderText(/custom/i)
    expect(input).toHaveClass('custom-class')
  })
})
