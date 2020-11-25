module.exports = {
  title: 'Ichnion',
  tagline: 'Visualize your digital footprint',
  url: 'https://ichnion.org',
  baseUrl: '/',
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
        {to: 'docs/introduction', label: 'About', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog/',
          activeBasePath: 'blog',
          label: 'News',
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
              to: 'docs/introduction',
            },
            {
              label: 'User Guide',
              to: 'docs/',
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
              label: 'Contribute',
              to: 'docs/contribute',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/8J4HqyXwa6',
            },
            {
              label: 'Github',
              href: 'https://github.com/ichnion/website',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'blog',
            },
            {
              label: 'Support us',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ichnion/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent news',
          editUrl: 'https://github.com/ichnion/website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
