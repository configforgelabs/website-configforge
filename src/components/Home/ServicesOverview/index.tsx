import React from "react";

export default function ServicesOverview() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <article>
            <a href="#" title="">
              <img
                className="object-cover w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/blog-featured.png"
                alt="featured image"
              />
            </a>
          </article>
          <div>
            <div className="text-4xl font-extrabold">Short overview services offered</div>
            <div className="my-8 border border-solid w-full border-gray-200"></div>
            <div className="space-y-8">
              <article>
                <div className="space-y-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tutorial
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline" title="">
                      How to rank higher on Google (6 easy steps)
                    </a>
                  </h2>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              <article>
                <div className="space-y-3">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Interview
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline" title="">
                      How to schedule your tweets to send later
                    </a>
                  </h2>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              <article>
                <div className="space-y-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Marketing
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline" title="">
                      12 SEO best practices that everyone should follow
                    </a>
                  </h2>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
