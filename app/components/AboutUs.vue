<template>
  <div class="about-root">

    <!-- Background blobs -->
    <div class="blob blob-top" aria-hidden="true">
      <div class="blob-shape blob-top-shape"></div>
    </div>
    <div class="blob blob-bottom" aria-hidden="true">
      <div class="blob-shape blob-bottom-shape"></div>
    </div>

    <div class="about-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">Our Story</span>
        <h1 class="section-title">
          About <span class="title-accent">Us</span>
        </h1>
        <div class="title-rule"></div>
      </div>

      <!-- Two-column layout -->
      <div class="two-col">

        <!-- ── Column 1: Carousel ── -->
        <div class="carousel-col" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
          <div class="carousel-frame">

            <!-- Slides -->
            <TransitionGroup
              enter-active-class="slide-enter-active"
              enter-from-class="slide-enter-from"
              enter-to-class="slide-enter-to"
              leave-active-class="slide-leave-active"
              leave-from-class="slide-leave-from"
              leave-to-class="slide-leave-to"
            >
              <div
                v-for="(image, index) in images"
                :key="index"
                v-show="index === currentSlide"
                class="slide"
              >
                <img :src="image.url" :alt="image.alt" class="slide-img" />
                <div class="slide-overlay" aria-hidden="true"></div>
                <div class="slide-caption">
                  <span class="caption-dot" aria-hidden="true"></span>
                  {{ image.caption }}
                </div>
              </div>
            </TransitionGroup>

            <!-- Progress bar -->
            <div class="progress-track" aria-hidden="true">
              <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
            </div>

            <!-- Dots -->
            <div class="carousel-dots" role="tablist">
              <button
                v-for="(_, index) in images"
                :key="index"
                @click="goToSlide(index)"
                :class="['dot', { 'dot-active': currentSlide === index }]"
                :aria-label="`Go to slide ${index + 1}`"
                role="tab"
              ></button>
            </div>

            <!-- Arrows -->
            <button @click="prevSlide" class="arrow arrow-left" aria-label="Previous slide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="nextSlide" class="arrow arrow-right" aria-label="Next slide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
          <!-- Decorative glow -->
          <div class="carousel-glow" aria-hidden="true"></div>
        </div>

        <!-- ── Column 2: Text ── -->
        <div class="text-col">

          <!-- Intro -->
          <div class="intro-block">
            <h3 class="intro-heading">Fruitful Vine Mobile Ltd.</h3>
            <p class="intro-body">
              A professional phone repair and mobile accessories business located in the heart of
              Paynesville, Liberia — passionate about helping people stay connected by restoring
              their devices quickly and correctly.
            </p>
          </div>

          <p class="body-text">
            Our technicians are trained and experienced in handling all kinds of phone issues —
            from simple screen cracks to complex software and cloud-related problems.
          </p>

          <!-- Core values -->
          <div class="values-card">
            <div class="values-header">
              <span class="values-rule" aria-hidden="true"></span>
              <h4 class="values-title">At Fruitful Vine Mobile, we believe in:</h4>
            </div>
            <div class="values-list">
              <div class="value-item" v-for="v in values" :key="v.title">
                <div class="value-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="value-text">
                  <p class="value-title">{{ v.title }}</p>
                  <p class="value-desc">{{ v.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission -->
          <div class="mission-card">
            <div class="mission-header">
              <span class="mission-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <h4 class="mission-title">Our Mission</h4>
            </div>
            <p class="mission-body">
              To provide reliable, affordable, and professional phone repair services
              that customers can trust — every single time.
            </p>
          </div>

          <!-- Tagline -->
          <blockquote class="tagline">
            "Fruitful Vine Mobile —
            <span class="tagline-accent">Where Phones Come Back to Life.</span>"
          </blockquote>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const progress = ref(0)
const INTERVAL = 5000
let autoplayInterval: ReturnType<typeof setInterval> | null = null
let progressInterval: ReturnType<typeof setInterval> | null = null

const progressWidth = computed(() => progress.value)

const images = ref([
  { url: '/img/owner.jpeg', alt: 'Our CEO', caption: 'Our CEO' },
  { url: '/img/prod.jpeg',  alt: 'Our Store', caption: 'Our Store' },
])

const values = [
  { title: 'Honesty and transparency', desc: 'Clear communication and fair pricing — always.' },
  { title: 'Quality workmanship',      desc: 'Expert repairs with precision and care.' },
  { title: 'Customer satisfaction',    desc: 'Your happiness is our highest priority.' },
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
  progress.value = 0
}
const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
  progress.value = 0
}
const goToSlide = (index: number) => {
  currentSlide.value = index
  progress.value = 0
  resetAutoplay()
}

const startAutoplay = () => {
  progress.value = 0
  autoplayInterval = setInterval(nextSlide, INTERVAL)
  progressInterval = setInterval(() => {
    progress.value = Math.min(progress.value + (100 / (INTERVAL / 50)), 100)
  }, 50)
}
const stopAutoplay = () => {
  if (autoplayInterval) { clearInterval(autoplayInterval); autoplayInterval = null }
  if (progressInterval) { clearInterval(progressInterval); progressInterval = null }
}
const resetAutoplay = () => { stopAutoplay(); startAutoplay() }

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<style scoped>
/* ─── Tokens — all hex / rgba ────────────────────────────────── */
.about-root {
  --red:         #dc2626;
  --red-bright:  #ef4444;
  --red-dark:    #b91c1c;
  --red-50:      #fff1f2;
  --red-100:     #ffe4e6;
  --red-glow:    rgba(220,38,38,0.15);
  --red-glow-lg: rgba(220,38,38,0.22);

  --green-50:    #f0fdf4;
  --green-100:   #dcfce7;
  --green-800:   #166534;
  --green-900:   #14532d;

  --gray-50:     #f9fafb;
  --gray-100:    #f3f4f6;
  --gray-200:    #e5e7eb;
  --gray-400:    #9ca3af;
  --gray-500:    #6b7280;
  --gray-600:    #4b5563;
  --gray-900:    #111827;

  --white:       #ffffff;
  --black:       #000000;
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.about-root {
  position: relative;
  background-color: var(--white);
  padding: 5rem 1.5rem 6rem;
  overflow: hidden;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .about-root { padding-top: 7rem; padding-bottom: 8rem; } }
@media (min-width: 1024px) { .about-root { padding-left: 2rem; padding-right: 2rem; } }

/* ─── Background blobs ───────────────────────────────────────── */
.blob {
  position: absolute;
  left: 0; right: 0;
  z-index: 0;
  overflow: hidden;
  filter: blur(48px);
  pointer-events: none;
}
.blob-top    { top: -10rem; }
.blob-bottom { top: calc(100% - 13rem); }
@media (min-width: 640px) {
  .blob-top    { top: -20rem; filter: blur(64px); }
  .blob-bottom { top: calc(100% - 30rem); filter: blur(64px); }
}

.blob-shape {
  clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
  aspect-ratio: 1155 / 678;
  opacity: 0.10;
}
.blob-top-shape {
  position: relative;
  left: calc(50% - 11rem);
  width: 36.125rem;
  transform: translateX(-50%) rotate(30deg);
  background-image: linear-gradient(135deg, #f87171, #dc2626);
}
.blob-bottom-shape {
  position: relative;
  left: calc(50% + 3rem);
  width: 36.125rem;
  transform: translateX(-50%);
  background-image: linear-gradient(135deg, #f87171, #dc2626);
}
@media (min-width: 640px) {
  .blob-top-shape    { left: calc(50% - 30rem); width: 72.1875rem; }
  .blob-bottom-shape { left: calc(50% + 36rem); width: 72.1875rem; }
}

/* ─── Layout ─────────────────────────────────────────────────── */
.about-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 0.85rem;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
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
  /* explicit hex gradient, no oklch */
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.title-rule {
  width: 3rem;
  height: 4px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  margin: 0 auto;
}

/* ─── Two-column grid ────────────────────────────────────────── */
.two-col {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 1024px) {
  .two-col { grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
}

/* ─── Carousel ───────────────────────────────────────────────── */
.carousel-col {
  position: relative;
}

.carousel-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 480px;
  background-color: var(--gray-100);
  box-shadow: 0 24px 60px rgba(0,0,0,0.12), 0 0 0 1px var(--gray-200);
}
@media (min-width: 640px) { .carousel-frame { height: 560px; } }

/* Slides */
.slide {
  position: absolute;
  inset: 0;
}
.slide-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.slide-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
}

.slide-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1.25rem 1.5rem;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* ensure caption text colour always white */
  -webkit-text-fill-color: #ffffff;
}
.caption-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background-color: #ff4545;
  box-shadow: 0 0 8px rgba(255,69,69,0.7);
  flex-shrink: 0;
}

/* Progress bar */
.progress-track {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background-color: rgba(255,255,255,0.2);
  z-index: 5;
}
.progress-fill {
  height: 100%;
  background-color: #ffffff;
  transition: width 0.05s linear;
}

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 1.25rem; left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}
.dot {
  width: 8px; height: 8px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background-color: rgba(255,255,255,0.4);
  transition: width 0.3s, background-color 0.3s;
  padding: 0;
}
.dot-active {
  width: 24px;
  background-color: #ffffff;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 42px; height: 42px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.92);
  border: none;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  z-index: 10;
  opacity: 0;
  transition: opacity 0.25s, transform 0.2s, background-color 0.2s;
}
.carousel-frame:hover .arrow { opacity: 1; }
.arrow:hover { background-color: #ffffff; }
.arrow-left  { left: 1rem; }
.arrow-right { right: 1rem; }
.arrow:hover { transform: translateY(-50%) scale(1.08); }
.arrow svg { width: 18px; height: 18px; color: #111827; }

/* Glow decoration */
.carousel-glow {
  position: absolute;
  bottom: -2rem; right: -2rem;
  width: 10rem; height: 10rem;
  border-radius: 1.5rem;
  background-image: linear-gradient(135deg, #ef4444, #b91c1c);
  opacity: 0.18;
  filter: blur(28px);
  z-index: 0;
  pointer-events: none;
}

/* Slide transitions */
.slide-enter-active  { transition: opacity 0.65s ease, transform 0.65s ease; }
.slide-enter-from    { opacity: 0; transform: translateX(40px); }
.slide-enter-to      { opacity: 1; transform: translateX(0); }
.slide-leave-active  { transition: opacity 0.65s ease, transform 0.65s ease; position: absolute; inset: 0; }
.slide-leave-from    { opacity: 1; transform: translateX(0); }
.slide-leave-to      { opacity: 0; transform: translateX(-40px); }

/* ─── Text column ────────────────────────────────────────────── */
.text-col {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* Intro */
.intro-heading {
  margin: 0 0 0.75rem;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-900);
  line-height: 1.2;
}
.intro-body {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--gray-600);
}
.body-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--gray-500);
}

