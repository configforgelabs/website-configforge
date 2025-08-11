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
    y: -6,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
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
            className="group h-full"
          >
            <Link 
              to={permalink} 
              className="hover:no-underline block h-full"
            >
              <article className="card card-hover h-full overflow-hidden relative">
                {/* Image Section with Modern Overlay */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={imageSrc}
                      alt={title}
                    />
                    {/* Sophisticated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0%_0_0/0.7)] via-[oklch(0%_0_0/0.2)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Modern floating tags */}
                    {tags.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {tags.slice(0, 2).map((tag) => (
                          <span 
                            key={`${permalink}-tag-${tag.label}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[oklch(var(--card)/0.9)] backdrop-blur-md border border-[oklch(var(--border-strong)/0.5)] rounded-full text-[oklch(var(--foreground))]"
                          >
                            <Paper className="w-3 h-3" />
                            {tag.label}
                          </span>
                        ))}
                        {tags.length > 2 && (
                          <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-[oklch(var(--card)/0.9)] backdrop-blur-md border border-[oklch(var(--border-strong)/0.5)] rounded-full text-[oklch(var(--foreground))]">
                            +{tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Reading time indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[oklch(var(--card)/0.9)] backdrop-blur-md border border-[oklch(var(--border-strong)/0.5)] rounded-full text-xs font-medium text-[oklch(var(--foreground))]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 min read
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-[oklch(var(--primary))] transition-colors duration-300">
                    {title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-[oklch(var(--foreground-muted))] text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {description}
                  </p>

                  {/* Author and Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-[oklch(var(--border))]">
                    <div className="flex items-center gap-3">
                      {authorData && authorData.imageURL && (
                        <div className="relative">
                          <img
                            className="w-10 h-10 rounded-full object-cover border-2 border-[oklch(var(--border-strong))]"
                            src={authorData.imageURL}
                            alt={authorData.name}
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[oklch(var(--success))] rounded-full border-2 border-[oklch(var(--card))]"></div>
                        </div>
                      )}

                      <div>
                        {authorData && (
                          <div className="text-sm font-medium text-[oklch(var(--foreground))]">
                            {authorData.name}
                          </div>
                        )}
                        <div className="text-xs text-[oklch(var(--foreground-subtle))]">
                          {dateString}
                        </div>
                      </div>
                    </div>

                    {/* Read more arrow */}
                    <div className="flex items-center gap-2 text-[oklch(var(--primary))] opacity-60 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-medium">Read more</span>
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

                {/* Subtle accent border on hover */}
                <div 
                  className="absolute inset-0 rounded-[var(--radius)] border-2 border-transparent group-hover:border-[oklch(var(--primary)/0.2)] transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </article>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
}
