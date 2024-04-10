import React from "react";
import { Pagination } from "flowbite-react";
import Translate, { translate } from "@docusaurus/Translate";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import { useHistory } from "@docusaurus/router";

const theme = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-[16.75px] w-5",
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-[16.75px] w-5",
    },
    selector: {
      base: "w-10 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "bg-primary-100 text-primary-700 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "opacity-50 cursor-normal",
    },
  },
};

export default function BlogListPaginator(props) {
  const { metadata } = props;
  const { previousPage, nextPage, page, postsPerPage, totalCount, totalPages } =
    metadata;
  console.log("metadata", metadata, props);
  const history = useHistory();

  const [currentPage, setCurrentPage] = React.useState(page);

  const onPageChange = (page: number) => {
    if (page === 1) {
      history.push(`/blog`);
    } else {
      history.push(`/blog/page/${page}`);
    }
  };

  return (
    <nav
      className="flex overflow-x-auto sm:justify-center"
      aria-label={translate({
        id: "theme.blog.paginator.navAriaLabel",
        message: "Blog list page navigation",
        description: "The ARIA label for the blog pagination",
      })}
    >
      {/* {previousPage && (
        <PaginatorNavLink
          permalink={previousPage}
          title={
            <Translate
              id="theme.blog.paginator.newerEntries"
              description="The label used to navigate to the newer blog posts page (previous page)">
              Newer Entries
            </Translate>
          }
        />
      )}
      {nextPage && (
        <PaginatorNavLink
          permalink={nextPage}
          title={
            <Translate
              id="theme.blog.paginator.olderEntries"
              description="The label used to navigate to the older blog posts page (next page)">
              Older Entries
            </Translate>
          }
          isNext
        />
      )} */}
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        className="[&>ul]:list-none"
        nextLabel=""
        previousLabel=""
        showIcons
        theme={theme}
      />
    </nav>
  );
}
