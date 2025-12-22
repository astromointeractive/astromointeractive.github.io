# Vercel Deployment

This project is optimized for deployment on Vercel.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/astromo-website)

## Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
npm run deploy:vercel
```

## Configuration

Vercel will automatically detect this as a Nuxt.js project. No additional configuration is needed.

### Environment Variables (if needed)

Set environment variables in your Vercel dashboard under Project Settings → Environment Variables.