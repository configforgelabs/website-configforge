import React from "react";
import Link from "@docusaurus/Link";

export default function Hero() {
  return (
    <section className="hero-gradient py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Microsoft 365 & Azure configs that work
            </h1>
            <p className="hero-subtitle text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto lg:mx-0">
              I publish practical guides and tools. If you need hands-on help, you can <strong>book me via Opsora</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto mx-auto lg:mx-0 mt-5">
              <Link
                to="/docs/intro"
                className="btn btn-primary w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-2 hover:no-underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Browse Docs
                <svg className="w-3 h-3 btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="/blog"
                className="btn btn-outline w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 hover:no-underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Latest Posts
              </a>
            </div>
          </div>

          {/* Brand Card */}
          <div className="lg:col-span-2">
            <div className="card card-hover bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 text-center">
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                <img
                  src="/img/branding/tobias-profile.jpg"
                  alt="Tobias Schüle"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Tobias Schüle
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                Independent Microsoft 365 & Azure Architect
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I help SMEs get solutions that fit their actual needs, not upsells. 15+ years experience with full documentation and zero sales pressure.
              </p>
              
              {/* Blog belongs to Opsora - Clickable Logo */}
              <div className="pt-3 pb-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Book trusted consulting via</p>
                <a 
                  href="https://opsora.io/?utm_source=configforge&utm_medium=brand-card&utm_campaign=visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/img/branding/logo-opsora-light.svg"
                    alt="Opsora"
                    className="h-10 mx-auto dark:hidden"
                  />
                  <img
                    src="/img/branding/logo-opsora-dark.svg"
                    alt="Opsora"
                    className="h-10 mx-auto hidden dark:block"
                  />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
