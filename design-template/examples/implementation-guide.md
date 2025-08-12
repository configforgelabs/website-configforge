# Implementation Guide

This guide shows you how to implement the Opsora design system in different frameworks and use cases.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Next.js Implementation](#nextjs-implementation)
3. [React Implementation](#react-implementation)
4. [HTML/CSS Implementation](#htmlcss-implementation)
5. [Component Examples](#component-examples)
6. [Theme Customization](#theme-customization)
7. [Dark Mode Setup](#dark-mode-setup)

## Getting Started

### Prerequisites

- Node.js 16+ 
- Package manager (npm, yarn, or pnpm)
- Basic knowledge of CSS and JavaScript

### Installation

```bash
# Install required dependencies
npm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-slot class-variance-authority
npm install lucide-react next-themes

# If using Next.js
npx create-next-app@latest my-app --typescript --tailwind --eslint

# If using Vite
npm create vite@latest my-app -- --template react-ts
```

## Next.js Implementation

### 1. Setup Tailwind CSS

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... other colors from design-system.css
      },
    },
  },
  plugins: [],
}
```

### 2. Setup Global CSS

```css
/* app/globals.css */
@import '../design-template/design-system.css';

/* Additional app-specific styles */
```

### 3. Setup Root Layout

```tsx
// app/layout.tsx
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 4. Create Your First Page

```tsx
// app/page.tsx
import { Navigation } from '@/components/navigation'
import { SimpleHero } from '@/components/hero'
import { Button } from '@/components/button'

export default function HomePage() {
  return (
    <main>
      <Navigation
        brandName="MyApp"
        navigation={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      
      <SimpleHero
        badge="Welcome"
        title="Build Amazing Products"
        subtitle="Get started with our design system and create beautiful interfaces."
        primaryAction={{
          text: "Get Started",
          href: "/get-started"
        }}
        secondaryAction={{
          text: "View Docs",
          href: "/docs"
        }}
      />
    </main>
  )
}
```

## React Implementation

### 1. Setup with Vite

```bash
# Create new Vite project
npm create vite@latest my-app -- --template react-ts
cd my-app

# Install dependencies
npm install
npm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-slot class-variance-authority
npm install lucide-react
```

### 2. Configure Tailwind

```bash
# Initialize Tailwind
npx tailwindcss init -p
```

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Copy colors and theme from design-system.css
    },
  },
  plugins: [],
}
```

### 3. Setup Main CSS

```css
/* src/index.css */
@import '../design-template/design-system.css';
```

### 4. Create App Component

```tsx
// src/App.tsx
import { useState } from 'react'
import { Navigation } from './components/navigation'
import { SimpleHero } from './components/hero'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        brandName="MyApp"
        navigation={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Pricing", href: "/pricing" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      
      <SimpleHero
        badge="New Release"
        title="Welcome to Our Platform"
        subtitle="Build amazing applications with our comprehensive design system."
        primaryAction={{
          text: "Start Building",
          onClick: () => console.log('Get started clicked')
        }}
      />
    </div>
  )
}

export default App
```

## HTML/CSS Implementation

### 1. Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="design-system.css">
</head>
<body class="bg-background text-foreground">
    <!-- Navigation -->
    <nav class="nav-sticky">
        <div class="container-default">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span class="text-primary-foreground font-bold text-sm">M</span>
                    </div>
                    <span class="font-bold text-xl">MyApp</span>
                </div>
                
                <div class="hidden md:flex space-x-1">
                    <a href="/" class="nav-link nav-link-active">Home</a>
                    <a href="/about" class="nav-link nav-link-inactive">About</a>
                    <a href="/contact" class="nav-link nav-link-inactive">Contact</a>
                </div>
                
                <button id="theme-toggle" class="btn btn-ghost">
                    🌙
                </button>
            </div>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section class="hero-gradient section-padding">
        <div class="container-default text-center">
            <span class="badge-primary inline-block mb-4">Welcome</span>
            <h1 class="hero-title">Build Amazing Products</h1>
            <p class="hero-subtitle">Get started with our design system.</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button class="btn btn-primary">Get Started</button>
                <button class="btn btn-outline">Learn More</button>
            </div>
        </div>
    </section>
    
    <script>
        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            html.classList.add('dark');
            themeToggle.textContent = '☀️';
        }
    </script>
</body>
</html>
```

## Component Examples

### Card with Content

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/card'

function ProductCard({ product }) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary mb-4">
          ${product.price}
        </div>
        <Button className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Feature Section

```jsx
function FeaturesSection() {
  const features = [
    {
      title: "Fast Performance",
      description: "Lightning-fast load times and smooth interactions.",
      icon: "⚡"
    },
    {
      title: "Responsive Design", 
      description: "Works perfectly on all devices and screen sizes.",
      icon: "📱"
    },
    {
      title: "Dark Mode",
      description: "Built-in dark mode support for better user experience.",
      icon: "🌙"
    }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern applications.
          </p>
        </div>
        
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<span className="text-2xl">{feature.icon}</span>}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Theme Customization

### Custom Colors

```css
/* Add to your CSS file */
:root {
  --brand-purple: #8b5cf6;
  --brand-green: #10b981;
}

.dark {
  --brand-purple: #a78bfa;
  --brand-green: #34d399;
}
```

```javascript
// Add to tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: 'var(--brand-purple)',
          green: 'var(--brand-green)',
        }
      }
    }
  }
}
```

### Custom Components

```css
/* Custom button variant */
.btn-purple {
  @apply bg-brand-purple text-white hover:bg-brand-purple/90;
}

/* Custom card style */
.card-highlighted {
  @apply border-2 border-brand-purple shadow-glow;
}
```

## Dark Mode Setup

### Automatic Theme Detection

```jsx
// Theme provider with system detection
import { useEffect, useState } from 'react'

function useTheme() {
  const [theme, setTheme] = useState('system')
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])
  
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.add(prefersDark ? 'dark' : 'light')
    } else {
      root.classList.add(theme)
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])
  
  return { theme, setTheme }
}
```

### Manual Theme Toggle

```jsx
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  )
}
```

## Best Practices

### 1. Consistent Spacing

```jsx
// Good: Use design system spacing
<div className="p-6 mb-8 space-y-4">

// Avoid: Arbitrary spacing
<div style={{ padding: '25px', marginBottom: '35px' }}>
```

### 2. Semantic Color Usage

```jsx
// Good: Use semantic colors
<Button variant="destructive">Delete</Button>
<Badge className="badge-success">Active</Badge>

// Avoid: Direct color values
<Button className="bg-red-500">Delete</Button>
```

### 3. Responsive Design

```jsx
// Good: Mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Good: Responsive text
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

### 4. Accessibility

```jsx
// Good: Proper ARIA labels
<Button aria-label="Close dialog">×</Button>

// Good: Focus management
<input className="focus-visible:ring-2 focus-visible:ring-primary" />
```

## Troubleshooting

### Common Issues

1. **Styles not applying**: Make sure you've imported the design system CSS
2. **Dark mode not working**: Check that `darkMode: 'class'` is set in Tailwind config
3. **Components not found**: Verify component imports and file paths
4. **TypeScript errors**: Install `@types/react` and ensure proper typing

### Performance Tips

1. **Tree shaking**: Import only the components you need
2. **CSS optimization**: Use Tailwind's purge feature
3. **Bundle analysis**: Check for duplicate dependencies
4. **Image optimization**: Use next/image or similar optimizations

This implementation guide should get you started with the Opsora design system. For more specific examples and advanced usage, refer to the component documentation and examples folder.
