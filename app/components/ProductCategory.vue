<template>
  <div class="products-root">

    <div class="products-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">Our Products</span>
        <h2 class="section-title">
          We <span class="title-accent">
            Sell
            <span class="title-underline" aria-hidden="true"></span>
          </span>
        </h2>
        <p class="section-subtitle">
          Premium phone accessories curated for quality, durability, and style.
          Protect and enhance your device with our professional selection.
        </p>
        <div class="title-rule"></div>
      </div>

      <!-- Skeleton loader -->
      <div v-if="loading" class="product-grid">
        <div v-for="n in props.no_of_products" :key="n" class="skeleton"></div>
      </div>

      <!-- Product grid -->
      <div v-else class="product-grid">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="product-card"
          @mouseenter="pauseAutoPlay(index)"
          @mouseleave="resumeAutoPlay(index)"
        >

          <!-- Image panel -->
          <div class="card-img-wrap">
            <div class="card-img-inner">
              <img
                v-for="(img, imgIndex) in product.images"
                :key="imgIndex"
                :src="img.secure_url"
                :alt="`${product.product_name} image ${imgIndex + 1}`"
                :class="['card-img', currentSlide[index] === imgIndex ? 'card-img-active' : 'card-img-hidden']"
              />

              <!-- Hover overlay -->
              <div class="card-img-overlay" aria-hidden="true"></div>

              <!-- View details badge -->
              <div class="card-hover-badge" aria-hidden="true">
                <span class="hover-badge-pill">View Details</span>
              </div>
            </div>

            <!-- Carousel arrows -->
            <template v-if="product.images.length > 1">
              <button @click.prevent="prevSlide(index)" class="carousel-arrow carousel-arrow-left" aria-label="Previous image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button @click.prevent="nextSlide(index)" class="carousel-arrow carousel-arrow-right" aria-label="Next image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </template>

            <!-- Dots -->
            <div v-if="product.images.length > 1" class="carousel-dots" role="tablist">
              <button
                v-for="(_, imgIndex) in product.images"
                :key="imgIndex"
                @click="goToSlide(index, imgIndex)"
                :class="['carousel-dot', currentSlide[index] === imgIndex ? 'carousel-dot-active' : '']"
                :aria-label="`Image ${imgIndex + 1}`"
                role="tab"
              ></button>
            </div>

            <!-- Image count badge -->
            <div v-if="product.images.length > 1" class="img-count-badge">
              {{ currentSlide[index] + 1 }} / {{ product.images.length }}
            </div>
          </div>

          <!-- Card body -->
          <div class="card-body">
            <div class="card-meta-row">
              <span class="category-pill">{{ product.category_name }}</span>
              <span class="photo-count">
                <svg viewBox="0 0 20 20" fill="currentColor" class="photo-icon">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
                {{ product.images.length }} photo{{ product.images.length !== 1 ? 's' : '' }}
              </span>
            </div>

            <h3 class="card-title">
              <NuxtLink :to="`/products/${product._id}`" class="card-title-link">
                {{ product.product_name }}
              </NuxtLink>
            </h3>

            <p class="card-desc">{{ product.short_description }}</p>

            <div class="card-footer">
              <NuxtLink :to="`/products/${product._id}`" class="explore-link">
                Explore Product
                <svg class="explore-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom note -->
      <div class="bottom-note">
        <p class="bottom-note-text">
          Can't find what you're looking for?
          <NuxtLink to="/contact" class="bottom-note-link">Contact our team</NuxtLink>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const { getUrl } = useApi()

const props = defineProps({
  no_of_products: { type: Number, default: 6 }
})

const products      = ref([])
const loading       = ref(true)
const currentSlide  = ref([])
const intervals     = ref([])
const pausedCards   = ref(new Set())

const fetchProducts = async () => {
  loading.value = true
  try {
    const res  = await fetch(getUrl(`products/?page=1&limit=${props.no_of_products}`))
    const data = await res.json()
    products.value      = data.products
    currentSlide.value  = data.products.map(() => 0)
    startAutoPlay()
  } catch (e) {
    console.error('Error fetching products:', e)
  } finally {
    loading.value = false
  }
}

const nextSlide = (i) => {
  const len = products.value[i]?.images?.length
  if (len) currentSlide.value[i] = (currentSlide.value[i] + 1) % len
}
const prevSlide = (i) => {
  const len = products.value[i]?.images?.length
  if (len) currentSlide.value[i] = (currentSlide.value[i] - 1 + len) % len
}
const goToSlide = (i, si) => { currentSlide.value[i] = si }

const pauseAutoPlay  = (i) => pausedCards.value.add(i)
const resumeAutoPlay = (i) => pausedCards.value.delete(i)

const startAutoPlay = () => {
  intervals.value.forEach(clearInterval)
  intervals.value = []
  products.value.forEach((p, i) => {
    if (p.images.length > 1) {
      intervals.value.push(setInterval(() => {
        if (!pausedCards.value.has(i)) nextSlide(i)
      }, 5000 + i * 300))
    }
  })
}

