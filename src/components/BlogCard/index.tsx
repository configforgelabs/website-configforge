import Link from "@docusaurus/Link";
import Paper from "../Icons/Paper";
import Video from "../Icons/Video";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { removeQuotations } from "@site/src/lib/utils";

interface TagModel {
  label: string;
  permalink: string;
}

export interface DocCardProps {
  permalink: string;
  title: string;
  tags?: TagModel[];
  description: string;
  image?: string;
  date?: string;
}

// Format date to "24th October, 2025" format
function formatDate(dateString: string | undefined): string {
  if (!dateString) return '';

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  // Add ordinal suffix (st, nd, rd, th)
  const suffix = (day: number) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${suffix(day)} ${month}, ${year}`;
}

export default function DocCard(props: DocCardProps) {
  const { permalink, title, tags = [], description, image, date } = props;

  const configContext = useDocusaurusContext();
  const { customFields } = configContext.siteConfig;
  const imageSrc = image ?? (customFields?.placeholderImageURL as string);
  const formattedDate = formatDate(date);
  return (
    <Link
      to={permalink}
      className="group block no-underline hover:no-underline h-full"
      style={{ textDecoration: 'none' }}
    >
      <article className="relative bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden border-b-4 border-blue-600 dark:border-blue-600/80 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-900/20">

        {/* Image Container - Larger like PatchMyPC */}
        {imageSrc && (
          <div className="relative h-60 overflow-hidden bg-blue-950 dark:bg-gray-900">
            <img
              src={imageSrc}
              className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              alt={title}
            />
          </div>
        )}

        {/* Content Section - More padding like PatchMyPC */}
        <div className="flex-1 flex flex-col p-8">

          {/* Blog Label */}
          <div className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Blog
          </div>

          {/* Title - Larger and more prominent */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>

          {/* Description - More line height */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
            {removeQuotations(description)}
          </p>

          {/* Date at bottom */}
          {formattedDate && (
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {formattedDate}
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
