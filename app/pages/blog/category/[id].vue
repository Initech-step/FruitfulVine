<template>
    <Header />
    <br/><br/><br/>
    <div class="bg-gray-100">
        <section class="relative bg-gray-100 text-black overflow-hidden min-h-[600px] flex items-center">
            <div class="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 translate-x-1/2"></div>

            <div class="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 w-full">
                <div v-if="loading" class="animate-pulse space-y-8 lg:col-span-7">
                    <div class="h-6 w-32 bg-red-600 rounded"></div>
                    <div class="h-20 w-full bg-red-600 rounded"></div>
                    <div class="h-12 w-2/3 bg-red-600 rounded"></div>
                </div>

                <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-12 space-y-6">
                        <div class="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-white">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            {{ lastPost.category_name || 'Featured Story' }}
                        </div>
                        
                        <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter uppercase">
                            {{ lastPost.post_title }}
                        </h1>
                        
                        <p class="text-gray-800 text-lg md:text-xl max-w-xl leading-relaxed">
                            {{ lastPost.short_title }}
                        </p>

                        <div class="flex flex-wrap items-center gap-6 pt-4">
                            <NuxtLink :to="`/blog/${lastPost._id}`" class="bg-red-600 hover:bg-black text-white font-bold py-4 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-red-600/20">
                                Read Full Story
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Categories type="blog"/>
        <CategoryBlog :no_blog_posts="50" :category_id="category_id"></CategoryBlog>
        <Categories type="blog"/>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Categories from '~/components/Categories.vue';
import CategoryBlog from '~/components/CategoryBlog.vue';

import { ref, onMounted } from 'vue'
const { getUrl } = useApi()

import { useRoute } from 'vue-router'
const route = useRoute()
const category_id = route.params.id as string

interface BlogPost {
    _id: string;
    url?: string;
    secure_url?: string;
    category_name: string;
    post_title: string;
    short_title: string;
    body: string;
    date: string;
}

const lastPost = ref<BlogPost>({
    _id: '',
    category_name: '',
    post_title: '',
    short_title: '',
    body: '',
    date: ''
})

const loading = ref(true)

const fetchLastPost = async () => {
    try {
        const res = await fetch(getUrl('get_last_post/'))
        if (!res.ok) throw new Error('Post not found')
        const data = await res.json()
        lastPost.value = data
    } catch (error) {
        console.error('Error fetching last blog post:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchLastPost()
})
</script>

<style scoped>
h1 {
  text-shadow: 0 10px 20px rgba(0,0,0,0.05);
}
</style>