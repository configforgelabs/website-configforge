import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';
import type { WrapperProps } from '@docusaurus/types';
import type NavbarType from '@theme/Navbar';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <>
      {/* Construction Notice Banner */}
      <div
        style={{
          backgroundColor: '#D03801',
          borderBottom: '2px solid #B43403',
          color: 'white',
          padding: '12px 16px',
          textAlign: 'center' as const,
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.25rem' }} role="img" aria-label="construction">🚧</span>
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                padding: '6px 12px',
                borderRadius: '9999px',
                backdropFilter: 'blur(2px)'
              }}
            >
              ConfigForge is still under construction
            </span>
            <span style={{ fontSize: '1.25rem' }} role="img" aria-label="construction">🚧</span>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <OriginalNavbar {...props} />
      <style jsx>{`
        .navbar-wrapper :global(.navbar) {
          background: oklch(var(--card)) !important;
          backdrop-filter: blur(8px);
          border-bottom: 1px solid oklch(var(--border));
          transition: all 0.3s ease;
        }
        
        .navbar-wrapper :global(.navbar__brand) {
          transition: transform 0.2s ease;
        }
        
        .navbar-wrapper :global(.navbar__brand:hover) {
          transform: scale(1.02);
        }
        
        .navbar-wrapper :global(.navbar__link) {
          position: relative;
          transition: all 0.2s ease;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-weight: 500;
        }
        
        .navbar-wrapper :global(.navbar__link:hover) {
          background: oklch(var(--accent));
          color: oklch(var(--primary));
        }
        
        .navbar-wrapper :global(.navbar__link--active) {
          background: color-mix(in oklch, oklch(var(--primary)) 12%, transparent);
          color: oklch(var(--primary));
        }
        
        .navbar-wrapper :global(.navbar__link--active::after) {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 2px;
          background: oklch(var(--primary));
          border-radius: 2px;
        }
        
        .navbar-wrapper :global(.btn.btn-primary) {
          background: oklch(var(--primary));
          color: oklch(var(--primary-foreground));
          border: none;
          border-radius: 0.75rem;
          padding: 0.5rem 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        
        .navbar-wrapper :global(.btn.btn-primary:hover) {
          background: color-mix(in oklch, oklch(var(--primary)) 90%, black);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px color-mix(in oklch, oklch(var(--primary)) 25%, transparent);
        }
        
        .navbar-wrapper :global(.DocSearch-Button) {
          background: oklch(var(--background)) !important;
          border: 1px solid oklch(var(--border)) !important;
          border-radius: 0.75rem !important;
          transition: all 0.2s ease;
        }
        
        .navbar-wrapper :global(.DocSearch-Button:hover) {
          border-color: oklch(var(--primary)) !important;
          box-shadow: 0 0 0 2px color-mix(in oklch, oklch(var(--primary)) 15%, transparent);
        }
        
        .navbar-wrapper :global(.navbar__toggle) {
          color: oklch(var(--foreground));
          border: 1px solid oklch(var(--border));
          border-radius: 0.5rem;
          padding: 0.25rem;
          transition: all 0.2s ease;
        }
        
        .navbar-wrapper :global(.navbar__toggle:hover) {
          background: oklch(var(--accent));
          border-color: oklch(var(--primary));
        }
        
        /* Dropdown enhancements */
        .navbar-wrapper :global(.dropdown__menu) {
          background: oklch(var(--card)) !important;
          border: 1px solid oklch(var(--border)) !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
          backdrop-filter: blur(8px);
        }
        
        .navbar-wrapper :global(.dropdown__link) {
          color: oklch(var(--foreground)) !important;
          border-radius: 0.5rem !important;
          margin: 0.125rem !important;
          transition: all 0.2s ease !important;
        }
        
        .navbar-wrapper :global(.dropdown__link:hover) {
          background: oklch(var(--accent)) !important;
          color: oklch(var(--primary)) !important;
        }
        
        .navbar-wrapper :global(.dropdown__link--active) {
          background: color-mix(in oklch, oklch(var(--primary)) 12%, transparent) !important;
          color: oklch(var(--primary)) !important;
        }
        
        /* Focus states for accessibility */
        .navbar-wrapper :global(.navbar__link:focus-visible),
        .navbar-wrapper :global(.btn:focus-visible),
        .navbar-wrapper :global(.DocSearch-Button:focus-visible) {
          outline: 2px solid oklch(var(--ring));
          outline-offset: 2px;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 996px) {
          .navbar-wrapper :global(.navbar-sidebar) {
            background: oklch(var(--card));
            border-right: 1px solid oklch(var(--border));
          }
          
          .navbar-wrapper :global(.navbar-sidebar__brand) {
            border-bottom: 1px solid oklch(var(--border));
          }
          
          .navbar-wrapper :global(.navbar-sidebar__items) {
            padding: 1rem;
          }
          
          .navbar-wrapper :global(.navbar-sidebar__item) {
            margin: 0.25rem 0;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .navbar-wrapper :global(*) {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
      </div>
    </>
  );
}
