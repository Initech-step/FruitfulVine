<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <!-- Background Gradient Blobs -->
      <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
             class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div class="mx-auto max-w-3xl py-32 sm:py-40 lg:py-48">
        <!-- Announcement Badge -->
        <div class="flex flex-col items-center gap-2 mb-10 sm:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-100/60 shadow-sm transition-all hover:border-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-black/70">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
            <div class="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <span class="font-bold text-gray-700 text-black">Shopping Plaza, Opp. GT Bank, Red Light, Paynesville</span>
            </div>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-100/60 shadow-sm transition-all hover:border-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-black/70">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>
            <div class="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <span class="font-medium text-gray-700">9:00 AM – 11:00 PM</span>
            </div>
          </div>
        </div>

        <!-- Main Hero Content -->
        <div class="text-center">
          <h1 class="font-black text-5xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent tracking-tight sm:text-6xl lg:text-7xl mb-6">
            <span class="block mb-2">Fast & Reliable</span>
            <span class="relative inline-block">
              <span class="relative z-10 font-black text-gray-900">
                Phone Repair in Paynesville, Liberia.
              </span>
              <span class="absolute -bottom-2 left-0 w-full h-4 bg-red-200 -z-0 blur-sm"></span>
            </span>
          </h1>
          
          <p class="mt-8 text-lg sm:text-xl font-medium leading-8 text-gray-600 max-w-2xl mx-auto">
            Broken screen? Battery draining fast? Software issues? At Fruitful Vine Mobile Ltd., we bring your phone back to life — quickly, affordably, and professionally.
            <span class="text-gray-900 font-semibold">Quality service</span>, 
            <span class="text-gray-900 font-semibold">expert care</span>, 
            delivered with passion.
          </p>

          <!-- CTA Buttons -->
          <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink 
              to="/products" 
              class="group relative w-full sm:w-auto rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center">
                Browse Products
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
  
            <NuxtLink 
              to="/blog" 
              class="group w-full sm:w-auto rounded-xl bg-white border-2 border-gray-200 px-8 py-4 text-base font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
            >
              <span>Read Our Blog</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Feature Pills -->
          <div class="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm">
            
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Experienced & skilled technicians</span>
            </div>
            
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Fast turnaround time</span>
            </div>
            
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Quality parts & tools</span>
            </div>

            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Affordable and honest pricing</span>
            </div>

            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Trusted by customers across Paynesville & Monrovia</span>
            </div>

          </div>

          
        </div>
      </div>

      <!-- Bottom Background Gradient -->
      <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
             class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-400 to-red-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>