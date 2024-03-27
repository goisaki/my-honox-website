import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-honox-website/",
  lang: "en-US",
  title: "HonoX",
  description: "The supersonic meta framework by Hono",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  themeConfig: {
    logo: "/images/logo-small.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/docs/" },
    ],

    sidebar: [
      {
        text: "Docs",
        collapsed: false,
        items: [
          { text: "What is HonoX?", link: "/docs/" },
          { text: "Getting Started", link: "/docs/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Yusuke Wada & Hono contributors<br/>Unofficial document written by @goisaki.',
    },
  },
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  titleTemplate: ":title - HonoX",
});
