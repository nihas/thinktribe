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
      <div class="absolute inset-0 bg-[#ca4e00]/90 mix-blend-multiply z-10"></div>


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
        <!-- Large Heading -->
        <h2 class="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#2E4B42] leading-tight">
          ThinkTribe is dedicated to improving mental health through expert-led therapy, podcasts, and educational
          webinars designed for individuals and communities.
        </h2>

        <!-- Right Side: Text + Button -->
        <div>
          <hr class="border-[#2E4B42] mb-6" />
          <p class="text-[#2E4B42] text-lg mb-4">
            At ThinkTribe, we are on a mission to make mental health support more accessible, inclusive, and engaging
            for everyone. We provides a supportive platform where individuals and communities can learn, heal, and
            thrive together. We believe mental health is not a luxury — it's a necessity — and we’re here to make it a
            shared journey.
          </p>

          <!-- Button -->
          <!-- <a
        href="/about"
        class="inline-flex items-center bg-[#D3EFE6] text-[#2E4B42] px-6 py-3 rounded-full font-medium hover:bg-[#bee2d7] transition"
      >
        More about us
        <span class="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2E4B42] text-white">
          →
        </span>
      </a> -->
          <!-- <div class="relative inline-block group">
      <span
                class="absolute -bottom-1 -right-1 w-full h-full border-2 border-black rounded-full transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              ></span>
      <button
                class="relative z-10 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 active:scale-95 transition transform"
              >
                More about us
              </button>
              </div> -->

          <BlackButton label="More about us" />
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
            <BlackButton label="Cognitive Studio" />
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative border border-black bg-white p-8 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-up delay-200">
          <h3 class="text-center text-2xl font-serif mb-6">Our Podcasts</h3>
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
            <BlackButton label="Tribe Talks" />
          </div>
        </div>
      </div>
    </section>




    <section class="bg-[#F9F7F1] py-16 px-4 md:px-12">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Upcoming Webinars
    </h2>

    <!-- Center-aligned grid -->
    <div class="grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3">


      <!-- Webinar Card -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border max-w-sm">
        <img :src="`${baseURL}/images/webinar2.jpg`" alt="Webinar Topic" class="w-full h-48 object-cover">
        
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">September 27, 2025</p>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Conquer the NET: The Ultimate strategy session</h3>
          <p class="text-gray-600 text-sm mb-4">
            UGC NET aspirants! This one's for you. Join expert educator Aysha Hamna P for an exclusive session.
          </p>
          <a :href="`${baseURL}/webinar/conquer-the-net-strategy-session`" class="inline-block px-4 py-2 text-sm bg-[#fd620e] text-white rounded hover:bg-[#e1550c] transition">
            Learn More
          </a>
        </div>
      </div>
      <!-- Add more cards here if needed -->

    </div>
  </div>



  <div class="max-w-7xl mx-auto mt-10">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Past Webinars
    </h2>

    <!-- Center-aligned grid -->
    <div class="grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3">
      
      <!-- Webinar Card -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border max-w-sm">
        <img :src="`${baseURL}/images/webinar-1234.jpg`" alt="Webinar Topic" class="w-full h-48 object-cover">
        
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">September 27, 2025</p>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">The Roadmap to publishing in social science</h3>
          <p class="text-gray-600 text-sm mb-4">
            Are you a postgraduate student or a recent graduate wondering what to do with your dissertation after submission?
          </p>
          <a :href="`${baseURL}/webinar/roadmap-to-publishing-social-science`" class="inline-block px-4 py-2 text-sm bg-[#fd620e] text-white rounded hover:bg-[#e1550c] transition">
            Learn More
          </a>
        </div>
      </div>



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
          <a href="https://www.instagram.com/think.tribe/" target="_blank" aria-label="Instagram"><img src="/images/instagram.svg" alt="Instagram" class="h-8" /></a>
          <!-- <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="fab fa-linkedin text-xl"></i>
          </a> -->
        </div>
        <div class="text-sm text-gray-200">© 2025 ThinkTribe. All Rights Reserved.</div>
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

<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL
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