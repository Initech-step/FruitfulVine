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
        <div class="hidden sm:mb-10 sm:flex sm:justify-center">
          <div class="relative group rounded-full px-4 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-200 hover:ring-red-300 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md">
            <span class="inline-flex items-center space-x-2">
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span class="font-medium text-gray-900">Where Phones Come Back to Life</span>
            </span>
            <a href="#" class="font-semibold text-red-600 hover:text-red-700 ml-2 inline-flex items-center transition-colors">
              <span aria-hidden="true" class="absolute inset-0 rounded-full"></span>
              Learn more 
              <svg class="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Main Hero Content -->
        <div class="text-center">
          <h1 class="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
            <span class="block mb-2">Welcome to</span>
            <span class="relative inline-block">
              <span class="relative z-10 bg-gradient-to-r from-red-600 via-red-600 to-red-700 bg-clip-text text-transparent">
                FruitFul Vine
              </span>
              <span class="absolute -bottom-2 left-0 w-full h-4 bg-red-100 -z-0 blur-sm"></span>
            </span>
          </h1>
          
          <p class="mt-8 text-lg sm:text-xl font-medium leading-8 text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for professional phone repairs and premium accessories. 
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
              <span class="font-semibold text-gray-900">Expert Technicians</span>
            </div>
            
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Same-Day Service</span>
            </div>
            
            <div class="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">Warranty Included</span>
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