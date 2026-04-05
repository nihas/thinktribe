<template>

  <section class="relative h-48 md:h-96 bg-cover bg-center flex items-center justify-center"
            :style="`background-image: url('/images/banner.png')`">
            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-black/60"></div>


            <!-- Title + Breadcrumbs -->
            <div class="relative text-center text-white px-4">
                <h1 class="text-2xl md:text-4xl font-bold">Psychology of Procrastination</h1>
                <nav class="mt-2 text-xs md:text-sm">
                    <ul class="flex items-center justify-center gap-1 md:gap-2 flex-wrap">
                        <li>
                            <a href="/" class="hover:underline">Home</a>
                            > <span class="text-gray-400">Psychology of Procrastination</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>

  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
    <header class="bg-[#2E4B42] text-white p-4">
      <h1 class="text-2xl font-bold text-center">Psychology of Procrastination</h1>
      <!-- Language Tabs -->
      <div class="flex justify-center mt-2">
        <button
          :class="tab === 'en' ? activeTab : inactiveTab"
          @click="tab = 'en'"
        >
          English
        </button>
        <button
          :class="tab === 'ml' ? activeTab : inactiveTab"
          @click="tab = 'ml'"
        >
          മലയാളം
        </button>
      </div>
    </header>

    <!-- Article Content -->
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <article v-if="tab === 'en'" class="space-y-4">
        <h2 class="text-xl font-semibold">Procrastination: The Habit of Delaying Tasks</h2>
        <p>
          Often we say, "I'll do it tomorrow," but this habit has a name — <strong>procrastination</strong>. 
          It's not laziness; it's a sign of <em>emotional stress and fear</em>.
        </p>

        <h3 class="font-semibold">Causes</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Fear:</strong> Fear of failure or success.</li>
          <li><strong>Perfectionism:</strong> Waiting to start until things are perfect.</li>
          <li><strong>Lack of confidence:</strong> Doubting your abilities delays action.</li>
        </ul>

        <h3 class="font-semibold">Effects</h3>
        <p>
          Chronic procrastination can cause anxiety, stress, guilt, and sleep issues. 
          Your body produces more <strong>cortisol</strong>, keeping you in fight-or-flight mode, affecting mental and physical health.
        </p>

        <h3 class="font-semibold">Solutions</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Start with small, manageable steps (micro-actions).</li>
          <li>Recognize your emotions and mental triggers.</li>
          <li>Therapies like <strong>CBT</strong> help break tasks into smaller parts.</li>
          <li><strong>ACT</strong> teaches acceptance of uncomfortable emotions.</li>
          <li>Instead of saying "I can't do this," say <em>"I feel anxious about this."</em></li>
        </ul>

        <p class="font-semibold">Summary:</p>
        <p>
          Procrastination is not laziness; it's often a result of fear, self-doubt, and perfectionism. 
          Small steps and therapy can help manage it.
        </p>
      </article>

      <article v-else class="space-y-4">
        <h2 class="text-xl font-semibold">പ്രൊക്രാസ്റ്റിനേഷൻ: സമയം നീട്ടിപ്പോകാനുള്ള മനോഭാവം</h2>
        <p>
          പലപ്പോഴും നമ്മൾ "നാളെ ചെയ്യും" എന്നു പറയും, എന്നാൽ ഈ പ്രവണതയ്ക്ക് പേര് — <strong>പ്രൊക്രാസ്റ്റിനേഷൻ</strong>. 
          ഇത് മടിയല്ല; ഇത് <em>വികാരസമ്മർദ്ദത്തിന്റെയും ഭയത്തിന്റെയും ലക്ഷണമാണ്</em>.
        </p>

        <h3 class="font-semibold">കാരണങ്ങൾ</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>ഭയം:</strong> പരാജയം അല്ലെങ്കിൽ വിജയം ഭയപ്പെടുന്നത്.</li>
          <li><strong>പെർഫക്ഷനിസം:</strong> കാര്യങ്ങൾ പൂർണ്ണത കൈവരിക്കാൻ കാത്തിരിക്കുക.</li>
          <li><strong>സ്വയം വിശ്വാസക്കുറവ്:</strong> കഴിവുകളിൽ സംശയം മൂലം പ്രവർത്തനം വൈകിപ്പ്.</li>
        </ul>

        <h3 class="font-semibold">ഫലങ്ങൾ</h3>
        <p>
          സ്ഥിരമായി വൈകിപ്പിക്കുന്നത് ഉത്കണ്ഠ, സമ്മർദം, കുറ്റബോധം, ഉറക്കക്കേട് തുടങ്ങിയ പ്രശ്നങ്ങൾക്ക് കാരണമാകും. 
          ശരീരത്തിൽ **കോർത്തിസോൾ** വർധിക്കുകയും, ഫൈറ്റ് ഓർ ഫ്ലൈറ്റ് പ്രതികരണം സജീവമാവുകയും ചെയ്യും.
        </p>

        <h3 class="font-semibold">പരിഹാര മാർഗങ്ങൾ</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>ചെറിയ പ്രവർത്തനങ്ങളിൽ നിന്ന് തുടങ്ങുക (മൈക്രോ-ആക്ഷൻ).</li>
          <li>വികാരങ്ങൾ തിരിച്ചറിയുകയും മാനസിക ട്രിഗർമാർ മനസ്സിലാക്കുകയും ചെയ്യുക.</li>
          <li><strong>CBT</strong> – വലിയ ജോലികളെ ചെറുതായി വിഭജിക്കാൻ സഹായിക്കുന്നു.</li>
          <li><strong>ACT</strong> – വികാരങ്ങളെ സ്വീകരിച്ച് നിയന്ത്രിക്കാൻ പരിശീലിപ്പിക്കുന്നു.</li>
          <li>"ഞാൻ ചെയ്യാൻ കഴിയില്ല" എന്നത് പറയാതെ, <em>"എനിക്ക് ഉത്കണ്ഠ തോന്നുന്നു"</em> എന്ന് പറയുക.</li>
        </ul>

        <p class="font-semibold">സംക്ഷേപം:</p>
        <p>
          പ്രൊക്രാസ്റ്റിനേഷൻ മടിയല്ല; ഭയം, സ്വയം സംശയം, പെർഫക്ഷനിസം എന്നിവയുടെ ഫലമാണ്. 
          ചെറിയ നടപടികളും തെറാപ്പികളും സഹായിക്കും.
        </p>
      </article>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("en"); // 'en' or 'ml'

const activeTab =
  "bg-white text-blue-600 px-4 py-1 rounded-t font-semibold border-b-2 border-blue-600";
const inactiveTab =
  "bg-blue-600 text-white px-4 py-1 rounded-t font-semibold hover:bg-blue-500";
</script>

<style>
/* Optional: smooth font for Malayalam */
body {
  font-family: 'Noto Sans Malayalam', sans-serif;
}
</style>