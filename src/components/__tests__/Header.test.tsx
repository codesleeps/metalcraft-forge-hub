import { render, screen, fireEvent, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { User, Session } from '@supabase/supabase-js'
import Header from '../Header'
import { useAuth } from '../../hooks/useAuth'
import '@testing-library/jest-dom/vitest'

// Mock the useAuth hook
vi.mock('../../hooks/useAuth')
const mockUseAuth = vi.mocked(useAuth)

// Mock component wrapper
const HeaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('Header Component', () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      user: null,
      session: null,
      signOut: vi.fn(),
      loading: false,
      isSupabaseAvailable: true,
    })
  })

  it('renders the logo and navigation', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    expect(screen.getByText('MetalCraft Forge')).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation')
    expect(within(desktopNav).getByRole('button', { name: 'Home' })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('button', { name: 'Products' })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('button', { name: 'Gallery' })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })

  it('shows sign in button when user is not authenticated', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    expect(screen.getAllByRole('button', { name: 'Sign In' })[0]).toBeInTheDocument()
  })

  it('shows user menu when user is authenticated', () => {
    const mockUser: Partial<User> = {
      id: '1',
      email: 'test@example.com',
      user_metadata: { full_name: 'Test User' },
      app_metadata: {},
      aud: 'authenticated',
      created_at: '2023-01-01T00:00:00Z',
    }

    const mockSession: Partial<Session> = {
      user: mockUser as User,
      access_token: 'mock-token',
      token_type: 'bearer',
      expires_in: 3600,
    }

    mockUseAuth.mockReturnValue({
      user: mockUser as User,
      session: mockSession as Session,
      signOut: vi.fn(),
      loading: false,
      isSupabaseAvailable: true,
    })

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    const desktopNav = screen.getByRole('navigation')
    expect(within(desktopNav).getByRole('button', { name: 'Dashboard' })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('button', { name: 'Sign Out' })).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    const menuButton = screen.getAllByRole('button', { name: /toggle menu/i })[0]
    fireEvent.click(menuButton)
    
    // Mobile menu should be visible
    const mobileNav = screen.getByRole('region', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getByRole('button', { name: 'Home' })).toBeInTheDocument()
  })

  it('scrolls to section when navigation item is clicked', () => {
    const mockScrollIntoView = vi.fn()
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(window.document, 'getElementById').mockReturnValue(mockElement as any)

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    )
    
    const homeButtons = screen.getAllByRole('button', { name: 'Home' })
    fireEvent.click(homeButtons[0])
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})