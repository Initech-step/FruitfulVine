<template>
    <Header />
    <br>
  <main class="min-h-screen bg-white antialiased">
    <nav class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button @click="$router.back()" class="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors">
          <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Go Back
        </button>
        <div class="hidden md:block">
           <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ product?.category_name }}</span>
        </div>
      </div>
    </nav>

    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[70vh]">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
      <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Fetching Product...</p>
    </div>

    <div v-else-if="product" class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        <div class="space-y-6">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl group/main">
            <TransitionGroup name="fade">
              <img 
                v-for="(img, idx) in product.images" 
                :key="idx"
                v-show="activeImage === idx"
                :src="img.secure_url" 
                class="absolute inset-0 w-full h-full object-cover"
                alt="Product View"
              />
            </TransitionGroup>
            
            <div class="absolute bottom-0 left-0 h-1 bg-red-600/50 transition-all duration-[5000ms] ease-linear" :style="{ width: '100%' }" :key="activeImage"></div>

            <button @click="manualNav('prev')" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover/main:opacity-100 transition-opacity">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button @click="manualNav('next')" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover/main:opacity-100 transition-opacity">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div class="absolute top-6 left-6 z-10">
              <span class="bg-black text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter shadow-xl">
                Premium Selection
              </span>
            </div>
          </div>

          <div v-if="product.images.length > 1" class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              v-for="(img, idx) in product.images" 
              :key="idx"
              @click="setActiveManual(idx)"
              :class="[
                'relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300',
                activeImage === idx ? 'border-red-600 scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
              ]"
            >
              <img :src="img.secure_url" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="mb-8">
            <span class="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">
              {{ product.category_name }}
            </span>
            <h1 class="text-5xl font-black text-black leading-tight mb-6 uppercase tracking-tight">
              {{ product.product_name }}
            </h1>
            <p class="text-xl text-gray-500 font-medium leading-relaxed">
              {{ product.short_description }}
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-gray-50 border border-gray-100 mb-10">
            <div class="flex items-center justify-between mb-8">
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase mb-1">Stock Status</p>
                <p class="text-black font-black flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  In Stock & Ready to Ship
                </p>
              </div>
            </div>
            
            <button class="w-full bg-black hover:bg-red-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-red-500/30 flex items-center justify-center gap-4 group">
              Get This Product
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div class="prose prose-lg max-w-none text-gray-600 mb-12">
             <h3 class="text-black font-black uppercase text-sm tracking-widest mb-4">Specifications & Details</h3>
             <div v-html="product.body"></div>
          </div>

          <div v-if="product.iframe" class="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-video mb-12" v-html="product.iframe">
          </div>
        </div>
      </div>

      <div class="mt-20 pt-10 border-t border-gray-100 flex justify-center">
        <button @click="$router.back()" class="flex items-center gap-3 px-10 py-4 rounded-full border-2 border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300">
          Return to Collection
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface Product {
  _id: string
  product_name: string
  category_name: string
  short_description: string
  body: string
  iframe?: string
  images: { secure_url: string }[]
}

const route = useRoute()
const product = ref<Product | null>(null)
const loading = ref(true)
const activeImage = ref(0)
let slideTimer: any = null

const startSlideShow = () => {
  stopSlideShow()
  if (product.value && product.value.images.length > 1) {
    slideTimer = setInterval(() => {
      activeImage.value = (activeImage.value + 1) % product.value!.images.length
    }, 5000)
  }
}

const stopSlideShow = () => {
  if (slideTimer) clearInterval(slideTimer)
}

const setActiveManual = (index: number) => {
  activeImage.value = index
  startSlideShow() // Reset timer on manual click
}

const manualNav = (dir: 'next' | 'prev') => {
  if (!product.value) return
  const len = product.value.images.length
  if (dir === 'next') activeImage.value = (activeImage.value + 1) % len
  else activeImage.value = (activeImage.value - 1 + len) % len
  startSlideShow()
}

const fetchProductDetails = async () => {
  const p_id = route.params.id as string
  try {
    loading.value = true
    const response = await fetch(`http://127.0.0.1:8000/api/product/${p_id}/`)
    product.value = await response.json()
    startSlideShow()
  } catch (error) {
    console.error('Fetch error:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchProductDetails)
onUnmounted(stopSlideShow)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.8s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

:deep(iframe) { width: 100%; height: 100%; border: none; }
</style>