import React from "react";

export default function Hero() {
  return (
    <section className="hero-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              ConfigForge — 
              <br />
              <span className="text-blue-600">guides & tools I use in Microsoft 365 and Azure work</span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              I publish practical guides and tools. If you need hands-on help, you can <strong>book me via Opsora</strong>.
            </p>
            
            {/* Quick Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">From real projects</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">My knowledge base</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Tools I built</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                className="btn btn-primary px-8 py-4 text-lg font-semibold rounded-full" 
                href="/docs"
              >
                Browse Docs
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Brand Card */}
          <div className="lg:col-span-2">
            <div className="card card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
              {/* Logo/Brand */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">CF</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                by Opsora
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                My personal knowledge base and tools hub
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Guides</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Templates</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a 
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  href="https://opsora.io/?utm_source=configforge&utm_medium=brand-card&utm_campaign=visit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work with me on Opsora →
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
