// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Compatibility
  compatibilityDate: '2025-07-15',
  
  // Static site generation for GitHub Pages
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/games', '/blog', '/about'],
      crawlLinks: true
    }
  },
  
  // GitHub Pages configuration
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/astromointeractive.github.io/' : '/'
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],

  // Content module configuration
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['typescript', 'javascript', 'vue']
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  // Google Fonts
  googleFonts: {
    families: {
      'Orbitron': [300, 400, 500, 600, 700], // Futuristic primary font
      'Inter': [300, 400, 500, 600, 700], // Clean secondary font
      'JetBrains Mono': [400, 500] // Code font
    },
    display: 'swap'
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  // App configuration
  app: {
    head: {
      title: 'Astromo Interactive - Game Development Studio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Astromo Interactive is an indie game development studio creating innovative games that transport players to new worlds. Discover our latest space-themed adventures.' },
        { name: 'theme-color', content: '#0a0a0f' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Astromo Interactive - Game Development Studio' },
        { property: 'og:description', content: 'Astromo Interactive is an indie game development studio creating innovative games that transport players to new worlds.' },
        { property: 'og:image', content: '/og-image.jpg' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Astromo Interactive - Game Development Studio' },
        { name: 'twitter:description', content: 'Astromo Interactive is an indie game development studio creating innovative games that transport players to new worlds.' },
        { name: 'twitter:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://astromo-interactive.github.io' }
      ]
    }
  },

  // CSS
  // css: ['~/assets/css/main.css'],

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: 'https://astromo-interactive.github.io'
    }
  },

  // Image optimization
  image: {
    format: ['webp', 'avif'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  // Development tools
  devtools: { enabled: true },

  // Typescript
  typescript: {
    strict: true
  }
})
