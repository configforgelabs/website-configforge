import React from "react";
import Lock from "../../Icons/Lock";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Chart from "../../Icons/Chart";

const SERVICES = [
  {
    id: 1,
    textColor: "text-primary-600",
    icon: <Lock className="w-4 h-4" />,
    title: "Private repos",
    description:
      "Host code that you don't want to share with the world in private GitHub repos only accessible to you and people you share them with.",
  },
  {
    id: 2,
    textColor: "text-purple-600",
    icon: <Chart className="w-4 h-4" />,
    title: "Dependency graph",
    description:
      "See the packages your project depends on, the repositories that depend on them, and any vulnerabilities detected in their dependencies.",
  },
  {
    id: 3,
    textColor: "text-teal-500",
    icon: <CodeBracketIcon className="w-4 h-4" />,
    title: "Code scanning",
    description:
      "Find vulnerabilities in custom code using static analysis. Prevent new vulnerabilities from being introduced by scanning every pull request.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <article>
            <img
              className="object-cover w-full rounded-lg"
              src="/img/services-overview.png"
              alt="featured image"
            />
          </article>
          <div>
            <div className="text-4xl font-extrabold">
              Short overview services offered
            </div>
            <div className="my-8 border border-solid w-full border-gray-200"></div>
            <div className="space-y-8">
              {SERVICES.map((option) => (
                <article key={option.id}>
                  <div className="flex items-start gap-x-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center w-8 min-w-8 h-8 rounded-full dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center">
                      {option.icon}
                    </span>
                    <div className="space-y-3">
                      <h2 className="text-2xl mb-0 font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                        <div>{option.title}</div>
                      </h2>

                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {option.description}
                      </p>

                      <a
                        href="#"
                        title=""
                        className={`flex items-center ${option.textColor} hover:underline dark:text-primary-500`}
                      >
                        <span className="text-base leading-none font-semibold">
                          Learn more
                        </span>
                        <FaChevronRight className="w-2.5 h-2.5 mt-1 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
              <div className="my-8 border border-solid w-full border-gray-200"></div>
              <div>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
