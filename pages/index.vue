<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <div>

    <!-- Hero Section with Video Background -->
    <section class="relative h-screen w-full overflow-hidden">

      <!-- Navbar -->
      <!-- <Navbar class="absolute top-0 left-0 right-0 z-20" /> -->
      <!-- Background Video -->
      <video autoplay muted loop playsinline class="absolute w-full h-full object-cover z-0">
        <source :src="`${baseURL}/white_sands.mp4`" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#FD6200]/90 mix-blend-multiply z-10"></div>


      <!-- Hero Text -->
      <div class="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 class="text-white text-4xl md:text-6xl font-bold leading-tight">
          THINK TRIBE
        </h1>
        <p class="text-white text-lg md:text-2xl mt-2 font-light">
          together we thrive.
        </p>
      </div>
    </section>




    <section class="bg-[#F9F7F1] py-20 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <!-- Left: Strong Identity Statement -->
        <h2 class="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#2E4B42] leading-tight">
          ThinkTribe is building a space where psychology is learned, experienced, and lived.
        </h2>

        <!-- Right Side -->
        <div>
          <hr class="border-[#2E4B42] mb-6" />

          <p class="text-[#2E4B42] text-lg mb-4">
            Through <strong>Cognitive Studio</strong>, we provide psychology courses, UGC NET preparation, MCQs, and PYQ
            discussions
            designed to help students and aspirants build strong conceptual understanding.
          </p>

          <p class="text-[#2E4B42] text-lg mb-4">
            With <strong>Tribe Talks</strong>, we explore psychology beyond textbooks — through podcasts, articles, and
            conversations
            that connect ideas to everyday life.
          </p>

          <p class="text-[#2E4B42] text-lg mb-6">
            We are also expanding into guided therapy and mental wellness support, making ThinkTribe a space where
            learning meets
            real-world healing and growth.
          </p>

          <a href="/about-us" class="inline-block">
            <BlackButton label="More about us" />
          </a>
        </div>

      </div>
    </section>

    <!-- Section with Cards -->
    <!-- Cards Section -->
    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        <!-- Card 1 -->
        <div
          class="relative border border-black bg-white p-8 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-up">
          <h3 class="text-center text-2xl font-serif mb-6">Webinars + Workshops + Therapy</h3>
          <div class="flex justify-center">
            <!-- <div class="relative inline-block group">
              <span
                class="absolute -bottom-1 -right-1 w-full h-full border-2 border-black rounded-full transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              ></span>
              <button
                class="relative z-10 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 active:scale-95 transition transform"
              >
                Souled Academy
              </button>
            </div> -->
            <BlackButton label="Cognitive Studio" @click="scrollToStudio" />
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative border border-black bg-white p-8 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-up delay-200">
          <h3 class="text-center text-2xl font-serif mb-6">Podcasts + Articles + Much More</h3>
          <div class="flex justify-center">
            <!-- <div class="relative inline-block group">
              <span
                class="absolute -bottom-1 -right-1 w-full h-full border-2 border-black rounded-full transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              ></span>
              <button
                class="relative z-10 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 active:scale-95 transition transform"
              >
                Souled Therapy
              </button>
            </div> -->
            <div class="flex justify-center">
        <BlackButton label="Tribe Talks" @click="scrollToTalks" />
      </div>
          </div>
        </div>
      </div>
    </section>



    <!-- ============================= -->
    <!-- 1. PYQ Discussion Classes -->
    <!-- ============================= -->
    <section class="bg-[#F9F7F1] py-24 px-6" id="cognitive-studio">
      <div class="max-w-7xl mx-auto">
        <!-- SECTION TITLE -->
        <div class="mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-[#2E4B42] mb-4">
            Cognitive Studio
          </h2>
          <p class="text-[#2E4B42]/80 text-lg max-w-2xl">
            Learn, practice, and prepare with structured psychology resources designed for real understanding.
          </p>
        </div>

        <!-- PYQ CLASSES -->
        <div>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-semibold text-[#2E4B42]">
              PYQ Discussion Classes
            </h3>
          </div>

          <div>
            <div
              class="bg-gradient-to-br from-[#2E4B42] to-[#1f352f] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <!-- FREE BADGE -->
              <div
                class="absolute top-6 right-6 bg-[#D3EFE6] text-[#2E4B42] text-xs font-semibold px-4 py-2 rounded-full shadow">
                FREE INITIAL SESSIONS • LIMITED SEATS
              </div>

              <div class="grid md:grid-cols-2 gap-10 items-center">
                <!-- LEFT CONTENT -->
                <div>
                  <p class="text-sm uppercase tracking-wide text-white/70 mb-2">
                    UGC NET / JRF June 2026
                  </p>

                  <h3 class="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                    PYQ Discussion Series
                  </h3>

                  <p class="text-lg text-white/90 mb-4">
                    Paper 1 + Psychology
                  </p>

                  <p class="text-sm text-[#D3EFE6] mb-6">
                    Starts from April 6
                  </p>

                  <!-- FEATURES -->
                  <ul class="space-y-2 text-white/90 mb-8">
                    <li>• Daily topic-wise sessions</li>
                    <li>• High-yield questions only</li>
                    <li>• Individual mentorship</li>
                  </ul>

                  <!-- CTA -->
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMgg8DJlDYj1jjIZZigHAemQloA-9HkOFdPEIGzeBXineDpg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  <button
                    class="bg-white text-[#2E4B42] px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition active:scale-95 shadow-md">
                    Register Now
                  </button>
                  </a>
                </div>

                <!-- RIGHT VISUAL -->
                <div class="flex justify-center relative">
                  <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-inner">
                    <img src="/images/pyqdisc.png" alt="student studying" class="w-48 md:w-60" />
                  </div>
                </div>
              </div>

              <!-- SUBTLE DECOR -->
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#D3EFE6]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- 2. Therapy Announcement -->
    <!-- ============================= -->
    <section class="w-full bg-[#FD6200] text-white py-16 px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        <div class="flex-1">
          <h3 class="text-3xl md:text-4xl font-semibold mb-3">
            We are now offering therapies across the globe
          </h3>
          <p class="text-white/80 mb-6 text-lg md:text-xl">
            Connect with trained professionals and begin your journey towards better mental well-being.
          </p>
          <a href="/therapy" class="bg-white text-[#2E4B42] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Know more
          </a>
        </div>

        <!-- Globe Animation -->
        <div class="w-40 h-40 rounded-full border border-white/30 flex items-center justify-center animate-spin-slow">
          🌍
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- 3. Webinars & Workshops -->
    <!-- ============================= -->
    <section class="bg-[#F9F7F1] py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- HEADER -->
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-semibold text-[#2E4B42]">
            Webinars & Workshops
          </h3>
          <a href="#" class="text-sm text-[#2E4B42] underline">View all</a>
        </div>

        <!-- UPCOMING WEBINAR -->
        <!-- <div class="mb-10">
          <div
            class="bg-[#2E4B42] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6 items-center shadow-lg">
            <div class="max-w-xl">
              <span class="text-xs uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full">
                Upcoming Webinar
              </span>

              <h4 class="text-2xl md:text-3xl font-semibold mt-4 mb-3">
                Cognitive Psychology Crash Course
              </h4>

              <p class="text-white/80 mb-6">
                Deep dive into attention, memory & perception with practical examples.
              </p>

              <button
                class="bg-white text-[#2E4B42] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition active:scale-95">
                Register Now
              </button>
            </div>

            <div class="w-32 h-32 rounded-2xl bg-white/10 flex items-center justify-center text-4xl">
              🧠
            </div>
          </div>
        </div> -->

        <!-- PAST WEBINARS -->
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Webinar cards repeated -->
          <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <p class="text-sm text-[#2E4B42]/60 mb-2">Past</p>
            <p class="text-sm text-[#2E4B42]/60 mb-2">September 27, 2025</p>
            <h4 class="text-lg font-semibold text-[#2E4B42] mb-2">Conquer the NET: The Ultimate strategy session</h4>
            <p class="text-sm text-[#2E4B42]/70 mb-4">UGC NET aspirants! This one's for you. Join expert educator Aysha Hamna P for an exclusive session</p>
            <a :href="`${baseURL}/webinar/conquer-the-net-strategy-session`" class="text-sm font-medium text-[#2E4B42] underline">View Detail</a>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <p class="text-sm text-[#2E4B42]/60 mb-2">Past</p>
            <p class="text-sm text-[#2E4B42]/60 mb-2">September 27, 2025</p>
            <h4 class="text-lg font-semibold text-[#2E4B42] mb-2">The Roadmap to publishing in social science</h4>
            <p class="text-sm text-[#2E4B42]/70 mb-4">Are you a postgraduate student or a recent graduate wondering what to do with your dissertation after submission?</p>
            <a :href="`${baseURL}/webinar/roadmap-to-publishing-social-science`" class="text-sm font-medium text-[#2E4B42] underline">View Detail</a>
          </div>

          <!-- <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <p class="text-sm text-[#2E4B42]/60 mb-2">Past</p>
            <h4 class="text-lg font-semibold text-[#2E4B42] mb-2">NET Strategy Session</h4>
            <p class="text-sm text-[#2E4B42]/70 mb-4">Smart preparation tips & PYQ analysis.</p>
            <button class="text-sm font-medium text-[#2E4B42] underline">Watch Recording</button>
          </div> -->
        </div>
      </div>
    </section>



    <section class="bg-gradient-to-br from-[#2E4B42] via-[#355f54] to-[#1f352f] py-20 px-6 text-white" id="tribe-talks">
      <div class="max-w-7xl mx-auto">

        <!-- HEADER -->
        <div class="mb-14 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Tribe Talks
          </h2>
          <p class="text-white/80 max-w-2xl mx-auto text-lg">
            Psychology beyond textbooks — through conversations, stories, and ideas that connect to real life.
          </p>
        </div>

        <!-- GRID -->
        <div class="grid md:grid-cols-3 gap-8">

          <!-- PODCAST CARD -->
          <!-- <div class="bg-[#D3EFE6] text-[#2E4B42] rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition">
            <p class="text-xs uppercase font-semibold mb-2">Podcast</p>
            <h3 class="text-xl font-bold mb-3">
              Why do we overthink?
            </h3>
            <p class="text-sm mb-5">
              A deep dive into anxiety, thought loops, and how to break free.
            </p>
            <button class="bg-[#2E4B42] text-white px-5 py-2 rounded-full text-sm hover:bg-[#1f352f]">
              Listen Now
            </button>
          </div> -->

          <!-- ARTICLE CARD -->
          <div class="bg-white text-[#2E4B42] rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition">
            <p class="text-xs uppercase font-semibold mb-2">Article</p>
            <h3 class="text-xl font-bold mb-3">
              The psychology of procrastination
            </h3>
            <p class="text-sm mb-5">
              Understanding why we delay and how to build better habits.
            </p>
            <a href="/articles/psychology-of-procrastination" class="bg-[#FD6200] text-white px-5 py-2 rounded-full text-sm hover:bg-[#e1550c]">
              Read More
            </a>
          </div>

          <!-- VIDEO / TALK CARD -->
          <!-- <div class="bg-[#FD6200] text-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition">
            <p class="text-xs uppercase font-semibold mb-2">Talk</p>
            <h3 class="text-xl font-bold mb-3">
              Mental health in daily life
            </h3>
            <p class="text-sm mb-5">
              Simple ways to integrate emotional awareness into your routine.
            </p>
            <button class="bg-white text-[#FD6200] px-5 py-2 rounded-full text-sm hover:bg-gray-100">
              Watch Now
            </button>
          </div> -->

        </div>

        <!-- CTA -->
        <div class="text-center mt-14">
          <button class="bg-white text-[#2E4B42] px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Explore Tribe Talks
          </button>
        </div>

      </div>
    </section>



    <!-- <section class="bg-[#F9F7F1] py-20 px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div class="sticky top-24 self-start">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl text-[#2E4B42] leading-tight mb-6">
            Our team
          </h2>
          <hr class="border-[#2E4B42] mb-6" />
          <p class="text-[#2E4B42] text-lg mb-6">
            ThinkTribe is powered by a passionate and diverse team with expertise in psychology, mental health, and
            creative communication. We are committed to delivering compassionate, high-quality services that support
            emotional well-being. As we continue to grow, our team is dedicated to expanding our impact and building a
            healthier, more connected community.
          </p>
          <BlackButton label="Meet the team" />
        </div>

        <div class="relative h-[800px] overflow-hidden">
          <img src="/your-image.webp" alt="Team Photo"
            class="w-full object-cover h-[120%] transform translate-y-[-10%] scroll-parallax" />
        </div>
      </div>
    </section> -->



    <section class="relative h-[600px] w-full overflow-hidden text-white">
      <!-- Video Background -->
      <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
        <source :src="`${baseURL}/white_sands.mp4`" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Green overlay -->
      <div class="absolute inset-0 bg-[#FD6200]/90 mix-blend-multiply z-10"></div>

      <!-- Content -->
      <div class="relative z-20 flex flex-col justify-center items-center text-center h-full px-4">
        <h2 class="text-4xl md:text-6xl font-serif mb-6">
          Ready to grow, learn, and thrive?
        </h2>
        <p class="mb-6 text-lg md:text-xl">
          Get in touch to explore our mental health webinars, podcasts, and resources.
        </p>
        <!-- <a
        href="/contact"
        class="inline-flex items-center bg-[#D3EFE6] text-[#2E4B42] px-6 py-3 rounded-full font-medium hover:bg-[#bee2d7] transition"
      >
        Contact us
        <span class="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2E4B42] text-white">
          →
        </span>
      </a> -->
        <BlackButton label="Contact us" />
      </div>
    </section>



    <footer class="bg-[#ca4e00] text-white py-10 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div class="flex items-center space-x-4">
          <span>Follow us</span>
          <a href="https://www.instagram.com/think.tribe/" target="_blank" aria-label="Instagram"><img
              src="/images/instagram.svg" alt="Instagram" class="h-8" /></a>
          <!-- <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="fab fa-linkedin text-xl"></i>
          </a> -->
        </div>
        <div class="text-sm text-gray-200">© 2026 ThinkTribe. All Rights Reserved.</div>
        <div class="space-x-4 text-sm">
          <!-- <a href="/privacy-policy" class="hover:underline"></a> -->
        </div>
      </div>

      <hr class="border-white opacity-10 mb-6" />

      <p class="text-xs text-white-400 mt-6">
        Empowering minds through learning and connection. Together, we thrive.
      </p>
      <!-- <div>
  <h4 class="font-semibold text-white mb-2">Stay in the Loop</h4>
  <p class="text-sm text-gray-300 mb-2">Subscribe for updates on new content, events, and resources.</p>
  <form class="flex">
    <input type="email" placeholder="Your email" class="px-3 py-2 rounded-l bg-gray-100 text-black text-sm" />
    <button class="px-4 py-2 bg-[#fd620e] text-white rounded-r text-sm">Subscribe</button>
  </form>
</div> -->
    </footer>



  </div>
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL
import { ref } from 'vue'

const cognitiveStudio = ref(null)

function scrollToStudio() {
  const element = document.getElementById('cognitive-studio')
  if (element) {
    // Smooth scroll with offset if needed
    const yOffset = -20 // adjust for sticky header if any
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function scrollToTalks() {
  const element = document.getElementById('tribe-talks')
  if (element) {
    const yOffset = -20
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
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