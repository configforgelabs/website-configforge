import React from 'react';
import Translate from '@docusaurus/Translate';

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

// Globe Icon
const GlobeIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

// Clock Icon
const ClockIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
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
        .dot-blue { background-color: #60a5fa; }
        .dot-green { background-color: #34d399; }
        .dot-purple { background-color: #a78bfa; }
        
        /* Disable default Docusaurus underline behavior */
        .footer a {
          text-decoration: none !important;
        }
        .footer a:hover {
          text-decoration: none !important;
        }
        
        /* Icon colors */
        .footer .contact-icon {
          color: #60a5fa;
          flex-shrink: 0;
        }
        .footer .info-icon {
          color: #9ca3af;
          flex-shrink: 0;
        }

        /* Dark theme colors - matching opsora.io */
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
          font-weight: 600 !important;
        }
        [data-theme='dark'] .footer .body-text {
          color: #d1d5db !important;
        }
        [data-theme='dark'] .footer .regular-link {
          color: #d1d5db !important;
          transition: color 0.2s ease !important;
        }
        [data-theme='dark'] .footer .regular-link:hover {
          color: #60a5fa !important;
        }
        [data-theme='dark'] .footer .meta-text {
          color: #9ca3af !important;
        }
        [data-theme='dark'] .footer .blue-link {
          color: #60a5fa !important;
          transition: color 0.2s ease !important;
        }
        [data-theme='dark'] .footer .blue-link:hover {
          color: #93c5fd !important;
        }
        [data-theme='dark'] .footer .footer-divider {
          border-color: #374151 !important;
        }
        [data-theme='dark'] .footer .icon {
          color: #60a5fa !important;
        }

        /* Light theme colors - matching opsora.io light style */
        [data-theme='light'] .footer {
          background-color: #1f2937 !important;
          color: #d1d5db !important;
        }
        [data-theme='light'] .footer .brand-name {
          color: #ffffff !important;
        }
        [data-theme='light'] .footer .strapline {
          color: #9ca3af !important;
        }
        [data-theme='light'] .footer .section-heading {
          color: #ffffff !important;
          font-weight: 600 !important;
        }
        [data-theme='light'] .footer .body-text {
          color: #d1d5db !important;
        }
        [data-theme='light'] .footer .regular-link {
          color: #d1d5db !important;
          transition: color 0.2s ease !important;
        }
        [data-theme='light'] .footer .regular-link:hover {
          color: #60a5fa !important;
        }
        [data-theme='light'] .footer .meta-text {
          color: #9ca3af !important;
        }
        [data-theme='light'] .footer .blue-link {
          color: #60a5fa !important;
          transition: color 0.2s ease !important;
        }
        [data-theme='light'] .footer .blue-link:hover {
          color: #93c5fd !important;
        }
        [data-theme='light'] .footer .footer-divider {
          border-color: #374151 !important;
        }
        [data-theme='light'] .footer .icon {
          color: #60a5fa !important;
        }
      `}</style>

      <footer className="footer bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="footer-grid">

            {/* Brand & Contact Column - spans 2 columns on large screens */}
            <section aria-labelledby="brand-heading">
              <div className="mb-6">
                <div className="mb-4">
                  <img
                    src="/img/branding/logo-footer.png"
                    alt="ConfigForge by Opsora"
                    style={{
                      height: '60px',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <p className="text-sm body-text leading-relaxed mb-6 max-w-md">
                  <Translate id="footer.brand.desc">Practical guides, templates, and small tools from real projects. For hands-on help, you can</Translate>{' '}
                  <a
                    href="https://opsora.io/contact?utm_source=configforge&utm_medium=footer&utm_campaign=book"
                    className="blue-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Translate id="footer.brand.cta">book me via Opsora</Translate>
                  </a>.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold section-heading mb-3">
                    <Translate id="footer.contact.title">Contact Tobias Schüle</Translate>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <MailIcon className="contact-icon" />
                      <a
                        href="mailto:tobias@opsora.io"
                        className="text-sm regular-link"
                      >
                        tobias@opsora.io
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <LinkedInIcon className="contact-icon" />
                      <a 
                        href="https://www.linkedin.com/in/tobias-schuele/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm regular-link"
                      >
                        <Translate id="footer.links.linkedin">Connect on LinkedIn</Translate>
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <GitHubIcon className="contact-icon" />
                      <a 
                        href="https://github.com/configforge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm regular-link"
                      >
                        ConfigForge
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Business Info */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-3 text-sm meta-text mb-2">
                    <GlobeIcon className="info-icon" />
                    <span><Translate id="footer.meta.global">Serving clients globally</Translate></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm meta-text">
                    <ClockIcon className="info-icon" />
                    <span><Translate id="footer.meta.response">Typically responds within 24 hours</Translate></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation Column */}
            <nav aria-labelledby="nav-heading">
              <h3 id="nav-heading" className="text-sm font-semibold section-heading mb-6">
                <Translate id="footer.nav.title">Navigation</Translate>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-sm regular-link">
                    <Translate id="footer.nav.home">Home</Translate>
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm regular-link">
                    <Translate id="footer.nav.docs">Docs</Translate>
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-sm regular-link">
                    <Translate id="footer.nav.resources">Resources</Translate>
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm regular-link">
                    <Translate id="footer.nav.about">About Tobias</Translate>
                  </a>
                </li>
                <li>
                  <a
                    href="https://opsora.io?utm_source=configforge&utm_medium=footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm regular-link"
                  >
                    ConfigForge (by Opsora)
                  </a>
                </li>
                <li>
                  <a
                    href="https://opsora.io/contact?utm_source=configforge&utm_medium=footer&utm_campaign=nav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm regular-link"
                  >
                    <Translate id="footer.nav.contact">Contact / Book</Translate>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Key Services Column */}
            <section aria-labelledby="topics-heading">
              <h3 id="topics-heading" className="text-sm font-semibold section-heading mb-6">
                <Translate id="footer.topics.title">Key Services</Translate>
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.m365">Microsoft 365 Architecture & Governance</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.intune">Endpoint Management with Intune</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.alz">Azure Architecture & Landing Zones</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.ai">AI Integration & Automation Solutions</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.identity">Identity Modernization & Cloud-Native Migration</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.migrations">Migrations (M365, Azure, Hybrid)</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.security">Security Hardening & Reviews</Translate>
                  </span>
                </li>
                <li>
                  <span className="text-sm body-text">
                    <Translate id="footer.topics.delivery">Project Delivery & Handover</Translate>
                  </span>
                </li>
                <li className="pt-2">
                  <a
                    href="https://opsora.io/contact?utm_source=configforge&utm_medium=footer&utm_campaign=services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium blue-link"
                  >
                    <Translate id="footer.topics.toolsCta">→ Book a Consultation</Translate>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider max-w-7xl mx-auto px-6" />

        {/* Legal / Status Bar */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="meta-text text-sm">
              <Translate id="footer.copyright.prefix">© 2025 Tobias Schüle / ConfigForge</Translate>{' '}
              <a
                href="https://opsora.io?utm_source=configforge&utm_medium=footer"
                className="blue-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate id="footer.copyright.opsora">– by Opsora</Translate>
              </a>{' '}
              <Translate id="footer.copyright.suffix">— All rights reserved.</Translate>
            </div>

            <div className="flex items-center gap-4 text-sm meta-text">
              <a href="/privacy" className="regular-link">
                <Translate id="footer.legal.privacy">Privacy</Translate>
              </a>
              <a href="/imprint" className="regular-link">
                <Translate id="footer.legal.imprint">Imprint</Translate>
              </a>
            </div>

            <ul className="status-pills meta-text text-sm">
              <li className="status-pill">
                <span className="status-dot dot-green" aria-hidden="true"></span>
                <Translate id="footer.status.experience">15+ years experience</Translate>
              </li>
              <li className="status-pill">
                <span className="status-dot dot-blue" aria-hidden="true"></span>
                <Translate id="footer.status.certified">Microsoft certified</Translate>
              </li>
              <li className="status-pill">
                <span className="status-dot dot-purple" aria-hidden="true"></span>
                <Translate id="footer.status.proven">Enterprise proven</Translate>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
