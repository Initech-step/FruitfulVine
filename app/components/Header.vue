<template>
  <header :class="['header-root fixed inset-x-0 top-0 z-50 transition-all duration-300', isScrolled ? 'header-scrolled' : '']">
    <nav class="nav-inner">
      <div class="nav-row">

        <!-- Logo -->
        <div class="logo-col">
          <NuxtLink to="/" class="logo-link">
            <img
              src="https://res.cloudinary.com/ddilkwtzi/image/upload/v1772590526/uploads/fvlogo_black_cewt3f.png"
              alt="FruitFul Vine"
              class="logo-img"
            />
            <span class="logo-tagline">Phone Care Experts</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="nav-link group"
          >
            <span class="nav-link-text">{{ link.name }}</span>
            <span class="nav-link-bar" aria-hidden="true"></span>
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="desktop-cta">
          <NuxtLink to="/login" class="login-link">Log in</NuxtLink>
          <NuxtLink to="/products" class="cta-btn group">
            <span class="cta-btn-label">
              Our Products
              <svg class="cta-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div class="cta-btn-hover" aria-hidden="true"></div>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="mobile-menu-col">
          <button
            type="button"
            @click="isMenuOpen = true"
            class="mobile-menu-btn"
            aria-label="Open main menu"
          >
            <svg class="hamburger-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  </header>

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="mobile-overlay">

        <!-- Backdrop -->
        <div class="mobile-backdrop" @click="isMenuOpen = false" />

        <!-- Slide-in panel -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="isMenuOpen" class="mobile-panel">
            <div class="mobile-panel-inner">

              <!-- Panel header -->
              <div class="mobile-panel-header">
                <NuxtLink to="/" @click="isMenuOpen = false" class="mobile-logo-link">
                  <img
                    src="https://res.cloudinary.com/ddilkwtzi/image/upload/v1772590526/uploads/fvlogo_black_cewt3f.png"
                    alt="FruitFul Vine"
                    class="mobile-logo-img"
                  />
                  <span class="mobile-logo-tagline">Phone Care Experts</span>
                </NuxtLink>
                <button
                  @click="isMenuOpen = false"
                  class="mobile-close-btn"
                  aria-label="Close menu"
                >
                  <svg class="close-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Nav links -->
              <div class="mobile-links-area">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.name"
                  :to="link.href"
                  @click="isMenuOpen = false"
                  class="mobile-nav-link"
                >
                  <span>{{ link.name }}</span>
                  <svg class="mobile-nav-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>

              <!-- Mobile CTAs -->
              <div class="mobile-cta-area">
                <NuxtLink
                  to="/login"
                  @click="isMenuOpen = false"
                  class="mobile-login-btn"
                >
                  Log in
                </NuxtLink>
                <NuxtLink
                  to="/products"
                  @click="isMenuOpen = false"
                  class="mobile-products-btn"
                >
                  Our Products
                  <svg class="mobile-cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </NuxtLink>
              </div>

            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMenuOpen = ref(false)
const isScrolled  = ref(false)

