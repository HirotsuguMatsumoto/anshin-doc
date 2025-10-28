import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'app',
        path: 'docs/app',
        routeBasePath: 'docs/app',
        sidebarPath: './sidebars.app.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'customer',
        path: 'docs/customer',
        routeBasePath: 'docs/customer',
        sidebarPath: './sidebars.customer.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reserve',
        path: 'docs/reserve',
        routeBasePath: 'docs/reserve',
        sidebarPath: './sidebars.reserve.ts',
      }
    ]

  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Anshin Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'appSidebar',
          docsPluginId: 'app',
          position: 'left',
          label: 'App',
        },
        {
          type: 'docSidebar',
          sidebarId: 'customerSidebar',
          docsPluginId: 'customer',
          position: 'left',
          label: 'Customer',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reserveSidebar',
          docsPluginId: 'reserve',
          position: 'left',
          label: 'Reserve',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Anshin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
