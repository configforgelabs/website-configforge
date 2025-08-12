import * as React from "react"
import { Button } from "./button"

// Utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Hero Section Base Props
interface HeroProps {
  className?: string
  children: React.ReactNode
}

// Hero Container Component
function Hero({ className, children }: HeroProps) {
  return (
    <section className={cn(
      "hero-gradient section-padding",
      className
    )}>
      <div className="container-default">
        {children}
      </div>
    </section>
  )
}

// Hero Content Component
interface HeroContentProps {
  align?: "left" | "center" | "right"
  className?: string
  children: React.ReactNode
}

function HeroContent({ 
  align = "center", 
  className, 
  children 
}: HeroContentProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  return (
    <div className={cn(
      alignmentClasses[align],
      className
    )}>
      {children}
    </div>
  )
}

// Hero Title Component
interface HeroTitleProps {
  className?: string
  children: React.ReactNode
  gradient?: boolean
}

function HeroTitle({ className, children, gradient = false }: HeroTitleProps) {
  return (
    <h1 className={cn(
      "hero-title",
      gradient && "gradient-text",
      className
    )}>
      {children}
    </h1>
  )
}

// Hero Subtitle Component
interface HeroSubtitleProps {
  className?: string
  children: React.ReactNode
}

function HeroSubtitle({ className, children }: HeroSubtitleProps) {
  return (
    <p className={cn("hero-subtitle", className)}>
      {children}
    </p>
  )
}

// Hero Actions Component
interface HeroActionsProps {
  className?: string
  children: React.ReactNode
  direction?: "row" | "column"
  gap?: "sm" | "md" | "lg"
}

function HeroActions({ 
  className, 
  children, 
  direction = "row",
  gap = "md"
}: HeroActionsProps) {
  const directionClasses = {
    row: "flex-col sm:flex-row",
    column: "flex-col"
  }

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4", 
    lg: "gap-6"
  }

  return (
    <div className={cn(
      "flex justify-center",
      directionClasses[direction],
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  )
}

// Hero Badge Component
interface HeroBadgeProps {
  className?: string
  children: React.ReactNode
  variant?: "default" | "outline" | "success"
}

function HeroBadge({ className, children, variant = "default" }: HeroBadgeProps) {
  const variantClasses = {
    default: "badge-primary",
    outline: "border border-primary/20 text-primary bg-transparent",
    success: "badge-success"
  }

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-4",
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}

// Simple Hero Template
interface SimpleHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: string
  primaryAction?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    text: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

function SimpleHero({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className
}: SimpleHeroProps) {
  return (
    <Hero className={className}>
      <HeroContent>
        {badge && <HeroBadge>{badge}</HeroBadge>}
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        
        {(primaryAction || secondaryAction) && (
          <HeroActions>
            {primaryAction && (
              primaryAction.href ? (
                <Button size="lg" asChild>
                  <a href={primaryAction.href}>{primaryAction.text}</a>
                </Button>
              ) : (
                <Button size="lg" onClick={primaryAction.onClick}>
                  {primaryAction.text}
                </Button>
              )
            )}
            
            {secondaryAction && (
              secondaryAction.href ? (
                <Button size="lg" variant="outline" asChild>
                  <a href={secondaryAction.href}>{secondaryAction.text}</a>
                </Button>
              ) : (
                <Button size="lg" variant="outline" onClick={secondaryAction.onClick}>
                  {secondaryAction.text}
                </Button>
              )
            )}
          </HeroActions>
        )}
      </HeroContent>
    </Hero>
  )
}

// Feature Hero Template
interface FeatureHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: string
  features?: string[]
  primaryAction?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    text: string
    href?: string
    onClick?: () => void
  }
  image?: {
    src: string
    alt: string
  }
  className?: string
}