onMounted(fetchProducts)
onUnmounted(() => intervals.value.forEach(clearInterval))
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.products-root {
  --red:        #dc2626;
  --red-dark:   #b91c1c;
  --red-50:     #fff1f2;
  --red-100:    #ffe4e6;
  --red-200:    #fecdd3;
  --red-600:    #dc2626;
  --red-700:    #b91c1c;

  --gray-50:    #f9fafb;
  --gray-100:   #f3f4f6;
  --gray-200:   #e5e7eb;
  --gray-300:   #d1d5db;
  --gray-500:   #6b7280;
  --gray-600:   #4b5563;
  --gray-700:   #374151;
  --gray-900:   #111827;

  --white:      #ffffff;

  --shadow-sm:  0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.06);
  --shadow-lg:  0 16px 48px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.07);
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.products-root {
  background-image: linear-gradient(180deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%);
  padding: 4rem 1rem 5rem;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .products-root { padding: 6rem 1.5rem 7rem; } }
@media (min-width: 1024px) { .products-root { padding: 7rem 2rem 8rem; } }

.products-inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 1.1rem;
}

.section-title {
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--gray-900);
  line-height: 1.05;
}

.title-accent {
  position: relative;
  display: inline-block;
  /* explicit hex gradient */
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.title-underline {
  position: absolute;
  bottom: 2px; left: 0;
  width: 100%; height: 10px;
  border-radius: 9999px;
  background-color: var(--red-100);
  z-index: -1;
}

.section-subtitle {
  margin: 0 auto 1.5rem;
  max-width: 38rem;
  font-size: 1.025rem;
  line-height: 1.75;
  color: var(--gray-500);
}

.title-rule {
  width: 2.5rem; height: 4px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  margin: 0 auto;
}

/* ─── Grid ───────────────────────────────────────────────────── */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
@media (min-width: 640px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }

/* ─── Skeleton ───────────────────────────────────────────────── */
.skeleton {
  height: 24rem;
  border-radius: 20px;
  background-color: var(--gray-100);
  background-image: linear-gradient(90deg, var(--gray-100) 0%, var(--gray-200) 50%, var(--gray-100) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─── Product card ───────────────────────────────────────────── */
.product-card {
  background-color: var(--white);
  border-radius: 20px;
  border: 1px solid var(--gray-200);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.25s;
}
.product-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--red-200);
}

/* ─── Card image ─────────────────────────────────────────────── */
.card-img-wrap {
  position: relative;
  height: 18rem;
  overflow: hidden;
  background-color: var(--gray-100);
}
@media (min-width: 640px) { .card-img-wrap { height: 20rem; } }
@media (min-width: 1024px) { .card-img-wrap { height: 18rem; } }

.card-img-inner {
  position: relative;
  width: 100%; height: 100%;
}

.card-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.card-img-active  { opacity: 1; transform: scale(1); }
.card-img-hidden  { opacity: 0; transform: scale(1.04); }

/* Hover overlay */
.card-img-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.product-card:hover .card-img-overlay { opacity: 1; }

/* View details badge */
.card-hover-badge {
  position: absolute;
  top: 1rem; left: 1rem;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.product-card:hover .card-hover-badge {
  opacity: 1;
  transform: translateY(0);
}
.hover-badge-pill {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--red);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(220,38,38,0.45);
}

/* Carousel arrows */
.carousel-arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.92);
  border: none;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.18);
  z-index: 10;
  opacity: 0;
  transition: opacity 0.25s, background-color 0.2s, transform 0.2s;
  padding: 0;
}
.product-card:hover .carousel-arrow { opacity: 1; }
.carousel-arrow:hover { background-color: #ffffff; }
.carousel-arrow-left  { left: 0.6rem; }
.carousel-arrow-right { right: 0.6rem; }
.carousel-arrow:hover { transform: translateY(-50%) scale(1.08); }
.carousel-arrow svg { width: 14px; height: 14px; color: #111827; }

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 0.85rem; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 0.35rem;
  z-index: 10;
}
.carousel-dot {
  height: 5px; border-radius: 9999px;
  border: none; cursor: pointer; padding: 0;
  background-color: rgba(255,255,255,0.50);
  width: 6px;
  transition: width 0.3s, background-color 0.3s;
}
.carousel-dot-active {
  width: 20px;
  background-color: #ffffff;
}

/* Image count badge */
.img-count-badge {
  position: absolute;
  top: 0.65rem; right: 0.65rem;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  background-color: rgba(0,0,0,0.50);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-size: 0.65rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 5;
}

/* ─── Card body ──────────────────────────────────────────────── */
.card-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.card-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.category-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.7rem;
  border-radius: 9999px;
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--gray-700);
  letter-spacing: 0.02em;
}

.photo-count {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  color: var(--gray-500);
}
.photo-icon { width: 12px; height: 12px; }

.card-title {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: var(--gray-900);
}
.card-title-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}
.product-card:hover .card-title-link { color: var(--red); }

.card-desc {
  margin: 0 0 1.1rem;
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--gray-500);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--gray-100);
}

.explore-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--red);
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;
}
.explore-link:hover { color: var(--red-dark); gap: 0.6rem; }

.explore-arrow {
  width: 15px; height: 15px;
  transition: transform 0.2s;
}
.explore-link:hover .explore-arrow { transform: translateX(3px); }

/* ─── Bottom note ────────────────────────────────────────────── */
.bottom-note {
  margin-top: 3.5rem;
  text-align: center;
}
.bottom-note-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--gray-500);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
}
.bottom-note-link {
  font-weight: 700;
  color: var(--red);
  text-decoration: underline;
  text-decoration-color: var(--red-200);
  text-underline-offset: 3px;
  transition: color 0.2s, text-decoration-color 0.2s;
}
.bottom-note-link:hover {
  color: var(--red-dark);
  text-decoration-color: var(--red);
}
</style>