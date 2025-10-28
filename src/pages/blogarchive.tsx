import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useRef } from "react";
import Translate, { translate } from '@docusaurus/Translate';

// Idea and JS code from https://github.com/johnnyreilly/blog.johnnyreilly.com/blob/main/blog-website/src/pages/blog-handrolled.js

// Define a TypeScript interface for BlogPost
interface BlogPost {
  date: string;
  formattedDate: string;
  title: string;
  permalink: string;
}

// Util function to require context, specific to Webpack
declare const require: {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => {
    keys: () => string[];
    (key: string): { metadata: BlogPost };
  };
};

// Load all blog posts
const allPosts: BlogPost[] = ((ctx) => {
  const blogpostNames: string[] = ctx.keys();

  return blogpostNames.reduce<BlogPost[]>((blogposts, blogpostName) => {
    const module = ctx(blogpostName);
    const { date, formattedDate, title, permalink } = module.metadata;
    return [
      ...blogposts,
      {
        date,
        formattedDate,
        title,
        permalink,
      },
    ];
  }, []);
})(require.context("../../blog", true, /\.md$/));

// Group posts by year
const postsByYear = allPosts.reduceRight<Map<string, BlogPost[]>>(
  (posts, post) => {
    const year = post.date.split("-")[0];
    const yearPosts = posts.get(year) || [];
    return posts.set(year, [post, ...yearPosts]);
  },
  new Map()
);

// Create an array of years with their posts
const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
  year,
  posts,
}));

// Year component props interface
interface YearProps {
  year: string;
  posts: BlogPost[];
}

// Year component with two-column timeline design (Screenshot A)
const Year: React.FC<YearProps> = ({ year, posts }) => {
  return (
    <section 
      aria-labelledby={`year-${year}`} 
      className="relative pb-16"
    >
      {/* Year Header with vertical accent bar */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-1 h-14 bg-[#1A56DB] rounded-sm" aria-hidden="true"></div>
        <h3 
          id={`year-${year}`}
          className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight"
        >
          {year}
        </h3>
      </div>

      {/* Vertical timeline - aligned with bullet centers */}
      <div 
        className="absolute left-[11px] top-[88px] bottom-4 w-0.5 bg-[#1A56DB]" 
        aria-hidden="true"
      />

      {/* Posts List */}
      <ul className="space-y-10 list-none m-0 p-0 relative">
        {posts.map((post) => {
          const postDate = new Date(post.date);
          const monthName = postDate.toLocaleDateString('en-US', { month: 'long' });
          const day = postDate.getDate();
          
          return (
            <li key={post.permalink} className="group relative pl-0">
              <div className="flex items-start gap-6">
                {/* Timeline marker (outer blue circle + inner white dot) */}
                <div className="relative flex-shrink-0 w-6 h-6 z-10" aria-hidden="true">
                  <div className="w-6 h-6 rounded-full bg-[#1A56DB]"></div>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900"></div>
                  </div>
                </div>

                {/* Post link with date and title */}
                <Link
                  to={post.permalink}
                  className="flex-1 min-w-0 text-sm leading-snug transition-colors hover:no-underline"
                >
                  <div className="text-gray-500 dark:text-gray-400 font-normal">
                    {monthName} {day}
                  </div>
                  <div className="mt-1 text-base text-gray-900 dark:text-white group-hover:text-[#1A56DB] dark:group-hover:text-[#1A56DB] group-hover:underline">
                    {post.title}
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// BlogArchive component
const BlogArchive: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  // Structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Blog breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Archive",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Layout
        title={translate({
          id: 'blogarchive.meta.title',
          message: 'Blog Archive',
        })}
        description={translate({
          id: 'blogarchive.meta.desc',
          message: 'Complete archive of my Microsoft 365 and Azure blog posts organized by year. Technical guides, implementations, and troubleshooting notes from real projects that also get added to my knowledge base.',
        })}
      >
        {/* Hero Section with Clean Background */}
        <div className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-12 mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    <Translate id="blogarchive.title">Blog Archive</Translate>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    <Translate id="blogarchive.description">All my blog posts from over the years, organized by date.</Translate>
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Grid - 2 columns with symmetric spacing */}
            {yearsOfPosts && yearsOfPosts.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 max-w-7xl">
                {yearsOfPosts.map((props, idx) => (
                  <Year key={idx} {...props} />
                ))}
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-[#1A56DB] hover:text-[#1749c4] dark:text-[#1A56DB] dark:hover:text-[#1749c4] font-medium transition-colors hover:no-underline"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <Translate id="blogarchive.backButton">Back to Latest Blog Posts</Translate>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogArchive;