function FeatureHero({
  badge,
  title,
  subtitle,
  features,
  primaryAction,
  secondaryAction,
  image,
  className
}: FeatureHeroProps) {
  return (
    <Hero className={className}>
      <div className={cn(
        "grid grid-cols-1 gap-12 items-center",
        image && "lg:grid-cols-2"
      )}>
        <HeroContent align="left">
          {badge && <HeroBadge>{badge}</HeroBadge>}
          <HeroTitle>{title}</HeroTitle>
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
          
          {features && features.length > 0 && (
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
          
          {(primaryAction || secondaryAction) && (
            <HeroActions direction="row" className="justify-start">
              {primaryAction && (
                primaryAction.href ? (
                  <Button size="lg" asChild>
                    <a href={primaryAction.href}>{primaryAction.text}</a>
                  </Button>
                ) : (
                  <Button size="lg" onClick={primaryAction.onClick}>
                    {primaryAction.text}
                  </Button>
                )
              )}
              
              {secondaryAction && (
                secondaryAction.href ? (
                  <Button size="lg" variant="outline" asChild>
                    <a href={secondaryAction.href}>{secondaryAction.text}</a>
                  </Button>
                ) : (
                  <Button size="lg" variant="outline" onClick={secondaryAction.onClick}>
                    {secondaryAction.text}
                  </Button>
                )
              )}
            </HeroActions>
          )}
        </HeroContent>
        
        {image && (
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-glow"
            />
          </div>
        )}
      </div>
    </Hero>
  )
}

// Stats Hero Template
interface StatsHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: string
  stats?: Array<{
    value: string
    label: string
  }>
  primaryAction?: {
    text: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

function StatsHero({
  badge,
  title,
  subtitle,
  stats,
  primaryAction,
  className
}: StatsHeroProps) {
  return (
    <Hero className={className}>
      <HeroContent>
        {badge && <HeroBadge>{badge}</HeroBadge>}
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {primaryAction && (
          <HeroActions>
            {primaryAction.href ? (
              <Button size="lg" asChild>
                <a href={primaryAction.href}>{primaryAction.text}</a>
              </Button>
            ) : (
              <Button size="lg" onClick={primaryAction.onClick}>
                {primaryAction.text}
              </Button>
            )}
          </HeroActions>
        )}
      </HeroContent>
    </Hero>
  )
}

// Hero Examples Component
function HeroExamples() {
  return (
    <div className="space-y-16">
      <SimpleHero
        badge="New Features Available"
        title="Build amazing products with our design system"
        subtitle="Everything you need to create beautiful, accessible, and consistent user interfaces for your applications."
        primaryAction={{
          text: "Get Started",
          href: "/get-started"
        }}
        secondaryAction={{
          text: "View Documentation",
          href: "/docs"
        }}
      />
      
      <FeatureHero
        badge="Trusted by 1000+ Companies"
        title={
          <>
            The fastest way to build
            <br />
            <span className="gradient-text">modern applications</span>
          </>
        }
        subtitle="Our comprehensive design system provides everything you need to create beautiful, accessible, and consistent user interfaces."
        features={[
          "Lightning-fast development with pre-built components",
          "Fully accessible and WCAG 2.1 AA compliant",
          "Dark mode support built-in",
          "Responsive design for all devices"
        ]}
        primaryAction={{
          text: "Start Building",
          href: "/start"
        }}
        secondaryAction={{
          text: "See Examples",
          href: "/examples"
        }}
        image={{
          src: "/api/placeholder/600/400",
          alt: "Dashboard Preview"
        }}
      />
      
      <StatsHero
        badge="Industry Leading"
        title="Trusted by developers worldwide"
        subtitle="Our design system powers thousands of applications and serves millions of users every day."
        stats={[
          { value: "50K+", label: "Developers" },
          { value: "1M+", label: "Components Used" },
          { value: "99.9%", label: "Uptime" },
          { value: "24/7", label: "Support" }
        ]}
        primaryAction={{
          text: "Join the Community",
          href: "/community"
        }}
      />
    </div>
  )
}

export {
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroBadge,
  SimpleHero,
  FeatureHero,
  StatsHero,
  HeroExamples,
}
