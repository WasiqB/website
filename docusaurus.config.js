const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'WasiqBhamla';
const projectName = 'website';
const userName = 'WasiqB';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wasiq Bhamla',
  tagline: 'Open Source Contributor, Mentor and Senior QA Consultant at Thoughtworks',
  url: 'https://wasiqbhamla.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: organizationName,
  projectName: projectName,
  customFields: {
    user: userName,
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: 'docs/coteafs-appium',
          routeBasePath: '/projects/coteafs-appium',
          sidebarPath: require.resolve('./docs/coteafs-appium/sidebars.json'),
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: 'UA-111539609-2',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-9NJHG7BWSG',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'XWNN9QSB9W',
        apiKey: 'f1ecb0075381566530ac05e10d25bddf',
        indexName: 'production',
        contextualSearch: true,
      },
      image: 'img/home_banner.jpg',
      navbar: {
        title: 'Wasiq Bhamla',
        logo: {
          alt: 'Wasiq Logo',
          src: 'img/favicon.ico',
          srcDark: 'img/favicon.ico',
          width: 32,
          height: 32,
        },
        items: [
          {
            position: 'left',
            to: '/projects',
            label: 'Projects',
          },
          {
            position: 'left',
            to: '/about',
            label: 'About me',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: `https://github.com/${userName}`,
            'aria-label': 'GitHub profile',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/wasiqbhamla/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/5320558/wasiq-bhamla',
              },
              {
                label: 'Twitter',
                href: `https://twitter.com/${organizationName}`,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: `https://github.com/${userName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wasiq Bhamla. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'yaml'],
      },
    }),
};
