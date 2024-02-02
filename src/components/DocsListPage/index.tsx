import { useEffect, useState } from "react";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import MyLayout from "@site/src/theme/MyLayout";
import DocCard from "../DocCard";

export default function DocsListPage() {
  const globalData = useGlobalData();

  const docs =
    globalData &&
    globalData["docusaurus-plugin-content-docs"] &&
    globalData["docusaurus-plugin-content-docs"]["default"]
      ? globalData["docusaurus-plugin-content-docs"]["default"]["allDocs"]
      : [];

  return (
    <MyLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Docs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
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
    </MyLayout>
  );
}
