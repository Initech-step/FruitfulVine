<template>
  <div class="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-50 border border-red-100">
          <span class="text-xs font-semibold text-red-700 uppercase tracking-wider">Our Products</span>
        </div>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-4">
          We <span class="relative inline-block">
            <span class="relative z-10 text-red-600">Sell</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-0"></span>
          </span>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Premium phone accessories curated for quality, durability, and style. Protect and enhance your device with our professional selection.
        </p>
      </div>

      <!-- Product Grid -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(callout, index) in callouts" :key="callout.name" 
             class="group relative bg-white rounded-2xl border border-gray-200 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          
          <!-- Image Slider -->
          <div class="relative h-72 sm:h-80 lg:h-72 overflow-hidden bg-gray-100">
            <div class="relative w-full h-full">
              <img 
                v-for="(img, imgIndex) in callout.images" 
                :key="imgIndex"
                :src="img" 
                :alt="`${callout.name} sample ${imgIndex + 1}`"
                :class="['absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out', 
                         currentSlide[index] === imgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105']"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Hover Label -->
              <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <span class="inline-block px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg">
                  View Details
                </span>
              </div>
            </div>

            <!-- Navigation Arrows -->
            <button 
              @click="prevSlide(index)"
              class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-x-0.5 z-10 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              @click="nextSlide(index)"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:translate-x-0.5 z-10 backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Slide Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              <button
                v-for="(img, imgIndex) in callout.images"
                :key="imgIndex"
                @click="goToSlide(index, imgIndex)"
                :class="['h-1.5 rounded-full transition-all duration-300 shadow-sm', 
                         currentSlide[index] === imgIndex 
                           ? 'w-8 bg-white shadow-md' 
                           : 'w-1.5 bg-white/60 hover:bg-white/90 hover:w-3']"
                :aria-label="`Go to slide ${imgIndex + 1}`"
              ></button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                {{ callout.name }}
              </span>
              <div class="flex items-center space-x-1 text-xs text-gray-500">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span class="font-medium">{{ callout.images.length }} items</span>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
              <a :href="callout.href" class="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded">
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ callout.description }}
              </a>
            </h3>
            
            <p class="text-sm leading-relaxed text-gray-600 mb-5">
              {{ callout.details }}
            </p>

            <!-- Action Footer -->
            <div class="flex items-center justify-between pt-5 border-t border-gray-100">
              <a :href="callout.href" 
                 class="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group/link">
                Explore collection
                <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                      aria-label="Add to wishlist">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center space-x-2 text-sm text-gray-600">
          <span>Can't find what you're looking for?</span>
          <a href="#" class="font-semibold text-red-600 hover:text-red-700 underline decoration-red-200 hover:decoration-red-400 transition-colors">
            Contact our team
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
    
const callouts = [
  {
    name: 'Phone Accessories',
    description: 'Phone Cases',
    details: 'Premium protection and style for all brands and models. Durable materials meet elegant design.',
    href: '#',
    images: [
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
    ]
  },
  {
    name: 'Phone Accessories',
    description: 'Screen Protectors',
    details: 'Crystal-clear protection with military-grade durability for every device model.',
    href: '#',
    images: [
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    ]
  },
  {
    name: 'Phone Accessories',
    description: 'Earphones',
    details: 'Immersive audio experience with premium sound quality and all-day comfort.',
    href: '#',
    images: [
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ]
  },
  {
    name: 'Phone Accessories',
    description: 'Phone Chargers',
    details: 'Fast, reliable charging solutions built to last. Power up with confidence.',
    href: '#',
    images: [
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ]
  },
  {
    name: 'Phone Accessories',
    description: 'Phone Cables',
    details: 'Reinforced cables engineered for durability. Tangle-free and built to endure.',
    href: '#',
    images: [
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ]
  },
];

const currentSlide = ref(callouts.map(() => 0));
const autoPlayIntervals = ref([]);

const nextSlide = (index) => {
  currentSlide.value[index] = (currentSlide.value[index] + 1) % callouts[index].images.length;
};

const prevSlide = (index) => {
  currentSlide.value[index] = (currentSlide.value[index] - 1 + callouts[index].images.length) % callouts[index].images.length;
};

const goToSlide = (index, slideIndex) => {
  currentSlide.value[index] = slideIndex;
};

// Auto-play functionality with smooth transitions
onMounted(() => {
  callouts.forEach((_, index) => {
    const interval = setInterval(() => {
      nextSlide(index);
    }, 5000 + (index * 300)); // Stagger auto-play
    autoPlayIntervals.value.push(interval);
  });
});

onUnmounted(() => {
  autoPlayIntervals.value.forEach(interval => clearInterval(interval));
});
</script>