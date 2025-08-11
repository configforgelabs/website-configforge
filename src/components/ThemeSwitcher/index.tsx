import React, { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { colorMode, setColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync with document class for our design system
  useEffect(() => {
    const root = document.documentElement;
    
    // Update both data-theme (Docusaurus) and class (our design system)
    if (colorMode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [colorMode]);

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null; // Prevent flash during hydration
  }

  return (
    <button
      onClick={toggleTheme}
      className={`btn btn-ghost transition-all duration-200 hover:scale-105 ${className}`}
      aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon for light mode */}
        <svg
          className={`absolute inset-0 transform transition-all duration-300 ${
            colorMode === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon icon for dark mode */}
        <svg
          className={`absolute inset-0 transform transition-all duration-300 ${
            colorMode === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      
      {/* Optional text label */}
      <span className="ml-2 text-sm font-medium">
        {colorMode === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
