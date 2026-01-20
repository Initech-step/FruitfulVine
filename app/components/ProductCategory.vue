<template>
  <div class="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      <div v-if="loading" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in props.no_of_products" :key="n" class="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>
      </div>

      <div v-else class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(product, index) in products" :key="product._id" 
             class="group relative bg-white rounded-2xl border border-gray-200 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          
          <div class="relative h-72 sm:h-80 lg:h-72 overflow-hidden bg-gray-100">
            <div class="relative w-full h-full">
              <img 
                v-for="(img, imgIndex) in product.images" 
                :key="imgIndex"
                :src="img.secure_url" 
                :alt="`${product.product_name} image ${imgIndex + 1}`"
                :class="['absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out', 
                         currentSlide[index] === imgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105']"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <span class="inline-block px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg uppercase">
                  View Details
                </span>
              </div>
            </div>

            <template v-if="product.images.length > 1">
              <button @click="prevSlide(index)" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button @click="nextSlide(index)" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </template>

            <div v-if="product.images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              <button
                v-for="(img, imgIndex) in product.images" :key="imgIndex"
                @click="goToSlide(index, imgIndex)"
                :class="['h-1.5 rounded-full transition-all duration-300', currentSlide[index] === imgIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/60']"
              ></button>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                {{ product.category_name }}
              </span>
              <div class="flex items-center space-x-1 text-xs text-gray-500">
                <span class="font-medium">{{ product.images.length }} views</span>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
              <NuxtLink :to="`/products/${product._id}`" class="focus:outline-none">
                {{ product.product_name }}
              </NuxtLink>
            </h3>
            
            <p class="text-sm leading-relaxed text-gray-600 mb-5 line-clamp-2">
              {{ product.short_description }}
            </p>

            <div class="flex items-center justify-between pt-5 border-t border-gray-100">
              <NuxtLink :to="`/products/${product._id}`" 
                 class="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group/link">
                Explore collection
                <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="inline-flex items-center space-x-2 text-sm text-gray-600">
          <span>Can't find what you're looking for?</span>
          <NuxtLink to="/contact" class="font-semibold text-red-600 hover:text-red-700 underline decoration-red-200">
            Contact our team
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  no_of_products: {
    type: Number,
    default: 6
  }
});

const products = ref([]);
const loading = ref(true);
const currentSlide = ref([]);
const autoPlayIntervals = ref([]);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/?page=1&limit=${props.no_of_products}`);
    const data = await response.json();
    products.value = data.products;
    
    // Initialize slider state for each product
    currentSlide.value = products.value.map(() => 0);
    startAutoPlay();
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
  }
};

const nextSlide = (index) => {
  if (products.value[index]?.images?.length > 0) {
    currentSlide.value[index] = (currentSlide.value[index] + 1) % products.value[index].images.length;
  }
};

const prevSlide = (index) => {
  if (products.value[index]?.images?.length > 0) {
    currentSlide.value[index] = (currentSlide.value[index] - 1 + products.value[index].images.length) % products.value[index].images.length;
  }
};

const goToSlide = (index, slideIndex) => {
  currentSlide.value[index] = slideIndex;
};

const startAutoPlay = () => {
  // Clear existing intervals if any
  autoPlayIntervals.value.forEach(interval => clearInterval(interval));
  autoPlayIntervals.value = [];

  products.value.forEach((product, index) => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        nextSlide(index);
      }, 5000 + (index * 300));
      autoPlayIntervals.value.push(interval);
    }
  });
};

onMounted(() => {
  fetchProducts();
});

onUnmounted(() => {
  autoPlayIntervals.value.forEach(interval => clearInterval(interval));
});
</script>