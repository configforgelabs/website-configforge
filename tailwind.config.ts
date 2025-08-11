/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./docusaurus.config.{js,ts}",
    "./src/theme/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Opsora Design System Colors using OKLCH
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'oklch(var(--success))',
          foreground: 'oklch(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'oklch(var(--warning))',
          foreground: 'oklch(var(--warning-foreground))',
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        chart: {
          1: 'oklch(var(--primary))',
          2: 'oklch(var(--destructive))',
          3: 'oklch(var(--success))',
          4: 'oklch(var(--warning))',
          5: 'oklch(var(--accent))',
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))',
        },
        // Brand Colors for backward compatibility
        brand: {
          blue: '#2563eb',
          'blue-dark': '#1d4ed8',
          'blue-light': '#3b82f6',
        },
        gray: {
          "950": "#0a0a0a",
          "900": "#171717",
          "800": "#262626",
          "700": "#404040",
          "600": "#525252",
          "500": "#737373",
          "400": "#a3a3a3",
          "300": "#d4d4d4",
          "200": "#e5e5e5",
          "100": "#f5f5f5",
          "50": "#fafafa",
        },
        red: {
          "900": "#7f1d1d",
          "800": "#991b1b",
          "700": "#b91c1c",
          "600": "#dc2626",
          "500": "#ef4444",
          "400": "#f87171",
          "300": "#fca5a5",
          "200": "#fecaca",
          "100": "#fee2e2",
          "50": "#fef2f2",
        },
        green: {
          "900": "#14532d",
          "800": "#166534",
          "700": "#15803d",
          "600": "#16a34a",
          "500": "#22c55e",
          "400": "#4ade80",
          "300": "#86efac",
          "200": "#bbf7d0",
          "100": "#dcfce7",
          "50": "#f0fdf4",
        },
        blue: {
          "950": "#172554",
          "900": "#1e3a8a",
          "800": "#1e40af",
          "700": "#1d4ed8",
          "600": "#2563eb",
          "500": "#3b82f6",
          "400": "#60a5fa",
          "300": "#93c5fd",
          "200": "#bfdbfe",
          "100": "#dbeafe",
          "50": "#eff6ff",
        },
        yellow: {
          "900": "#78350f",
          "800": "#92400e",
          "700": "#b45309",
          "600": "#d97706",
          "500": "#f59e0b",
          "400": "#fbbf24",
          "300": "#fcd34d",
          "200": "#fde68a",
          "100": "#fef3c7",
          "50": "#fffbeb",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          '"Fira Code"',
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'glow': '0 0 20px rgb(37 99 235 / 0.15)',
        'glow-lg': '0 0 40px rgb(37 99 235 / 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, oklch(var(--primary)) 0%, color-mix(in oklch, oklch(var(--primary)) 80%, transparent) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, oklch(var(--secondary)) 0%, oklch(var(--muted)) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'oklch(var(--foreground))',
            '--tw-prose-body': 'oklch(var(--foreground))',
            '--tw-prose-headings': 'oklch(var(--foreground))',
            '--tw-prose-lead': 'oklch(var(--muted-foreground))',
            '--tw-prose-links': 'oklch(var(--primary))',
            '--tw-prose-bold': 'oklch(var(--foreground))',
            '--tw-prose-counters': 'oklch(var(--muted-foreground))',
            '--tw-prose-bullets': 'oklch(var(--muted-foreground))',
            '--tw-prose-hr': 'oklch(var(--border))',
            '--tw-prose-quotes': 'oklch(var(--foreground))',
            '--tw-prose-quote-borders': 'oklch(var(--border))',
            '--tw-prose-captions': 'oklch(var(--muted-foreground))',
            '--tw-prose-code': 'oklch(var(--foreground))',
            '--tw-prose-pre-code': 'oklch(var(--muted-foreground))',
            '--tw-prose-pre-bg': 'oklch(var(--muted))',
            '--tw-prose-th-borders': 'oklch(var(--border))',
            '--tw-prose-td-borders': 'oklch(var(--border))',
          },
        },
      },
    },
    fontWeight: {
      thin: "100",
      "extra-light": "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.215rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Enhanced design system utilities plugin
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        '.gradient-text': {
          'background': `linear-gradient(135deg, oklch(var(--primary)), color-mix(in oklch, oklch(var(--primary)) 80%, oklch(var(--accent))))`,
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        '.shadow-glow': {
          'box-shadow': '0 0 20px color-mix(in oklch, oklch(var(--primary)) 15%, transparent)',
        },
      })

      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none': {},
        },
        '.btn-sm': {
          '@apply h-8 px-3 text-xs': {},
        },
        '.btn-md': {
          '@apply h-10 px-4': {},
        },
        '.btn-lg': {
          '@apply h-11 px-8': {},
        },
        '.btn-primary': {
          'background': 'oklch(var(--primary))',
          'color': 'oklch(var(--primary-foreground))',
          '&:hover': {
            'background': 'color-mix(in oklch, oklch(var(--primary)) 90%, black)',
          },
        },
        '.btn-secondary': {
          'background': 'oklch(var(--secondary))',
          'color': 'oklch(var(--secondary-foreground))',
          '&:hover': {
            'background': 'color-mix(in oklch, oklch(var(--secondary)) 80%, black)',
          },
        },
        '.btn-outline': {
          'border': '1px solid oklch(var(--border))',
          'background': 'transparent',
          'color': 'oklch(var(--foreground))',
          '&:hover': {
            'background': 'oklch(var(--accent))',
            'color': 'oklch(var(--accent-foreground))',
          },
        },
        '.btn-ghost': {
          'background': 'transparent',
          'color': 'oklch(var(--foreground))',
          '&:hover': {
            'background': 'oklch(var(--accent))',
            'color': 'oklch(var(--accent-foreground))',
          },
        },
        '.card': {
          '@apply rounded-2xl border shadow-sm': {},
          'background': 'oklch(var(--card))',
          'color': 'oklch(var(--card-foreground))',
          'border-color': 'oklch(var(--border))',
        },
        '.card-hover': {
          '@apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1': {},
        },
        '.input': {
          '@apply flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50': {},
        },
        '.badge': {
          '@apply inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium': {},
        },
        '.badge-primary': {
          'background': 'color-mix(in oklch, oklch(var(--primary)) 12%, transparent)',
          'color': 'oklch(var(--primary))',
        },
        '.badge-secondary': {
          'background': 'oklch(var(--muted))',
          'color': 'oklch(var(--muted-foreground))',
        },
        '.badge-success': {
          'background': 'color-mix(in oklch, oklch(var(--success)) 12%, transparent)',
          'color': 'oklch(var(--success))',
        },
        '.badge-warning': {
          'background': 'color-mix(in oklch, oklch(var(--warning)) 12%, transparent)',
          'color': 'oklch(var(--warning))',
        },
        '.badge-destructive': {
          'background': 'color-mix(in oklch, oklch(var(--destructive)) 12%, transparent)',
          'color': 'oklch(var(--destructive))',
        },
      })
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
