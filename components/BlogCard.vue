<template>
  <article class="blog-card">
    <!-- Featured Image -->
    <div class="relative overflow-hidden">
      <NuxtImg
        :src="post.thumbnail || '/assets/logo/AstromoIntro.jpg'"
        :alt="post.title"
        class="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div class="image-overlay"></div>
    </div>

    <!-- Post Content -->
    <div class="p-6">
      <!-- Date -->
      <div class="flex items-center text-astromo-cyan/70 text-sm mb-3">
        <Icon name="heroicons:calendar-days" class="w-4 h-4 mr-2" />
        <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
      </div>

      <!-- Title -->
      <h3 class="font-orbitron font-semibold text-lg text-white mb-3 group-hover:text-astromo-cyan transition-colors duration-300 line-clamp-2">
        {{ post.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-white/70 mb-4 leading-relaxed line-clamp-3">
        {{ post.description }}
      </p>

      <!-- Read More Link -->
      <NuxtLink 
        :to="`/blog/${post.slug}`"
        class="inline-flex items-center text-astromo-cyan hover:text-white transition-colors duration-300 font-medium"
      >
        Read More
        <Icon name="heroicons:arrow-right" class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </NuxtLink>

      <!-- Tags (if available) -->
      <div v-if="post.tags && post.tags.length" class="mt-4 flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag"
          class="px-2 py-1 bg-space-800/50 text-astromo-cyan/70 text-xs rounded border border-astromo-cyan/20"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Reading time (if available) -->
      <div v-if="post.readingTime" class="mt-4 text-white/50 text-sm flex items-center">
        <Icon name="heroicons:clock" class="w-4 h-4 mr-2" />
        {{ post.readingTime }} min read
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  thumbnail?: string
  tags?: string[]
  readingTime?: number
}

interface Props {
  post: BlogPost
}

defineProps<Props>()

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Blog card styles are handled by Tailwind classes */

/* Line clamp utilities for text truncation */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}

/* Additional hover effects */
.blog-card:hover .image-overlay {
  background: linear-gradient(
    to top,
    rgba(10, 10, 15, 0.8) 0%, 
    rgba(0, 221, 235, 0.05) 50%,
    transparent 100%
  );
}
</style>