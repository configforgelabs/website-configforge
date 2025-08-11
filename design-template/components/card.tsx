import * as React from "react"

// Utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Card Component
function Card({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "card",
        className
      )}
      {...props}
    />
  )
}

// Card Header Component
function CardHeader({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        className
      )}
      {...props}
    />
  )
}

// Card Title Component
function CardTitle({ 
  className, 
  ...props 
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

// Card Description Component
function CardDescription({ 
  className, 
  ...props 
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

// Card Content Component
function CardContent({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div 
      className={cn("p-6 pt-0", className)} 
      {...props} 
    />
  )
}

// Card Footer Component
function CardFooter({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    />
  )
}

// Feature Card Component
interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  className?: string
  featured?: boolean
}

function FeatureCard({
  title,
  description,
  icon,
  href,
  className,
  featured = false,
}: FeatureCardProps) {
  const CardWrapper = href ? "a" : "div"
  
  return (
    <CardWrapper
      href={href}
      className={cn(
        "card card-hover",
        featured && "card-featured",
        href && "cursor-pointer group",
        className
      )}
    >
      <CardHeader>
        {icon && (
          <div className={cn(
            "icon-container mb-4",
            featured ? "icon-container-primary" : "icon-container-secondary"
          )}>
            {icon}
          </div>
        )}
        <CardTitle className={cn(
          "text-lg",
          href && "group-hover:text-primary transition-colors"
        )}>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
    </CardWrapper>
  )
}

// Product Card Component
interface ProductCardProps {
  title: string
  description: string
  price?: string
  image?: string
  badge?: string
  href?: string
  className?: string
  onAction?: () => void
  actionText?: string
}

function ProductCard({
  title,
  description,
  price,
  image,
  badge,
  href,
  className,
  onAction,
  actionText = "Learn More",
}: ProductCardProps) {
  return (
    <Card className={cn("card-hover overflow-hidden", className)}>
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {badge && (
              <span className="badge-primary text-xs px-2 py-1 rounded-full mb-2 inline-block">
                {badge}
              </span>
            )}
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
            <CardDescription className="mb-4">
              {description}
            </CardDescription>
          </div>
          {price && (
            <div className="text-2xl font-bold text-primary ml-4">
              {price}
            </div>
          )}
        </div>
      </CardHeader>
      <CardFooter>
        {href ? (
          <a
            href={href}
            className="btn btn-primary w-full"
          >
            {actionText}
          </a>
        ) : onAction ? (
          <button
            onClick={onAction}
            className="btn btn-primary w-full"
          >
            {actionText}
          </button>
        ) : null}
      </CardFooter>
    </Card>
  )
}

// Stats Card Component
interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

function StatsCard({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600 dark:text-green-400"
      case "down":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        )
      case "down":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardDescription className="text-sm font-medium">
            {title}
          </CardDescription>
          {icon && (
            <div className="icon-container-secondary">
              {icon}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          {(description || trendValue) && (
            <div className="flex items-center space-x-2 text-sm">
              {trendValue && (
                <div className={cn("flex items-center space-x-1", getTrendColor())}>
                  {getTrendIcon()}
                  <span>{trendValue}</span>
                </div>
              )}
              {description && (
                <span className="text-muted-foreground">
                  {description}
                </span>
              )}
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  className?: string
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <CardDescription className="text-base italic mb-4">
          "{quote}"
        </CardDescription>
        <div className="flex items-center space-x-3">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-foreground">{author}</div>
            {(role || company) && (
              <div className="text-sm text-muted-foreground">
                {role}{role && company && " at "}{company}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

// Example Usage Component
function CardExamples() {
  return (
    <div className="space-y-8">
      <div className="grid-responsive">
        <FeatureCard
          title="Analytics Dashboard"
          description="Get insights into your application performance with real-time analytics."
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          href="/analytics"
          featured
        />
        
        <ProductCard
          title="Pro Plan"
          description="Everything you need to scale your business to the next level."
          price="$29/mo"
          badge="Most Popular"
          href="/pricing"
        />
        
        <StatsCard
          title="Total Revenue"
          value="$45,231"
          description="from last month"
          trend="up"
          trendValue="+12.5%"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
        />
      </div>
      
      <TestimonialCard
        quote="This design system has completely transformed how we build our products. The consistency and quality are outstanding."
        author="Sarah Johnson"
        role="Lead Designer"
        company="TechCorp"
        className="max-w-2xl mx-auto"
      />
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  FeatureCard,
  ProductCard,
  StatsCard,
  TestimonialCard,
  CardExamples,
}
