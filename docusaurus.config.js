module.exports = {
  title: 'Ichnion',
  tagline: 'Visualize your digital footprint',
  url: 'https://ichnion.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ichnion', // Usually your Github org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ichnion',
      logo: {
        alt: 'Ichnion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ichnion/website',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Guide',
              to: 'docs/',
            },
            {
              label: 'Contribute',
              to: 'docs/contribute/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/8J4HqyXwa6',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/code4myself',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Github',
              href: 'https://github.com/ichnion/website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code for Myself. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ichnion/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ichnion/website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
