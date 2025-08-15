import React from 'react';
import Head from '@docusaurus/Head';

export default function UnderConstruction(): JSX.Element {
  return (
    <>
      <Head>
        <title>Under Construction - ConfigForge</title>
        <meta name="description" content="ConfigForge is currently under construction. We're working hard to bring you the best content." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '600px',
            width: '100%'
          }}
        >
          <div
            style={{
              fontSize: '4rem',
              marginBottom: '2rem',
              animation: 'bounce 2s infinite'
            }}
            role="img"
            aria-label="construction"
          >
            🚧
          </div>
          
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            ConfigForge is Under Construction
          </h1>
          
          <p
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: '0.9'
            }}
          >
            We're working hard to bring you the best guides, tools, and resources for Microsoft 365 and Azure. 
            Check back soon for exciting updates!
          </p>
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              marginTop: '3rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                opacity: '0.8'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
              <span>Fast Loading</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                opacity: '0.8'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>📚</span>
              <span>Rich Content</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                opacity: '0.8'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🔧</span>
              <span>Practical Tools</span>
            </div>
          </div>
          
          <div
            style={{
              marginTop: '3rem',
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>
              For immediate assistance, visit{' '}
              <a
                href="https://opsora.io"
                style={{
                  color: 'white',
                  textDecoration: 'underline',
                  fontWeight: '600'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Opsora.io
              </a>
            </p>
          </div>
        </div>
        
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          
          @media (max-width: 768px) {
            body {
              overflow-x: hidden;
            }
          }
        `}</style>
      </div>
    </>
  );
}
