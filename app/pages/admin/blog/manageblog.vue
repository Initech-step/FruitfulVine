<template>
    <DashboardHeader />
    <div class="min-h-screen bg-white">
        <header class="py-10 border-b border-gray-100">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 class="text-3xl font-black tracking-tighter text-black uppercase">
                        Editorial <span class="text-red-600">Archive</span>
                    </h1>
                    <p class="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your blog posts and articles</p>
                </div>
                <button class="bg-black hover:bg-red-600 text-white font-black py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-xs shadow-lg flex items-center gap-2">
                    <span class="icon-[tabler--pencil] size-4"></span> Write New Post
                </button>
            </div>
        </header>

        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        <section class="mb-8 bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div class="flex flex-wrap items-center gap-6">
            <div class="flex items-center gap-3">
                <span class="icon-[tabler--adjustments-horizontal] text-red-600 size-5"></span>
                <span class="text-xs font-black uppercase tracking-widest text-black">Sort Archive:</span>
            </div>
            
            <div class="relative">
                <select v-model="filters.category" class="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all cursor-pointer">
                <option value="All">All Categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                </select>
                <span class="icon-[tabler--chevron-down] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></span>
            </div>

            <div class="relative">
                <select v-model="filters.timeframe" class="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all cursor-pointer">
                <option value="Recent">Most Recent</option>
                <option value="Oldest">Oldest First</option>
                </select>
                <span class="icon-[tabler--calendar] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></span>
            </div>

            <div class="flex-grow md:max-w-xs relative">
                <input type="text" v-model="filters.search" placeholder="Search headlines..." class="w-full bg-white border border-gray-200 rounded-xl px-10 py-2 text-xs focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                <span class="icon-[tabler--search] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4"></span>
            </div>
            </div>
        </section>

        <div class="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
            <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-black text-white">
                <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Article Headline</th>
                <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Internal Title</th>
                <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Category</th>
                <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Publication Date</th>
                <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Edit / Remove</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                <tr v-for="post in blogPosts" :key="post.post_title" class="hover:bg-gray-50/50 transition-colors group">
                <td class="px-6 py-5">
                    <div class="flex items-center gap-4">
                    <div class="size-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0 shadow-inner">
                        <img :src="post.image_url" class="size-full object-cover" alt="Post thumbnail" />
                    </div>
                    <div class="max-w-xs md:max-w-sm">
                        <div class="text-sm font-black text-black leading-tight mb-1 group-hover:text-red-600 transition-colors uppercase tracking-tight line-clamp-2">
                        {{ post.post_title }}
                        </div>
                        <div class="text-[10px] font-bold text-red-600 uppercase tracking-widest flex items-center gap-2">
                        ID: {{ post.category_id }}
                        </div>
                    </div>
                    </div>
                </td>
                <td class="px-6 py-5">
                    <span class="text-xs font-medium text-gray-500 italic">"{{ post.short_title }}"</span>
                </td>
                <td class="px-6 py-5">
                    <div class="text-xs font-black text-black uppercase tracking-tighter">{{ post.category_name }}</div>
                </td>
                <td class="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {{ post.date }}
                </td>
                <td class="px-6 py-5 text-right">
                    <div class="flex justify-end gap-3">
                    <button @click="handleEdit(post)" class="size-9 flex items-center justify-center hover:bg-black hover:text-white rounded-full border border-gray-100 transition-all text-black" title="Edit Article">
                        <span class="icon-[tabler--pencil] size-4"></span>
                    </button>
                    <button @click="handleDelete(post)" class="size-9 flex items-center justify-center hover:bg-red-600 hover:text-white rounded-full border border-gray-100 transition-all text-gray-300" title="Delete Article">
                        <span class="icon-[tabler--trash] size-4"></span>
                    </button>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>

            <div v-if="blogPosts.length === 0" class="py-24 text-center">
            <div class="size-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="icon-[tabler--news-off] size-8 text-gray-200"></span>
            </div>
            <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">No articles found in archive</p>
            </div>
        </div>

        <footer class="mt-8 flex items-center justify-between px-2">
            <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Editorial System v2.0</p>
            <div class="flex gap-4">
            <button class="text-xs font-black uppercase text-gray-400 hover:text-black transition-colors disabled:opacity-20">Previous Page</button>
            <div class="h-4 w-px bg-gray-200"></div>
            <button class="text-xs font-black uppercase text-red-600 hover:text-black transition-colors">Next Page</button>
            </div>
        </footer>
        </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const filters = reactive({
  category: 'All',
  timeframe: 'Recent',
  search: ''
})

const categories = ['Design Insights', 'Tech Trends', 'Industry News', 'Company Culture']

// Mock Data matching your BlogPost Pydantic Model
const blogPosts = ref([
  {
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    category_id: 'DSGN-01',
    category_name: 'Design Insights',
    post_title: 'The Psychological Impact of Red in High-End Branding',
    short_title: 'Power of Red',
    body: 'Content logic here...',
    date: '2026-01-06'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072',
    category_id: 'TECH-02',
    category_name: 'Tech Trends',
    post_title: 'Leveraging Pydantic for Scalable Frontend Architecture',
    short_title: 'Pydantic & Vue',
    body: 'Content logic here...',
    date: '2026-01-04'
  }
])

const handleEdit = (post: any) => {
  console.log('Routing to editor for:', post.post_title)
}

const handleDelete = (post: any) => {
  if(confirm(`Move "${post.post_title}" to trash?`)) {
    console.log('Deleted post ID:', post.category_id)
  }
}
</script>

<style scoped>
/* Scoped custom styling for the editorial look */
table {
  font-feature-settings: "tnum" on, "lnum" on;
}
</style>