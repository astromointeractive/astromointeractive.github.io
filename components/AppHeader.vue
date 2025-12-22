<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/5">
    <nav class="section-container py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300"
        >
          <div class="relative">
            <NuxtImg
              src="/assets/logo/astrologo.png"
              alt="Astromo Interactive Logo"
              width="48"
              height="48"
              class="h-12 w-auto group-hover:drop-shadow-glow transition-all duration-300"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-orbitron font-bold text-xl text-gradient">
              ASTROMO
            </span>
            <span class="font-orbitron font-medium text-xs text-white/70 -mt-1">
              INTERACTIVE
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/games" class="nav-link">Games</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          
          <!-- CTA Button -->
          <a 
            href="#contact" 
            class="btn-primary ml-4 focus-ring"
          >
            Get in Touch
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobile"
          class="md:hidden p-2 rounded-lg glass focus-ring"
          :class="{ 'bg-astromo-cyan/10': mobileMenuOpen }"
          aria-label="Toggle mobile menu"
        >
          <Icon 
            :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
            class="w-6 h-6 text-white" 
          />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div 
          v-if="mobileMenuOpen" 
          class="md:hidden mt-6 py-6 glass-dark rounded-xl border border-white/10"
        >
          <div class="flex flex-col space-y-4 px-6">
            <NuxtLink 
              to="/" 
              @click="closeMobile"
              class="nav-link block py-2 text-lg"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              @click="closeMobile"
              class="nav-link block py-2 text-lg"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/games" 
              @click="closeMobile"
              class="nav-link block py-2 text-lg"
            >
              Games
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              @click="closeMobile"
              class="nav-link block py-2 text-lg"
            >
              Blog
            </NuxtLink>
            
            <div class="pt-4 border-t border-white/10">
              <a 
                href="#contact" 
                @click="closeMobile"
                class="btn-primary w-full text-center block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobile = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobile = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  closeMobile()
})

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMobile()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Active nav link styles */
.router-link-active {
  color: #00ddeb;
}

.router-link-active::after {
  width: 100%;
}

/* Focus styles for keyboard navigation */
a:focus-visible,
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #00ddeb, 0 0 0 4px #0a0a0f;
}
</style>