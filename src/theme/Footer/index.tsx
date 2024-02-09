import Github from "@site/src/components/Icons/Github";
import Gmail from "@site/src/components/Icons/Gmail";
import LinkedIn from "@site/src/components/Icons/LinkedIn";
import RSS from "@site/src/components/Icons/RSS";
import Teams from "@site/src/components/Icons/Teams";
import TeamsBlack from "@site/src/components/Icons/TeamsBlack";
import Youtube from "@site/src/components/Icons/Youtube";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <a
              href="#"
              className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
            >
              <img src="/img/light-logo.png" />
            </a>
            <p className="my-3 font-light text-gray-300 dark:text-gray-400">
              I’m Tobias Schüle and I started justinn.com as my personal blog
              where I can share my How To guides and opinions on everything
              Microsoft 365, Microsoft Entra and Azure.
            </p>
          </div>
          <div className="lg:mx-auto col-span-2">
            <ul className="text-gray-500 dark:text-gray-400">
              <div className="mb-4">
                <a href="/about" className="hover:underline text-white">
                  About
                </a>
              </div>
              <div className="mb-4">
                <a href="/blog" className="hover:underline text-white">
                  Blog
                </a>
              </div>
              <div className="mb-4">
                <a href="/projects" className="hover:underline text-white">
                  Project Offers
                </a>
              </div>
              <div className="mb-4">
                <a href="/docs/intro" className="hover:underline text-white">
                  Knowledge Base
                </a>
              </div>
              <div className="mb-4">
                <a href="/script" className="hover:underline text-white">
                  Script
                </a>
              </div>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <div className="text-white mb-4 text-sm font-semibold">
                Subscribe
              </div>
              <form action="#" className="flex w-full max-w-sm lg:ml-auto">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm text-center text-white rounded-r-lg border cursor-pointer bg-primary-600 border-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </form>
              <div className="text-gray-300/60 mt-3 text-xs font-semibold">
                We care about the protection of your data. Read our Privacy
                Policy.
              </div>
              <div className="text-white mt-6 mb-4 text-sm font-semibold">
                Follow
              </div>
              <div className="border-b-0 border-x-0 border-t border-solid border-gray-900 border-opacity-10 flex justify-between">
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center text-black rounded-md"
                >
                  <LinkedIn className="w-4 h-4 " />
                </a>
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center text-black rounded-md"
                >
                  <RSS className="w-4 h-4" />
                </a>
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center text-black rounded-md"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center text-black rounded-md"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center rounded-md text-transparent"
                >
                  <TeamsBlack className="w-[26px] h-[22px]" />
                </a>
                <a
                  href="https://example.com"
                  className="w-14 h-14 bg-[#F9FCFF] flex justify-center items-center text-black rounded-md"
                >
                  <Gmail className="w-[22px] h-[22px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-10"></hr>
        <div className="flex justify-between">
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024 JustInn. All rights reserved.
          </span>
          <div className="flex gap-x-5">
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              Privacy Policy
            </span>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
