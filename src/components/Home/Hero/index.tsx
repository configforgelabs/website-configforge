import React from "react";
import Link from "@docusaurus/Link";

export default function Hero() {
  return (
    <section className="hero-gradient py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Microsoft 365 & Azure configs that work
            </h1>
            <p className="hero-subtitle text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
              I publish practical guides and tools. If you need hands-on help, you can <strong>book me via Opsora</strong>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-6">
              <Link
                to="/docs" 
                className="btn btn-primary px-6 py-3 rounded-full font-semibold"
              >
                Browse Docs
              </Link>
              <a 
                href="/blog" 
                className="btn btn-outline px-6 py-3 rounded-full font-semibold"
              >
                Latest Posts
              </a>
            </div>
          </div>

          {/* Brand Card */}
          <div className="lg:col-span-2">
            <div className="card card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 text-center">
              {/* Logo/Brand */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">CF</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                by Opsora
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                My personal knowledge base and tools hub
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Guides</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">100+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Templates</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
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
