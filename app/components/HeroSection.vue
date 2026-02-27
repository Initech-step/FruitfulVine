<template>
  <div class="hero-root">
    <!-- Hero Section -->
    <div class="hero-section">

      <!-- Background Gradient Blob Top -->
      <div aria-hidden="true" class="blob blob-top">
        <div class="blob-shape blob-shape-top"></div>
      </div>

      <div class="hero-container">

        <!-- Announcement Badges -->
        <div class="badges-wrapper">
          <div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="badge-icon">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
            <span class="badge-text badge-text-bold">Shopping Plaza, Opp. GT Bank, Red Light, Monrovia.</span>
          </div>

          <div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="badge-icon">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>
            <span class="badge-text">9:00 AM – 11:00 PM</span>
          </div>
        </div>

        <!-- Main Hero Content -->
        <div class="hero-content">
          <h1 class="hero-heading">
            <span class="heading-gradient-line">Fast &amp; Reliable</span>
            <span class="heading-dark-line">
              Phone Repair in Monrovia, Liberia.
              <span class="heading-underline" aria-hidden="true"></span>
            </span>
          </h1>

          <p class="hero-description">
            Broken screen? Battery draining fast? Software issues? At Fruitful Vine Mobile Ltd., we bring your phone back to life — quickly, affordably, and professionally.
            <span class="text-emphasis">Quality service</span>,
            <span class="text-emphasis">expert care</span>,
            delivered with passion.
          </p>

          <!-- CTA Buttons -->
          <div class="cta-wrapper">
            <NuxtLink to="/products" class="btn-primary">
              <span class="btn-label">
                Browse Products
                <svg class="btn-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div class="btn-hover-overlay" aria-hidden="true"></div>
            </NuxtLink>

            <NuxtLink to="/blog" class="btn-secondary">
              <span>Read Our Blog</span>
              <svg class="btn-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Feature Pills -->
          <div class="pills-wrapper">
            <div class="pill" v-for="feature in features" :key="feature">
              <span class="pill-icon-wrap">
                <svg class="pill-check" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="pill-text">{{ feature }}</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Background Gradient Blob Bottom -->
      <div aria-hidden="true" class="blob blob-bottom">
        <div class="blob-shape blob-shape-bottom"></div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const features = [
  'Experienced & skilled technicians',
  'Fast turnaround time',
  'Quality parts & tools',
  'Affordable and honest pricing',
  'Trusted by customers across Monrovia',
]
</script>

<style scoped>
/* ─── Color Tokens ──────────────────────────────────────────── */
:root,
.hero-root {
  --red-50:  #fff1f2;
  --red-100: #ffe4e6;
  --red-200: #fecdd3;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;

  --yellow-100: #fef9c3;
  --yellow-400: #facc15;

  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-900: #111827;

  --white: #ffffff;
}

/* ─── Layout ────────────────────────────────────────────────── */
.hero-root {
  background-color: var(--white);
  min-height: 100vh;
}

.hero-section {
  position: relative;
  isolation: isolate;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3.5rem;
}

@media (min-width: 1024px) {
  .hero-section { padding-left: 2rem; padding-right: 2rem; }
}

.hero-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

@media (min-width: 640px) {
  .hero-container { padding-top: 10rem; padding-bottom: 10rem; }
}
@media (min-width: 1024px) {
  .hero-container { padding-top: 12rem; padding-bottom: 12rem; }
}

/* ─── Gradient Blobs ────────────────────────────────────────── */
.blob {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -10;
  transform: translateZ(0);
  overflow: hidden;
  filter: blur(48px);
}
.blob-top  { top: -10rem; }
.blob-bottom { top: calc(100% - 13rem); }

@media (min-width: 640px) {
  .blob-top    { top: -20rem; filter: blur(64px); }
  .blob-bottom { top: calc(100% - 30rem); filter: blur(64px); }
}

