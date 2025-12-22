<template>
  <div v-if="game" class="pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          :src="game.thumbnail"
          :alt="game.title"
          class="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/80 to-space-950/40"></div>
      </div>

      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Game Info -->
          <div>
            <!-- Breadcrumb -->
            <nav class="mb-6">
              <ol class="flex items-center space-x-2 text-white/60">
                <li><NuxtLink to="/" class="hover:text-astromo-cyan transition-colors">Home</NuxtLink></li>
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                <li><NuxtLink to="/games" class="hover:text-astromo-cyan transition-colors">Games</NuxtLink></li>
                <Icon name="heroicons:chevron-right" class="w-4 h-4" />
                <li class="text-white">{{ game.title }}</li>
              </ol>
            </nav>

            <h1 class="heading-xl text-gradient mb-6">{{ game.title }}</h1>
            
            <p class="text-xl text-white/80 mb-8 leading-relaxed">
              {{ game.description }}
            </p>

            <!-- Game Meta Info -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="glass p-4 rounded-lg">
                <div class="text-astromo-cyan text-sm font-medium mb-1">Release Date</div>
                <div class="text-white">{{ formatDate(game.releaseDate) }}</div>
              </div>
              <div class="glass p-4 rounded-lg">
                <div class="text-astromo-cyan text-sm font-medium mb-1">Price</div>
                <div class="text-white font-semibold">{{ game.price || 'Free' }}</div>
              </div>
              <div class="glass p-4 rounded-lg">
                <div class="text-astromo-cyan text-sm font-medium mb-1">Status</div>
                <div class="text-white capitalize">{{ game.status?.replace('-', ' ') }}</div>
              </div>
              <div class="glass p-4 rounded-lg">
                <div class="text-astromo-cyan text-sm font-medium mb-1">Platforms</div>
                <div class="text-white">{{ game.platforms?.join(', ') }}</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                v-if="game.itchUrl"
                :href="game.itchUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-lg px-8 py-4 flex-1 text-center"
              >
                <Icon name="heroicons:play" class="inline mr-2 w-5 h-5" />
                Play on itch.io
              </a>
              <button 
                @click="shareGame"
                class="btn-secondary text-lg px-8 py-4"
              >
                <Icon name="heroicons:share" class="inline mr-2 w-5 h-5" />
                Share
              </button>
            </div>

            <!-- Tags -->
            <div v-if="game.tags" class="flex flex-wrap gap-2">
              <span 
                v-for="tag in game.tags" 
                :key="tag"
                class="px-3 py-1 bg-space-800/50 text-astromo-cyan border border-astromo-cyan/20 
                       text-sm rounded-full"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Game Media -->
          <div class="space-y-6">
            <!-- Trailer Video -->
            <div v-if="game.trailerUrl" class="relative">
              <video 
                class="w-full rounded-xl shadow-glow"
                controls
                :poster="game.thumbnail"
                preload="metadata"
              >
                <source :src="game.trailerUrl" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>

            <!-- Screenshot Gallery -->
            <div v-if="game.screenshots" class="grid grid-cols-2 gap-4">
              <div 
                v-for="(screenshot, index) in game.screenshots.slice(0, 4)" 
                :key="index"
                class="relative group cursor-pointer"
                @click="openGallery(index)"
              >
                <NuxtImg
                  :src="screenshot"
                  :alt="`${game.title} Screenshot ${index + 1}`"
                  class="w-full h-32 object-cover rounded-lg transition-transform duration-300 
                         group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-astromo-cyan/0 group-hover:bg-astromo-cyan/20 
                           transition-colors duration-300 rounded-lg flex items-center justify-center">
                  <Icon 
                    name="heroicons:magnifying-glass-plus" 
                    class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Content -->
    <section class="py-16">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose prose-lg prose-invert max-w-none">
              <ContentRenderer :value="game" />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- System Requirements -->
            <div v-if="game.systemRequirements" class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-xl text-white mb-6">System Requirements</h3>
              
              <!-- Minimum Requirements -->
              <div class="mb-6">
                <h4 class="font-medium text-astromo-cyan mb-3">Minimum</h4>
                <div class="space-y-2">
                  <div v-for="(value, key) in game.systemRequirements.minimum" :key="key" 
                       class="flex justify-between text-sm">
                    <span class="text-white/60 capitalize">{{ key.replace(/([A-Z])/g, ' $1').toLowerCase() }}:</span>
                    <span class="text-white text-right">{{ value }}</span>
                  </div>
                </div>
              </div>

              <!-- Recommended Requirements -->
              <div v-if="game.systemRequirements.recommended">
                <h4 class="font-medium text-astromo-cyan mb-3">Recommended</h4>
                <div class="space-y-2">
                  <div v-for="(value, key) in game.systemRequirements.recommended" :key="key" 
                       class="flex justify-between text-sm">
                    <span class="text-white/60 capitalize">{{ key.replace(/([A-Z])/g, ' $1').toLowerCase() }}:</span>
                    <span class="text-white text-right">{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Genre & Categories -->
            <div class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Genre</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="genre in game.genre" 
                  :key="genre"
                  class="px-3 py-2 bg-astromo-cyan/10 text-astromo-cyan border border-astromo-cyan/20 
                         text-sm rounded-lg"
                >
                  {{ genre }}
                </span>
              </div>
            </div>

            <!-- Related Games -->
            <div v-if="relatedGames.length" class="glass-dark p-6 rounded-xl">
              <h3 class="font-orbitron font-semibold text-xl text-white mb-6">You Might Also Like</h3>
              <div class="space-y-4">
                <div 
                  v-for="relatedGame in relatedGames" 
                  :key="relatedGame._path"
                  class="group"
                >
                  <NuxtLink 
                    :to="`/games/${relatedGame._path.split('/').pop()}`"
                    class="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 
                           transition-colors duration-300"
                  >
                    <NuxtImg
                      :src="relatedGame.thumbnail"
                      :alt="relatedGame.title"
                      class="w-12 h-12 object-cover rounded"
                      loading="lazy"
                    />
                    <div>
                      <h4 class="font-medium text-white group-hover:text-astromo-cyan 
                               transition-colors duration-300">
                        {{ relatedGame.title }}
                      </h4>
                      <p class="text-white/60 text-sm">{{ relatedGame.price || 'Free' }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshot Modal -->
    <div 
      v-if="showGallery" 
      class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeGallery"
    >
      <div class="relative max-w-4xl max-h-full">
        <NuxtImg
          :src="game.screenshots[currentScreenshot]"
          :alt="`${game.title} Screenshot ${currentScreenshot + 1}`"
          class="w-full h-auto rounded-lg"
        />
        <button 
          @click="closeGallery"
          class="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 
                 transition-colors duration-300"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6 text-white" />
        </button>
        
        <!-- Navigation -->
        <button 
          v-if="currentScreenshot > 0"
          @click.stop="currentScreenshot--"
          class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full 
                 hover:bg-black/70 transition-colors duration-300"
        >
          <Icon name="heroicons:chevron-left" class="w-6 h-6 text-white" />
        </button>
        <button 
          v-if="currentScreenshot < game.screenshots.length - 1"
          @click.stop="currentScreenshot++"
          class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full 
                 hover:bg-black/70 transition-colors duration-300"
        >
          <Icon name="heroicons:chevron-right" class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const gameSlug = route.params.slug as string

// Fetch game data
const { data: game } = await queryContent(`/games/${gameSlug}`).findOne()

// Handle 404
if (!game) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Game not found'
  })
}

