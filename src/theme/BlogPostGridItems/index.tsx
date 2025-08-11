import React from "react";
import { Variants, motion, useMotionValue } from "framer-motion";
import Link from "@docusaurus/Link";
import type { Props as BlogPostItemsProps } from "@theme/BlogPostItems";
import Tag from "@theme/Tag";

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
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function BlogPostGridItems({
  items,
}: BlogPostItemsProps): JSX.Element {
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

        const authorData = authors.length > 0 ? authors[0] : null;
        const dateObj = new Date(date);
        const dateString = `${dateObj.getFullYear()}-${(
          "0" +
          (dateObj.getMonth() + 1)
        ).slice(-2)}-${("0" + dateObj.getDate()).slice(-2)}`;

        return (
          <motion.div
            key={`blog-post-${permalink}`}
            variants={cardHover}
            whileHover="hover"
            className="group"
          >
            <Link 
              to={permalink} 
              className="hover:no-underline block h-full"
            >
              <article className="h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                {/* Image Section with Gradient Overlay */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={imageSrc}
                      alt={title}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Tags positioned over image */}
                  {tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {tags.slice(0, 2).map((tag) => (
                        <span 
                          key={`${permalink}-tag-${tag.label}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/20"
                        >
                          <Paper className="w-3 h-3" />
                          {tag.label}
                        </span>
                      ))}
                      {tags.length > 2 && (
                        <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/20">
                          +{tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {description}
                  </p>

                  {/* Author and Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      {authorData && authorData.imageURL && (
                        <div className="relative">
                          <img
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 dark:border-gray-700"
                            src={authorData.imageURL}
                            alt={authorData.name}
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                        </div>
                      )}

                      <div>
                        {authorData && (
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {authorData.name}
                          </div>
                        )}
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {dateString}
                        </div>
                      </div>
                    </div>

                    {/* Read Time & Arrow */}
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                      <span className="text-xs font-medium">5 min read</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors duration-300 pointer-events-none" />
              </article>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
}