/* Values card */
.values-card {
  background-color: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.values-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.values-rule {
  display: block;
  width: 4px; height: 28px;
  border-radius: 9999px;
  background-image: linear-gradient(180deg, #dc2626, #b91c1c);
  flex-shrink: 0;
}
.values-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--gray-900);
}
.values-list { display: flex; flex-direction: column; gap: 1.1rem; }

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}
.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 10px;
  background-color: var(--red-100);
  color: var(--red);
  flex-shrink: 0;
  transition: transform 0.2s;
}
.value-item:hover .value-icon { transform: scale(1.1); }
.value-icon svg { width: 18px; height: 18px; }

.value-title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.3;
}
.value-desc {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--gray-500);
  line-height: 1.5;
}

/* Mission card */
.mission-card {
  border-radius: 18px;
  padding: 1.75rem;
  background-color: var(--green-50);
  border: 1px solid var(--green-100);
  box-shadow: 0 4px 20px rgba(22, 101, 52, 0.07);
}
.mission-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}
.mission-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  border-radius: 8px;
  background-color: var(--green-100);
  color: var(--green-800);
  flex-shrink: 0;
}
.mission-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: var(--green-900);
}
.mission-body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--green-800);
}

/* Tagline */
.tagline {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-style: italic;
  color: var(--gray-900);
  border-left: 3px solid var(--red);
  padding-left: 1rem;
  line-height: 1.6;
}
.tagline-accent {
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
</style>