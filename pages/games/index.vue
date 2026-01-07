<template>
  <div class="pt-20">
    <!-- Header Section -->
    <section class="py-16">
      <div class="section-container">
        <div class="text-center mb-12">
          <h1 class="heading-xl text-gradient mb-6">Our Games</h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of space-themed adventures, from epic RPGs to arcade action. 
            Each game is crafted with passion and attention to detail, designed to transport you 
            to extraordinary worlds beyond imagination.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            @click="selectedFilter = 'all'"
            :class="[
              'px-4 py-2 rounded-lg border transition-all duration-300',
              selectedFilter === 'all' 
                ? 'bg-astromo-cyan text-space-950 border-astromo-cyan' 
                : 'border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan'
            ]"
          >
            All Games
          </button>
          <button
            @click="selectedFilter = 'featured'"
            :class="[
              'px-4 py-2 rounded-lg border transition-all duration-300',
              selectedFilter === 'featured' 
                ? 'bg-astromo-cyan text-space-950 border-astromo-cyan' 
                : 'border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan'
            ]"
          >
            Featured
          </button>
          <button
            @click="selectedFilter = 'released'"
            :class="[
              'px-4 py-2 rounded-lg border transition-all duration-300',
              selectedFilter === 'released' 
                ? 'bg-astromo-cyan text-space-950 border-astromo-cyan' 
                : 'border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan'
            ]"
          >
            Released
          </button>
          <button
            @click="selectedFilter = 'testing'"
            :class="[
              'px-4 py-2 rounded-lg border transition-all duration-300',
              selectedFilter === 'testing' 
                ? 'bg-astromo-cyan text-space-950 border-astromo-cyan' 
                : 'border-white/20 text-white/70 hover:border-astromo-cyan hover:text-astromo-cyan'
            ]"
          >
            In Testing
          </button>
        </div>
      </div>
    </section>

    <!-- Games Grid -->
    <section class="pb-20">
      <div class="section-container">
        <TransitionGroup 
          name="game-card" 
          tag="div" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <GameCard 
            v-for="game in filteredGames" 
            :key="game._path"
            :game="gameCardData(game)"
            class="animate-slide-up"
          />
        </TransitionGroup>

        <!-- Empty State -->
        <div v-if="filteredGames.length === 0" class="text-center py-16">
          <div class="glass-dark rounded-2xl p-12 max-w-md mx-auto">
            <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-white/30 mx-auto mb-6" />
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">No Games Found</h3>
            <p class="text-white/70 mb-6">
              We couldn't find any games matching your current filter. Try selecting a different category.
            </p>
            <!-- Debug info -->
            <div class="text-left text-xs text-white/50 mb-4 bg-black/20 p-4 rounded">
              <p>Debug Info:</p>
              <p>Games loaded: {{ games?.length || 0 }}</p>
              <p>Filter: {{ selectedFilter }}</p>
              <p>Filtered games: {{ filteredGames.length }}</p>
              <p v-if="games">Games: {{ games.map(g => g.title).join(', ') }}</p>
            </div>
            <button 
              @click="selectedFilter = 'all'"
              class="btn-secondary"
            >
              Show All Games
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-space-900/20">
      <div class="section-container">
        <div class="glass-dark rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 class="heading-md text-gradient mb-6">Stay Updated</h2>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Be the first to know about our latest releases, updates, and behind-the-scenes content. 
            Join our community of space adventurers!
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="btn-primary text-lg px-8 py-4">
              <Icon name="simple-icons:discord" class="inline mr-2 w-5 h-5" />
              Join Our Discord
            </a>
            <a href="/blog" class="btn-secondary text-lg px-8 py-4">
              <Icon name="heroicons:book-open" class="inline mr-2 w-5 h-5" />
              Read Our Blog
            </a>
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
  title: 'Our Games - Astromo Interactive',
  meta: [
    {
      name: 'description',
      content: 'Explore our collection of innovative space-themed games. From epic RPGs to arcade action, discover your next cosmic adventure with Astromo Interactive.'
    }
  ]
})

// Fetch games data
const { data: games } = await useAsyncData('games', async () => {
  try {
    const result = await queryContent('/games').find()
    console.log('Games query result:', result)
    return result
  } catch (error) {
    console.error('Error fetching games:', error)
    return []
  }
})

// Filter state
const selectedFilter = ref('all')

// Computed filtered games
const filteredGames = computed(() => {
  if (!games.value) return []
  
  switch (selectedFilter.value) {
    case 'featured':
      return games.value.filter((game: any) => game.featured === true)
    case 'released':
      return games.value.filter((game: any) => game.status === 'released')
    case 'testing':
      return games.value.filter((game: any) => game.status === 'testing')
    default:
      return games.value
  }
})

// Transform game data for GameCard component
const gameCardData = (game: any) => ({
  slug: game._path?.split('/').pop(),
  title: game.title,
  description: game.description,
  thumbnail: game.thumbnail || '/assets/logo/AstromoIntro.jpg',
  price: game.price,
  storeUrl: game.storeUrl,
  itchUrl: game.itchUrl,
  tags: game.tags || []
})
</script>

<style scoped>
/* Transition effects for filtered games */
.game-card-enter-active,
.game-card-leave-active {
  transition: all 0.4s ease;
}

.game-card-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.game-card-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}

.game-card-move {
  transition: transform 0.4s ease;
}

/* Stagger animation delays for initial load */
.animate-slide-up:nth-child(1) { animation-delay: 0.1s; }
.animate-slide-up:nth-child(2) { animation-delay: 0.2s; }
.animate-slide-up:nth-child(3) { animation-delay: 0.3s; }
.animate-slide-up:nth-child(4) { animation-delay: 0.4s; }
.animate-slide-up:nth-child(5) { animation-delay: 0.5s; }
.animate-slide-up:nth-child(6) { animation-delay: 0.6s; }
</style>