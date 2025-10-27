import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import Translate from '@docusaurus/Translate';
import Button from "../../ui/Button";
import BlogCard from "../../BlogCard";

export interface LatestPostsProps { }

export default function LatestPosts(props: LatestPostsProps) {
  const globalData = useGlobalData();

  const posts =
    globalData &&
      globalData["docusaurus-plugin-content-blog"] &&
      globalData["docusaurus-plugin-content-blog"]["default"]
      ? globalData["docusaurus-plugin-content-blog"]["default"]["posts"]
      : [];

  const topSixPosts = posts.slice(0, 6);

  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <Translate id="latest.section.kicker">Latest Insights</Translate>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Translate id="latest.section.title">Recent Posts</Translate>
          </h2>
        </div>

        {/* Posts Grid */}
        {topSixPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {topSixPosts.map((doc, index) => (
              <BlogCard
                key={doc.metadata.permalink}
                permalink={doc.metadata.permalink}
                title={doc.metadata.title}
                tags={doc.metadata.tags}
                description={doc.metadata.description}
                image={doc.metadata.frontMatter.image}
                date={doc.metadata.formattedDate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              <Translate id="latest.empty.title">No posts yet</Translate>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              <Translate id="latest.empty.desc">Check back soon for the latest insights and guides.</Translate>
            </p>
          </div>
        )}

        {/* View All Button */}
        {topSixPosts.length > 0 && (
          <div className="text-center mt-12">
            <Link 
              to="/blog"
              className="btn btn-outline px-8 py-4 text-lg font-semibold rounded-full inline-flex items-center gap-2 hover:no-underline"
            >
              <Translate id="latest.viewAll">View All Posts</Translate>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
}
