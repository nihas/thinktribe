<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <div>

    <!-- Navbar -->
    <Navbar class="fixed top-0 left-0 right-0 z-50" />

<!-- This displays the current page component -->
    <NuxtPage />


  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
@keyframes fade-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}


/* Optional: subtle parallax effect with scroll */
.scroll-parallax {
  will-change: transform;
  transition: transform 0.2s ease-out;
}
</style>