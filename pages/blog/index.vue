<template>
  <div class="pt-20">
    <!-- Header Section -->
    <section class="py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h1 class="heading-xl text-gradient mb-6">Development Log</h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Behind-the-scenes insights, development updates, and thoughts on the art of creating 
            games that transport players to extraordinary worlds. Join us on our journey through 
            the cosmos of indie game development.
          </p>
        </div>

        <!-- Featured Post -->
        <div v-if="featuredPost" class="mb-16">
          <div class="glass-dark rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <!-- Image -->
              <div class="relative overflow-hidden lg:h-80">
                <NuxtImg
                  :src="featuredPost.thumbnail"
                  :alt="featuredPost.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                
                <!-- Featured Badge -->
                <div class="absolute top-6 left-6">
                  <span class="bg-astromo-red px-4 py-2 rounded-full text-white text-sm font-medium shadow-glow-red">
                    <Icon name="heroicons:star" class="inline w-4 h-4 mr-1" />
                    Featured
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="flex items-center text-astromo-cyan text-sm mb-4">
                  <Icon name="heroicons:calendar-days" class="w-4 h-4 mr-2" />
                  <time :datetime="featuredPost.publishedAt">{{ formatDate(featuredPost.publishedAt) }}</time>
                  <span class="mx-2">•</span>
                  <span>{{ featuredPost.readingTime }} min read</span>
                </div>

                <h2 class="font-orbitron font-bold text-2xl lg:text-3xl text-white mb-4 group-hover:text-astromo-cyan transition-colors duration-300">
                  {{ featuredPost.title }}
                </h2>
                
                <p class="text-white/70 text-lg mb-6 leading-relaxed">
                  {{ featuredPost.description }}
                </p>

                <div class="flex items-center justify-between">
                  <NuxtLink 
                    :to="`/blog/${featuredPost._path.split('/').pop()}`"
                    class="btn-primary"
                  >
                    Read Full Post
                    <Icon name="heroicons:arrow-right" class="inline ml-2 w-4 h-4" />
                  </NuxtLink>

                  <div class="text-white/50 text-sm">
                    by {{ featuredPost.author }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Posts Section -->
    <section class="pb-20">
      <div class="section-container">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <div class="flex justify-between items-center mb-8">
              <h2 class="heading-md text-white">All Posts</h2>
              
              <!-- Sort Options -->
              <select 
                v-model="sortBy"
                class="bg-space-800/50 border border-white/10 text-white rounded-lg px-4 py-2 focus:border-astromo-cyan focus:outline-none focus:ring-1 focus:ring-astromo-cyan"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <!-- Posts Grid -->
            <div class="space-y-8">
              <BlogCard 
                v-for="post in sortedPosts" 
                :key="post._path"
                :post="blogCardData(post)"
                class="animate-slide-up"
              />
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="mt-12 flex justify-center">
              <nav class="flex items-center space-x-2">
                <button
                  v-if="currentPage > 1"
                  @click="currentPage--"
                  class="px-4 py-2 border border-white/20 text-white/70 rounded-lg hover:border-astromo-cyan hover:text-astromo-cyan transition-all duration-300"
                >
                  <Icon name="heroicons:chevron-left" class="w-4 h-4" />
                </button>
                
                <span 
                  v-for="page in visiblePages" 
                  :key="page"
                  :class="[
                    'px-4 py-2 rounded-lg transition-all duration-300',
                    page === currentPage 
                      ? 'bg-astromo-cyan text-space-950 font-medium'
                      : 'border border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan cursor-pointer'
                  ]"
                  @click="currentPage = page"
                >
                  {{ page }}
                </span>
                
                <button
                  v-if="currentPage < totalPages"
                  @click="currentPage++"
                  class="px-4 py-2 border border-white/20 text-white/70 rounded-lg hover:border-astromo-cyan hover:text-astromo-cyan transition-all duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                </button>
              </nav>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Search -->
            <div class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-white mb-4">Search Posts</h3>
              <div class="relative">
                <Icon name="heroicons:magnifying-glass" class="absolute left-3 top-3 w-4 h-4 text-white/50" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search articles..."
                  class="w-full pl-10 pr-4 py-2 bg-space-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-astromo-cyan focus:outline-none focus:ring-1 focus:ring-astromo-cyan"
                />
              </div>
            </div>

            <!-- Categories -->
            <div class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-white mb-4">Categories</h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="tag in popularTags"
                  :key="tag"
                  @click="toggleTag(tag)"
                  :class="[
                    'px-3 py-2 rounded-lg text-sm border transition-all duration-300',
                    selectedTags.includes(tag)
                      ? 'bg-astromo-cyan text-space-950 border-astromo-cyan'
                      : 'border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan'
                  ]"
                >
                  #{{ tag }}
                </button>
              </div>
            </div>

            <!-- Recent Posts -->
            <div class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-white mb-4">Recent Posts</h3>
              <div class="space-y-4">
                <div 
                  v-for="post in recentPosts.slice(0, 3)" 
                  :key="post._path"
                  class="group"
                >
                  <NuxtLink 
                    :to="`/blog/${post._path.split('/').pop()}`"
                    class="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <NuxtImg
                      :src="post.thumbnail"
                      :alt="post.title"
                      class="w-12 h-12 object-cover rounded flex-shrink-0"
                      loading="lazy"
                    />
                    <div class="min-w-0">
                      <h4 class="font-medium text-white group-hover:text-astromo-cyan transition-colors duration-300 line-clamp-2">
                        {{ post.title }}
                      </h4>
                      <p class="text-white/50 text-sm mt-1">
                        {{ formatDate(post.publishedAt) }}
                      </p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-white mb-4">Stay Updated</h3>
              <p class="text-white/70 text-sm mb-4">
                Get the latest development updates and insights delivered to your inbox.
              </p>
              <div class="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-2 bg-space-800/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-astromo-cyan focus:outline-none focus:ring-1 focus:ring-astromo-cyan"
                />
                <button class="btn-primary w-full">
                  Subscribe
                  <Icon name="heroicons:paper-airplane" class="inline ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'Development Log - Astromo Interactive',
  meta: [
    {
      name: 'description',
      content: 'Behind-the-scenes insights into indie game development at Astromo Interactive. Read about our development process, challenges, and the art of creating space-themed games.'
    }
  ]
})

