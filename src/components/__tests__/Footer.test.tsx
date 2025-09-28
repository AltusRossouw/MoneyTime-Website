import { render, screen } from '@/test-utils'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the MoneyTime logo', () => {
    render(<Footer />)
    expect(screen.getByText('MoneyTime')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText('© 2024 MoneyTime. All rights reserved.')).toBeInTheDocument()
  })

  it('renders terms and privacy policy link', () => {
    render(<Footer />)
    const termsLink = screen.getByText('Terms of Use & Privacy Policy')
    expect(termsLink).toBeInTheDocument()
    expect(termsLink).toHaveAttribute('href', 'https://moneytime.tinybigapps.com/terms')
  })

  it('has proper footer structure', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-white', 'py-8', 'mt-16')
  })

  it('has proper link styling', () => {
    render(<Footer />)
    const termsLink = screen.getByText('Terms of Use & Privacy Policy')
    expect(termsLink).toHaveClass('hover:text-indigo-600', 'transition-colors')
  })
})

