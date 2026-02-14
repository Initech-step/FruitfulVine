<template>
  <header 
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200/30'
    ]"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="flex items-center space-x-3 group -m-1.5 p-1.5">
            <div class="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-red-500/30 border border-red-200/50 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1767946316/photo_2026-01-08_23-27-47-removebg-preview_isg5cj.png" 
                alt="FruitFul Vine Logo" 
                class="h-11 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:rotate-6" 
              />
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="hidden sm:block">
              <div class="text-xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                FruitFul Vine
              </div>
              <div class="text-xs text-gray-600 font-medium -mt-0.5">Phone Care Experts</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-1 lg:items-center">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="relative px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 hover:bg-red-50/80 group"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-8 transition-all duration-300 rounded-full"></span>
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          <NuxtLink
            to="/login"
            class="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 rounded-xl hover:bg-gray-100/80 transition-all duration-300"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="group relative px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Our Products
              <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            @click="isMenuOpen = true"
            class="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-100 active:scale-95"
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
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 lg:hidden"
      >
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="isMenuOpen = false"
        />
        
        <!-- Mobile Menu Panel -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div
            v-if="isMenuOpen"
            class="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl"
          >
            <div class="flex h-full flex-col">
              <!-- Mobile Menu Header -->
              <div class="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                <NuxtLink to="/" @click="isMenuOpen = false" class="flex items-center space-x-3">
                  <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1767946316/photo_2026-01-08_23-27-47-removebg-preview_isg5cj.png" 
                      alt="Logo" 
                      class="h-8 w-auto" 
                    />
                  </div>
                  <span class="text-lg font-bold text-gray-900">FruitFul Vine</span>
                </NuxtLink>
                <button
                  @click="isMenuOpen = false"
                  class="p-2.5 text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300 active:scale-95"
                  aria-label="Close menu"
                >
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Mobile Menu Links -->
              <div class="flex-1 overflow-y-auto px-6 py-6">
                <div class="space-y-2">
                  <NuxtLink
                    v-for="link in navLinks"
                    :key="link.name"
                    :to="link.href"
                    @click="isMenuOpen = false"
                    class="flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-gray-900 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group"
                  >
                    <span>{{ link.name }}</span>
                    <svg class="w-5 h-5 -rotate-90 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </NuxtLink>
                </div>

                <!-- Mobile CTA Buttons -->
                <div class="mt-8 space-y-3 pt-6 border-t border-gray-100">
                  <NuxtLink
                    to="/login"
                    @click="isMenuOpen = false"
                    class="flex items-center justify-center rounded-xl px-4 py-3.5 text-base font-bold text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 active:scale-98"
                  >
                    Log in
                  </NuxtLink>
                  <NuxtLink
                    to="/products"
                    @click="isMenuOpen = false"
                    class="flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 active:scale-98"
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

// State
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation links
const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact-us' },
  { name: 'Our Services', href: '/ourservices' }
]

// Handle scroll effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

// Lock body scroll when menu is open
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Ensure smooth transitions */
.active\:scale-95:active {
  transform: scale(0.95);
}

.active\:scale-98:active {
  transform: scale(0.98);
}
</style>