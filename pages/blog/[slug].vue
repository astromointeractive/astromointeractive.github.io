<template>
  <article v-if="post" class="pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          :src="post.thumbnail"
          :alt="post.title"
          class="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/90 to-space-950/60"></div>
      </div>

      <div class="section-container relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-white/60">
            <li><NuxtLink to="/" class="hover:text-astromo-cyan transition-colors">Home</NuxtLink></li>
            <Icon name="heroicons:chevron-right" class="w-4 h-4" />
            <li><NuxtLink to="/blog" class="hover:text-astromo-cyan transition-colors">Blog</NuxtLink></li>
            <Icon name="heroicons:chevron-right" class="w-4 h-4" />
            <li class="text-white">{{ post.title }}</li>
          </ol>
        </nav>

        <!-- Article Header -->
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="heading-xl text-gradient mb-6">{{ post.title }}</h1>
          
          <p class="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {{ post.description }}
          </p>

          <!-- Article Meta -->
          <div class="flex flex-wrap justify-center items-center gap-6 text-white/70 mb-8">
            <div class="flex items-center">
              <Icon name="heroicons:user" class="w-4 h-4 mr-2" />
              <span>{{ post.author }}</span>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:calendar-days" class="w-4 h-4 mr-2" />
              <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:clock" class="w-4 h-4 mr-2" />
              <span>{{ post.readingTime }} min read</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-3 py-1 bg-astromo-cyan/10 text-astromo-cyan border border-astromo-cyan/20 text-sm rounded-full"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Share Buttons -->
          <div class="flex justify-center gap-4">
            <button 
              @click="sharePost('twitter')"
              class="p-3 glass rounded-full hover:bg-astromo-cyan/10 transition-all duration-300 group"
              aria-label="Share on Twitter"
            >
              <Icon name="simple-icons:x" class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" />
            </button>
            <button 
              @click="sharePost('linkedin')"
              class="p-3 glass rounded-full hover:bg-astromo-cyan/10 transition-all duration-300 group"
              aria-label="Share on LinkedIn"
            >
              <Icon name="simple-icons:linkedin" class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" />
            </button>
            <button 
              @click="sharePost('copy')"
              class="p-3 glass rounded-full hover:bg-astromo-cyan/10 transition-all duration-300 group"
              aria-label="Copy link"
            >
              <Icon name="heroicons:link" class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-16">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <!-- Featured Image -->
          <div class="mb-12 relative overflow-hidden rounded-2xl shadow-glow">
            <NuxtImg
              :src="post.thumbnail"
              :alt="post.title"
              class="w-full h-auto"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-space-950/30 to-transparent"></div>
          </div>

          <!-- Article Body -->
          <div class="prose prose-lg prose-invert max-w-none">
            <ContentRenderer :value="post" />
          </div>

          <!-- Article Footer -->
          <div class="mt-16 pt-8 border-t border-white/10">
            <!-- Author Info -->
            <div class="glass-dark p-6 rounded-xl mb-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-16 h-16 bg-astromo-cyan/20 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:user" class="w-8 h-8 text-astromo-cyan" />
                </div>
                <div>
                  <h3 class="font-orbitron font-semibold text-white text-lg">{{ post.author }}</h3>
                  <p class="text-white/70">Astromo Interactive Team</p>
                </div>
              </div>
              <p class="text-white/80 leading-relaxed">
                Part of the creative team behind Astromo Interactive's space-themed gaming adventures. 
                Passionate about creating immersive experiences that transport players to extraordinary worlds.
              </p>
            </div>

            <!-- Share Again -->
            <div class="text-center mb-8">
              <h3 class="font-orbitron font-semibold text-white text-lg mb-4">Share This Article</h3>
              <div class="flex justify-center gap-4">
                <button 
                  @click="sharePost('twitter')"
                  class="btn-secondary"
                >
                  <Icon name="simple-icons:x" class="w-4 h-4 mr-2" />
                  Tweet
                </button>
                <button 
                  @click="sharePost('linkedin')"
                  class="btn-secondary"
                >
                  <Icon name="simple-icons:linkedin" class="w-4 h-4 mr-2" />
                  Share
                </button>
                <button 
                  @click="sharePost('copy')"
                  class="btn-secondary"
                >
                  <Icon name="heroicons:link" class="w-4 h-4 mr-2" />
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Posts -->
    <section v-if="relatedPosts.length" class="py-16 bg-space-900/20">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="heading-md text-gradient mb-4">Related Articles</h2>
          <p class="text-white/70">Continue exploring our development journey</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BlogCard 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost._path"
            :post="blogCardData(relatedPost)"
            class="animate-slide-up"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-secondary">
            View All Posts
            <Icon name="heroicons:arrow-right" class="inline ml-2 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16">
      <div class="section-container">
        <div class="glass-dark rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 class="heading-md text-gradient mb-6">Stay Updated</h2>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest development insights, game updates, and behind-the-scenes content 
            delivered straight to your inbox.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 px-4 py-3 bg-space-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-astromo-cyan focus:outline-none focus:ring-1 focus:ring-astromo-cyan"
            />
            <button class="btn-primary px-8 py-3 whitespace-nowrap">
              Subscribe
              <Icon name="heroicons:paper-airplane" class="inline ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const postSlug = route.params.slug as string

