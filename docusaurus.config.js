const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'WasiqBhamla';
const projectName = 'website';

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

  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./src/components/sidebars.js'),
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wasiq Bhamla',
        items: [
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
            href: 'https://github.com/WasiqB',
            label: 'GitHub',
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
                href: 'https://twitter.com/WasiqBhamla',
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
                href: 'https://github.com/WasiqB',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wasiq Bhamla. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: ['https://buttons.github.io/buttons.js'],
};
