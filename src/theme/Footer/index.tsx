import React from 'react';

// Mail Icon
const MailIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

// GitHub Icon
const GitHubIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// User Icon
const UserIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

// Heart Icon
const HeartIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
        }
        .footer-divider {
          border: 0;
          border-top: 1px solid;
          margin: 2rem 0 1rem;
          opacity: 0.2;
        }
        .status-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.75rem;
        }
        .status-pill {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .dot-blue { background-color: #3b82f6; }
        .dot-green { background-color: #10b981; }
        .dot-purple { background-color: #8b5cf6; }
        
        /* Disable default Docusaurus underline behavior */
        .footer a {
          text-decoration: none !important;
        }
        .footer a:hover {
          text-decoration: none !important;
        }
        
        /* Dark theme colors */
        [data-theme='dark'] .footer {
          background-color: #111827 !important;
          color: #d1d5db !important;
        }
        [data-theme='dark'] .footer .brand-name {
          color: #ffffff !important;
        }
        [data-theme='dark'] .footer .strapline {
          color: #9ca3af !important;
        }
        [data-theme='dark'] .footer .section-heading {
          color: #ffffff !important;
        }
        [data-theme='dark'] .footer .body-text {
          color: #d1d5db !important;
        }
        [data-theme='dark'] .footer .regular-link {
          color: #d1d5db !important;
        }
        [data-theme='dark'] .footer .regular-link:hover {
          color: #93c5fd !important;
        }
        [data-theme='dark'] .footer .meta-text {
          color: #9ca3af !important;
        }
        [data-theme='dark'] .footer .blue-link {
          color: #60a5fa !important;
        }
        [data-theme='dark'] .footer .blue-link:hover {
          color: #93c5fd !important;
        }
        [data-theme='dark'] .footer .footer-divider {
          border-color: #4b5563 !important;
        }
        [data-theme='dark'] .footer .icon {
          color: #9ca3af !important;
        }
        
        /* Light theme colors */
        [data-theme='light'] .footer {
          background-color: #f3f4f6 !important;
          color: #4b5563 !important;
        }
        [data-theme='light'] .footer .brand-name {
          color: #111827 !important;
        }
        [data-theme='light'] .footer .strapline {
          color: #6b7280 !important;
        }
        [data-theme='light'] .footer .section-heading {
          color: #111827 !important;
        }
        [data-theme='light'] .footer .body-text {
          color: #4b5563 !important;
        }
        [data-theme='light'] .footer .regular-link {
          color: #4b5563 !important;
        }
        [data-theme='light'] .footer .regular-link:hover {
          color: #1d4ed8 !important;
        }
        [data-theme='light'] .footer .meta-text {
          color: #6b7280 !important;
        }
        [data-theme='light'] .footer .blue-link {
          color: #2563eb !important;
        }
        [data-theme='light'] .footer .blue-link:hover {
          color: #1d4ed8 !important;
        }
        [data-theme='light'] .footer .footer-divider {
          border-color: #d1d5db !important;
        }
        [data-theme='light'] .footer .icon {
          color: #6b7280 !important;
        }
      `}</style>
      
      <footer className="footer bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="footer-grid">
            
            {/* Brand & Contact Column */}
            <section aria-labelledby="brand-heading">
              <div className="mb-6">
                <h2 id="brand-heading" className="text-xl font-bold brand-name mb-2">
                  ConfigForge
                </h2>
                <p className="text-sm strapline mb-4">
                  Guides & tools for Microsoft 365 & Azure
                </p>
                <p className="text-sm body-text leading-relaxed mb-6 max-w-xs">
                  I publish practical guides, templates, and small tools from real projects. If you need hands-on help, you can{' '}
                  <a 
                    href="https://opsora.io/contact?utm_source=configforge&utm_medium=footer&utm_campaign=book"
                    className="blue-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    book me via Opsora
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold section-heading mb-3">Contact</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <MailIcon className="icon" />
                    <a 
                      href="mailto:tobias@opsora.io"
                      className="text-sm regular-link"
                    >
                      tobias@opsora.io
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <GitHubIcon className="icon" />
                    <a 
                      href="https://github.com/configforge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm regular-link"
                    >
                      GitHub (ConfigForge)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <LinkedInIcon className="icon" />
                    <a 
                      href="https://www.linkedin.com/in/tobias-schuele/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm regular-link"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>

                <div className="space-y-1 text-xs meta-text">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-3 h-3" />
                    <span>Maintained by Tobias Schüle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-3 h-3" />
                    <span>Knowledge & tools — no sales pitches</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation Column */}
            <nav aria-labelledby="nav-heading">
              <h3 id="nav-heading" className="text-sm font-semibold section-heading mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-sm regular-link">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/tools" className="text-sm regular-link">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm regular-link">
                    About
                  </a>
                </li>
              </ul>
            </nav>

            {/* Topics & Tools Column */}
            <section aria-labelledby="topics-heading">
              <h3 id="topics-heading" className="text-sm font-semibold section-heading mb-3">Popular topics</h3>
              <ul className="space-y-2 mb-4">
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Identity & Security (Entra ID / CA)
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Endpoint with Intune (Autopilot, compliance)
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Azure Landing Zones (RBAC, policy)
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Tenant-to-Tenant & M365 migrations
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    Documentation patterns (Docusaurus, runbooks)
                  </a>
                </li>
              </ul>
              <p>
                <a 
                  href="/tools"
                  className="text-sm font-medium blue-link"
                >
                  → See my tools
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider border-gray-600" />

        {/* Legal / Status Bar */}
        <div className="max-w-7xl mx-auto px-6 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 meta-text text-xs">
              <span>
                © 2025 ConfigForge · by{' '}
                <a 
                  href="https://opsora.io/contact?utm_source=configforge&utm_medium=footer&utm_campaign=book"
                  className="blue-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opsora
                </a>{' '}
                — All rights reserved.
              </span>
              <div className="flex gap-4">
                <a href="/privacy" className="regular-link">
                  Privacy
                </a>
                <span>·</span>
                <a href="/imprint" className="regular-link">
                  Imprint
                </a>
              </div>
            </div>
            
            <ul className="status-pills meta-text">
              <li className="status-pill">
                <span className="status-dot dot-blue" aria-hidden="true"></span>
                Knowledge-first
              </li>
              <li className="status-pill">
                <span className="status-dot dot-green" aria-hidden="true"></span>
                Tools I built
              </li>
              <li className="status-pill">
                <span className="status-dot dot-purple" aria-hidden="true"></span>
                Open-source friendly
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
