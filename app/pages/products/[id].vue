<template>
    <Header />
    <br>
  <main class="main-root min-h-screen antialiased">
    <nav class="nav-bar sticky top-0 z-40 backdrop-blur-md border-b">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button @click="$router.back()" class="nav-back group flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors">
          <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Go Back
        </button>
        <div class="hidden md:block">
          <span class="nav-category text-xs font-bold uppercase tracking-widest">{{ product?.category_name }}</span>
        </div>
      </div>
    </nav>

    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[70vh]">
      <div class="spinner animate-spin rounded-full h-12 w-12 border-b-2 mb-4"></div>
      <p class="loading-text font-bold uppercase tracking-widest text-xs">Fetching Product...</p>
    </div>

    <div v-else-if="product" class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        <div class="space-y-6">
          <div class="img-main-wrap relative aspect-square rounded-3xl overflow-hidden border shadow-2xl group/main">
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
            
            <div class="img-progress-bar absolute bottom-0 left-0 h-1 transition-all duration-[5000ms] ease-linear" :style="{ width: '100%' }" :key="activeImage"></div>

            <button @click="manualNav('prev')" class="nav-arrow-btn absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg opacity-0 group-hover/main:opacity-100 transition-opacity">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button @click="manualNav('next')" class="nav-arrow-btn absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg opacity-0 group-hover/main:opacity-100 transition-opacity">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div class="absolute top-6 left-6 z-10">
              <span class="premium-badge px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter shadow-xl">
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
                'thumb-btn relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300',
                activeImage === idx ? 'thumb-active scale-95 shadow-lg' : 'thumb-inactive hover:opacity-100'
              ]"
            >
              <img :src="img.secure_url" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="mb-8">
            <span class="product-category-label font-black uppercase tracking-widest text-xs mb-4 block">
              {{ product.category_name }}
            </span>
            <h1 class="product-title text-5xl font-black leading-tight mb-6 uppercase tracking-tight">
              {{ product.product_name }}
            </h1>
            <p class="product-desc text-xl font-medium leading-relaxed">
              {{ product.short_description }}
            </p>
          </div>

          <div class="purchase-box p-8 rounded-3xl border mb-10">
            <div class="flex items-center justify-between mb-8">
              <div>
                <p class="stock-label text-xs font-bold uppercase mb-1">Stock Status</p>
                <p class="stock-value font-black flex items-center gap-2">
                  <span class="stock-dot w-2 h-2 rounded-full animate-pulse"></span>
                  In Stock & Ready to Ship
                </p>
              </div>
            </div>
            
            <button @click="openWhatsAppForProduct" class="cta-btn w-full py-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4 group">
              Get This Product
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div class="prose prose-lg max-w-none mb-12">
            <h3 class="specs-heading font-black uppercase text-sm tracking-widest mb-4">Specifications & Details</h3>
            <div class="specs-body" v-html="product.body"></div>
          </div>

          <div v-if="product.iframe" class="rounded-3xl overflow-hidden shadow-lg border aspect-video mb-12 iframe-wrap" v-html="product.iframe">
          </div>
        </div>
      </div>

      <div class="return-bar mt-20 pt-10 border-t flex justify-center">
        <button @click="$router.back()" class="return-btn flex items-center gap-3 px-10 py-4 rounded-full border-2 font-bold uppercase tracking-widest text-sm transition-all duration-300">
          Return to Collection
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
const { getUrl } = useApi()
const WHATSAPP_NUMBER = '231887777364'

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

const openWhatsAppForProduct = () => {
  if (!product.value) return
  const productName = product.value.product_name
  const category = product.value.category_name
  const description = product.value.short_description
  const productUrl = `${window.location.origin}${route.fullPath}`
  const message = `
    Hello FruitFul Vine 👋

    I'm interested in the following product:

    Product: ${productName}
    Category: ${category}
    Description: ${description}

    Please let me know the price and availability.

    Product Link: ${productUrl}
  `.trim()
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

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
  startSlideShow()
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
    const response = await fetch(getUrl(`product/${p_id}/`))
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
/* ============================================================
   COLOR TOKENS — ALL hex / rgba, zero oklch
   ============================================================ */
.main-root {
  --white:          #ffffff;
  --black:          #000000;
  --gray-50:        #f9fafb;
  --gray-100:       #f3f4f6;
  --gray-400:       #9ca3af;
  --gray-500:       #6b7280;
  --gray-600:       #4b5563;
  --red-600:        #dc2626;
  --red-500-30:     rgba(239,68,68,0.30);
  --green-500:      #22c55e;
}

/* ─── Page shell ─────────────────────────────────────────────── */
.main-root {
  background-color: var(--white);
  color: var(--black);
}

/* ─── Sticky nav ─────────────────────────────────────────────── */
.nav-bar {
  background-color: rgba(255,255,255,0.80);
  border-color: var(--gray-100);
}

.nav-back {
  color: var(--black);
}
.nav-back:hover {
  color: var(--red-600);
}

.nav-category {
  color: var(--gray-400);
}

/* ─── Loading state ──────────────────────────────────────────── */
.spinner {
  border-color: transparent;
  border-bottom-color: var(--red-600);
}
.loading-text {
  color: var(--gray-400);
}

/* ─── Main image area ────────────────────────────────────────── */
.img-main-wrap {
  background-color: var(--gray-50);
  border-color: var(--gray-100);
}

.img-progress-bar {
  background-color: rgba(220,38,38,0.50);
}

.nav-arrow-btn {
  background-color: rgba(255,255,255,0.90);
  color: var(--black);
}

.premium-badge {
  background-color: var(--black);
  color: var(--white);
}

/* ─── Thumbnail strip ────────────────────────────────────────── */
.thumb-btn {
  border-color: transparent;
}
.thumb-active {
  border-color: var(--red-600);
}
.thumb-inactive {
  opacity: 0.60;
}

/* ─── Product info ───────────────────────────────────────────── */
.product-category-label {
  color: var(--red-600);
}

.product-title {
  color: var(--black);
}

.product-desc {
  color: var(--gray-500);
}

/* ─── Purchase box ───────────────────────────────────────────── */
.purchase-box {
  background-color: var(--gray-50);
  border-color: var(--gray-100);
}

.stock-label {
  color: var(--gray-400);
}
.stock-value {
  color: var(--black);
}
.stock-dot {
  background-color: var(--green-500);
}

/* ─── CTA button ─────────────────────────────────────────────── */
.cta-btn {
  background-color: var(--black);
  color: var(--white);
}
.cta-btn:hover {
  background-color: var(--red-600);
  box-shadow: 0 25px 50px -12px var(--red-500-30);
}

/* ─── Specs section ──────────────────────────────────────────── */
.specs-heading {
  color: var(--black);
}
.specs-body {
  color: var(--gray-600);
}

/* ─── Iframe wrapper ─────────────────────────────────────────── */
.iframe-wrap {
  border-color: var(--gray-100);
}

/* ─── Return bar ─────────────────────────────────────────────── */
.return-bar {
  border-color: var(--gray-100);
}

.return-btn {
  border-color: var(--black);
  color: var(--black);
  background-color: transparent;
}
.return-btn:hover {
  background-color: var(--black);
  color: var(--white);
}

/* ─── Image transition ───────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.8s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

/* ─── Scrollbar hide ─────────────────────────────────────────── */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* ─── Iframe reset ───────────────────────────────────────────── */
:deep(iframe) { width: 100%; height: 100%; border: none; }
</style>