import Link from "@docusaurus/Link";

export default function DocCard({ item }) {
  const { permalink, title, description, tags, frontMatter } = item;
  const { image: frontMatterImage } = frontMatter;

  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {frontMatterImage && (
        <Link to={permalink}>
          <img
            className="mb-5 rounded-lg"
            src={frontMatterImage}
            alt="office laptop working"
          />
        </Link>
      )}
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
        <Link to={permalink}>{title}</Link>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </article>
  );
}
