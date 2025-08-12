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
          <motion.div
            key={`blog-post-${permalink}`}
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            style={{ height: '100%' }}
          >
            <BlogCard
              permalink={permalink}
              title={title}
              tags={tags}
              description={description}
              image={imageSrc}
            />
          </motion.div>
        );
      })}
    </>
  );
}
