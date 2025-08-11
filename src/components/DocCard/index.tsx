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
}

export default function DocCard(props: DocCardProps) {
  const { permalink, title, tags = [], description, image } = props;

  const configContext = useDocusaurusContext();
  const { customFields } = configContext.siteConfig;
  const imageSrc = image ?? (customFields?.placeholderImageURL as string);

  return (
    <Link to={permalink} className="hover:no-underline group">
      <article className="h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 transition-all duration-300 overflow-hidden backdrop-blur-sm p-6 flex flex-col justify-between group-hover:-translate-y-1">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={`${permalink}-${tag.permalink}-${tag.label}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full border border-primary-200 dark:border-primary-800"
              >
                <Paper className="w-3 h-3" />
                <span>{tag.label}</span>
              </span>
            ))}
          </div>
          
          <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="font-medium text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {removeQuotations(description)}
          </p>
          
          {/* Read more indicator */}
          <div className="flex items-center justify-end mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium">Read more</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors duration-300 pointer-events-none" />
      </article>
    </Link>
  );
}
