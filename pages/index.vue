<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20">
      <div class="section-container text-center">
        <div class="animate-fade-in">
          <!-- Studio Logo -->
          <div class="mb-8 flex justify-center">
            <div class="relative group">
              <NuxtImg
                src="/assets/logo/astrologo.png"
                alt="Astromo Interactive Logo"
                width="120"
                height="120"
                class="h-32 w-auto drop-shadow-glow group-hover:scale-110 transition-all duration-500"
              />
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-astromo-cyan/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          <!-- Main Headlines -->
          <h1 class="heading-xl text-center mb-6">
            <span class="text-gradient block">ASTROMO</span>
            <span class="text-white/90 font-inter font-light text-2xl sm:text-3xl lg:text-4xl block mt-2">
              INTERACTIVE
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting innovative games that transport players to <br class="hidden sm:block">
            <span class="text-gradient-red">extraordinary worlds beyond imagination</span>
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <NuxtLink to="/games" class="btn-primary text-lg px-8 py-4">
              Explore Our Games
              <Icon name="heroicons:rocket-launch" class="inline ml-2 w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="/about" class="btn-secondary text-lg px-8 py-4">
              About the Studio
              <Icon name="heroicons:users" class="inline ml-2 w-5 h-5" />
            </NuxtLink>
          </div>

          <!-- Intro Video (if available) -->
          <div class="relative max-w-4xl mx-auto animate-slide-up" v-if="showIntroVideo">
            <div class="relative overflow-hidden rounded-2xl shadow-glow">
              <video 
                ref="introVideo"
                class="w-full h-auto"
                poster="/assets/logo/AstromoIntro.jpg"
                controls
                preload="metadata"
              >
                <source src="/assets/video/AstromoIntro.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="absolute inset-0 bg-gradient-to-t from-space-950/50 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="heroicons:chevron-down" class="w-6 h-6 text-white/50" />
      </div>
    </section>

    <!-- Released Games Section -->
    <section class="py-20" id="released-games">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">Released Games</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            Play our published games available on Google Play Store
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard 
            v-for="game in releasedGames" 
            :key="game._path"
            :game="gameCardData(game)"
            class="animate-slide-up"
          />
        </div>
      </div>
    </section>

    <!-- Testing Games Section -->
    <section class="py-20 bg-space-900/20" id="testing-games">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">Games in Testing</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            Upcoming games currently being tested and refined
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard 
            v-for="game in testingGames" 
            :key="game._path"
            :game="gameCardData(game)"
            class="animate-slide-up"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/games" class="btn-secondary">
            View All Games
            <Icon name="heroicons:arrow-right" class="inline ml-2 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Blog Posts Section -->
    <section class="py-20 bg-space-900/20" id="latest-blog">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">From the Development Log</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            Stay updated with our latest development insights, behind-the-scenes content, and industry thoughts
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            v-for="post in latestPosts" 
            :key="post.slug"
            :post="post"
            class="animate-slide-up"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-secondary">
            Read More Posts
            <Icon name="heroicons:arrow-right" class="inline ml-2 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20" id="contact">
      <div class="section-container">
        <div class="glass-dark rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 class="heading-md text-gradient mb-6">Ready to Connect?</h2>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a fellow developer, potential collaborator, or just want to chat about games, 
            we'd love to hear from you!
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@astromo.games" class="btn-primary text-lg px-8 py-4">
              <Icon name="heroicons:envelope" class="inline mr-2 w-5 h-5" />
              Get in Touch
            </a>
            <a href="#" class="btn-secondary text-lg px-8 py-4">
              <Icon name="simple-icons:discord" class="inline mr-2 w-5 h-5" />
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Meta tags for SEO
useHead({
  title: 'Astromo Interactive - Indie Game Development Studio',
  meta: [
    {
      name: 'description',
      content: 'Astromo Interactive is an innovative indie game development studio creating immersive space-themed games. Discover our latest games and join our community of cosmic adventurers.'
    },
    {
      property: 'og:title',
      content: 'Astromo Interactive - Indie Game Development Studio'
    },
    {
      property: 'og:description',
      content: 'Creating innovative games that transport players to extraordinary worlds beyond imagination.'
    }
  ]
})

// Reactive data
const showIntroVideo = ref(true)
const introVideo = ref<HTMLVideoElement>()

// Fetch games data from content
const { data: games } = await useAsyncData('games', () => queryContent('/games').find())

// Filter games by status
const releasedGames = computed(() => games.value?.filter((game: any) => game.status === 'released') || [])
const testingGames = computed(() => games.value?.filter((game: any) => game.status === 'testing') || [])
const featuredGames = computed(() => games.value?.filter((game: any) => game.featured === true) || [])

// Transform game data for GameCard component
const gameCardData = (game: any) => ({
  slug: game._path?.split('/').pop(),
  title: game.title,
  description: game.description,
  thumbnail: game.thumbnail || '/assets/logo/AstromoIntro.jpg',
  price: game.price,
  storeUrl: game.storeUrl,
  tags: game.tags || []
})



// Fetch blog posts from content
const { data: posts } = await useAsyncData('blog-posts', () => queryContent('/blog').sort({ publishedAt: -1 }).limit(3).find())

const latestPosts = computed(() => posts.value?.map((post: any) => ({
  slug: post._path?.split('/').pop(),
  title: post.title,
  description: post.description,
  publishedAt: post.publishedAt,
  thumbnail: post.thumbnail || '/assets/logo/AstromoIntro.jpg'
})) || [])

// Add intersection observer for animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up')
      }
    })
  })

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-slide-up')
  animatedElements.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* Custom animations for the hero section */
.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation delays */
.animate-slide-up:nth-child(1) {
  animation-delay: 0.1s;
}

.animate-slide-up:nth-child(2) {
  animation-delay: 0.2s;
}

.animate-slide-up:nth-child(3) {
  animation-delay: 0.3s;
}
</style>