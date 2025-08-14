import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { twMerge } from 'tailwind-merge';

export default function Navbar(props) {
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
      
      {/* Original Navbar */}
      <OriginalNavbar {...props} />
    </>
  );
}
