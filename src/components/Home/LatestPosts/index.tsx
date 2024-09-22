import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
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
    <div className="relative py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900 mb-8  lg:mb-12">
        <div className="px-4 max-w-screen-xl lg:px-6 flex items-end ">
          <div className="max-w-screen-sm text-center ">
            <h2 className="mb-4 text-left text-4xl tracking-tight font-extra-bold text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <div className="font-regular text-left text-[20px] text-gray-500 sm:text-xl dark:text-gray-400">
              Dive into expert insights and innovative solutions with our latest blog posts, where we unravel the complexities of Microsoft 365 and automation to empower your digital transformation journey!
            </div>
          </div>
          <div className="ml-auto">
            <a href="/blog">
              <Button className="hidden lg:inline">View more</Button>
            </a>
          </div>
        </div>
      </section>
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {topSixPosts.map((doc) => (
          <BlogCard
            permalink={doc.metadata.permalink}
            title={doc.metadata.title}
            tags={doc.metadata.tags}
            description={doc.metadata.description}
            key={doc.metadata.permalink}
            image={doc.metadata.frontMatter.image}
          />
        ))}
      </div>
      <div className="ml-auto mt-8">
        <a href="/blog">
          <Button className="block lg:hidden w-full">View more</Button>
        </a>
      </div>
    </div>
  );
}
