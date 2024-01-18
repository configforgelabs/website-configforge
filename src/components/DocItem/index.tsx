import Link from "@docusaurus/Link";

export default function DocItem({ item }) {
  const { permalink, title } = item;

  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={permalink}></Link>

      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={permalink}>{title}</Link>
      </h2>
    </article>
  );
}
