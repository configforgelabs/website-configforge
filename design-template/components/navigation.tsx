"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-provider"

// Navigation Item Interface
interface NavigationItem {
  name: string
  href: string
  external?: boolean
  label?: string
}

// Navigation Props
interface NavigationProps {
  brandName?: string
  brandHref?: string
  navigation?: NavigationItem[]
  showThemeToggle?: boolean
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function Navigation({
  brandName = "Your Brand",
  brandHref = "/",
  navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  showThemeToggle = true,
  showCTA = true,
  ctaText = "Get Started",
  ctaHref = "/contact",
  className = "",
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`nav-sticky ${className}`}>
      <div className="container-default">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href={brandHref} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  {brandName.charAt(0)}
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">
                {brandName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center max-w-4xl mx-8">
            <div className="flex items-center space-x-1">
              {navigation.filter(item => item.href !== "/").map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${
                    isActiveLink(item.href) ? "nav-link-active" : "nav-link-inactive"
                  }`}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                  {item.label && (
                    <span className="text-xs text-muted-foreground ml-1">
                      {item.label}
                    </span>
                  )}
                  {item.external && (
                    <svg className="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {showThemeToggle && <ThemeToggle />}

            {showCTA && (
              <button className="hidden lg:inline-flex btn btn-primary ml-2 px-4 py-2">
                <Link href={ctaHref}>{ctaText}</Link>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden btn btn-ghost h-9 w-9 p-0 ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2 ${
                    isActiveLink(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                  {item.label && (
                    <span className="text-xs text-muted-foreground ml-1">
                      {item.label}
                    </span>
                  )}
                  {item.external && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
              ))}
              {showCTA && (
                <div className="pt-2">
                  <button className="btn btn-primary w-full">
                    <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                      {ctaText}
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Example Usage Component
export function NavigationExample() {
  const customNavigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "https://docs.example.com", external: true },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <Navigation
      brandName="YourApp"
      navigation={customNavigation}
      ctaText="Sign Up"
      ctaHref="/signup"
    />
  )
}

// Sticky Navigation Hook
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  React.useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }
    
    window.addEventListener("scroll", updateScrollDirection)
    return () => window.removeEventListener("scroll", updateScrollDirection)
  }, [scrollDirection, lastScrollY])

  return scrollDirection
}

// Auto-hide Navigation Component
export function AutoHideNavigation(props: NavigationProps) {
  const scrollDirection = useScrollDirection()
  
  return (
    <div className={`transition-transform duration-300 ${
      scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
    }`}>
      <Navigation {...props} />
    </div>
  )
}
