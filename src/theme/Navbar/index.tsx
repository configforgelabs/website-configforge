import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { twMerge } from 'tailwind-merge';

export default function Navbar(props) {
  return (
    <>
      {/* Construction Notice Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #D03801 0%, #B43403 100%)',
          borderBottom: '3px solid #992E02',
          color: 'white',
          padding: '16px 20px',
          textAlign: 'center' as const,
          boxShadow: '0 4px 20px rgba(208, 56, 1, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
          position: 'relative' as const,
          overflow: 'hidden' as const
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          style={{
            position: 'absolute' as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none' as const
          }}
        />

        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative' as const, zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap' as const
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'pulse 2s infinite'
            }}>
              <span
                style={{
                  fontSize: '1.5rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                }}
                role="img"
                aria-label="construction"
              >
                🚧
              </span>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  padding: '12px 24px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    letterSpacing: '0.025em',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  ⚠️ ConfigForge is still under construction
                </span>
              </div>

              <span
                style={{
                  fontSize: '1.5rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                }}
                role="img"
                aria-label="construction"
              >
                🚧
              </span>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }
          `}
        </style>
      </div>
      
      {/* Original Navbar */}
      <OriginalNavbar {...props} />
    </>
  );
}
