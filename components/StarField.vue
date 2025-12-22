<template>
  <div class="particles-container" id="tsparticles">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { loadSlim } from '@tsparticles/slim'
import { tsParticles } from '@tsparticles/engine'

onMounted(async () => {
  // Load the slim tsParticles bundle
  await loadSlim(tsParticles)
  
  // Initialize particles
  await tsParticles.load('tsparticles', {
    background: {
      color: 'transparent'
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#ffffff', '#00ddeb', '#ff3366']
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: true,
        speed: 0.3,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 2000
        },
        value: 100
      },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        }
      },
      shape: {
        type: ['circle', 'star']
      },
      size: {
        value: { min: 0.5, max: 2 },
        animation: {
          enable: true,
          speed: 1,
          sync: false
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.02,
          opacity: 1
        }
      }
    },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          links: {
            opacity: 0.2
          }
        }
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true
  })
})
</script>

<style scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>