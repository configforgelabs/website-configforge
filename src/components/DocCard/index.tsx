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

  return (
    <Link to={permalink} className="hover:no-underline group block h-full">
      <article className="card card-hover h-full p-6 flex flex-col justify-between group relative">
        <div className="flex-1 flex flex-col">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span 
                  key={`${permalink}-${tag.permalink}-${tag.label}`}
                  className="badge badge-primary inline-flex items-center gap-1.5"
                >
                  <Paper className="w-3 h-3" />
                  <span>{tag.label}</span>
                </span>
              ))}
              {tags.length > 3 && (
                <span className="badge badge-secondary">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-[oklch(var(--primary))] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[oklch(var(--foreground-muted))] text-sm leading-relaxed line-clamp-4 flex-1">
            {removeQuotations(description)}
          </p>
        </div>
        
        {/* Footer with read more indicator */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[oklch(var(--border))]">
          <span className="text-xs font-medium text-[oklch(var(--foreground-subtle))]">
            Documentation
          </span>
          
          <div className="flex items-center gap-2 text-[oklch(var(--primary))] opacity-60 group-hover:opacity-100 transition-all duration-300">
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

        {/* Subtle accent border on hover */}
        <div 
          className="absolute inset-0 rounded-[var(--radius)] border-2 border-transparent group-hover:border-[oklch(var(--primary)/0.2)] transition-colors duration-300 pointer-events-none"
          aria-hidden="true"
        />
      </article>
    </Link>
  );
}
