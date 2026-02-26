<template>
  <div class="products-root">

    <!-- Background layers -->
    <div class="bg-grid" aria-hidden="true"></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

      <!-- Section header -->
      <div class="section-header">
        <span class="eyebrow-pill">Our Products</span>
        <h2 class="section-title">
          <span class="title-accent">{{ category_name }}</span>
        </h2>
        <div class="title-rule" aria-hidden="true"></div>
      </div>

      <!-- Skeleton loader -->
      <div v-if="loading" class="products-grid">
        <div v-for="n in props.no_of_products" :key="n" class="skeleton"></div>
      </div>

      <!-- Products grid -->
      <div v-else class="products-grid">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="product-card group"
        >

          <!-- Image area -->
          <div class="card-img-area">

            <!-- Slides -->
            <img
              v-for="(img, imgIndex) in product.images"
              :key="imgIndex"
              :src="img.secure_url"
              :alt="`${product.product_name} image ${imgIndex + 1}`"
              :class="['card-img', currentSlide[index] === imgIndex ? 'card-img-active' : 'card-img-hidden']"
            />

            <!-- Hover overlay -->
            <div class="card-overlay" aria-hidden="true"></div>

            <!-- "View Details" badge -->
            <div class="view-badge-wrap">
              <span class="view-badge">View Details</span>
            </div>

            <!-- Prev / Next arrows -->
            <template v-if="product.images.length > 1">
              <button @click.prevent="prevSlide(index)" class="slide-arrow slide-arrow-left" aria-label="Previous image">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button @click.prevent="nextSlide(index)" class="slide-arrow slide-arrow-right" aria-label="Next image">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </template>

            <!-- Dot indicators -->
            <div v-if="product.images.length > 1" class="dot-row">
              <button
                v-for="(img, imgIndex) in product.images"
                :key="imgIndex"
                @click.prevent="goToSlide(index, imgIndex)"
                :class="['dot', currentSlide[index] === imgIndex ? 'dot-active' : 'dot-inactive']"
                :aria-label="`Go to image ${imgIndex + 1}`"
              ></button>
            </div>

            <!-- Progress bar -->
            <div class="img-progress" :key="`progress-${index}-${currentSlide[index]}`" aria-hidden="true"></div>
          </div>

          <!-- Card body -->
          <div class="card-body">

            <!-- Meta row -->
            <div class="card-meta">
              <span class="category-chip">{{ product.category_name }}</span>
              <span class="img-count">
                <svg class="img-count-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ product.images.length }} photo{{ product.images.length !== 1 ? 's' : '' }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="card-title">
              <NuxtLink :to="`/products/${product._id}`" class="card-title-link">
                {{ product.product_name }}
              </NuxtLink>
            </h3>

            <!-- Excerpt -->
            <p class="card-excerpt">{{ product.short_description }}</p>

            <!-- Footer -->
            <div class="card-footer">
              <NuxtLink :to="`/products/${product._id}`" class="read-link group/link">
                Explore Product
                <svg class="read-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>

              <NuxtLink :to="`/products/${product._id}`" class="quick-view-btn">
                Quick View
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="bottom-cta">
        <p class="bottom-cta-text">Can't find what you're looking for?</p>
        <NuxtLink to="/contact" class="bottom-cta-link">Contact our team →</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const { getUrl } = useApi()

const props = defineProps({
  no_of_products: { type: Number, default: 6 },
  category_id:    { type: String }
})

const products           = ref([])
const loading            = ref(true)
const currentSlide       = ref([])
const autoPlayIntervals  = ref([])
const category_name      = ref('')

const fetchProducts = async () => {
  loading.value = true
  try {
    const response = await fetch(
      getUrl(`products/?page=1&limit=${props.no_of_products}&category_id=${props.category_id}`)
    )
    const data = await response.json()
    products.value    = data.products
    category_name.value = data.products[0]?.category_name ?? ''
    currentSlide.value  = products.value.map(() => 0)
    startAutoPlay()
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
}

const nextSlide = (index) => {
  if (products.value[index]?.images?.length > 0)
    currentSlide.value[index] = (currentSlide.value[index] + 1) % products.value[index].images.length
}
const prevSlide = (index) => {
  if (products.value[index]?.images?.length > 0)
    currentSlide.value[index] = (currentSlide.value[index] - 1 + products.value[index].images.length) % products.value[index].images.length
}
const goToSlide = (index, slideIndex) => {
  currentSlide.value[index] = slideIndex
}

const startAutoPlay = () => {
  autoPlayIntervals.value.forEach(i => clearInterval(i))
  autoPlayIntervals.value = []
  products.value.forEach((product, index) => {
    if (product.images.length > 1) {
      autoPlayIntervals.value.push(
        setInterval(() => nextSlide(index), 5000 + index * 300)
      )
    }
  })
}

onMounted(fetchProducts)
onUnmounted(() => autoPlayIntervals.value.forEach(i => clearInterval(i)))
</script>

<style scoped>
/* ============================================================
   COLOR TOKENS  —  all hex / rgba, zero oklch
   ============================================================ */
.products-root {
  --white:          #ffffff;
  --gray-50:        #f9fafb;
  --gray-100:       #f3f4f6;
  --gray-200:       #e5e7eb;
  --gray-400:       #9ca3af;
  --gray-500:       #6b7280;
  --gray-600:       #4b5563;
  --gray-700:       #374151;
  --gray-900:       #111827;

  --red-50:         #fef2f2;
  --red-100:        #fee2e2;
  --red-200:        #fecaca;
  --red-600:        #dc2626;
  --red-700:        #b91c1c;
  --red-600-20:     rgba(220,38,38,0.20);
  --red-600-10:     rgba(220,38,38,0.10);

  --shadow-card:    0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06);
  --shadow-hover:   0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(220,38,38,0.15);
}

