# Sitemap Generation

This project includes a dynamic sitemap generator that follows Google SEO best practices.

## Features

- ✅ Uses real `updatedAt` timestamps from file system
- ✅ Omits `<lastmod>` if data is unavailable
- ✅ Excludes `<changefreq>` and `<priority>` (not recommended by Google)
- ✅ Automatically generates sitemap before build

## Usage

### Automatic Generation (Recommended)

The sitemap is automatically generated when you run:

```bash
npm run build
```

### Manual Generation

To generate the sitemap manually:

```bash
npm run generate:sitemap
```

This will create/update `public/sitemap.xml` with all routes and their last modified dates.

## Next.js Migration

If you migrate to Next.js, use the `app/sitemap.ts` file instead. Next.js will automatically:
- Serve the sitemap at `/sitemap.xml`
- Regenerate it on-demand
- Follow the same SEO best practices

## Configuration

To update routes, edit the `routes` array in:
- `scripts/generate-sitemap.ts` (for Vite/current setup)
- `app/sitemap.ts` (for Next.js)

## Google SEO Best Practices

This sitemap follows Google's recommendations:
- ✅ Only includes `lastmod` when actual modification dates are available
- ✅ Excludes `changefreq` and `priority` (Google ignores these)
- ✅ Uses ISO 8601 date format (YYYY-MM-DD)
- ✅ Includes all public pages
- ✅ Uses proper XML structure
