import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';

const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-default">
        <div className="text-center mb-12">
          <h2 className="hero-title mb-4">
            <span className="gradient-text">Opsora Design System</span>
          </h2>
          <p className="hero-subtitle">
            Experience the unified light and dark theme with enhanced accessibility
          </p>
          <div className="flex justify-center mt-6">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Button Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Button Components</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-outline">Outline Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary btn-md">Medium</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>

        {/* Card Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Card Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="text-lg font-semibold mb-2">Basic Card</h4>
              <p className="text-muted-foreground">
                This is a basic card component with our design system styling.
              </p>
            </div>
            <div className="card card-hover">
              <h4 className="text-lg font-semibold mb-2">Hover Card</h4>
              <p className="text-muted-foreground">
                This card has hover effects that lift it up smoothly.
              </p>
            </div>
            <div className="card">
              <div className="w-full h-32 bg-gradient-primary rounded-lg mb-4"></div>
              <h4 className="text-lg font-semibold mb-2">Card with Visual</h4>
              <p className="text-muted-foreground">
                Cards can include visual elements and gradients.
              </p>
            </div>
          </div>
        </div>

        {/* Badge Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Badge Components</h3>
          <div className="flex flex-wrap gap-3">
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-secondary">Secondary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-destructive">Error</span>
          </div>
        </div>

        {/* Form Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Form Components</h3>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="input" 
                placeholder="Enter your email"
                aria-label="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="input min-h-[100px] resize-y" 
                placeholder="Your message"
                aria-label="Message"
              />
            </div>
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </div>

        {/* Typography Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Typography</h3>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <h4 className="text-xl font-semibold">Heading 4</h4>
            <p className="text-base">
              This is body text with proper line height and spacing. It demonstrates
              the readability of our typography system across different themes.
            </p>
            <p className="text-sm text-muted-foreground">
              This is secondary text that provides additional context with reduced emphasis.
            </p>
            <code className="text-sm bg-muted px-2 py-1 rounded">Code snippet</code>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Accessibility Features</h3>
          <div className="space-y-4">
            <div className="card">
              <h4 className="text-lg font-semibold mb-2">Focus Management</h4>
              <p className="text-muted-foreground mb-4">
                All interactive elements have visible focus indicators that meet WCAG guidelines.
              </p>
              <div className="flex gap-3">
                <button className="btn btn-outline">Tab to me</button>
                <button className="btn btn-outline">Then to me</button>
                <button className="btn btn-outline">Finally me</button>
              </div>
            </div>
            
            <div className="card">
              <h4 className="text-lg font-semibold mb-2">High Contrast Support</h4>
              <p className="text-muted-foreground mb-4">
                The design system automatically adapts for users who prefer high contrast.
              </p>
              <p className="text-sm text-muted-foreground">
                Try enabling high contrast mode in your system preferences to see the changes.
              </p>
            </div>
            
            <div className="card">
              <h4 className="text-lg font-semibold mb-2">Reduced Motion</h4>
              <p className="text-muted-foreground mb-4">
                Animations are automatically disabled for users who prefer reduced motion.
              </p>
              <p className="text-sm text-muted-foreground">
                Enable "Reduce motion" in your system preferences to test this feature.
              </p>
            </div>
          </div>
        </div>

        {/* Color System Preview */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Color System (OKLCH)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <div className="w-full h-16 bg-primary rounded-lg mb-3"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="card text-center">
              <div className="w-full h-16 bg-secondary rounded-lg mb-3"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="card text-center">
              <div className="w-full h-16 bg-success rounded-lg mb-3"></div>
              <p className="text-sm font-medium">Success</p>
            </div>
            <div className="card text-center">
              <div className="w-full h-16 bg-warning rounded-lg mb-3"></div>
              <p className="text-sm font-medium">Warning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
