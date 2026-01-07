<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 overflow-hidden">
      <div class="section-container">
        <div class="text-center mb-16">
          <h1 class="heading-xl text-gradient mb-6">About Astromo Interactive</h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Learn about our indie game development studio, our mission to create extraordinary 
            space-themed gaming experiences, and the passionate team behind our cosmic adventures.
          </p>
        </div>
      </div>
    </section>

    <!-- Studio Overview -->
    <section class="py-16">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Studio Image -->
          <div class="relative">
            <div class="glass-dark rounded-3xl p-8 relative overflow-hidden group">
              <NuxtImg
                src="/assets/logo/AstromoIntro.jpg"
                alt="Astromo Interactive Studio"
                class="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-8 rounded-2xl bg-gradient-to-t from-space-950/60 to-transparent"></div>
              
              <!-- Floating Elements -->
              <div class="absolute top-12 right-12 w-4 h-4 bg-astromo-cyan rounded-full animate-pulse"></div>
              <div class="absolute bottom-16 left-16 w-2 h-2 bg-astromo-red rounded-full animate-bounce"></div>
            </div>
          </div>

          <!-- Studio Info -->
          <div>
            <h2 class="heading-md text-gradient mb-6">Our Journey</h2>
            <p class="text-lg text-white/80 leading-relaxed mb-6">
              Astromo Interactive is a small but passionate indie game development studio founded by two brothers 
              from Texas, United States. With backgrounds in computer science and networking, we've turned our 
              childhood dream of creating games into reality.
            </p>
            <p class="text-lg text-white/80 leading-relaxed mb-6">
              We currently have one released game, Neon Dodge Dash, available on Google Play, and three 
              exciting titles in active testing phase. With a growing community of around 20 dedicated 
              players and testers, we're continuously improving our games based on valuable feedback.
            </p>
            <p class="text-lg text-white/80 leading-relaxed">
              We grew up loving games like Assassin's Creed, Ford Racing, King Kong, and the intricate 
              Call of Duty zombies easter egg storylines. These experiences shaped our understanding of 
              what makes games truly special - compelling narratives, precise mechanics, atmospheric 
              world-building, and the joy of discovery.
            </p>
            <p class="text-lg text-white/80 leading-relaxed mb-8">
              This studio represents our dream taking shape. While we both maintain full-time careers, 
              we pour our hearts into game development during evenings and weekends, constantly learning 
              and improving with each release. Our goal is to eventually make this our full-time passion, 
              creating games that transport players to extraordinary worlds and inspire that same sense 
              of wonder we felt as kids.
            </p>

            <!-- Key Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-red mb-2">1</div>
                <div class="text-white/60 text-sm">Games Released</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-red mb-2">2+</div>
                <div class="text-white/60 text-sm">Years Active</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-red mb-2">20+</div>
                <div class="text-white/60 text-sm">Players</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-red mb-2">2</div>
                <div class="text-white/60 text-sm">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-space-900/20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">Meet Our Team</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            The passionate individuals behind Astromo Interactive's cosmic adventures
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Team Member 1 -->
          <div class="glass-dark rounded-xl p-8 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-28 h-28 bg-astromo-red/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-astromo-red/30 transition-colors duration-300">
              <span class="text-2xl font-bold text-astromo-red font-orbitron">NH</span>
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-2">Nathan Hudson</h3>
            <p class="text-astromo-red text-sm mb-4 font-medium">Lead Developer</p>
            <p class="text-white/70 leading-relaxed">
              Handles the technical architecture, programming, and game engine development. 
              Passionate about creating smooth, optimized gaming experiences that bring our creative visions to life.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="glass-dark rounded-xl p-8 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-28 h-28 bg-astromo-red/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-astromo-red/30 transition-colors duration-300">
              <span class="text-2xl font-bold text-astromo-red font-orbitron">TH</span>
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-2">Tyler Hudson</h3>
            <p class="text-astromo-red text-sm mb-4 font-medium">Lead Designer</p>
            <p class="text-white/70 leading-relaxed">
              Focuses on game design, user experience, and visual aesthetics. 
              Ensures every game delivers engaging and memorable experiences for players.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="section-container">
        <div class="glass-dark rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 class="heading-md text-gradient mb-6">Join Our Mission</h2>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a fellow game developer, a space enthusiast, or simply someone who loves 
            great games, we'd love to have you join our community. Together, we can explore the 
            infinite possibilities that exist at the intersection of gaming and the cosmos.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/games" class="btn-primary text-lg px-8 py-4">
              <Icon name="heroicons:rocket-launch" class="inline mr-2 w-5 h-5" />
              Explore Our Games
            </NuxtLink>
            <a href="#" class="btn-secondary text-lg px-8 py-4">
              <Icon name="simple-icons:discord" class="inline mr-2 w-5 h-5" />
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useHead({
  title: 'About Us - Astromo Interactive',
  meta: [
    {
      name: 'description',
      content: 'Learn about Astromo Interactive, our indie game development studio, our mission to create extraordinary space-themed gaming experiences, and the passionate team behind our cosmic adventures.'
    }
  ]
})

// Fetch about content
const { data: aboutContent } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<style scoped>
/* Custom animations for the about page */
.animate-slide-up:nth-child(1) { animation-delay: 0.1s; }
.animate-slide-up:nth-child(2) { animation-delay: 0.2s; }
.animate-slide-up:nth-child(3) { animation-delay: 0.3s; }
.animate-slide-up:nth-child(4) { animation-delay: 0.4s; }
.animate-slide-up:nth-child(5) { animation-delay: 0.5s; }
.animate-slide-up:nth-child(6) { animation-delay: 0.6s; }
</style>