const navLinks = [
  { name: 'Products',     href: '/products' },
  { name: 'Blog',         href: '/blog' },
  { name: 'Contact',      href: '/#contact-us' },
  { name: 'Our Services', href: '/ourservices' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 10 }

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(()  => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.header-root {
  --white:        #ffffff;
  --gray-50:      #f9fafb;
  --gray-100:     #f3f4f6;
  --gray-200:     #e5e7eb;
  --gray-300:     #d1d5db;
  --gray-400:     #9ca3af;
  --gray-600:     #4b5563;
  --gray-700:     #374151;
  --gray-900:     #111827;
  --red-50:       #fef2f2;
  --red-100:      #fee2e2;
  --red-600:      #dc2626;
  --red-700:      #b91c1c;
  --red-800:      #991b1b;
  --red-glow-30:  rgba(239,68,68,0.30);
  --red-glow-50:  rgba(239,68,68,0.50);
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.header-root {
  background-color: rgba(255,255,255,0.88);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(229,231,235,0.30);
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.header-scrolled {
  background-color: rgba(255,255,255,0.97);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-bottom-color: rgba(229,231,235,0.55);
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}

/* ─── Nav inner ──────────────────────────────────────────────── */
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (min-width: 640px)  { .nav-inner { padding: 0 1.5rem; } }
@media (min-width: 1024px) { .nav-inner { padding: 0 2rem; } }

.nav-row {
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;
}

/* ─── Logo ───────────────────────────────────────────────────── */
.logo-col { display: flex; flex: 1; }

.logo-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  padding: 0.25rem 0;
  text-decoration: none;
  transition: opacity 0.2s;
}
.logo-link:hover { opacity: 0.80; }

.logo-img {
  height: 44px;
  width: auto;
  object-fit: contain;
  object-position: left center;
  display: block;
}

.logo-tagline {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--gray-600);
  padding-left: 1px;
}

/* ─── Desktop nav ────────────────────────────────────────────── */
.desktop-nav {
  display: none;
  gap: 0.25rem;
  align-items: center;
}
@media (min-width: 1024px) { .desktop-nav { display: flex; } }

.nav-link {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 12px;
  color: var(--gray-700);
  text-decoration: none;
  transition: color 0.25s, background-color 0.25s;
}
.nav-link:hover {
  color: var(--red-600);
  background-color: rgba(254,242,242,0.80);
}

.nav-link-text { position: relative; z-index: 1; }

.nav-link-bar {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  transition: width 0.3s ease;
}
.nav-link:hover .nav-link-bar { width: 2rem; }

/* ─── Desktop CTA ────────────────────────────────────────────── */
.desktop-cta {
  display: none;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  justify-content: flex-end;
}
@media (min-width: 1024px) { .desktop-cta { display: flex; } }

.login-link {
  padding: 0.6rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 12px;
  color: var(--gray-700);
  text-decoration: none;
  transition: color 0.25s, background-color 0.25s;
}
.login-link:hover {
  color: var(--red-600);
  background-color: rgba(243,244,246,0.80);
}

.cta-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.4rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 12px;
  color: var(--white);
  -webkit-text-fill-color: var(--white);
  text-decoration: none;
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  box-shadow: 0 4px 16px var(--red-glow-30);
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.25s;
}
.cta-btn:hover {
  box-shadow: 0 8px 28px var(--red-glow-50);
  transform: scale(1.04);
}
.cta-btn-label {
  position: relative; z-index: 1;
  display: flex; align-items: center; gap: 0.4rem;
}
.cta-btn-icon {
  width: 15px; height: 15px;
  transition: transform 0.2s;
}
.cta-btn:hover .cta-btn-icon { transform: translateY(2px); }
.cta-btn-hover {
  position: absolute; inset: 0;
  background-image: linear-gradient(135deg, #b91c1c, #991b1b);
  opacity: 0;
  transition: opacity 0.3s;
}
.cta-btn:hover .cta-btn-hover { opacity: 1; }

/* ─── Mobile menu button ─────────────────────────────────────── */
.mobile-menu-col { display: flex; }
@media (min-width: 1024px) { .mobile-menu-col { display: none; } }

.mobile-menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 12px;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: var(--gray-700);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, transform 0.15s;
}
.mobile-menu-btn:hover {
  color: var(--red-600);
  background-color: var(--red-50);
  border-color: var(--red-100);
}
.mobile-menu-btn:active { transform: scale(0.94); }
.hamburger-icon { width: 24px; height: 24px; }

/* ─── Mobile overlay ─────────────────────────────────────────── */
.mobile-overlay {
  position: fixed; inset: 0;
  z-index: 50;
}
@media (min-width: 1024px) { .mobile-overlay { display: none; } }

.mobile-backdrop {
  position: fixed; inset: 0;
  background-color: rgba(0,0,0,0.48);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

/* ─── Mobile panel ───────────────────────────────────────────── */
.mobile-panel {
  position: fixed;
  inset-y: 0; right: 0;
  width: 100%;
  max-width: 360px;
  background-color: #ffffff;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  isolation: isolate;
  box-shadow: -8px 0 40px rgba(0,0,0,0.14);
}

.mobile-panel-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Panel header */
.mobile-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.5rem;
  border-bottom: 1px solid var(--gray-100);
}

.mobile-logo-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  text-decoration: none;
}
.mobile-logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  object-position: left center;
  display: block;
}
.mobile-logo-tagline {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--gray-600);
  padding-left: 1px;
}

.mobile-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--gray-700);
  transition: background-color 0.2s, transform 0.15s;
}
.mobile-close-btn:hover { background-color: var(--gray-100); }
.mobile-close-btn:active { transform: scale(0.94); }
.close-icon { width: 22px; height: 22px; }

/* Nav links */
.mobile-links-area {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}
.mobile-nav-link:hover {
  background-color: var(--red-50);
  color: var(--red-600);
}
.mobile-nav-arrow {
  width: 18px; height: 18px;
  color: var(--gray-400);
  transition: color 0.2s, transform 0.2s;
}
.mobile-nav-link:hover .mobile-nav-arrow {
  color: var(--red-600);
  transform: translateX(2px);
}

/* Mobile CTAs */
.mobile-cta-area {
  padding: 1rem 1rem 2rem;
  border-top: 1px solid var(--gray-100);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.mobile-login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  border: 2px solid var(--gray-200);
  background-color: transparent;
  color: var(--gray-900);
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s, transform 0.15s;
}
.mobile-login-btn:hover {
  border-color: var(--gray-300);
  background-color: var(--gray-50);
}
.mobile-login-btn:active { transform: scale(0.98); }

.mobile-products-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  text-decoration: none;
  box-shadow: 0 4px 16px var(--red-glow-30);
  transition: box-shadow 0.25s, transform 0.15s;
}
.mobile-products-btn:hover { box-shadow: 0 8px 24px var(--red-glow-50); }
.mobile-products-btn:active { transform: scale(0.98); }
.mobile-cta-arrow { width: 17px; height: 17px; flex-shrink: 0; }
</style>