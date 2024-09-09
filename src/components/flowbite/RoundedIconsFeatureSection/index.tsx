import { Button } from "flowbite-react";
export function RoundedIconsFeatureSection({ title, description, features, buttonText, buttonLink }) {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            {description}
          </p>
        </div>
        <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-800 sm:p-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-24 lg:w-24">
                  <svg
                    aria-hidden="true"
                    className="h-10 w-10 text-primary-600 dark:text-primary-500 lg:h-12 lg:w-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center text-center lg:mt-16">
          <Button color="info" href={buttonLink} className="w-fit">
            {buttonText}
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
          </Button>
        </div>
      </div>
    </section>
  );
}