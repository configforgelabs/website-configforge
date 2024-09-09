import { Button, Tooltip } from "flowbite-react";
import React from "react";

// Define a type for the props to improve readability and maintainability
interface Technology {
  name: string;
  icon: string;
}

interface ProjectSectionProps {
  title: string;
  link?: string;
  linkText?: string;
  description: string;
  imageSrc: string;
  darkImageSrc: string;
  technologies: Technology[];
  reverse?: boolean;
  linkUrl?: string;
}

// Reusable component to render a project section
const AlternateSections: React.FC<ProjectSectionProps> = ({
  title,
  link,
  linkText,
  description,
  imageSrc,
  darkImageSrc,
  technologies,
  reverse,
  linkUrl
}) => {
  return (
    <div className={`flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div>
        <img className="w-full rounded-lg object-cover shadow-lg dark:hidden" src={imageSrc} alt={title} />
        <img className="hidden w-full rounded-lg object-cover shadow-lg dark:block" src={darkImageSrc} alt={title} />
      </div>
      <div className="w-full shrink-0 space-y-6 lg:max-w-lg xl:max-w-2xl">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h3>
          {link && linkText && (
            <a href={link} title={linkText} className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              {linkText}
              <svg
                aria-hidden="true"
                className="ml-2.5 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          )}
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg">
            {description}
          </p>
        </div>
        <TechnologyIcons technologies={technologies} />
        {linkUrl && (
          <Button className="bg-blue-600 hover:bg-blue-600">
            <a
              href={linkUrl}
              className="text-white no-underline inline-flex items-center justify-center w-full h-full"
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'none'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              style={{ width: '100%', height: '100%', justifyContent: 'center' }}
            >
              Read more
              <svg
                aria-hidden="true"
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

// Reusable component to render technology icons with tooltips
const TechnologyIcons: React.FC<{ technologies: Technology[] }> = ({ technologies }) => (
  <div className="flex items-center gap-2.5">
    {technologies.map((tech) => (
      <Tooltip key={tech.name} content={tech.name}>
        <img className="h-8 w-auto object-contain" src={tech.icon} alt={tech.name} />
      </Tooltip>
    ))}
  </div>
);

export default AlternateSections;
