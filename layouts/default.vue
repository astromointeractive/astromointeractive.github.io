<template>
  <div class="min-h-screen bg-space-950 relative overflow-x-hidden">
    <!-- Particle Background -->
    <StarField />
    
    <!-- Main Content -->
    <div class="content-overlay">
      <!-- Navigation Header -->
      <AppHeader />
      
      <!-- Main Content Area -->
      <main class="relative">
        <slot />
      </main>
      
      <!-- Footer -->
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
// Page metadata and SEO
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

// Page transitions are defined per page, not in layout
</script>

<style>
/* Import main CSS */
@import '~/assets/css/main.css';
</style>

<style scoped>
/* Page transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>