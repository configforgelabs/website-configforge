# Opsora Design System Template

Complete design template package based on Opsora's website design for light and dark mode implementation.

## Package Contents

### 📁 Core Files
- `design-system.css` - Complete CSS design system with variables
- `tailwind.config.js` - Tailwind configuration
- `components/` - React component templates
- `examples/` - Implementation examples
- `assets/` - Design tokens and resources

### 🎨 Design Features
- **Light & Dark Mode** - Automatic theme switching
- **Responsive Design** - Mobile-first approach
- **Professional Aesthetics** - Blue primary with neutral grays
- **Modern Typography** - Clean, readable font hierarchy
- **Consistent Spacing** - 8px grid system
- **Accessible Design** - WCAG 2.1 AA compliant

## Quick Start

### 1. Install Dependencies
```bash
npm install tailwindcss @radix-ui/react-slot class-variance-authority
npm install lucide-react next-themes
```

### 2. Copy Core Files
```bash
# Copy the design system CSS
cp design-system.css ./src/styles/
cp tailwind.config.js ./
cp -r components/ ./src/components/
```

### 3. Import Design System
```jsx
// In your main CSS file or layout
@import './styles/design-system.css';
```

### 4. Setup Theme Provider
```jsx
// Add to your root layout
import { ThemeProvider } from './components/theme-provider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Design Principles

### Color Philosophy
- **Primary Blue (#2563eb)** - Trust, professionalism, technology
- **Neutral Grays** - Clean, minimalist, timeless
- **High Contrast** - Accessibility and readability
- **Semantic Colors** - Clear success, warning, error states

### Typography Scale
- **Heading 1**: 48px (3rem) - Hero titles
- **Heading 2**: 36px (2.25rem) - Section headers
- **Heading 3**: 24px (1.5rem) - Subsections
- **Body**: 16px (1rem) - Default text
- **Small**: 14px (0.875rem) - Supporting text

### Spacing System
- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- **Consistent Margins**: 20px page padding, 16px component gaps

## Usage Examples

### Navigation Bar
```jsx
<nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">YB</span>
        </div>
        <span className="font-bold text-xl text-gray-900 dark:text-white">YourBrand</span>
      </div>
      <div className="hidden lg:flex space-x-1">
        <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">Home</a>
        <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section
```jsx
<section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
    Your Hero Title
  </h1>
</section>
```

### Cards
```jsx
<Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
</Card>
```

## Customization Guide

### Changing Primary Color
1. Update CSS variables in `design-system.css`
2. Modify Tailwind config primary colors
3. Update component variants

### Adding Brand Colors
```css
:root {
  --brand-color: your-color;
}
.dark {
  --brand-color: your-dark-color;
}
```

### Custom Components
Use the provided component templates as starting points and follow the established patterns for consistency.

## Support & Documentation

- **Design Tokens**: See `assets/design-tokens.json`
- **Component API**: Each component includes TypeScript interfaces
- **Examples**: Check `examples/` folder for implementation patterns
- **Accessibility**: All components follow ARIA guidelines

## License
This design system template is provided as-is for implementation reference.
