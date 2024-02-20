import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import MyLayout from "@site/src/theme/MyLayout";
import DocCard from "../../DocCard";
import Button from "../../ui/Button";

export interface LatestDocsProps {}

export default function LatestDocs(props: LatestDocsProps) {
  const globalData = useGlobalData();

  const docs =
    globalData &&
    globalData["docusaurus-plugin-content-docs"] &&
    globalData["docusaurus-plugin-content-docs"]["default"]
      ? globalData["docusaurus-plugin-content-docs"]["default"]["allDocs"]
      : [];

  const topSixDocs = docs.slice(0, 3);

  return (
    <div className="relative py-16 lg:py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900 mb-8  lg:mb-12">
        <div className="max-w-screen-xl lg:px-6 flex items-end">
          <div className="max-w-screen-sm text-center">
            <h2 className="text-left text-4xl tracking-tight font-extra-bold text-gray-900 dark:text-white">
              Knowledge Base
            </h2>
            <div className="font-regular text-left text-[20px] text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </div>
          </div>

          <div className="ml-auto">
            <Button className="hidden lg:inline">View more</Button>
          </div>
        </div>
      </section>
      <div className="grid gap-y-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 md:px-12">
        {topSixDocs.map((doc) => (
          <DocCard
            permalink={doc.permalink}
            title={doc.title}
            tags={doc.tags}
            description={doc.description}
            key={doc.permalink}
            image={doc.frontMatter.image}
          />
        ))}
      </div>
      <div className="ml-auto mt-10">
        <Button className="inline lg:hidden w-full">View more</Button>
      </div>
    </div>
  );
}
