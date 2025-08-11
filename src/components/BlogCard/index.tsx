import Link from "@docusaurus/Link";
import Paper from "../Icons/Paper";
import Video from "../Icons/Video";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { removeQuotations } from "@site/src/lib/utils";
import { motion } from "framer-motion";

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

const cardHover = {
  hover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function DocCard(props: DocCardProps) {
  const { permalink, title, tags = [], description, image } = props;

  const configContext = useDocusaurusContext();
  const { customFields } = configContext.siteConfig;
  const imageSrc = image ?? (customFields?.placeholderImageURL as string);

  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="group h-full"
    >
      <Link to={permalink} className="hover:no-underline block h-full">
        <article className="h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 transition-all duration-300 overflow-hidden backdrop-blur-sm flex flex-col">
          {imageSrc && (
            <div className="relative overflow-hidden">
              <div className="aspect-[16/10] relative">
                <img
                  src={imageSrc}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={title}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Tags positioned over image */}
              {tags.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {tags.slice(0, 2).map((tag) => (
                    <span 
                      key={`${tag.permalink}-${tag.label}`} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/20"
                    >
                      <Paper className="w-3 h-3" />
                      {tag.label}
                    </span>
                  ))}
                  {tags.length > 2 && (
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/20">
                      +{tags.length - 2}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4 flex-1">
              {removeQuotations(description)}
            </p>

            {/* Bottom Section with Read More */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Documentation
              </div>
              
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
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
    </motion.div>
  );
}
