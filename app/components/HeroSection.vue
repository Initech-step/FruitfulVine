<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <nav aria-label="Global" class="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 flex items-center space-x-3 group">
            <div class="relative h-11 w-11 rounded-xl bg-gradient-to-br from-red-600 via-red-600 to-red-700 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/30 shadow-md">
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white&shade=500" alt="FruitFul Vine" class="h-6 w-auto" />
              <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="hidden sm:block">
              <span class="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">FruitFul Vine</span>
              <div class="text-xs text-gray-500 font-medium -mt-0.5">Phone Care Experts</div>
            </div>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button type="button" command="show-modal" commandfor="mobile-menu" 
                  class="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-100">
            <span class="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-1">
          <a href="#" class="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 hover:bg-red-50/80 group">
            <span>Products</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-12 transition-all duration-300"></span>
          </a>
          <a href="#" class="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 hover:bg-red-50/80 group">
            <span>Blog</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-8 transition-all duration-300"></span>
          </a>
          <a href="#" class="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 hover:bg-red-50/80 group">
            <span>Contact</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-12 transition-all duration-300"></span>
          </a>
          <a href="#" class="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 hover:bg-red-50/80 group">
            <span>Company</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-14 transition-all duration-300"></span>
          </a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-3">
          <a href="#" class="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors duration-300">
            Log in
          </a>
          <a href="#" class="group relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 overflow-hidden">
            <span class="relative z-10">Get started</span>
            <div class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </nav>

      <!-- Mobile Menu Dialog -->
      <el-dialog>
        <dialog id="mobile-menu" class="backdrop:bg-black/40 backdrop:backdrop-blur-sm lg:hidden">
          <div tabindex="0" class="fixed inset-0 focus:outline-none">
            <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-gray-200 shadow-2xl">
              <div class="flex items-center justify-between mb-8">
                <a href="#" class="-m-1.5 p-1.5 flex items-center space-x-3">
                  <div class="h-11 w-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20">
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white&shade=500" alt="" class="h-6 w-auto" />
                  </div>
                  <div>
                    <span class="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">FruitFul Vine</span>
                    <div class="text-xs text-gray-500 font-medium -mt-0.5">Phone Care Experts</div>
                  </div>
                </a>
                <button type="button" command="close" commandfor="mobile-menu" 
                        class="-m-2.5 rounded-xl p-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300">
                  <span class="sr-only">Close menu</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              
              <div class="flow-root">
                <div class="-my-6 divide-y divide-gray-200">
                  <div class="space-y-2 py-6">
                    <a href="#" class="-mx-3 flex items-center rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all duration-300 group">
                      <span>Products</span>
                      <svg class="ml-auto w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="#" class="-mx-3 flex items-center rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all duration-300 group">
                      <span>Blog</span>
                      <svg class="ml-auto w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="#" class="-mx-3 flex items-center rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all duration-300 group">
                      <span>Contact</span>
                      <svg class="ml-auto w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="#" class="-mx-3 flex items-center rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all duration-300 group">
                      <span>Company</span>
                      <svg class="ml-auto w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div class="py-6 space-y-3">
                    <a href="#" class="-mx-3 block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all duration-300 text-center border border-gray-200 hover:border-red-200">
                      Log in
                    </a>
                    <a href="#" class="-mx-3 block rounded-xl px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 text-center shadow-lg shadow-red-500/30">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>

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
            <a href="#" class="group relative w-full sm:w-auto rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span class="relative z-10 flex items-center justify-center">
                Browse Products
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#" class="group w-full sm:w-auto rounded-xl bg-white border-2 border-gray-200 px-8 py-4 text-base font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md">
              <span>Read Our Blog</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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
// Your script
</script>