<template>
  <footer class="relative bg-gradient-to-b from-gray-900 via-black to-black">
    <!-- Decorative top border -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    
    <div class="mx-auto w-full max-w-screen-xl px-4 py-12 lg:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-12">
        
        <!-- Product Categories -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6">
            <div class="h-1 w-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <h2 class="text-white text-sm font-bold uppercase tracking-wider">Products</h2>
          </div>
          <ul class="space-y-3">
            <template v-if="productCategories && productCategories.length > 0">
              <li v-for="cat in productCategories" :key="cat._id">
                <NuxtLink 
                  :to="`/products/category/${cat._id}`" 
                  class="group flex items-center text-gray-400 hover:text-red-500 transition-all duration-300"
                >
                  <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span class="text-sm font-medium">{{ cat.name }}</span>
                </NuxtLink>
              </li>
            </template>
            <li v-else class="text-gray-600 text-xs italic flex items-center gap-2">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              No categories found
            </li>
          </ul>
        </div>

        <!-- Blog Categories -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6">
            <div class="h-1 w-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <h2 class="text-white text-sm font-bold uppercase tracking-wider">Blog</h2>
          </div>
          <ul class="space-y-3">
            <template v-if="blogCategories && blogCategories.length > 0">
              <li v-for="cat in blogCategories" :key="cat._id">
                <NuxtLink 
                  :to="`/blog/category/${cat._id}`" 
                  class="group flex items-center text-gray-400 hover:text-red-500 transition-all duration-300"
                >
                  <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span class="text-sm font-medium">{{ cat.name }}</span>
                </NuxtLink>
              </li>
            </template>
            <li v-else class="text-gray-600 text-xs italic flex items-center gap-2">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              No categories found
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6">
            <div class="h-1 w-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <h2 class="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h2>
          </div>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                to="/products" 
                class="group flex items-center text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-sm font-medium">All Products</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/blog" 
                class="group flex items-center text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-sm font-medium">Latest Articles</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/#contact-us" 
                class="group flex items-center text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-sm font-medium">Contact Us</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-6">
            <div class="h-1 w-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <h2 class="text-white text-sm font-bold uppercase tracking-wider">Get In Touch</h2>
          </div>
          <ul class="space-y-4">
            <li>
              <a 
                href="https://wa.me/231887777364" 
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-start text-gray-400 hover:text-green-500 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div>
                  <div class="text-xs text-gray-500 mb-0.5">WhatsApp</div>
                  <span class="text-sm font-medium">+231 887 777 364</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="tel:+231887777364" 
                class="group flex items-start text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div class="text-xs text-gray-500 mb-0.5">Phone</div>
                  <span class="text-sm font-medium">+231 887 777 364</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="mailto:fruitfulvineglobal247@gmail.com" 
                class="group flex items-start text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div class="text-xs text-gray-500 mb-0.5">Email</div>
                  <span class="text-xs font-medium break-all">fruitfulvineglobal247@gmail.com</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <!-- Copyright -->
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20">
              <img 
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1767946316/photo_2026-01-08_23-27-47-removebg-preview_isg5cj.png" 
                alt="FruitFul Vine" 
                class="h-6 w-auto"
              />
            </div>
            <div>
              <p class="text-sm text-gray-400">
                © {{ new Date().getFullYear() }} 
                <NuxtLink to="/" class="text-white hover:text-red-500 font-semibold transition-colors">
                  FruitFul Vine™
                </NuxtLink>
              </p>
              <p class="text-xs text-gray-600">All Rights Reserved.</p>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <span class="text-xs text-gray-500 mr-2">Follow us:</span>
            <a 
              href="#" 
              class="group relative h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="group relative h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              aria-label="Discord"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="group relative h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/231887777364" 
              target="_blank"
              rel="noopener noreferrer"
              class="group relative h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
              aria-label="WhatsApp"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
    interface Category {
    _id: number | string
    name: string
    type: string
    }

    const { getUrl } = useApi()

    /**
     * Product Categories
     * - client-only fetch to guarantee Network visibility
     * - no await
     */
    const { data: productCategoriesData } = useFetch<Category[]>(
    () => getUrl('category/?type=product'),
    {
        key: 'footer-product-cats',
        server: false,
        default: () => [],
    }
    )

    /**
     * Blog Categories
     */
    const { data: blogCategoriesData } = useFetch<Category[]>(
    () => getUrl('category/?type=blog'),
    {
        key: 'footer-blog-cats',
        server: false,
        default: () => [],
    }
    )

    const productCategories = computed(() => productCategoriesData.value ?? [])
    const blogCategories = computed(() => blogCategoriesData.value ?? [])
</script>

<style scoped>
/* Add smooth hover transitions */
a {
  @apply transition-all duration-300;
}
</style>