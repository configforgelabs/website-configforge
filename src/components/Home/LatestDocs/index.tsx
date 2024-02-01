import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import MyLayout from "@site/src/theme/MyLayout";
import DocCard from "../../DocCard";

export interface LatestDocsProps {}

export default function LatestDocs(props: LatestDocsProps) {
  const globalData = useGlobalData();

  console.log("globalData", globalData);

  const docs =
    globalData &&
    globalData["docusaurus-plugin-content-docs"] &&
    globalData["docusaurus-plugin-content-docs"]["default"]
      ? globalData["docusaurus-plugin-content-docs"]["default"]["allDocs"]
      : [];

  return (
    <div className="relative py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 max-w-screen-xl lg:px-6">
          <div className="max-w-screen-sm text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Knowledge Base
            </h2>
            <p className="font-light text-left text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <DocCard
            permalink={doc.permalink}
            title={doc.title}
            tags={doc.tags}
            description={doc.description}
            key={doc.permalink}
          />
        ))}
      </div>
    </div>
  );
}
