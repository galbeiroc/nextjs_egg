# NextJS

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

## App Router

The App Router is a file-system based router that uses React's latest features such as Server Components, Suspense, and Server Functions.

`page.tsx` is a reserved file name same for `layout.tsx`.

`page` tells to nextjs it should render a page. It is a react component function.
`layout` Define the shell around one or more pages. Every NextJS project needs at least one root layout file. `children` that will simply be the content of the page, that's currently active.

These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS - you'll, of course, learn about the important ones throughout this section:

    page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

    layout.js => Create a new layout that wraps sibling and nested pages

    not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

    error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

    loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

    route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

<https://nextjs.org/docs/app/api-reference/file-conventions>

**_React Server Components RSC_** Render only on the server never on the client. Page/HTML content is rendered on the server & send to the client.

## Linking and Navigation

In Next.js, routes are rendered on the server by default. This often means the client has to wait for a server response before a new route can be shown. Next.js comes with built-in `prefetching`, `streaming`, and `client-side transitions`ensuring navigation stays fast and responsive.

### Server Rendering

In Next.js, Layouts and Pages are React Server Components by default.
There are two types of server rendering, based on when it happens:

- Static Rendering (or Prerendering) happens at build time or during revalidation and the result is cached.
- Dynamic Rendering happens at request time in response to a client request.

The trade-off of server rendering is that the client must wait for the server to respond before the new route can be shown. Next.js addresses this delay by `prefetching` routes the user is likely to visit and performing `client-side transitions`.

### Prefetching

Prefetching is the process of loading a route in the background before the user navigates to it. This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.
Next.js automatically prefetches routes linked with the `<Link>` component when they enter the user's viewport.

How much of the route is prefetched depends on whether it's static or dynamic:

- Static Route: the full route is prefetched.
- Dynamic Route: prefetching is skipped, or the route is partially prefetched if `loading.tsx` is present.

To improve the navigation experience to dynamic routes, you can use streaming.

### Streaming

Streaming allows the server to send parts of a dynamic route to the client as soon as they're ready, rather than waiting for the entire route to be rendered. This means users see something sooner, even if parts of the page are still loading.
To use streaming, create a `loading.tsx` in your route folder.

## Components

### Link Component

`<Link>` is a React component that extends the HTML `<a>` element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.
[https://nextjs.org/docs/app/api-reference/components/link](Link Docs)

### Image Component

The Next.js Image component extends the HTML `<img>` element for automatic image optimization.
[https://nextjs.org/docs/app/api-reference/components/image](Image Docs)

## Server vs Client Components

### React Server Components RSC

The Backend executes the server component functions & hence derives the to-be-rendered HTML code.

* Component that are only rendered on the server.
* Code is executed on the Backend when working with NextJS.
* By the default, all React components (in NextJS) are RSCs
* ***Advantage:*** Less client-side JS great SEO (Search Engine Optimization).

### Client Components

The client side receives & renders the to-be-rendered HTML code.

* Components that are pre-rendered on the server but then also potentially on the client.
* Opt-vi "use client" directive
* * ***Advantage:*** Client-side interactivity

## Server Actions

React Server Actions are Server Functions that execute on the server. They can be called in Server and Client Components to handle form submissions. This guide will walk you through how to create forms in Next.js with Server Actions.

Server Functions allow Client Components to call async functions executed on the server.

```ts
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }

    // mutate data
    // revalidate the cache
  }

  return <form action={createInvoice}>...</form>
}
```
