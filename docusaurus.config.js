module.exports = {
  title: 'Ichnion',
  tagline: 'Visualize your digital footprint',
  url: 'https://ichnion.code4myself.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'ichnion', // Usually your Github org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   contextualSearch: true,
    // },
//     announcementBar: {
//       id: 'announce_this',
//       content: 'Preview of the new project website!',
//       backgroundColor: '#fafbfc',
//       textColor: '#091E42',
//       isCloseable: true,
//     },
    navbar: {
      title: 'Ichnion Project',
      style: 'dark',
      logo: {
        alt: 'Ichnion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Documentation',
          to: 'docs/quickstart',
          position: 'right',
        },
        {
          label: 'Contact',
          to: 'docs/contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Quickstart',
              to: 'docs/quickstart',
            },
            {
              label: 'User Guide',
              to: 'docs/user',
            },
            {
              label: 'Developer Guide',
              to: 'docs/developer',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join us',
              to: 'docs/contact',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/HPFF83fTR4',
            },
            {
              label: 'Github',
              href: 'https://github.com/ichnion',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Supporter',
              to: 'docs/community/index',
            },
            {
              label: 'Get in touch',
              to: 'docs/contact',
            },
          ],
        },
       ],
      copyright: `Copyright © ${new Date().getFullYear()} Code for Myself. Built with Docusaurus.`,
    },
  },
  customFields: {},
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ichnion/website/edit/main/',
        },
        theme: {
          hideableSidebar: true,
          image: 'img/textlogo.png',
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
