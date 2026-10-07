// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PhysicsVerse',
  tagline: 'এইচএসসি পদার্থবিজ্ঞানের পরিপূর্ণ লার্নিং প্ল্যাটফর্ম',
  favicon: 'img/favicon.ico',

  // আপনার গিটহাব পেজের ইউআরএল কনফিগারেশন
  url: 'https://physicsverse.github.io',
  baseUrl: '/',

  organizationName: 'physicsverse',
  projectName: 'physicsverse.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'bn',
    locales: ['bn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // KaTeX প্লাগিন যোগ করা হলো
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false, // যেহেতু এটি লার্নিং প্ল্যাটফর্ম, ব্লগ আপাতত বন্ধ রাখা হলো
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // KaTeX CSS ও গুগল বাংলা ফন্ট লিঙ্ক
  stylesheets: [
    // বাংলা ফন্ট (Hind Siliguri) এবং ইন্টার (Inter)
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
    // KaTeX CSS লিঙ্ক
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PhysicsVerse',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'paper1Sidebar',
            position: 'left',
            label: 'পদার্থবিজ্ঞান ১ম পত্র',
          },
          {
            type: 'docSidebar',
            sidebarId: 'paper2Sidebar',
            position: 'left',
            label: 'পদার্থবিজ্ঞান ২য় পত্র',
          },
        ],
      },
    }),
};

export default config;