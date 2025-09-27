<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-md rounded-full m-4 max-w-6xl mx-auto">
    <div class="flex items-center space-x-2">
  <img
    src="/images/logo.png"
    alt="Think Tribe Logo"
    class="h-12 w-auto"    
  />
  <!-- optionally, keep the text or remove it -->
  <!-- <div class="text-2xl font-bold text-green-700">THINK TRIBE</div> -->
</div>
    
    <!-- Desktop Menu -->
    <ul class="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-medium">
      <li><a href="/" class="hover:text-green-700">Home</a></li>
      <li><a href="/about-us" class="hover:text-green-700">About Us</a></li>
      <!-- <NuxtLink to="/teams" class="hover:underline">Teams</NuxtLink> -->
      <!-- <li><a href="#" class="hover:text-green-700">Services</a></li>
      <li><a href="#" class="hover:text-green-700">Fees</a></li>
      <li><a href="#" class="hover:text-green-700">Blog</a></li>
      <li><a href="#" class="hover:text-green-700">Contact</a></li> -->
    </ul>

    <!-- Desktop Button -->
    <div class="hidden md:flex">
      <!-- <button class="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm hover:bg-green-300">
        Reach out to us
      </button> -->
      <BlackButton label="Reach out to us" @click="openWhatsApp"/>
    </div>

    <!-- Hamburger Icon -->
    <button class="md:hidden text-green-800" @click="isOpen = !isOpen">
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="absolute top-20 left-4 right-4 bg-white rounded-xl shadow-lg z-50 flex flex-col space-y-4 p-6 md:hidden">
      <a href="/" class="hover:text-green-700">Home</a>
      <a href="/about-us" class="hover:text-green-700">About Us</a>
      <!-- <a href="#" class="hover:text-green-700">Team</a>
      <a href="#" class="hover:text-green-700">Services</a>
      <a href="#" class="hover:text-green-700">Fees</a>
      <a href="#" class="hover:text-green-700">Blog</a>
      <a href="#" class="hover:text-green-700">Contact</a> -->
      <div class="md:flex">
      <!-- <button class="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm hover:bg-green-300">
        Reach out to us
      </button> -->
      <BlackButton label="Reach out to us" @click="openWhatsApp"/>
    </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)



const openWhatsApp = () => {
  console.log('WhatsApp button clicked')
  const phoneNumber = '917025016081' // Replace with your number (country code + number)
  const message = `Hello!`

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>