// Fetch post data
const { data: post } = await queryContent(`/blog/${postSlug}`).findOne()

// Handle 404
if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

// Meta tags
useHead({
  title: `${post.title} - Astromo Interactive Blog`,
  meta: [
    { name: 'description', content: post.description },
    { property: 'og:title', content: `${post.title} - Astromo Interactive` },
    { property: 'og:description', content: post.description },
    { property: 'og:image', content: post.thumbnail },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: post.publishedAt },
    { property: 'article:author', content: post.author },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Fetch related posts
const { data: allPosts } = await queryContent('/blog').find()
const relatedPosts = computed(() => {
  if (!allPosts) return []
  
  // Find posts with similar tags
  const currentTags = post.tags || []
  const related = allPosts
    .filter((p: any) => p._path !== post._path)
    .map((p: any) => {
      const commonTags = (p.tags || []).filter((tag: string) => currentTags.includes(tag))
      return {
        ...p,
        similarity: commonTags.length
      }
    })
    .sort((a: any, b: any) => b.similarity - a.similarity)
    .slice(0, 3)
    
  return related
})

// Utility functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const blogCardData = (post: any) => ({
  slug: post._path?.split('/').pop(),
  title: post.title,
  description: post.description,
  publishedAt: post.publishedAt,
  thumbnail: post.thumbnail,
  tags: post.tags || [],
  readingTime: post.readingTime,
  author: post.author
})

const sharePost = async (platform: string) => {
  const url = window.location.href
  const title = post.title
  const text = post.description
  
  switch (platform) {
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&hashtags=IndieGameDev,SpaceGames`, '_blank')
      break
    case 'linkedin':
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
      break
    case 'copy':
      try {
        await navigator.clipboard.writeText(url)
        // You could add a toast notification here
        console.log('URL copied to clipboard')
      } catch (error) {
        console.error('Failed to copy URL:', error)
      }
      break
  }
}

// Structured data for SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.thumbnail,
  author: {
    '@type': 'Person',
    name: post.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Astromo Interactive',
    logo: {
      '@type': 'ImageObject',
      url: '/assets/logo/astrologo.png'
    }
  },
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://astromo-interactive.github.io/blog/${postSlug}`
  }
})
</script>

<style scoped>
/* Custom prose styles for blog content */
.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(to right, #00ddeb, white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.prose :deep(h1) {
  font-size: 2.25rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.prose :deep(h1:first-child) {
  margin-top: 0;
}

.prose :deep(h2) {
  font-size: 1.875rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose :deep(h2:first-child) {
  margin-top: 0;
}

.prose :deep(h3) {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose :deep(h4) {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose :deep(p) {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-bottom: 1.5rem;
}

.prose :deep(ul li),
.prose :deep(ol li) {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.prose :deep(ul li::marker) {
  color: #00ddeb;
}

.prose :deep(strong) {
  color: #00ddeb;
  font-weight: 600;
}

.prose :deep(em) {
  color: white;
  font-style: italic;
}

.prose :deep(blockquote) {
  border-left: 4px solid #00ddeb;
  background: rgba(0, 221, 235, 0.05);
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.prose :deep(blockquote p) {
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-bottom: 0;
}

.prose :deep(code) {
  background: rgba(30, 41, 59, 0.5);
  color: #00ddeb;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.prose :deep(pre) {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.prose :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
  color: white;
}

.prose :deep(a) {
  @apply text-astromo-cyan hover:text-white transition-colors duration-300 underline decoration-astromo-cyan/30 hover:decoration-white/50;
}

.prose :deep(hr) {
  @apply border-white/20 my-12;
}
</style>