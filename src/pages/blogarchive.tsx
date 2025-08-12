import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useRef } from "react";

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

// Year component with new design
const Year: React.FC<YearProps> = ({ year, posts }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-gray-800 dark:to-gray-800/70 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/30 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20">
      
      {/* Year Header */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{year}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
        </div>
      </div>

      {/* Posts List */}
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={post.date} className="group">
            <Link
              to={post.permalink}
              className="block p-4 rounded-lg border border-transparent hover:border-primary/30 dark:hover:border-primary/40 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:no-underline"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight mb-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.formattedDate}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
        title="Blog Archive"
        description="Complete archive of my Microsoft 365 and Azure blog posts organized by year. Technical guides, implementations, and troubleshooting notes from real projects that also get added to my knowledge base."
      >
        {/* Hero Section with Gradient Background */}
        <div className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Archive
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Blog Archive
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My complete blog post history organized by year. Each entry represents learnings from real Microsoft 365 and Azure implementations that also get added to my knowledge base—solutions that actually worked in production.
              </p>
            </div>

            {/* Years Grid */}
            {yearsOfPosts && yearsOfPosts.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {yearsOfPosts.map((props, idx) => (
                  <Year key={idx} {...props} />
                ))}
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="text-center mt-16">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:no-underline"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Latest Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogArchive;
