import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import Header from '../Header'
import { useAuth } from '@/hooks/useAuth'

// Mock the useAuth hook
vi.mock('@/hooks/useAuth')
const mockUseAuth = vi.mocked(useAuth)

// Mock component wrapper
const HeaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('Header Component', () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      user: null,
      signOut: vi.fn(),
      signIn: vi.fn(),
      signUp: vi.fn(),
      loading: false
    })
  })

  it('renders the logo and navigation', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    expect(screen.getByText('MetalCraft Forge')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows sign in button when user is not authenticated', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('shows user menu when user is authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', email: 'test@example.com', user_metadata: { full_name: 'Test User' } },
      signOut: vi.fn(),
      signIn: vi.fn(),
      signUp: vi.fn(),
      loading: false
    })

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    fireEvent.click(menuButton)
    
    // Mobile menu should be visible
    expect(screen.getAllByText('Home')).toHaveLength(2) // Desktop + mobile
  })

  it('scrolls to section when navigation item is clicked', () => {
    const mockScrollIntoView = vi.fn()
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any)

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    fireEvent.click(screen.getByText('Products'))
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})