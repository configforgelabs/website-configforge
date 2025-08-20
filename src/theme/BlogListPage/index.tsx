import clsx from "clsx";
import React from "react";
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BackToTopButton from "@theme/BackToTopButton";
import type { Props } from "@theme/BlogListPage";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogLayout from "@theme/BlogLayout";
import MyLayout from "../MyLayout";
import BlogPostGridItems from "../BlogPostGridItems";
import Translate, { translate } from '@docusaurus/Translate';

function BlogListPageMetadata(props: Props): React.JSX.Element {
  const { metadata } = props;
  const { blogDescription } = metadata;

  return (
    <>
      <PageMetadata title={translate({ id: 'blog.meta.title', message: 'Blog' })} description={translate({ id: 'blog.meta.desc', message: 'My Microsoft 365 and Azure blog posts - practical insights from real projects that also get added to my knowledge base. Technical guides, implementations, and troubleshooting notes with no marketing fluff.' })} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props) {
  const { metadata, items } = props;

  return (
    <MyLayout>
      {/* Hero Section with Gradient Background */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <Translate id="blog.kicker">Latest Posts</Translate>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <Translate id="blog.title">Blog</Translate>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              <Translate id="blog.description">My Microsoft 365 and Azure blog posts from real projects. These insights also become part of my knowledge base—practical guides and troubleshooting notes with no marketing fluff, just what actually works.</Translate>
            </p>
          </div>

          {/* Posts Grid with New Card Design */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogPostGridItems items={items} />
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
      
      <BackToTopButton />
    </MyLayout>
  );
}

export default function BlogListPage(props: Props): React.JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
