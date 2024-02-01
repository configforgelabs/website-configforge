import Link from "@docusaurus/Link";

interface TagModel {
  label: string;
  permalink: string;
}

export interface DocCardProps {
  permalink: string;
  title: string;
  tags?: TagModel[];
  description: string;
}

export default function DocCard(props: DocCardProps) {
  const { permalink, title, tags, description } = props;

  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={permalink}></Link>
      {tags && tags.length > 0 &&
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
