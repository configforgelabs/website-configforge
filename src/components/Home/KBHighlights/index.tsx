import React from "react";

export interface KBHighlightsProps { }

export default function KBHighlights(props: KBHighlightsProps) {
  
  // Define KB highlight categories with curated content
  const highlights = [
    {
      title: "Microsoft Intune",
      description: "Device management, app deployment, and compliance policies — the setups I use in modern workplaces",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "blue",
      topics: ["Device Enrollment", "App Protection", "Compliance Policies", "Conditional Access"],
      articleCount: "25+ articles",
      href: "/docs/intune"
    },
    {
      title: "Azure Identity",
      description: "Entra ID configuration, user management, and Zero-Trust security — how I implement them",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "emerald",
      topics: ["Entra ID Setup", "MFA Configuration", "RBAC", "B2B/B2C"],
      articleCount: "20+ articles", 
      href: "/docs/azure/identity"
    },
    {
      title: "PowerShell Automation",
      description: "Scripts, modules, and automation workflows I built for Microsoft 365 and Azure management",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "purple",
      topics: ["Graph API", "Exchange Online", "Azure Resource Management", "Reporting"],
      articleCount: "30+ articles",
      href: "/docs/automation"
    },
    {
      title: "Azure Landing Zones",
      description: "Enterprise-ready Azure foundation with governance, security, and networking — my preferred patterns",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "indigo",
      topics: ["Hub-Spoke Networks", "Policy Management", "Cost Management", "BCDR"],
      articleCount: "15+ articles",
      href: "/docs/azure/landing-zones"
    },
    {
      title: "Exchange Online",
      description: "Email security, migration strategies, and advanced configuration for hybrid environments",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "orange",
      topics: ["Mail Security", "Transport Rules", "Hybrid Deployment", "Migration"],
      articleCount: "18+ articles",
      href: "/docs/exchange"
    },
    {
      title: "Security & Compliance",
      description: "Information protection, compliance policies, and security baseline configurations",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "red",
      topics: ["Data Loss Prevention", "Sensitivity Labels", "Purview", "Security Baselines"],
      articleCount: "22+ articles",
      href: "/docs/security"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Knowledge Base Highlights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My living library of step-by-step guides. I focus on architecture, implementations, 
            and migrations across Microsoft 365, Azure, and hybrid environments.
          </p>
        </div>

        {/* KB Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <a 
              key={highlight.title} 
              href={highlight.href}
              className="group card card-hover p-8 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-2 kb-highlight-card"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${highlight.color}-100 to-${highlight.color}-200 dark:from-${highlight.color}-900/30 dark:to-${highlight.color}-800/20 text-${highlight.color}-600 dark:text-${highlight.color}-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-${highlight.color}-500/20`}>
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <div className="text-sm font-semibold text-primary/80 dark:text-primary/90 px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full inline-block">
                    {highlight.articleCount}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {highlight.description}
              </p>

              {/* Read More */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  <span>Explore Articles</span>
                  <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="text-center bg-gradient-to-br from-white to-primary/5 dark:from-gray-800 dark:to-primary/10 rounded-2xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-primary/5 dark:shadow-primary/10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Complete Knowledge Base
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Access our full library of step-by-step guides, templates, and best practices. 
            Everything you need for successful Microsoft 365 and Azure implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/docs/intro"
              className="btn btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse Documentation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/blog" 
              className="btn btn-outline px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Read Latest Posts
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            130+ comprehensive articles and growing
          </p>
        </div>
        
      </div>
    </div>
  );
}
