# Netlify Deployment

Deploy your Astromo Interactive website to Netlify.

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/astromo-website)

## Manual Deployment

1. Build the site:
```bash
npm run generate
```

2. Deploy to Netlify:
```bash
npm run deploy:netlify
```

## Netlify Configuration

Create a `netlify.toml` file in your project root:

```toml
[build]
  publish = ".output/public"
  command = "npm run generate"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Environment Variables

Set environment variables in your Netlify dashboard under Site Settings → Environment Variables.