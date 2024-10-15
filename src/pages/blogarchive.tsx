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

// Year component
const Year: React.FC<YearProps> = ({ year, posts }) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3 className="text-[36px] w-[124px] text-center border-l-4 border-r-0 border-t-0 border-b-0 border-[#1A56DB] border-solid mb-[48px]">
        {year}
      </h3>
      <ul className="p-0">
        {posts.map((post, index) => (
          <li
            key={post.date}
            className="flex gap-[24px] mb-[32px] align-middle"
          >
            {index !== posts.length - 1 && (
              <span className="absolute  mt-[20px] ml-[10px] z-[-1] pb-[85px] border-l-4 border-r-0 border-t-0 border-b-0 border-[#1A56DB] border-solid"></span>
            )}
            <span className="pt-[15px]">
              <img src="./img/timeline.svg" alt="" />
            </span>
            <div className="content flex flex-col align-middle">
              <span className="date text-[#6B7280] text-[14px] pr-[24px]">
                January 2{post.formattedDate}
              </span>
              <Link
                className="text-[#6B7280] text-[20px] font-bold "
                to={post.permalink}
              >
                {post.title}
              </Link>
            </div>
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
        name: "Blog",
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
        // description=""
      >
        <div className="mx-auto max-w-screen-xl mt-[80px] ml-[80.67px]">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight font-extra-bold text-gray-900 dark:text-white lg:text-5xl">
            Blog Archive
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[556.28px]">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.{" "}
          </p>
        </div>
        <main>
          {yearsOfPosts && yearsOfPosts.length > 0 && (
            <section className={styles.features}>
              <div className="container p-0 ml-[80.27px]">
                <div className="row">
                  {yearsOfPosts.map((props, idx) => (
                    <Year key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  );
};

export default BlogArchive;
