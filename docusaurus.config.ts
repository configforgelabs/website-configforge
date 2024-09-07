import path from "node:path";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "JustInnovate - Tobias Schuele",
  tagline: "M365 Architect & Automation Engineer",
  favicon: "img/branding/favicon.png",

  // Set the production url of your site here
  url: "https://justinn.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "justinnio", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    placeholderImageURL: "https://ourcloudnetwork.com/wp-content/uploads/2023/10/Protecting-breakglassreakglass-accounts-with-Azure-Automation.png",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: false,
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Home",
          src: "img/branding/logo-color.png",
          width: 196,
          height: 60,
        },
        items: [
          {
            to: "/",
            label: "Home",
            position: "right",
            activeBaseRegex: "/^$|/$"
          },
          {
            to: "services",
            label: "Service Offers",
            position: "right",
          },
          {
            to: "about",
            label: "About",
            position: "right",
          },
          { to: "blog", label: "Blog", position: "right" },

          {
            to: "docs/intro",
            label: "Knowledge Base",
            position: "right",
            activeBasePath: "/docs"
          },
          {
            to: "resources",
            label: "Resources",
            position: "right",
          },
          {
            to: "contact",
            label: "Contact",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/justinnio",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tobias-schuele/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tobias Schüle - JustInn<p><a href="https://www.linkedin.com/in/tobias-schuele" class="footer_lin">LinkedIn</a></p>`,
      },
      prism: {
        additionalLanguages: ["powershell"],
        defaultLanguage: "powershell",
      },
      liveCodeBlock: {
        playgroundPosition: "top",
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    "docusaurus-plugin-sass",
    [
      "./src/plugin/plugin-content-docs",
      {
        path: "docs",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/justinnio/website/edit/master/",
      },
    ],
    [
      "./src/plugin/plugin-content-blog",
      {
        path: "blog",
        // routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/justinnio/website/edit/master/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogTitle: "JustInn's Blog",
        blogDescription: "Blog",
        blogSidebarCount: 10,
        blogSidebarTitle: "JustInn's Blog",
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: "all",
          title: "JustInn's Blog RSS Feed",
          copyright: `Copyright © ${new Date().getFullYear()} Tobias Schüle - JustInnovate<p><a href="https://www.linkedin.com/in/tobias-schuele" class="footer_lin">LinkedIn</a></p>`,
        },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        authorsMapPath: "authors.yml",
        postsPerPage: 9,
        blogPostComponent: "@theme/BlogPostPage",
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
