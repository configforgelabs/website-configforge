import React, { type ReactNode } from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BackToTopButton from "@theme/BackToTopButton";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostPage";
import type { BlogSidebar } from "@docusaurus/plugin-content-blog";
import HyvorTalkComponent from "@site/src/components/HyvorTalk";
import useGlobalData from "@docusaurus/useGlobalData";
import BlogCard from "@site/src/components/BlogCard";

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar: BlogSidebar;
  children: ReactNode;
}): JSX.Element {
  const { metadata, toc } = useBlogPost();

  const { nextItem, prevItem, frontMatter, permalink } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    hide_comment: hideComment,
  } = frontMatter;

  const globalData = useGlobalData();

  const posts =
    globalData &&
      globalData["docusaurus-plugin-content-blog"] &&
      globalData["docusaurus-plugin-content-blog"]["default"]
      ? globalData["docusaurus-plugin-content-blog"]["default"]["posts"]
      : [];

  const topFourPosts = posts.slice(0, 4);

  const latestPosts = React.useMemo(() => {
    if (
      topFourPosts.some(
        (post) => post.metadata.permalink === metadata.permalink
      )
    ) {
      return topFourPosts.filter(
        (post) => post.metadata.permalink !== metadata.permalink
      );
    }

    return topFourPosts.slice(0, 3);
  }, [metadata, topFourPosts]);

  return (
    <BlogLayout
      sidebar={null}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }
    >
      <BlogPostItem>{children}</BlogPostItem>

      {/* {(nextItem || prevItem) && (
        <div className="margin-bottom--md">
          <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
        </div>
      )} */}
      <div className="grid gap-8 mt-12 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((doc) => (
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

      {!hideComment && <HyvorTalkComponent />}
      <BackToTopButton />
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
