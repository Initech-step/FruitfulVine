<template>
  <header :class="['header-root fixed inset-x-0 top-0 z-50 transition-all duration-300', isScrolled ? 'header-scrolled' : 'header-top']">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">

        <!-- Logo -->
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="logo-link group flex items-center space-x-3 -m-1.5 p-1.5">
            <div class="logo-icon-wrap relative h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1767946316/photo_2026-01-08_23-27-47-removebg-preview_isg5cj.png"
                alt="FruitFul Vine Logo"
                class="h-11 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:rotate-6"
              />
              <div class="logo-icon-sheen absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="hidden sm:block">
              <div class="logo-brand-name text-xl font-bold">FruitFul Vine</div>
              <div class="logo-tagline text-xs font-medium -mt-0.5">Phone Care Experts</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-1 lg:items-center">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="nav-link relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <span class="nav-link-bar absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 rounded-full transition-all duration-300"></span>
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          <NuxtLink to="/login" class="login-link px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300">
            Log in
          </NuxtLink>
          <NuxtLink to="/products" class="cta-btn group relative px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 overflow-hidden">
            <span class="relative z-10 flex items-center gap-2">
              Our Products
              <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div class="cta-btn-hover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            @click="isMenuOpen = true"
            class="mobile-menu-btn -m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 transition-all duration-300 active:scale-95"
            aria-label="Open main menu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 lg:hidden">

        <!-- Backdrop -->
        <div class="mobile-backdrop fixed inset-0" @click="isMenuOpen = false" />

        <!-- Panel -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="isMenuOpen" class="mobile-panel fixed inset-y-0 right-0 w-full max-w-sm shadow-2xl">
            <div class="flex h-full flex-col">

              <!-- Mobile header -->
              <div class="mobile-panel-header flex items-center justify-between px-6 py-6 border-b">
                <NuxtLink to="/" @click="isMenuOpen = false" class="flex items-center space-x-3">
                  <div class="mobile-logo-wrap h-12 w-12 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1767946316/photo_2026-01-08_23-27-47-removebg-preview_isg5cj.png"
                      alt="Logo"
                      class="h-8 w-auto"
                    />
                  </div>
                  <span class="mobile-brand-name text-lg font-bold">FruitFul Vine</span>
                </NuxtLink>
                <button
                  @click="isMenuOpen = false"
                  class="mobile-close-btn p-2.5 rounded-xl transition-all duration-300 active:scale-95"
                  aria-label="Close menu"
                >
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Mobile links -->
              <div class="flex-1 overflow-y-auto px-6 py-6">
                <div class="space-y-2">
                  <NuxtLink
                    v-for="link in navLinks"
                    :key="link.name"
                    :to="link.href"
                    @click="isMenuOpen = false"
                    class="mobile-nav-link group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold transition-all duration-300"
                  >
                    <span>{{ link.name }}</span>
                    <svg class="mobile-nav-arrow w-5 h-5 -rotate-90 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NuxtLink>
                </div>

                <!-- Mobile CTAs -->
                <div class="mobile-cta-area mt-8 space-y-3 pt-6 border-t">
                  <NuxtLink
                    to="/login"
                    @click="isMenuOpen = false"
                    class="mobile-login-btn flex items-center justify-center rounded-xl px-4 py-3.5 text-base font-bold border-2 transition-all duration-300 active:scale-98"
                  >
                    Log in
                  </NuxtLink>
                  <NuxtLink
                    to="/products"
                    @click="isMenuOpen = false"
                    class="mobile-products-btn flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-300 active:scale-98"
                  >
                    Our Products
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NuxtLink>
                </div>
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
/* ============================================================
   COLOR TOKENS — all hex / rgba, zero oklch
   ============================================================ */
.header-root {
  --white:           #ffffff;
  --gray-50:         #f9fafb;
  --gray-100:        #f3f4f6;
  --gray-200:        #e5e7eb;
  --gray-300:        #d1d5db;
  --gray-400:        #9ca3af;
  --gray-600:        #4b5563;
  --gray-700:        #374151;
  --gray-900:        #111827;

  --red-50:          #fef2f2;
  --red-100:         #fee2e2;
  --red-200:         #fecaca;
  --red-600:         #dc2626;
  --red-700:         #b91c1c;
  --red-800:         #991b1b;
  --red-glow-30:     rgba(239,68,68,0.30);
  --red-glow-50:     rgba(239,68,68,0.50);
  --red-200-30:      rgba(254,202,202,0.50);
}

