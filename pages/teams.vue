<template>
  <section class="bg-[#fdfbf7] min-h-screen py-16 px-6 md:px-12">
    <!-- Header -->
    <div class="pt-16 max-w-6xl mx-auto mb-12">
      <h1 class="text-5xl md:text-6xl font-serif text-[#2E4B42] mb-4">Meet the team</h1>
      <p class="text-lg text-[#2E4B42]">Our experienced clinicians</p>
    </div>

    <!-- Filters -->
    <div class="max-w-6xl mx-auto mb-10 space-y-4">
      <div class="flex flex-wrap gap-2 text-sm text-[#2E4B42]">
        <strong class="mr-2">Filter by clinic location:</strong>
        <button class="btn-filter">St Kilda</button>
        <button class="btn-filter">Carlton</button>
        <button class="btn-filter">Geelong</button>
        <button class="btn-filter">Colac</button>
      </div>
      <div class="flex flex-wrap gap-2 text-sm text-[#2E4B42]">
        <strong class="mr-2">Filter by practice areas:</strong>
        <button class="btn-filter">Relationship counselling</button>
        <button class="btn-filter">Assessments</button>
        <button class="btn-filter">Adults</button>
        <button class="btn-filter">Adolescents</button>
        <button class="btn-filter">Children</button>
        <a href="#" class="ml-auto underline text-xs">clear all filters</a>
      </div>
    </div>

    <!-- Team Grid -->
    <div class="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <TeamCard
        v-for="member in teamMembers"
        :key="member.name"
        :member="member"
      />
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Dr. David H. Capstick',
    pronouns: 'he/him',
    title: 'Director, Clinical Psychologist',
    locations: ['Carlton', 'Geelong', 'St Kilda'],
    image: '/images/haaii.webp',
  },
  {
    name: 'Steph Sier',
    pronouns: 'she/her',
    title: 'Senior Therapist | MHASW',
    locations: ['Carlton'],
    image: '/images/haaii.webp',
  },
  {
    name: 'Rene Pirrotta',
    pronouns: 'she/her',
    title: 'Senior Psychologist',
    locations: ['St Kilda'],
    image: '/images/haaii.webp',
  },
  {
    name: 'Edwina Vejayaratnam',
    pronouns: 'she/they',
    title: 'Clinical Psychologist',
    locations: ['Carlton'],
    image: '/images/haaii.webp',
    highlight: true,
  },
];
</script>

<style scoped>
.btn-filter {
  @apply border border-[#2E4B42] rounded-full px-3 py-1 hover:bg-[#efefef] transition;
}
</style>