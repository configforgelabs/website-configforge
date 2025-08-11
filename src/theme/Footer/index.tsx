import Github from "@site/src/components/Icons/Github";
import Gmail from "@site/src/components/Icons/Gmail";
import LinkedIn from "@site/src/components/Icons/LinkedIn";
import RSS from "@site/src/components/Icons/RSS";
import Teams from "@site/src/components/Icons/Teams";
import TeamsBlack from "@site/src/components/Icons/TeamsBlack";
import Youtube from "@site/src/components/Icons/Youtube";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-700">
      <div className="p-4 py-[48px] lg:py-16 mx-auto max-w-screen-xl md:p-8">
        <div className="lg:grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            {/* <a
              href="#"
              className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white w-[140px] lg:w-auto"
            >
              <img src="/img/light-logo.png" />
            </a> */}
            <p className="my-3 font-light text-gray-300 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
              I'm Tobias Schuele, and I founded InnovationForge.com as a platform to share my expertise in Microsoft 365, Automation and Azure.
              Through this site, I provide how-to guides, insights, and solutions for businesses looking to optimize their cloud environments and
              automation strategies.
            </p>
          </div>
          <div className="lg:mx-auto mt-[40px] lg:mt-0 lg:col-span-2 font-medium text-sm">
            <ul className="text-gray-400 dark:text-gray-500 p-0 space-y-3">
              <li>
                <a href="/about" className="hover:text-white hover:underline transition-colors duration-200 text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white hover:underline transition-colors duration-200 text-gray-300">
                  Blog
                </a>
              </li>
              {/* <li>
                <a href="/services" className="hover:text-white hover:underline transition-colors duration-200 text-gray-300">
                  Project Offers
                </a>
              </li> */}
              <li>
                <a href="/docs/intro" className="hover:text-white hover:underline transition-colors duration-200 text-gray-300">
                  Knowledge Base
                </a>
              </li>
              {/* <li>
                <a href="/resources" className="hover:text-white hover:underline transition-colors duration-200 text-gray-300">
                  Resources
                </a>
              </li> */}
            </ul>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <div className="text-white mb-6 text-sm font-semibold">
                Subscribe to our newsletter
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
                      className="w-5 h-5 text-gray-400"
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
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-r-lg border cursor-pointer bg-primary hover:bg-primary/90 border-primary focus:ring-4 focus:ring-primary/30 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
              <div className="text-gray-400 mt-3 text-xs leading-relaxed">
                We care about the protection of your data. Read our{' '}
                <a href="/privacy" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </a>.
              </div>
              <div className="text-white mt-8 mb-4 text-sm font-semibold">
                Follow us
              </div>
              <div className="border-t border-gray-800 dark:border-gray-700 pt-4 gap-x-3 flex justify-start lg:justify-center">
                <a
                  href="https://www.linkedin.com/in/tobias-schuele/"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                  title="LinkedIn"
                >
                  <LinkedIn className="w-4 h-4" />
                </a>
                <a
                  href="https://innovationforge.com/blog/rss.xml"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                  title="RSS Feed"
                >
                  <RSS className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/InnovationForge-com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=tobias@innovationforge.com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center rounded-lg transition-all duration-200 hover:scale-105"
                  title="Microsoft Teams"
                >
                  <TeamsBlack className="w-6 h-5" />
                </a>
                <a
                  href="mailto:tobias@innovationforge.com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                  title="Email"
                >
                  <Gmail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-800 dark:border-gray-700"></hr>
        <div className="text-center md:flex justify-between items-center">
          <span className="block text-sm text-center text-gray-400 dark:text-gray-500">
            © 2024 InnovationForge. All rights reserved.
          </span>
          <div className="text-center md:flex gap-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="block text-sm text-center text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 my-2 md:my-0">
              Privacy Policy
            </a>
            <a href="/terms" className="block text-sm text-center text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
