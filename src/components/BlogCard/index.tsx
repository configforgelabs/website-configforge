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
    <Link 
      to={permalink} 
      className="group block no-underline hover:no-underline transition-all duration-300 ease-out"
      style={{ textDecoration: 'none' }}
    >
      <article className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/30 dark:shadow-gray-900/50 border-2 border-gray-200/50 dark:border-gray-800/50 h-full flex flex-col transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-primary/15 dark:group-hover:shadow-primary/25 group-hover:border-primary group-focus:border-primary focus:border-primary dark:group-hover:border-primary dark:group-focus:border-primary dark:focus:border-primary">
        
        {/* Modern Image Container with Overlay */}
        {imageSrc && (
          <div className="relative h-48 sm:h-52 overflow-hidden">
            <img
              src={imageSrc}
              className="w-full h-full object-cover transition-all duration-300 ease-out"
              alt={title}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Action Indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            {/* Content Type Badge */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <Paper className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Article</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6">
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium"
                >
                  {tag.label}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
            {removeQuotations(description)}
          </p>
          
          {/* Action Footer */}
          <div className="flex items-center justify-start pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Read more
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
