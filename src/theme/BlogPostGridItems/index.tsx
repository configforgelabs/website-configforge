import React from "react";
import { Variants, motion, useMotionValue } from "framer-motion";
import Link from "@docusaurus/Link";
import type { Props as BlogPostItemsProps } from "@theme/BlogPostItems";
import Tag from "@theme/Tag";

import styles from "./styles.module.scss";

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
}: BlogPostItemsProps): JSX.Element {
  return (
    <>
      {items.map(({ content: BlogPostContent }, i) => {


        const { metadata: blogMetaData, frontMatter, ...rest } = BlogPostContent;

        console.log("frontMatter", frontMatter, rest)

        const { title, image } = frontMatter;
        const { permalink, date, tags } = blogMetaData;
        const dateObj = new Date(date);
        const dateString = `${dateObj.getFullYear()}-${(
          "0" +
          (dateObj.getMonth() + 1)
        ).slice(-2)}-${("0" + dateObj.getDate()).slice(-2)}`;

        return (
          <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="mb-5 rounded-lg"
                src={image}
                alt="office laptop working"
              />
            </a>
            {tags.length > 0 &&
              tags.map((tag) => {
                return (
                  <span
                    className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                );
              })}

            <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link to={permalink} className={styles.itemTitle}>
                {title}
              </Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                }
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {dateString} · 16 min read
                </div>
              </div>
            </div>
          </article>

          // <div key={blogMetaData.permalink}>
          //   <Link to={permalink} className={styles.itemTitle}>
          //     {title}
          //   </Link>
          //   <div className={styles.itemTags}>
          //     {tags.length > 0 && (
          //       <>
          //         <svg width="1em" height="1em" viewBox="0 0 24 24">
          //           <path
          //             fill="currentColor"
          //             fill-rule="evenodd"
          //             d="M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"
          //           ></path>
          //         </svg>
          //         {tags
          //           .slice(0, 2)
          //           .map(({ label, permalink: tagPermalink }, index) => {
          //             return (
          //               <>
          //                 {index !== 0 && "/"}
          //                 <Tag
          //                   label={label}
          //                   permalink={tagPermalink}
          //                   key={tagPermalink}
          //                   className={"tag"}
          //                 />
          //               </>
          //             );
          //           })}
          //       </>
          //     )}
          //   </div>
          //   <div className={styles.itemDate}>{dateString}</div>
          // </div>
        );
      })}
    </>
  );
}
