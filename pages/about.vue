<template>
  <div v-if="aboutContent" class="pt-20">
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
            <h2 class="heading-md text-gradient mb-6">Our Mission</h2>
            <p class="text-lg text-white/80 leading-relaxed mb-6">
              At Astromo Interactive, we believe that games have the power to transport players to 
              extraordinary worlds and inspire a sense of wonder about the cosmos. Our mission is to 
              create innovative games that capture the mystery, beauty, and infinite possibilities of 
              space exploration.
            </p>
            <p class="text-lg text-white/80 leading-relaxed mb-8">
              Founded by a team of passionate developers and space enthusiasts, every game we create 
              is infused with our love for science fiction, our respect for real space exploration, 
              and our commitment to innovative gameplay.
            </p>

            <!-- Key Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-cyan mb-2">3</div>
                <div class="text-white/60 text-sm">Games Released</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-cyan mb-2">2+</div>
                <div class="text-white/60 text-sm">Years Active</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-cyan mb-2">10K+</div>
                <div class="text-white/60 text-sm">Players</div>
              </div>
              <div class="glass p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-astromo-cyan mb-2">4</div>
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member 1 -->
          <div class="glass-dark rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-24 h-24 bg-astromo-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-astromo-cyan/30 transition-colors duration-300">
              <Icon name="heroicons:rocket-launch" class="w-12 h-12 text-astromo-cyan" />
            </div>
            <h3 class="font-orbitron font-semibold text-lg text-white mb-2">Alex Nova</h3>
            <p class="text-astromo-cyan text-sm mb-3">Lead Developer & Co-founder</p>
            <p class="text-white/70 text-sm leading-relaxed">
              Former astrophysicist turned game developer, bringing both technical expertise 
              and deep love for space science to our projects.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="glass-dark rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-24 h-24 bg-astromo-red/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-astromo-red/30 transition-colors duration-300">
              <Icon name="heroicons:paint-brush" class="w-12 h-12 text-astromo-red" />
            </div>
            <h3 class="font-orbitron font-semibold text-lg text-white mb-2">Maya Stellar</h3>
            <p class="text-astromo-cyan text-sm mb-3">Creative Director & Co-founder</p>
            <p class="text-white/70 text-sm leading-relaxed">
              Interactive media expert ensuring our games tell compelling stories while 
              delivering engaging gameplay experiences.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="glass-dark rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-24 h-24 bg-astromo-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-astromo-cyan/30 transition-colors duration-300">
              <Icon name="heroicons:photo" class="w-12 h-12 text-astromo-cyan" />
            </div>
            <h3 class="font-orbitron font-semibold text-lg text-white mb-2">Zara Cosmos</h3>
            <p class="text-astromo-cyan text-sm mb-3">Lead Artist</p>
            <p class="text-white/70 text-sm leading-relaxed">
              Visual storyteller transforming concepts into stunning space environments 
              and memorable characters that bring our worlds to life.
            </p>
          </div>

          <!-- Team Member 4 -->
          <div class="glass-dark rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500">
            <div class="w-24 h-24 bg-astromo-red/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-astromo-red/30 transition-colors duration-300">
              <Icon name="heroicons:musical-note" class="w-12 h-12 text-astromo-red" />
            </div>
            <h3 class="font-orbitron font-semibold text-lg text-white mb-2">Finn Rocket</h3>
            <p class="text-astromo-cyan text-sm mb-3">Audio Designer</p>
            <p class="text-white/70 text-sm leading-relaxed">
              Master of soundscapes creating immersive audio experiences from starship 
              engines to ambient alien world atmospheres.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">Our Values</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            The principles that guide everything we do at Astromo Interactive
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-cyan/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:star" class="w-8 h-8 text-astromo-cyan" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Quality Over Quantity</h3>
            <p class="text-white/70 leading-relaxed">
              We'd rather create fewer, more polished experiences that players will remember 
              for years than rush multiple titles to market.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-red/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:users" class="w-8 h-8 text-astromo-red" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Player-Centric Design</h3>
            <p class="text-white/70 leading-relaxed">
              Every design decision is made with the player experience in mind. We ask ourselves: 
              "Does this make the game more fun, accessible, or meaningful?"
            </p>
          </div>

          <!-- Value 3 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-cyan/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:eye" class="w-8 h-8 text-astromo-cyan" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Transparency</h3>
            <p class="text-white/70 leading-relaxed">
              We believe in honest communication about our development process, including 
              the challenges and setbacks that are part of creating games.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-red/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-astromo-red" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Innovation</h3>
            <p class="text-white/70 leading-relaxed">
              While we respect gaming traditions, we're always looking for new ways to 
              surprise and delight players with unexpected mechanics and experiences.
            </p>
          </div>

          <!-- Value 5 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-cyan/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:heart" class="w-8 h-8 text-astromo-cyan" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Sustainability</h3>
            <p class="text-white/70 leading-relaxed">
              We're building a studio that can create games for the long term, which means 
              making smart business decisions and taking care of our team.
            </p>
          </div>

          <!-- Value 6 -->
          <div class="glass p-8 rounded-xl hover:shadow-glow transition-all duration-500">
            <div class="w-16 h-16 bg-astromo-red/20 rounded-full mb-6 flex items-center justify-center">
              <Icon name="heroicons:globe-alt" class="w-8 h-8 text-astromo-red" />
            </div>
            <h3 class="font-orbitron font-semibold text-xl text-white mb-4">Community First</h3>
            <p class="text-white/70 leading-relaxed">
              We believe the best games are created in collaboration with their communities. 
              Your feedback and enthusiasm help shape the worlds we build.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="py-16 bg-space-900/20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gradient mb-6">Awards & Recognition</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            Recognition from the indie gaming community for our innovative approach to space-themed games
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Award 1 -->
          <div class="glass-dark p-6 rounded-xl text-center">
            <div class="w-12 h-12 bg-astromo-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="heroicons:trophy" class="w-6 h-6 text-astromo-cyan" />
            </div>
            <h4 class="font-medium text-white mb-2">Indie Game Festival</h4>
            <p class="text-white/60 text-sm mb-2">Excellence in Audio</p>
            <p class="text-astromo-cyan text-xs">Stellar Odyssey</p>
          </div>

          <!-- Award 2 -->
          <div class="glass-dark p-6 rounded-xl text-center">
            <div class="w-12 h-12 bg-astromo-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="heroicons:trophy" class="w-6 h-6 text-astromo-red" />
            </div>
            <h4 class="font-medium text-white mb-2">Space Gaming Awards</h4>
            <p class="text-white/60 text-sm mb-2">Best Simulation Game</p>
            <p class="text-astromo-cyan text-xs">Cosmic Builder</p>
          </div>

          <!-- Award 3 -->
          <div class="glass-dark p-6 rounded-xl text-center">
            <div class="w-12 h-12 bg-astromo-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="heroicons:trophy" class="w-6 h-6 text-astromo-cyan" />
            </div>
            <h4 class="font-medium text-white mb-2">Developer Choice</h4>
            <p class="text-white/60 text-sm mb-2">Community Engagement</p>
            <p class="text-astromo-cyan text-xs">Studio Recognition</p>
          </div>

          <!-- Award 4 -->
          <div class="glass-dark p-6 rounded-xl text-center">
            <div class="w-12 h-12 bg-astromo-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="heroicons:trophy" class="w-6 h-6 text-astromo-red" />
            </div>
            <h4 class="font-medium text-white mb-2">IGN Indie Spotlight</h4>
            <p class="text-white/60 text-sm mb-2">Game of the Week</p>
            <p class="text-astromo-cyan text-xs">Void Runner</p>
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

// Fetch about content (optional - we're using static content in this example)
const { data: aboutContent } = await queryContent('/about').findOne().catch(() => ({ data: null }))
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