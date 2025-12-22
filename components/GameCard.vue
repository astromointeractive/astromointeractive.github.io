<template>
  <div class="game-card">
    <!-- Game Image -->
    <div class="relative overflow-hidden">
      <NuxtImg
        :src="game.thumbnail"
        :alt="game.title"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div class="image-overlay"></div>
      
      <!-- Price Badge -->
      <div v-if="game.price" class="absolute top-4 right-4">
        <span class="bg-astromo-red px-3 py-1 rounded-full text-white text-sm font-medium shadow-glow-red">
          {{ game.price }}
        </span>
      </div>
      
      <!-- Play Button Overlay -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-astromo-cyan/20 backdrop-blur-sm rounded-full p-4">
          <Icon name="heroicons:play" class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <!-- Game Info -->
    <div class="p-6">
      <h3 class="font-orbitron font-semibold text-xl text-white mb-3 group-hover:text-astromo-cyan transition-colors duration-300">
        {{ game.title }}
      </h3>
      
      <p class="text-white/70 mb-4 leading-relaxed">
        {{ game.description }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-3">
        <NuxtLink 
          :to="`/games/${game.slug}`"
          class="btn-secondary flex-1 text-center"
        >
          Learn More
        </NuxtLink>
        
        <a 
          v-if="game.storeUrl"
          :href="game.storeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary flex-1 text-center"
        >
          <Icon name="simple-icons:googleplay" class="inline mr-2 w-4 h-4" />
          Play on Google Play
          <Icon name="heroicons:arrow-top-right-on-square" class="inline ml-2 w-4 h-4" />
        </a>
        
        <a 
          v-else-if="game.itchUrl"
          :href="game.itchUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary flex-1 text-center"
        >
          Play on itch.io
          <Icon name="heroicons:arrow-top-right-on-square" class="inline ml-2 w-4 h-4" />
        </a>
      </div>

      <!-- Game Tags (if available) -->
      <div v-if="game.tags && game.tags.length" class="mt-4 flex flex-wrap gap-2">
        <span 
          v-for="tag in game.tags" 
          :key="tag"
          class="px-2 py-1 bg-space-800/50 text-white/60 text-xs rounded border border-white/10"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Game {
  slug: string
  title: string
  description: string
  thumbnail: string
  price?: string
  storeUrl?: string
  itchUrl?: string
  tags?: string[]
}

interface Props {
  game: Game
}

defineProps<Props>()
</script>

<style scoped>
/* Additional hover effects */
.game-card:hover .image-overlay {
  background: linear-gradient(
    to top,
    rgba(10, 10, 15, 0.9) 0%, 
    rgba(0, 221, 235, 0.1) 50%,
    transparent 100%
  );
}
</style>