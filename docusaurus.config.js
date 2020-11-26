module.exports = {
  title: 'Ichnion',
  tagline: 'Visualize your digital footprint',
  url: 'https://ichnion.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'ichnion', // Usually your Github org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ichnion Project',
      style: 'dark',
      logo: {
        alt: 'Ichnion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/about', label: 'About', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'contact', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs/about',
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
              to: 'docs/join',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/8J4HqyXwa6',
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
              to: 'support',
            },
            {
              label: 'Get in touch',
              to: 'contact',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              to: 'legal/privacy',
            },
            {
              label: 'Terms',
              to: 'legal/terms',
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