// Fetch blog posts
const { data: posts } = await queryContent('/blog').find()

// Reactive state
const searchQuery = ref('')
const selectedTags = ref<string[]>([])
const sortBy = ref('newest')
const currentPage = ref(1)
const postsPerPage = 6

// Computed properties
const featuredPost = computed(() => {
  return posts?.find((post: any) => post.featured === true)
})

const allPosts = computed(() => {
  return posts?.filter((post: any) => post.featured !== true) || []
})

const filteredPosts = computed(() => {
  let filtered = allPosts.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((post: any) => 
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
    )
  }

  // Tag filter
  if (selectedTags.value.length > 0) {
    filtered = filtered.filter((post: any) => 
      selectedTags.value.some((tag: string) => post.tags?.includes(tag))
    )
  }

  return filtered
})

const sortedPosts = computed(() => {
  const sorted = [...filteredPosts.value]
  
  switch (sortBy.value) {
    case 'newest':
      return sorted.sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    case 'oldest':
      return sorted.sort((a: any, b: any) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
    case 'popular':
      return sorted.sort((a: any, b: any) => (b.readingTime || 0) - (a.readingTime || 0))
    default:
      return sorted
  }
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return sortedPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(sortedPosts.value.length / postsPerPage)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const popularTags = computed(() => {
  const tagCount: Record<string, number> = {}
  
  posts?.forEach((post: any) => {
    post.tags?.forEach((tag: string) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
  })
  
  return Object.keys(tagCount)
    .sort((a, b) => tagCount[b] - tagCount[a])
    .slice(0, 8)
})

const recentPosts = computed(() => {
  return [...(posts || [])].sort((a: any, b: any) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
})

// Helper functions
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

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
  currentPage.value = 1 // Reset to first page when filtering
}

// Watch for changes that should reset pagination
watch([searchQuery, selectedTags], () => {
  currentPage.value = 1
})
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>