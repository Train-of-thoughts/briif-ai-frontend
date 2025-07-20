# SEO Files

This directory contains files for search engine optimization (SEO).

## Sitemap

The `sitemap.ts` file generates a sitemap.xml file at build time. The sitemap includes all public routes in the application, with variants for each supported locale (English, Ukrainian, and Czech).

### How it works

1. The sitemap generator uses the `I18N_LOCALES` constant from `src/lib/constants.ts` to determine which locales to include.
2. It defines a list of routes to include in the sitemap, along with metadata like last modified date, change frequency, and priority.
3. It generates sitemap entries for each combination of locale and route.
4. The base URL is determined from the `NEXT_PUBLIC_BASE_URL` environment variable, with a fallback to 'https://briif.ai'.

### Adding new routes

To add a new route to the sitemap, add it to the `routes` array in `sitemap.ts`:

```typescript
const routes: Route[] = [
  // Existing routes...
  {
    path: "new-route",
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];
```

## Robots.txt

The `robots.ts` file generates a robots.txt file at build time. This file tells search engines which pages they should crawl and where to find the sitemap.

### How it works

1. It allows crawling of all public pages.
2. It disallows crawling of API routes, dashboard pages, and auth pages.
3. It specifies the location of the sitemap.xml file.
4. The base URL is determined from the `NEXT_PUBLIC_BASE_URL` environment variable, with a fallback to 'https://briif.ai'.

### Updating disallowed routes

To update the list of disallowed routes, modify the `disallow` array in `robots.ts`:

```typescript
disallow: [
  '/api/',
  '/dashboard/',
  '/auth/',
  '/new-private-route/',
],
```