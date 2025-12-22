# GitHub Pages Deployment Guide

This guide will help you deploy your Astromo Interactive website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. A GitHub repository for your website
3. Node.js and npm installed locally

## Deployment Steps

### Option 1: Automated Deployment with GitHub Actions

1. Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build site
        run: npm run generate
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.output/public'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

2. Push your code to GitHub
3. Go to your repository Settings → Pages
4. Set Source to "GitHub Actions"
5. The site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Manual Deployment

1. Build and deploy manually:
```bash
npm run deploy:github
```

## Configuration

Make sure your `nuxt.config.ts` has the correct base URL:

```typescript
export default defineNuxtConfig({
  app: {
    baseURL: '/repository-name/', // Replace with your repo name
    // ... other config
  }
})
```

## Custom Domain (Optional)

1. Create a `public/CNAME` file with your domain name:
```
yourdomain.com
```

2. Configure your domain's DNS to point to GitHub Pages:
```
CNAME record: www.yourdomain.com → yourusername.github.io
A records: yourdomain.com → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

## Troubleshooting

- Ensure all assets use relative paths
- Check that the base URL is correctly set
- Verify that all required dependencies are listed in package.json
- Make sure the deploy key has write permissions if using manual deployment