.blob-shape {
  clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
  aspect-ratio: 1155 / 678;
  width: 36.125rem;
  opacity: 0.20;
  transform: rotate(30deg) translateX(-50%);
}

.blob-shape-top {
  position: relative;
  left: calc(50% - 11rem);
  /* explicit gradient — no oklch, works on all iOS Safari */
  background-image: linear-gradient(135deg, #f87171, #dc2626);
}

.blob-shape-bottom {
  position: relative;
  left: calc(50% + 3rem);
  background-image: linear-gradient(135deg, #f87171, #dc2626);
  transform: translateX(-50%);
}

@media (min-width: 640px) {
  .blob-shape-top    { left: calc(50% - 30rem); width: 72.1875rem; }
  .blob-shape-bottom { left: calc(50% + 36rem); width: 72.1875rem; }
}

/* ─── Badges ────────────────────────────────────────────────── */
.badges-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--yellow-100);
  border: 1px solid rgba(254, 249, 195, 0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: border-color 0.2s;
}
.badge:hover { border-color: var(--yellow-400); }

.badge-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: rgba(0,0,0,0.7);
  flex-shrink: 0;
}

.badge-text {
  font-size: 0.6875rem;
  color: var(--gray-700);
}
.badge-text-bold { font-weight: 700; color: var(--gray-900); }

@media (min-width: 640px) {
  .badge-text { font-size: 0.75rem; }
}

/* ─── Heading ───────────────────────────────────────────────── */
.hero-content { text-align: center; }

.hero-heading {
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) { .hero-heading { font-size: 3.75rem; } }
@media (min-width: 1024px) { .hero-heading { font-size: 4.5rem; } }

.heading-gradient-line {
  display: block;
  margin-bottom: 0.5rem;
  /* explicit hex gradient — renders correctly on iOS Safari */
  background-image: linear-gradient(90deg, #ef4444, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* fallback for very old browsers */
}

.heading-dark-line {
  position: relative;
  display: inline-block;
  font-weight: 900;
  color: var(--gray-900);
  /* ensure text-fill doesn't bleed from sibling */
  -webkit-text-fill-color: var(--gray-900);
}

.heading-underline {
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: var(--red-200);
  z-index: -1;
  filter: blur(4px);
}

/* ─── Description ───────────────────────────────────────────── */
.hero-description {
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2;
  color: var(--gray-600);
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 640px) { .hero-description { font-size: 1.25rem; } }

.text-emphasis {
  color: var(--gray-900);
  font-weight: 600;
}

/* ─── CTA Buttons ───────────────────────────────────────────── */
.cta-wrapper {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media (min-width: 640px) {
  .cta-wrapper { flex-direction: row; }
}

.btn-primary {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  /* explicit hex gradient — no oklch */
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  /* explicit hex shadow */
  box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.4);
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.btn-primary:hover {
  box-shadow: 0 20px 40px -5px rgba(220, 38, 38, 0.5);
  transform: scale(1.05);
}

.btn-label {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-hover-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(135deg, #b91c1c, #991b1b);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn-primary:hover .btn-hover-overlay { opacity: 1; }

.btn-secondary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background-color: var(--white);
  border: 2px solid var(--gray-200);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--gray-900);
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.btn-secondary:hover {
  background-color: #f9fafb;
  border-color: var(--gray-300);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
}

@media (min-width: 640px) {
  .btn-primary, .btn-secondary { width: auto; }
}

.btn-arrow {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.btn-primary:hover .btn-arrow,
.btn-secondary:hover .btn-arrow {
  transform: translateX(4px);
}

/* ─── Feature Pills ─────────────────────────────────────────── */
.pills-wrapper {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--white);
  border-radius: 9999px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.pill-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: var(--red-100);
  flex-shrink: 0;
}

.pill-check {
  width: 0.75rem;
  height: 0.75rem;
  color: var(--red-600);
}

.pill-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-900);
}
</style>