<template>
  <footer class="bg-space-900/50 backdrop-blur-sm border-t border-white/5 mt-20">
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <NuxtImg
              src="/assets/logo/astrologo.png"
              alt="Astromo Interactive Logo"
              width="40"
              height="40"
              class="h-10 w-auto"
            />
            <div class="flex flex-col">
              <span class="font-orbitron font-bold text-lg text-gradient">
                ASTROMO
              </span>
              <span class="font-orbitron font-medium text-xs text-white/70 -mt-1">
                INTERACTIVE
              </span>
            </div>
          </div>
          
          <p class="text-white/70 mb-6 max-w-md leading-relaxed">
            Creating innovative games that transport players to new worlds. 
            Join us on our journey through the cosmos of interactive entertainment.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              href="#" 
              class="p-3 glass rounded-lg hover:bg-astromo-cyan/10 transition-all duration-300 group focus-ring"
              aria-label="Follow us on Twitter"
            >
              <Icon 
                name="simple-icons:x" 
                class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" 
              />
            </a>
            <a 
              href="#" 
              class="p-3 glass rounded-lg hover:bg-astromo-cyan/10 transition-all duration-300 group focus-ring"
              aria-label="Join our Discord"
            >
              <Icon 
                name="simple-icons:discord" 
                class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" 
              />
            </a>
            <a 
              href="#" 
              class="p-3 glass rounded-lg hover:bg-astromo-cyan/10 transition-all duration-300 group focus-ring"
              aria-label="View our games on itch.io"
            >
              <Icon 
                name="simple-icons:itchdotio" 
                class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" 
              />
            </a>
            <a 
              href="#" 
              class="p-3 glass rounded-lg hover:bg-astromo-cyan/10 transition-all duration-300 group focus-ring"
              aria-label="Follow us on YouTube"
            >
              <Icon 
                name="simple-icons:youtube" 
                class="w-5 h-5 text-white/70 group-hover:text-astromo-cyan transition-colors" 
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-orbitron font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                to="/" 
                class="text-white/70 hover:text-astromo-cyan transition-colors duration-300 focus-ring"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="text-white/70 hover:text-astromo-cyan transition-colors duration-300 focus-ring"
              >
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/games" 
                class="text-white/70 hover:text-astromo-cyan transition-colors duration-300 focus-ring"
              >
                Our Games
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/blog" 
                class="text-white/70 hover:text-astromo-cyan transition-colors duration-300 focus-ring"
              >
                Developer Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-orbitron font-semibold text-white mb-4">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <Icon name="heroicons:envelope" class="w-4 h-4 text-astromo-cyan" />
              <a 
                href="mailto:hello@astromo.games" 
                class="text-white/70 hover:text-astromo-cyan transition-colors duration-300 focus-ring"
              >
                hello@astromo.games
              </a>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="heroicons:map-pin" class="w-4 h-4 text-astromo-cyan mt-1" />
              <span class="text-white/70">
                Remote Studio<br />
                Somewhere in the Galaxy
              </span>
            </li>
          </ul>
          
          <div class="mt-6">
            <h4 class="font-orbitron font-medium text-white/90 mb-3">Newsletter</h4>
            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2 bg-space-800/50 border border-white/10 rounded-l-lg 
                       text-white placeholder-white/50 focus:border-astromo-cyan 
                       focus:outline-none focus:ring-1 focus:ring-astromo-cyan"
              />
              <button class="btn-primary rounded-l-none">
                <Icon name="heroicons:paper-airplane" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/50 text-sm">
          © {{ currentYear }} Astromo Interactive. All rights reserved.
        </p>
        
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="/privacy" 
            class="text-white/50 hover:text-astromo-cyan text-sm transition-colors duration-300 focus-ring"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            class="text-white/50 hover:text-astromo-cyan text-sm transition-colors duration-300 focus-ring"
          >
            Terms of Service
          </a>
          <a 
            href="/cookies" 
            class="text-white/50 hover:text-astromo-cyan text-sm transition-colors duration-300 focus-ring"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 btn-primary rounded-full shadow-glow z-40 focus-ring"
      aria-label="Scroll to top"
    >
      <Icon name="heroicons:arrow-up" class="w-5 h-5" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = new Date().getFullYear()
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Additional hover effects */
.group:hover .group-hover\:text-astromo-cyan {
  color: #00ddeb;
}

/* Focus ring for better accessibility */
.focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #00ddeb, 0 0 0 4px #0f172a;
  border-radius: 0.375rem;
}
</style>