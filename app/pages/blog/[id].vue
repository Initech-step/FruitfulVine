<template>
  <main class="pt-12 pb-16 lg:pt-20 lg:pb-28 bg-white antialiased">
    <div class="px-6 mx-auto max-w-screen-xl mb-8">
      <button @click="$router.back()" class="inline-flex items-center text-sm font-bold text-red-600 hover:text-black transition-colors group">
        <svg class="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        GO BACK
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-20">
       <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>

    <div v-else-if="post" class="flex justify-between px-6 mx-auto max-w-screen-xl">
      <article class="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-red">
        
        <header class="mb-8 lg:mb-12 not-format">
          <address class="flex items-center mb-8 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-black">
              <img class="mr-4 w-16 h-16 rounded-full border-2 border-red-600 p-0.5" src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png" alt="Editorial Team">
              <div>
                <a href="#" rel="author" class="text-xl font-bold text-black hover:text-red-600 transition-colors">FruitFul Vine</a>
                <p class="text-base text-gray-500">Editorial Team • {{ post.category_name }}</p>
                <p class="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  <time :datetime="post.date">{{ post.date }}</time>
                </p>
              </div>
            </div>
          </address>
          <h1 class="mb-6 text-4xl font-extrabold leading-tight text-black lg:text-5xl tracking-tight uppercase">
            {{ post.post_title }}
          </h1>
          <p class="text-lg text-gray-500 font-medium">{{ post.short_title }}</p>
        </header>

        <figure v-if="post.secure_url" class="my-10">
          <img :src="post.secure_url" :alt="post.post_title" class="shadow-2xl rounded-3xl w-full object-cover">
        </figure>

        <div 
          class="prose prose-lg max-w-none prose-headings:text-black prose-a:text-red-600 prose-strong:text-black prose-img:rounded-3xl prose-ol:list-decimal prose-ul:list-disc"
          v-html="post.body">
        </div>

        <div class="mt-16 pt-8 border-t border-gray-100">
           <button 
             @click="$router.back()" 
             class="w-full sm:w-auto bg-black hover:bg-red-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             Return to Articles
           </button>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const { getUrl } = useApi()

interface BlogPost {
  _id: string;
  post_title: string;
  short_title: string;
  category_name: string;
  body: string;
  secure_url?: string;
  date: string;
}

const route = useRoute()
const post = ref<BlogPost | null>(null)
const loading = ref(true)

const fetchPost = async () => {
  // Assuming the route is setup as /blog/:id
  const blogId = route.params.id as string
  
  try {
    loading.value = true
    const response = await fetch(getUrl(`blog/${blogId}/`))
    if (!response.ok) throw new Error('Post not found')
    const data = await response.json()
    post.value = data
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPost()
})
</script>

<style scoped>
/* Ensure v-html rendered images are responsive */
:deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 1.5rem;
}

/* Maintain the brand styling for dynamic content */
.format-red :where(h1, h2, h3, h4):not(.not-format) {
  color: #000000;
  font-weight: 800;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

:deep(blockquote) {
  border-left: 4px solid #dc2626;
  background-color: #fef2f2;
  padding: 1.5rem;
  font-style: italic;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
</style>