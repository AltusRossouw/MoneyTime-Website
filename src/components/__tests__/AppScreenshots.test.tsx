import { render, screen } from '@/test-utils'
import AppScreenshots from '../AppScreenshots'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    return <img src={src} alt={alt} {...props} />
  }
})

describe('AppScreenshots', () => {
  it('renders the main heading', () => {
    render(<AppScreenshots />)
    expect(screen.getByText('See MoneyTime in Action')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<AppScreenshots />)
    expect(screen.getByText('Experience the actual app interface and discover how intuitive financial management can be')).toBeInTheDocument()
  })

  it('renders all screenshot images', () => {
    render(<AppScreenshots />)
    
    expect(screen.getByAltText('Budgeting Made Easy - MoneyTime App Screenshot')).toBeInTheDocument()
    expect(screen.getByAltText('Trends Over Time - MoneyTime App Screenshot')).toBeInTheDocument()
    expect(screen.getByAltText('Understand Your Spending - MoneyTime App Screenshot')).toBeInTheDocument()
    expect(screen.getByAltText('Track Your Spending - MoneyTime App Screenshot')).toBeInTheDocument()
  })

  it('renders the call to action section', () => {
    render(<AppScreenshots />)
    expect(screen.getByText('Ready to take control of your finances?')).toBeInTheDocument()
  })

  it('renders the App Store download link', () => {
    render(<AppScreenshots />)
    const appStoreLink = screen.getByAltText('Download on the App Store')
    expect(appStoreLink).toBeInTheDocument()
    expect(appStoreLink.closest('a')).toHaveAttribute('href', 'https://apps.apple.com/app/id1632869872')
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-class'
    render(<AppScreenshots className={customClass} />)
    
    const section = screen.getByText('See MoneyTime in Action').closest('section')
    expect(section).toHaveClass(customClass)
  })

  it('uses default className when none provided', () => {
    render(<AppScreenshots />)
    
    const section = screen.getByText('See MoneyTime in Action').closest('section')
    expect(section).toHaveAttribute('class', '')
  })

  it('has proper section structure', () => {
    render(<AppScreenshots />)
    
    const section = screen.getByText('See MoneyTime in Action').closest('section')
    expect(section).toHaveAttribute('id', 'demo')
  })

  it('renders screenshots with correct image sources', () => {
    render(<AppScreenshots />)
    
    const images = screen.getAllByRole('img')
    const screenshotImages = images.filter(img => 
      img.getAttribute('alt')?.includes('MoneyTime App Screenshot')
    )
    
    expect(screenshotImages).toHaveLength(4)
    expect(screenshotImages[0]).toHaveAttribute('src', '/images/screenshots/budgeting-made-easy.png')
    expect(screenshotImages[1]).toHaveAttribute('src', '/images/screenshots/trends-over-time.png')
    expect(screenshotImages[2]).toHaveAttribute('src', '/images/screenshots/understand-spending.png')
    expect(screenshotImages[3]).toHaveAttribute('src', '/images/screenshots/track-spending.png')
  })
})
