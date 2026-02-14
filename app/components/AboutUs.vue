<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <!-- Background Gradient Blobs -->
    <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-base font-semibold text-red-600 tracking-wide uppercase mb-3">Our Story</h2>
        <h1 class="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          About <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Us</span>
        </h1>
        <div class="mt-4 h-1.5 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto"></div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Column 1: Image Carousel -->
        <div class="relative group">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
            <!-- Carousel Container -->
            <div class="relative h-[500px] sm:h-[600px] bg-gradient-to-br from-gray-50 to-gray-100">
              <TransitionGroup
                enter-active-class="transition-all duration-700 ease-out"
                enter-from-class="opacity-0 translate-x-full"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-700 ease-out absolute inset-0"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-full"
              >
                <div
                  v-for="(image, index) in images"
                  :key="currentSlide"
                  v-show="index === currentSlide"
                  class="absolute inset-0"
                >
                  <img
                    :src="image.url"
                    :alt="image.alt"
                    class="w-full h-full object-cover"
                  />
                  <!-- Image Overlay Gradient -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  <!-- Image Caption -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p class="text-lg font-semibold drop-shadow-lg">{{ image.caption }}</p>
                  </div>
                </div>
              </TransitionGroup>
            </div>

            <!-- Carousel Indicators -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <button
                v-for="(image, index) in images"
                :key="index"
                @click="goToSlide(index)"
                :class="[
                  'h-2 rounded-full transition-all duration-300',
                  currentSlide === index 
                    ? 'w-8 bg-white shadow-lg' 
                    : 'w-2 bg-white/50 hover:bg-white/75'
                ]"
                :aria-label="`Go to slide ${index + 1}`"
              ></button>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevSlide"
              class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous slide"
            >
              <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next slide"
            >
              <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Decorative Element -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl opacity-20 -z-10 blur-2xl"></div>
        </div>

        <!-- Column 2: Text Content -->
        <div class="space-y-8">
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              About Fruitful Vine Mobile Ltd.
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              Fruitful Vine Mobile Ltd. is a professional phone repair and mobile accessories business located in the heart of Paynesville, Liberia.
            </p>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed">
            We are passionate about helping people stay connected by restoring their mobile devices quickly and correctly. Our technicians are trained and experienced in handling all kinds of phone issues — from simple screen cracks to complex software and cloud-related problems.
          </p>

          <!-- Core Values -->
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span class="w-1.5 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></span>
              At Fruitful Vine Mobile, we believe in:
            </h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-lg font-semibold text-gray-900">Honesty and transparency</p>
                  <p class="text-sm text-gray-600 mt-1">Clear communication and fair pricing</p>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-lg font-semibold text-gray-900">Quality workmanship</p>
                  <p class="text-sm text-gray-600 mt-1">Expert repairs with precision and care</p>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-lg font-semibold text-gray-900">Customer satisfaction</p>
                  <p class="text-sm text-gray-600 mt-1">Your happiness is our priority</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission Statement -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 shadow-xl">
            <h4 class="text-xl font-bold mb-3 text-green-900">Our Mission</h4>
            <p class="text-lg leading-relaxed opacity-95 text-green-800">
              To provide reliable, affordable, and professional phone repair services that customers can trust.
            </p>
          </div>

          <!-- Tagline -->
          <div class="text-center lg:text-left">
            <p class="text-2xl font-bold text-gray-900 italic">
              "Fruitful Vine Mobile — 
              <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Where Phones Come Back to Life.
              </span>"
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Background Gradient -->
    <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-400 to-red-600 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Carousel state
const currentSlide = ref(0)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

// Image data for carousel
const images = ref([
  {
    url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
    alt: 'Phone repair workshop',
    caption: 'State-of-the-art repair facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=800&h=600&fit=crop',
    alt: 'Skilled technician at work',
    caption: 'Expert technicians at your service'
  },
  {
    url: 'https://images.unsplash.com/photo-1531498681945-ccda2b79e7e5?w=800&h=600&fit=crop',
    alt: 'Mobile accessories display',
    caption: 'Quality parts and accessories'
  },
  {
    url: 'https://images.unsplash.com/photo-1512941675424-1c8d0ae2c079?w=800&h=600&fit=crop',
    alt: 'Customer service',
    caption: 'Dedicated to customer satisfaction'
  }
])

// Carousel functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// Lifecycle hooks
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { 
  display: none; 
}
.no-scrollbar { 
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
</style>