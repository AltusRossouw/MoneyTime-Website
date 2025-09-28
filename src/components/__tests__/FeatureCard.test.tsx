import { render, screen } from '@/test-utils'
import FeatureCard from '../FeatureCard'

describe('FeatureCard', () => {
  const mockProps = {
    icon: '💰',
    title: 'Test Feature',
    description: 'This is a test feature description'
  }

  it('renders with correct props', () => {
    render(<FeatureCard {...mockProps} />)
    
    expect(screen.getByText('💰')).toBeInTheDocument()
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('renders icon in proper container', () => {
    render(<FeatureCard {...mockProps} />)
    
    const iconContainer = screen.getByText('💰').parentElement
    expect(iconContainer).toHaveClass('w-12', 'h-12', 'bg-indigo-100', 'rounded-lg', 'flex', 'items-center', 'justify-center')
  })

  it('renders title as heading', () => {
    render(<FeatureCard {...mockProps} />)
    
    const title = screen.getByRole('heading', { level: 3 })
    expect(title).toHaveTextContent('Test Feature')
    expect(title).toHaveClass('text-xl', 'font-semibold', 'mb-4', 'text-gray-900')
  })

  it('renders description with correct styling', () => {
    render(<FeatureCard {...mockProps} />)
    
    const description = screen.getByText('This is a test feature description')
    expect(description).toHaveClass('text-gray-600', 'leading-relaxed')
  })

  it('applies correct card styling', () => {
    render(<FeatureCard {...mockProps} />)
    
    const card = screen.getByText('Test Feature').closest('div')
    expect(card).toHaveClass('bg-white', 'p-8', 'rounded-xl', 'shadow-lg', 'hover:shadow-xl', 'transition-shadow')
  })

  it('handles different icon values', () => {
    const customProps = { ...mockProps, icon: '📊' }
    render(<FeatureCard {...customProps} />)
    
    expect(screen.getByText('📊')).toBeInTheDocument()
  })

  it('handles long descriptions', () => {
    const longDescription = 'This is a very long description that should still render properly and maintain the correct styling and layout of the feature card component.'
    const customProps = { ...mockProps, description: longDescription }
    render(<FeatureCard {...customProps} />)
    
    expect(screen.getByText(longDescription)).toBeInTheDocument()
  })
})

