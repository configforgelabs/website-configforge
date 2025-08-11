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
    <Link to={permalink} className="hover:no-underline blog-card-link">
      <article className="group bg-gradient-to-br from-white to-gray-50/30 dark:from-gray-800 dark:to-gray-800/70 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/30 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:border-primary/30 dark:hover:border-primary/40 hover:-translate-y-2">
        {imageSrc && (
          <div className="w-full h-[192px] rounded-xl relative overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
            <img
              src={imageSrc}
              className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        <div className={`flex-1 flex flex-col ${imageSrc ? 'mt-0' : 'mt-0'}`}>
          <div className="font-bold text-gray-900 dark:text-white text-xl mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight">{title}</div>

          <div className="font-medium text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
            {removeQuotations(description)}
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50">
            <div className="text-primary font-semibold text-sm">Read Article</div>
            <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
