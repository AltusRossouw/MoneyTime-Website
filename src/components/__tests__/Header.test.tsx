import { render, screen } from '@/test-utils'
import Header from '../Header'

describe('Header', () => {
  it('renders the MoneyTime logo', () => {
    render(<Header />)
    expect(screen.getByText('MoneyTime')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
  })

  it('has proper navigation structure', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('container', 'mx-auto', 'px-6', 'py-8')
  })

  it('has proper link attributes', () => {
    render(<Header />)
    const featuresLink = screen.getByText('Features')
    const aboutLink = screen.getByText('About')
    const downloadLink = screen.getByText('Download')

    expect(featuresLink).toHaveAttribute('href', '#features')
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(downloadLink).toHaveAttribute('href', '#download')
  })
})

