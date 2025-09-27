<template>
  <div
    class="p-4 rounded-3xl hover:bg-[#f0f0f0] transition group text-center flex flex-col items-center"
    :class="member.highlight ? 'bg-[#D3EFE6]' : ''"
  >
    <div class="w-40 h-40 rounded-full overflow-hidden mb-4">
      <img :src="member.image" :alt="member.name" class="object-cover w-full h-full" />
    </div>
    <h3 class="font-serif text-lg text-[#2E4B42]">{{ member.name }}</h3>
    <p class="text-sm italic">{{ member.pronouns }}</p>
    <p class="text-sm text-[#2E4B42]">{{ member.title }}</p>
    <div class="flex flex-wrap justify-center gap-1 mt-2">
      <span
        v-for="loc in member.locations"
        :key="loc"
        class="text-xs px-2 py-0.5 bg-gray-200 rounded-full text-[#2E4B42]"
      >
        {{ loc }}
      </span>
    </div>
    <a
      href="#"
      class="mt-4 text-sm inline-flex items-center px-4 py-1.5 bg-white text-[#2E4B42] border border-[#2E4B42] rounded-full hover:bg-[#f0f0f0] transition"
    >
      See profile
      <span class="ml-2 bg-[#2E4B42] text-white w-5 h-5 inline-flex items-center justify-center rounded-full">
        →
      </span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  member: Object
})
</script>