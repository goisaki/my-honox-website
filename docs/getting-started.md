# Getting Started
Using HonoX is as easy as using Hono. We can set up the project, write code, develop with a local server, and deploy quickly. The same code will work on any runtime, just with different entry. Lets look the easiest way to use HonoX.

## Quick Start
The easiest way is to use a starter template with the `create-hono` command:

::: code-group

```txt [npm]
npm create hono@latest my-app
```

```txt [yarn]
yarn create hono my-app
```

```txt [pnpm]
pnpm create hono my-app
```

```txt [bun]
bunx create-hono my-app
```

```txt [deno]
deno run -A npm:create-hono my-app
```

:::

Run this command in a terminal and select `x-basic`:

```txt
? Which template do you want to use?
    ...
❯   x-basic
    ...
```
Next... No, that's it! The simplest project was created using Cloudflare Workers.

::: info
The tutorial will explain how to use HonoX after this using a demo application.
:::

## Use on other platforms

Currently we do not have guides or templates for platforms that are not Cloudflare Workers specific to HonoX.

But don't worry, HonoX was built by Hono author and committers using Hono, so you can probably get along just fine by referring to the Hono guides:

- [Cloudflare Pages](https://hono.dev/getting-started/cloudflare-pages)
- [Deno](https://hono.dev/getting-started/deno)
- [Bun](https://hono.dev/getting-started/bun)
- [Fastly Compute](https://hono.dev/getting-started/fastly)
- [Vercel](https://hono.dev/getting-started/vercel)
- [Netlify](https://hono.dev/getting-started/netlify)
- [AWS Lambda](https://hono.dev/getting-started/aws-lambda)
- [Lambda@Edge](https://hono.dev/getting-started/lambda-edge)
- [Supabase Functions](https://hono.dev/getting-started/supabase-functions)
- [Node.js](https://hono.dev/getting-started/nodejs)

> If you have enough time, please write a guide to add to this section. We are ready to support your challenge.