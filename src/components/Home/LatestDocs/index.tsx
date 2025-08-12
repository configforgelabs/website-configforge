import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import MyLayout from "@site/src/theme/MyLayout";
import DocCard from "../../DocCard";
import Button from "../../ui/Button";

export interface LatestDocsProps { }

export default function LatestDocs(props: LatestDocsProps) {
  const globalData = useGlobalData();

  const docs =
    globalData &&
      globalData["docusaurus-plugin-content-docs"] &&
      globalData["docusaurus-plugin-content-docs"]["default"]
      ? globalData["docusaurus-plugin-content-docs"]["default"]["allDocs"]
      : [];

  const topSixDocs = docs.slice(0, 6);

  // Define categories/topics for better organization
  const categories = [
    {
      title: "Microsoft 365",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H5a2 2 0 01-2-2m0 0V5a2 2 0 012-2h2m0 14V7a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4z" />
        </svg>
      ),
      color: "blue",
      count: Math.floor(docs.length * 0.4)
    },
    {
      title: "Azure",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "indigo",
      count: Math.floor(docs.length * 0.35)
    },
    {
      title: "Automation",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "emerald",
      count: Math.floor(docs.length * 0.25)
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Documentation Hub
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, templates, and runbooks covering Microsoft 365, Azure, and automation workflows.
            Everything you need for successful enterprise deployments.
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div key={category.title} className="card card-hover text-center p-6">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 dark:text-${category.color}-400`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.count}+ articles and guides
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {category.title === "Microsoft 365" && "Intune, Entra ID, Exchange, SharePoint"}
                {category.title === "Azure" && "Landing Zones, Networking, Security, BCDR"}  
                {category.title === "Automation" && "PowerShell, Graph API, Logic Apps, Power Platform"}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Docs Grid */}
        {topSixDocs.length > 0 ? (
          <>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hand-picked guides for the most common scenarios and implementations
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {topSixDocs.map((doc, index) => (
                <div key={`doc-card-${doc.permalink}`} className="card card-hover">
                  <DocCard
                    permalink={doc.permalink}
                    title={doc.title}
                    tags={doc.tags}
                    description={doc.description}
                    image={doc.frontMatter.image}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 mb-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Documentation coming soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're building comprehensive guides and templates for you.
            </p>
          </div>
        )}

        {/* Browse All CTA */}
        <div className="text-center">
          <a 
            href="/docs/intro"
            className="btn btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-flex items-center gap-2"
          >
            Browse All Documentation
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Over {docs.length} articles available
          </p>
        </div>
        
      </div>
    </div>
  );
}