// Meta tags
useHead({
  title: `${game.title} - Astromo Interactive`,
  meta: [
    { name: 'description', content: game.description },
    { property: 'og:title', content: `${game.title} - Astromo Interactive` },
    { property: 'og:description', content: game.description },
    { property: 'og:image', content: game.thumbnail },
    { property: 'og:type', content: 'website' }
  ]
})

// Fetch related games
const { data: allGames } = await queryContent('/games').find()
const relatedGames = computed(() => {
  if (!allGames) return []
  return allGames
    .filter((g: any) => g._path !== game._path)
    .slice(0, 3)
})

// Gallery state
const showGallery = ref(false)
const currentScreenshot = ref(0)

// Gallery functions
const openGallery = (index: number) => {
  currentScreenshot.value = index
  showGallery.value = true
}

const closeGallery = () => {
  showGallery.value = false
}

// Utility functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const shareGame = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: game.title,
        text: game.description,
        url: window.location.href
      })
    } catch (error) {
      // Fallback to clipboard
      await copyToClipboard()
    }
  } else {
    await copyToClipboard()
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    // You could add a toast notification here
    console.log('URL copied to clipboard')
  } catch (error) {
    console.error('Failed to copy URL:', error)
  }
}

// Keyboard navigation for gallery
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (!showGallery.value) return
    
    if (e.key === 'Escape') {
      closeGallery()
    } else if (e.key === 'ArrowLeft' && currentScreenshot.value > 0) {
      currentScreenshot.value--
    } else if (e.key === 'ArrowRight' && currentScreenshot.value < game.screenshots.length - 1) {
      currentScreenshot.value++
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
/* Custom prose styles for game content */
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

.prose :deep(h2) {
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose :deep(h3) {
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose :deep(p) {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.625;
}

.prose :deep(ul li) {
  color: rgba(255, 255, 255, 0.8);
}

.prose :deep(strong) {
  color: #00ddeb;
  font-weight: 600;
}

.prose :deep(blockquote) {
  border-left: 4px solid #00ddeb;
  background: rgba(0, 221, 235, 0.05);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>