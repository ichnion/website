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
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'User Guide',
              to: 'docs/',
            },
            {
              label: 'Developer Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Contribute',
              to: 'docs/',
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
              label: 'Blog',
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
