---
titleTemplate: ':title'
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HonoX"
  text: "Fast, Simple, Full-stack"
  tagline: Unofficial documentation by <code><a href="https://github.com/goisaki">@goisaki</a></code>
  actions:
    - theme: brand
      text: View Docs
      link: /docs/
    - theme: alt
      text: View on GitHub
      link: https://github.com/goisaki/my-honox-websitee

features:
  - icon: 📁
    title: File-based routing
    details: You can create a large application like Next.js.
  - icon: ⚡️
    title: Fast SSR
    details: Rendering is ultra-fast thanks to Hono.
  - icon: 👜
    title: BYOR
    details: You can bring your own renderer, not only one using hono/jsx.
  - icon: 🏝️
    title: Islands hydration
    details: If you want interactions, create an island. JavaScript is hydrated only for it.
  - icon: 📦
    title: Middleware
    details: It works as Hono, so you can use a lot of Hono's middleware.
---
