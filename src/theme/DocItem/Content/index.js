import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import Paper from "@site/src/components/Icons/Paper";
import BlogPostItemHeaderAuthor from "../../BlogPostItem/Header/Author";
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();

  const { metadata, frontMatter, contentTitle } = useDoc();

  const { tags, authors = [], author } = metadata;
  const tagsExists = tags.length > 0;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle && (
        <header>
          {tagsExists && (
            <div className="flex flex-wrap gap-1 justify-start mb-1.5">
              {tags.map((tag) => (
                <span 
                  key={`doc-tag-${tag.label}`}
                  className="bg-primary-100 text-primary-800 font-medium me-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center gap-x-1"
                >
                  <Paper className="w-3 h-3" />
                  <span className="text-xs">{tag.label}</span>
                </span>
              ))}
            </div>
          )}
          <Heading as="h1" className="text-2xl">
            {syntheticTitle}
          </Heading>
        </header>
      )}

      <MDXContent>{children}</MDXContent>
    </div>
  );
}