/* ─── Page shell ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.products-root {
  position: relative;
  background-color: var(--white);
  font-family: 'DM Sans', system-ui, sans-serif;
  overflow: hidden;
}

/* Subtle dot grid */
.bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
  mask-image:         radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
}

.products-root > .mx-auto {
  position: relative;
  z-index: 1;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.eyebrow-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red-700);
  margin-bottom: 1.25rem;
}

.section-title {
  margin: 0 0 1rem;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--gray-900);
}

.title-accent {
  position: relative;
  display: inline-block;
}

.title-rule {
  width: 48px;
  height: 4px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  margin: 0 auto;
}

/* ─── Skeleton ───────────────────────────────────────────────── */
.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
@media (min-width: 640px)  { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }

.skeleton {
  height: 24rem;
  border-radius: 20px;
  background-color: var(--gray-100);
  background-image: linear-gradient(90deg, var(--gray-100) 0%, var(--gray-200) 50%, var(--gray-100) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.6s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─── Product card ───────────────────────────────────────────── */
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 20px;
  border: 1px solid var(--gray-200);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.25s;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  border-color: var(--red-200);
}

/* ─── Image area ─────────────────────────────────────────────── */
.card-img-area {
  position: relative;
  height: 18rem;
  overflow: hidden;
  background-color: var(--gray-100);
}

.card-img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.card-img-active  { opacity: 1;  transform: scale(1.00); }
.card-img-hidden  { opacity: 0;  transform: scale(1.05); }

/* Dark hover overlay */
.card-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.20) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.product-card:hover .card-overlay { opacity: 1; }

/* "View Details" badge */
.view-badge-wrap {
  position: absolute;
  top: 1rem; left: 1rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.product-card:hover .view-badge-wrap {
  opacity: 1;
  transform: translateY(0);
}
.view-badge {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  background-color: var(--red-600);
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(220,38,38,0.40);
}

/* Prev / Next arrows */
.slide-arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  z-index: 3;
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.95);
  color: var(--gray-900);
  border: none;
  cursor: pointer;
  opacity: 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.12);
  transition: opacity 0.3s ease, background-color 0.2s;
}
.slide-arrow:hover { background-color: var(--white); }
.product-card:hover .slide-arrow { opacity: 1; }
.slide-arrow-left  { left: 0.75rem; }
.slide-arrow-right { right: 0.75rem; }

/* Dot indicators */
.dot-row {
  position: absolute;
  bottom: 1rem; left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 3;
}
.dot {
  height: 6px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: width 0.3s ease, background-color 0.3s ease;
  padding: 0;
}
.dot-active   { width: 24px; background-color: var(--white); }
.dot-inactive { width: 6px;  background-color: rgba(255,255,255,0.50); }

/* Progress bar */
.img-progress {
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  width: 100%;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  transform-origin: left;
  animation: progressAnim 5s linear infinite;
}
@keyframes progressAnim {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ─── Card body ──────────────────────────────────────────────── */
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.5rem 1.5rem;
}

/* Meta */
.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.category-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--gray-700);
}

.img-count {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--gray-400);
}
.img-count-icon { width: 12px; height: 12px; flex-shrink: 0; }

/* Title */
.card-title {
  margin: 0 0 0.55rem;
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: var(--gray-900);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.25s;
}
.product-card:hover .card-title { color: var(--red-600); }

.card-title-link {
  text-decoration: none;
  color: inherit;
  -webkit-text-fill-color: inherit;
}

/* Excerpt */
.card-excerpt {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--gray-500);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* Footer */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1.1rem;
  border-top: 1px solid var(--gray-100);
}

.read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--red-600);
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;
}
.read-link:hover { color: var(--red-700); gap: 0.6rem; }

.read-arrow {
  width: 14px; height: 14px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.read-link:hover .read-arrow { transform: translateX(3px); }

.quick-view-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--gray-600);
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}
.quick-view-btn:hover {
  background-color: var(--red-50);
  border-color: var(--red-100);
  color: var(--red-700);
}

/* ─── Bottom CTA ─────────────────────────────────────────────── */
.bottom-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--gray-100);
}

.bottom-cta-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--gray-500);
}

.bottom-cta-link {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--red-600);
  text-decoration: underline;
  text-decoration-color: var(--red-200);
  text-underline-offset: 3px;
  transition: color 0.2s, text-decoration-color 0.2s;
}
.bottom-cta-link:hover {
  color: var(--red-700);
  text-decoration-color: var(--red-600);
}
</style>