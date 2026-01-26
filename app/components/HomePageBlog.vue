<template>
  <div class="bg-black py-20 sm:py-28 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-950/30 border border-red-900/30">
          <span class="text-xs font-semibold text-red-400 uppercase tracking-wider">Latest Insights</span>
        </div>
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
          From the <span class="relative inline-block">
            <span class="relative z-10 text-red-600">Blog</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-red-600/20 -z-0"></span>
          </span>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-400">
          Expert advice, industry insights, and tips to help you get the most from your devices and stay ahead in the tech world.
        </p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div v-for="i in props.no_blog_posts" :key="i" class="h-96 bg-white/[0.02] border border-gray-800 rounded-2xl animate-pulse"></div>
      </div>

      <div v-else class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-800 pt-12 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post._id" 
                 class="group flex flex-col bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-900/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1">
          
          <div v-if="post.secure_url" class="aspect-video w-full overflow-hidden border-b border-gray-800">
             <img :src="post.secure_url" class="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          <div class="flex flex-col flex-1 p-6 sm:p-8">
            <div class="flex items-center gap-x-3 text-xs mb-4">
              <time class="flex items-center text-gray-500 font-medium">
                {{ post.date || 'Jan 20, 2026' }}
              </time>
              <span class="text-gray-700">•</span>
              <NuxtLink :to="`/category/${post.category_id}`" 
                 class="relative z-10 rounded-full bg-gray-900/60 border border-gray-800 px-3 py-1.5 font-semibold text-gray-300 hover:bg-red-950/40 hover:text-red-400 hover:border-red-900/50 transition-all duration-300">
                {{ post.category_name }}
              </NuxtLink>
            </div>

            <div class="flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300 mb-3 line-clamp-2">
                <NuxtLink :to="`/blog/${post._id}`" class="focus:outline-none rounded">
                  {{ post.post_title }}
                </NuxtLink>
              </h3>
              <p class="text-sm leading-relaxed text-gray-400 line-clamp-3 mb-6">
                {{ post.short_title }}
              </p>

              <div class="mt-auto pt-4 border-t border-gray-800">
                <NuxtLink :to="`/blog/${post._id}`" 
                   class="inline-flex items-center text-sm font-semibold text-red-500 hover:text-red-400 transition-colors duration-300 group/link">
                  Read article
                  <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="relative mt-auto px-6 sm:px-8 py-5 bg-white/[0.02] border-t border-gray-800">
            <div class="flex items-center gap-x-4">
              <img src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png" 
                   class="w-10 h-10 rounded-full bg-gray-800" />
              <div class="text-sm flex-1">
                <p class="font-semibold text-white">Editorial Team</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { getUrl } = useApi()

const props = defineProps({
  no_blog_posts: {
    type: Number,
    default: 3
  }
})

const posts = ref([])
const loading = ref(true)

const fetchPosts = async () => {
  try {
    loading.value = true
    // Using props.no_blog_posts to set the 'limit' parameter in your API
    const response = await fetch(getUrl(`blog/?page=1&limit=${props.no_blog_posts}`))
    const data = await response.json()
    posts.value = data.blogs
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>