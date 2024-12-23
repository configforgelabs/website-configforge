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
    <Link to={permalink} className="hover:no-underline">
      <article className="bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,10%)] rounded-sm p-6 flex flex-col justify-between h-full">
        {imageSrc && (
          <div className="w-full h-[192px] rounded-[8px] relative overflow-hidden">
            <img
              src={imageSrc}
              className="object-cover object-center w-full h-full"
              alt={title}
            />
          </div>
        )}

        <div className="mt-6 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span 
                key={`${tag.permalink}-${tag.label}`} 
                className="bg-primary-100 text-primary-800 font-medium me-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center gap-x-1"
              >
                <Paper className="w-3 h-3" />
                <span className="text-xs">{tag.label}</span>
              </span>
            ))}
          </div>
          <div className="font-bold text-gray-900 text-xl my-2">{title}</div>

          <div className="font-medium text-gray-500 text-sm">
            {removeQuotations(description)}
          </div>
        </div>
      </article>
    </Link>
  );
}
