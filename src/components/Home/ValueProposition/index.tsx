import React from "react";
import Translate, { translate } from '@docusaurus/Translate';

export default function ValueProposition() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      titleKey: "vp.feature1.title",
      titleDefault: "From Real Projects",
      descKey: "vp.feature1.desc",
      descDefault: "Every guide and template comes from my actual enterprise deployments. No theoretical examples - only solutions that work in production environments."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleKey: "vp.feature2.title",
      titleDefault: "Ready to Use",
      descKey: "vp.feature2.desc",
      descDefault: "Skip the research phase. My PowerShell scripts, ARM templates, and configurations are ready to adapt for your environment."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      titleKey: "vp.feature3.title",
      titleDefault: "Patterns I Use",
      descKey: "vp.feature3.desc",
      descDefault: "Learn the architectural patterns I implement from SMB to enterprise. Governance, security, and compliance built in from day one."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      titleKey: "vp.feature4.title",
      titleDefault: "My Documentation Style",
      descKey: "vp.feature4.desc",
      descDefault: "Step-by-step implementation guides with troubleshooting sections, prerequisites, and post-deployment validation steps - how I work."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      titleKey: "vp.feature5.title",
      titleDefault: "Zero-Trust First",
      descKey: "vp.feature5.desc",
      descDefault: "Security and governance patterns that implement Zero-Trust principles from the ground up. RBAC, Conditional Access, and compliance built in."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      titleKey: "vp.feature6.title",
      titleDefault: "Reduced Admin Drag",
      descKey: "vp.feature6.desc",
      descDefault: "Automation and self-service patterns that reduce manual work. Less tickets, fewer escalations, more strategic focus for IT teams."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <Translate id="vp.kicker">Why ConfigForge</Translate>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Translate id="vp.title">How ConfigForge relates to Opsora</Translate>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            <Translate id="vp.desc">I do client work under Opsora (architecture, implementations, migrations). I document patterns here on ConfigForge so others can reuse them. Want me to apply this in your tenant? Work with me on Opsora.</Translate>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <Translate id={feature.titleKey}>{feature.titleDefault}</Translate>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <Translate id={feature.descKey}>{feature.descDefault}</Translate>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 max-w-3xl mx-auto mb-12 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <Translate id="vp.cta.title">Ready to get started?</Translate>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Translate id="vp.cta.desc">I don't sell runbooks here. Everything is shared for learning and reuse.</Translate>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="btn btn-primary px-6 py-3 rounded-full font-semibold opacity-60 cursor-not-allowed relative"
                title={translate({
                  id: 'vp.cta.docs.tooltip',
                  message: 'Documentation is currently under development'
                })}
              >
                <Translate id="vp.cta.docs">Browse Docs</Translate>
                <span className="absolute -top-2 -right-2 bg-yellow-500 dark:bg-yellow-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  <Translate id="home.hero.inDevelopment">In Development</Translate>
                </span>
              </button>
              <div className="text-center">
                <a
                  href="https://opsora.io/contact?utm_source=configforge&utm_medium=callout&utm_campaign=book"
                  className="btn btn-outline px-6 py-3 rounded-full font-semibold hover:no-underline"
                >
                  <Translate id="vp.cta.book">Book a consultation via Opsora</Translate>
                </a>
                {/* <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">handled via Opsora</p> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
