import React from "react";
import { Variants, motion, useMotionValue } from "framer-motion";
import Link from "@docusaurus/Link";
import type { Props as BlogPostItemsProps } from "@theme/BlogPostItems";
import Tag from "@theme/Tag";
import BlogCard from "@site/src/components/BlogCard";

import styles from "./styles.module.scss";
import Paper from "@site/src/components/Icons/Paper";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const cardHover = {
  hover: {
    y: -6,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function BlogPostGridItems({
  items,
}: BlogPostItemsProps): React.JSX.Element {
  return (
    <>
      {items.map(({ content: BlogPostContent }, index) => {
        const {
          metadata: blogMetaData,
          frontMatter,
          assets,
          ...rest
        } = BlogPostContent;

        const { title, image: frontMatterImage } = frontMatter;

        const image = assets.image ?? frontMatterImage;
        const configContext = useDocusaurusContext();
        const { customFields } = configContext.siteConfig;
        const imageSrc = image ?? (customFields?.placeholderImageURL as string);

        const { permalink, date, tags, authors, description } = blogMetaData;

        return (
          <Link 
            key={`blog-post-${permalink}`} 
            to={permalink} 
            className="hover:no-underline"
          >
            <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img
                className="mb-5 rounded-lg"
                src={imageSrc}
                alt="Blog post image"
              />

              {tags.length > 0 &&
                tags.map((tag) => (
                  <span 
                    key={`${permalink}-tag-${tag.label}`}
                    className="bg-primary-100 text-primary-800 font-medium me-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center gap-x-1"
                  >
                    <Paper className="w-3 h-3" />
                    <span className="text-xs">{tag.label}</span>
                  </span>
                ))}

              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="mb-4 font-medium text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <div className="flex items-center space-x-3">
                {authorData && authorData.imageURL && (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={authorData.imageURL}
                    alt="Author Avatar"
                  />
                )}

                <div className="dark:text-white">
                  {authorData && <div className="text-sm text-gray-900 font-medium">{authorData.name}</div>}

                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {dateString} · 16 min read
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </>
  );
}
