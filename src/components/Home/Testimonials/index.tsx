import React from "react";

export default function Testimonials() {
  return (
    <div className="relative py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900">
        <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4"></div>
    </div>
  );
}