/* ─── Header shell ───────────────────────────────────────────── */
.header-root {
  background-color: rgba(255,255,255,0.90);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(229,231,235,0.30);
}
.header-scrolled {
  background-color: rgba(255,255,255,0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-bottom-color: rgba(229,231,235,0.50);
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

/* ─── Logo ───────────────────────────────────────────────────── */
.logo-icon-wrap {
  background-image: linear-gradient(to bottom right, var(--red-50), var(--red-100));
  border: 1px solid rgba(254,202,202,0.50);
  box-shadow: none;
  transition: box-shadow 0.3s, transform 0.3s;
}
.logo-link:hover .logo-icon-wrap {
  box-shadow: 0 10px 30px var(--red-glow-30);
}
.logo-icon-sheen {
  background-image: linear-gradient(to bottom right, rgba(255,255,255,0.40), transparent, rgba(220,38,38,0.20));
}
.logo-brand-name {
  background-image: linear-gradient(to right, #dc2626, #b91c1c, #991b1b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.logo-tagline {
  color: var(--gray-600);
}

/* ─── Desktop nav links ──────────────────────────────────────── */
.nav-link {
  color: var(--gray-700);
}
.nav-link:hover {
  color: var(--red-600);
  background-color: rgba(254,242,242,0.80);
}
.nav-link-bar {
  background-image: linear-gradient(to right, var(--red-600), var(--red-700));
}

/* ─── Desktop login link ─────────────────────────────────────── */
.login-link {
  color: var(--gray-700);
}
.login-link:hover {
  color: var(--red-600);
  background-color: rgba(243,244,246,0.80);
}

/* ─── Desktop CTA button ─────────────────────────────────────── */
.cta-btn {
  color: var(--white);
  background-image: linear-gradient(to right, var(--red-600), var(--red-700));
  box-shadow: 0 4px 16px var(--red-glow-30);
}
.cta-btn:hover {
  box-shadow: 0 8px 28px var(--red-glow-50);
  transform: scale(1.05);
}
.cta-btn-hover {
  background-image: linear-gradient(to right, var(--red-700), var(--red-800));
}

/* ─── Mobile hamburger button ────────────────────────────────── */
.mobile-menu-btn {
  color: var(--gray-700);
  border: 1px solid transparent;
}
.mobile-menu-btn:hover {
  color: var(--red-600);
  background-color: var(--red-50);
  border-color: var(--red-100);
}

/* ─── Mobile backdrop ────────────────────────────────────────── */
.mobile-backdrop {
  background-color: rgba(0,0,0,0.50);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

/* ─── Mobile panel ───────────────────────────────────────────── */
.mobile-panel {
  background-color: var(--white);
}

.mobile-panel-header {
  border-color: var(--gray-100);
}

.mobile-logo-wrap {
  background-image: linear-gradient(to bottom right, var(--red-600), var(--red-700));
  box-shadow: 0 4px 16px var(--red-glow-30);
}

.mobile-brand-name {
  color: var(--gray-900);
}

.mobile-close-btn {
  color: var(--gray-700);
}
.mobile-close-btn:hover {
  background-color: var(--gray-100);
}

/* ─── Mobile nav links ───────────────────────────────────────── */
.mobile-nav-link {
  color: var(--gray-900);
}
.mobile-nav-link:hover {
  background-color: var(--red-50);
  color: var(--red-600);
}
.mobile-nav-arrow {
  color: var(--gray-400);
}
.mobile-nav-link:hover .mobile-nav-arrow {
  color: var(--red-600);
}

/* ─── Mobile CTA area ────────────────────────────────────────── */
.mobile-cta-area {
  border-color: var(--gray-100);
}

.mobile-login-btn {
  color: var(--gray-900);
  border-color: var(--gray-200);
  background-color: transparent;
}
.mobile-login-btn:hover {
  border-color: var(--gray-300);
  background-color: var(--gray-50);
}

.mobile-products-btn {
  color: var(--white);
  background-image: linear-gradient(to right, var(--red-600), var(--red-700));
  box-shadow: 0 4px 16px var(--red-glow-30);
}
.mobile-products-btn:hover {
  box-shadow: 0 8px 28px var(--red-glow-50);
}

/* ─── Scale utilities ────────────────────────────────────────── */
.active\:scale-95:active  { transform: scale(0.95); }
.active\:scale-98:active  { transform: scale(0.98); }
</style>