import React from "react";
import Lock from "../../Icons/Lock";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/solid";
import Chart from "../../Icons/Chart";

const SERVICES = [
  {
    id: 1,
    textColor: "text-primary-600",
    icon: <Lock className="w-4 h-4" />,
    title: "Microsoft 365 Architecture Design",
    description:
      "We tailor Microsoft 365 solutions to align with your business goals, ensuring a scalable and secure infrastructure that enhances collaboration and productivity across your organization.",
    link: "/services",

  },
  {
    id: 2,
    textColor: "text-purple-600",
    icon: <CheckCircleIcon className="w-4 h-4" />,
    title: "Security and Compliance Management",
    description:
      "Protect your data and ensure compliance with industry standards by leveraging advanced security features and best practices in Microsoft 365.",
    link: "/services",
  },
  {
    id: 3,
    textColor: "text-teal-500",
    icon: <CodeBracketIcon className="w-4 h-4" />,
    title: "Automation",
    description:
      "Automate complex administrative tasks within Microsoft 365, enhancing system management and operational efficiency.",
    link: "/services",

  },
  {
    id: 3,
    textColor: "text-teal-500",
    icon: <ArrowUpOnSquareStackIcon className="w-4 h-4" />,
    title: "Migrations",
    description:
      "We ensure a smooth and efficient migration process with minimal disruption to your business operations. Our expertise covers a wide range of Microsoft products, enabling you to leverage the full capabilities of the cloud while maintaining data integrity and security.",
    link: "/services",

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
            <div className="text-4xl font-extra-bold text-gray-900">
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
                        href={option.link}
                        title={option.title}
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
              <div className=" text-sm font-regular text-gray-500">
                We are committed to empowering your organization with the tools and strategies needed to succeed in a dynamic digital landscape. Whether it's improving efficiency, enhancing security, or driving innovation, we're here to support your journey towards digital transformation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
