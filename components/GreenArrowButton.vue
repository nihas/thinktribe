<template>
    <a
        href="/about"
        class="inline-flex items-center bg-[#D3EFE6] text-[#2E4B42] px-6 py-3 rounded-full font-medium hover:bg-[#bee2d7] transition"
      >
        {{ label }}
        <span class="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2E4B42] text-white">
          →
        </span>
      </a>
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