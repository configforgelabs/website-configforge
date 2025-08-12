import React from "react";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import Paper from "@site/src/components/Icons/Paper";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

export default function BlogPostItemHeader() {
  const { metadata } = useBlogPost();
  const { tags, title } = metadata;
  const tagsExists = tags.length > 0;

  return (
    <header>
      {tagsExists && (
        <div className="flex flex-wrap gap-1 justify-center mb-1.5">
          {tags.map((tag) => (
            <span 
              key={`blog-post-tag-${title}-${tag.label}`}
              className="bg-primary-100 text-primary-800 font-medium me-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center gap-x-1"
            >
              <Paper className="w-3 h-3" />
              <span className="text-xs">{tag.label}</span>
            </span>
          ))}
        </div>
      )}
      <BlogPostItemHeaderTitle 
        className="items-center justify-center text-center mt-8"
      />
      <div className="flex items-center justify-center gap-x-4 mb-8">
        <BlogPostItemHeaderAuthors />
        <BlogPostItemHeaderInfo />
      </div>
    </header>
  );
}
