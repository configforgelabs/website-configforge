import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import MyLayout from "@site/src/theme/MyLayout";
import DocCard from "../../DocCard";

export interface LatestPostsProps {}

export default function LatestPosts(props: LatestPostsProps) {
  const globalData = useGlobalData();

  const posts =
    globalData &&
    globalData["docusaurus-plugin-content-blog"] &&
    globalData["docusaurus-plugin-content-blog"]["default"]
      ? globalData["docusaurus-plugin-content-blog"]["default"]["posts"]
      : [];

  return (
    <div className="relative py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 max-w-screen-xl lg:px-6">
          <div className="max-w-screen-sm text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <p className="font-light text-left text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((doc) => (
          <DocCard
            permalink={doc.metadata.permalink}
            title={doc.metadata.title}
            tags={doc.metadata.tags}
            description={doc.metadata.description}
            key={doc.metadata.permalink}
          />
        ))}
      </div>
    </div>
  );
}
