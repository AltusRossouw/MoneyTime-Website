import { render, screen } from '@/test-utils'
import Home from '../page'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock AppScreenshots component
jest.mock('../../components/AppScreenshots', () => {
  return function MockAppScreenshots() {
    return <div data-testid="app-screenshots">App Screenshots Component</div>
  }
})

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText('MoneyTime:')).toBeInTheDocument()
    expect(screen.getByText('Spending Tracker')).toBeInTheDocument()
  })

  it('renders the hero description', () => {
    render(<Home />)
    expect(screen.getByText(/See what's safe-to-spend today/)).toBeInTheDocument()
  })

  it('renders call to action buttons', () => {
    render(<Home />)
    expect(screen.getByText('Get Started Today')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Demo')).toBeInTheDocument()
    expect(screen.getByText('Download')).toBeInTheDocument()
  })

  it('renders the MoneyTime logo', () => {
    render(<Home />)
    const moneyTimeElements = screen.getAllByText('MoneyTime')
    expect(moneyTimeElements.length).toBeGreaterThan(0)
  })

  it('renders the features section', () => {
    render(<Home />)
    expect(screen.getByText('Everything you need to manage your money')).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<Home />)
    
    expect(screen.getByText('All your money in one place')).toBeInTheDocument()
    expect(screen.getByText('Budget that keeps you on track')).toBeInTheDocument()
    expect(screen.getByText('Grow savings and reach your goals')).toBeInTheDocument()
    expect(screen.getByText('See where your money goes')).toBeInTheDocument()
    expect(screen.getByText('Track expenses in seconds')).toBeInTheDocument()
    expect(screen.getByText('Understand your spending better')).toBeInTheDocument()
  })

  it('renders the app screenshots component', () => {
    render(<Home />)
    expect(screen.getByTestId('app-screenshots')).toBeInTheDocument()
  })

  it('renders the download section', () => {
    render(<Home />)
    expect(screen.getByText('Start building better money habits today')).toBeInTheDocument()
  })

  it('renders the App Store download link', () => {
    render(<Home />)
    const appStoreLink = screen.getByAltText('Download on the App Store')
    expect(appStoreLink).toBeInTheDocument()
    expect(appStoreLink.closest('a')).toHaveAttribute('href', 'https://apps.apple.com/app/id1632869872')
  })

  it('renders the footer', () => {
    render(<Home />)
    expect(screen.getByText('© 2025 MoneyTime. All rights reserved.')).toBeInTheDocument()
  })

  it('renders terms and privacy policy link', () => {
    render(<Home />)
    const termsLink = screen.getByText('Terms of Use & Privacy Policy')
    expect(termsLink).toBeInTheDocument()
    expect(termsLink).toHaveAttribute('href', 'https://moneytime.tinybigapps.com/terms')
  })

  it('has proper semantic structure', () => {
    render(<Home />)
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders app preview image', () => {
    render(<Home />)
    expect(screen.getByAltText('MoneyTime App Screenshots')).toBeInTheDocument()
  })

  it('renders logo images', () => {
    render(<Home />)
    expect(screen.getByAltText('MoneyTime Logo')).toBeInTheDocument()
    expect(screen.getByAltText('MoneyTime App Icon')).toBeInTheDocument()
  })
})
