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
import { HiZoomIn } from "react-icons/hi";

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "ConfigForge · by Opsora",
  tagline: "Practical docs, runbooks, and references for Microsoft 365 and Azure",
  favicon: "img/branding/favicon.png",

  // Set the production url of your site here
  url: "https://configforge.opsora.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "opsora", // Usually your GitHub org/user name.
  projectName: "configforge", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      de: {
        label: "Deutsch",
        direction: "ltr",
        htmlLang: "de-DE",
      },
    },
  },
  customFields: {
    placeholderImageURL:
      "https://ourcloudnetwork.com/wp-content/uploads/2023/10/Protecting-breakglassreakglass-accounts-with-Azure-Automation.png",
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
        googleTagManager: {
          containerId: "GTM-KCHFMND6",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
        // config: {
        //   // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        // }
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "DSZCBEOTTQ",

        // Public API key: it is safe to commit it
        apiKey: "2bc73651f502022ed21de5749c492913",

        indexName: "innovationforge",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|innovationforge\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },

      // Replace with your project's social card
      image: "img/configforge-social-card.jpg",
      navbar: {
        logo: {
          alt: "Home",
          src: "img/branding/logo-color-menu.png",
        },
        items: [
          {
            to: "/docs/intro",
            label: "Docs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/resources",
            label: "Resources",
            position: "left",
          },
          {
            href: "https://opsora.io",
            label: "Back to Opsora",
            position: "right",
            className: "btn btn-primary",
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
                href: "https://github.com/InnovationForge-com",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tobias-schuele/",
              },
            ],
          },
        ],
        copyright: `ConfigForge is the knowledge hub by Opsora. © ${new Date().getFullYear()} Opsora.`,
      },
      prism: {
        additionalLanguages: ["powershell"],
        defaultLanguage: "powershell",
      },
      liveCodeBlock: {
        playgroundPosition: "top",
      },
      scripts: [
        {
          src: '/js/language-theme-persistence.js',
          async: false,
        },
      ],
    } satisfies Preset.ThemeConfig,
  plugins: [
    // require.resolve('docusaurus-lunr-search'),
    require.resolve("docusaurus-plugin-image-zoom"),
    "docusaurus-plugin-sass",
    [
      "./src/plugin/plugin-content-docs",
      {
        path: "docs",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/InnovationForge-com/website/edit/master/",
      },
    ],
    [
      "./src/plugin/plugin-content-blog",
      {
        path: "blog",
        // routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/InnovationForge-com/website/edit/master/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogTitle: "InnovationForge's Blog",
        blogDescription: "Blog",
        blogSidebarCount: 10,
        blogSidebarTitle: "InnovationForge's Blog",
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          xslt: true,
          type: "all",
          title: "ConfigForge.com",
          copyright: `ConfigForge is the knowledge hub by Opsora. © ${new Date().getFullYear()} Opsora.`,
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
