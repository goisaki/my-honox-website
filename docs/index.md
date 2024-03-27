> If you want to run the HonoX App first, please see [Getting Started](/docs/getting-started)

# What is HonoX?

HonoX is a "meta-framework combining Hono and Vite".

::: warning
HonoX is currently in a "alpha stage".
Breaking changes are introduced without following semantic versioning.
:::

## Why meta-framework?

The reason we call it a meta-framework is that **HonoX itself does not provide features**.
More specifically, because HonoX deals with "instances of Hono".

The proof is this code:

```ts{8}
// app/server.ts
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()
//    ^^^ Hono instance

showRoutes(app)

export default app
```

In this code, `app` is the Hono instance created by HonoX. So [`showRoutes`](https://hono.dev/helpers/dev#showroutes), Hono's Dev Helper, is working fine.

And File-based routing is by Vite.
We have created File-Based Routing with this code (very simplified for clarity):

```ts
const routes = import.meta.glob("/app/routes/**/*.(ts|tsx|mdx)");
for (const route of routes) {
  // ... Add a route to the Hono instance
}
```

---

These make HonoX simple and fast - on the shoulders of giants.
