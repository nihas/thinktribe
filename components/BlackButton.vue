<template>
  <div class="relative inline-block group">
    <span
      class="absolute -bottom-1 -right-1 w-full h-full border-2 border-black rounded-full transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
    <button @click="$emit('click')"
      class="relative z-10 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 active:scale-95 transition transform">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
})
defineEmits(['click'])
</script>