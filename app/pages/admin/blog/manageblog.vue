<template>
  <DashboardHeader />
  <div class="min-h-screen bg-white pb-24 relative">
    
    <Transition name="slide-up">
      <div v-if="notification.show" 
        :class="[notification.isError ? 'bg-red-600' : 'bg-black', 'fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl min-w-[320px] border border-white/10']"
      >
        <span :class="[notification.isError ? 'text-white' : 'text-red-600', 'icon-[tabler--circle-check] size-5']" v-if="!notification.isError"></span>
        <span class="icon-[tabler--alert-circle] text-white size-5" v-else></span>
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white">{{ notification.message }}</p>
      </div>
    </Transition>

    <header class="py-10 border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 class="text-3xl font-black tracking-tighter text-black uppercase">
            Editorial <span class="text-red-600">Archive</span>
          </h1>
          <p class="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your blog posts and articles</p>
        </div>
        <NuxtLink to="/admin/blog">
          <button class="bg-black hover:bg-red-600 text-white font-black py-3 px-8 rounded-full transition-all text-xs uppercase tracking-widest shadow-lg flex items-center gap-2">
            <span class="icon-[tabler--pencil] size-4"></span> Write New Post
          </button>
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">

      <section class="mb-8 bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-wrap items-center gap-6">
        <div class="flex items-center gap-3">
          <span class="icon-[tabler--adjustments-horizontal] text-red-600 size-5"></span>
          <span class="text-xs font-black uppercase tracking-widest text-black">Sort Archive:</span>
        </div>
  
        <select 
          v-model="filters.category" 
          @change="handleCategoryChange" 
          class="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold outline-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option v-for="cat in categoryList" :key="cat._id" :value="cat._id">
            {{ cat.name }}
          </option>
        </select>

        <div class="flex-grow md:max-w-xs relative">
          <input 
            type="text" 
            v-model="filters.search" 
            @keyup.enter="fetchBlogs"
            placeholder="Search headlines..." 
            class="w-full bg-white border border-gray-200 rounded-xl px-10 py-2 text-xs outline-none focus:ring-1 focus:ring-red-600" 
          />
          <span class="icon-[tabler--search] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4"></span>
        </div>
      </section>

      <div class="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white">
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Article</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Internal Title</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Category</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="post in blogPosts" :key="post._id" class="hover:bg-gray-50/50 transition-colors group">
              <td class="px-6 py-5">
                <div class="flex items-center gap-4">
                  <div class="size-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                    <img :src="post.secure_url || post.url" class="size-full object-cover" alt="Thumb" />
                  </div>
                  <div class="max-w-xs">
                    <div class="text-sm font-black text-black group-hover:text-red-600 transition-colors uppercase line-clamp-2 leading-tight">
                      {{ post.post_title }}
                    </div>
                    <div class="text-[9px] font-bold text-gray-400 mt-1 uppercase tracking-widest">{{ post.date }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-5 text-xs font-medium italic text-gray-400">"{{ post.short_title }}"</td>
              <td class="px-6 py-5 text-xs font-black uppercase text-black">{{ post.category_name }}</td>
              <td class="px-6 py-5">
                <span :class="[post.draft ? 'bg-gray-100 text-gray-500' : 'bg-red-50 text-red-600', 'text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest']">
                  {{ post.draft ? 'Draft' : 'Live' }}
                </span>
              </td>
              <td class="text-right">
                <div class="flex justify-end gap-2">
                  <NuxtLink :to="`/admin/blog/${post._id}`">
                    <button class="bg-black text-white items-center justify-center rounded-full p-2 text-sm">
                     Edit
                    </button>
                  </NuxtLink>
                  <button @click="handleDelete(post)" class="bg-red-800 text-white items-center justify-center rounded-full p-2 text-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div v-if="loading" class="py-20 text-center animate-pulse text-xs font-bold text-gray-400 uppercase tracking-widest">Synchronizing Archive...</div>
        <div v-else-if="blogPosts.length === 0" class="py-20 text-center text-xs font-bold text-gray-300 uppercase">Archive Empty</div>
      </div>

      <footer class="mt-8 flex items-center justify-between px-2">
        <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Page {{ pagination.current }} of {{ pagination.total }}</p>
        <div class="flex gap-4">
          <button @click="changePage(pagination.current - 1)" :disabled="pagination.current === 0" class="text-xs font-black uppercase hover:text-black disabled:opacity-20 transition-colors">Prev</button>
          <button @click="changePage(pagination.current + 1)" :disabled="pagination.current >= pagination.total - 1" class="text-xs font-black uppercase text-red-600 hover:text-black disabled:opacity-20 transition-colors">Next</button>
        </div>
      </footer>
    </main>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const loading = ref(true)
const blogPosts = ref([])
// Store full category objects to link names to IDs
const categoryList = ref<{ _id: string, name: string }[]>([])
const pagination = reactive({ current: 1, total: 0 })
const notification = reactive({ show: false, message: '', isError: false })

// filters.category will now hold the ID of the category
const filters = reactive({ 
    category: 'All', 
    search: '', 
    page: 1 
})

const triggerNotification = (msg: string, isErr: boolean) => {
    notification.message = msg
    notification.isError = isErr
    notification.show = true
    setTimeout(() => notification.show = false, 4000)
}

const fetchCategories = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/category/?type=blog`)
        const data = await res.json()
        categoryList.value = data
    } catch (err) {
        console.error("Failed to load categories", err)
    }
}

const fetchBlogs = async () => {
    loading.value = true
    try {
        const params = new URLSearchParams({
            page: filters.page.toString(),
            limit: '15'
        })
        
        // Only append category_id if it's not "All"
        if (filters.category !== 'All') {
            params.append('category_id', filters.category)
        }

        const res = await fetch(`http://127.0.0.1:8000/api/blog/?${params}`)
        const data = await res.json()
        
        blogPosts.value = data.blogs
        pagination.current = data.current_page
        pagination.total = data.pages
    } catch (err) {
        triggerNotification('Failed to load archive', true)
    } finally {
        loading.value = false
    }
}

const handleDelete = async (post: any) => {
    if (!confirm(`Permanently delete "${post.post_title}"?`)) return
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/blog/${post._id}`, {
            method: 'DELETE',
            headers: { 'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg" }
        })
        if (!res.ok) throw new Error()
        triggerNotification('Article successfully removed', false)
        fetchBlogs()
    } catch (err) {
        triggerNotification('Delete operation failed', true)
    }
}

const changePage = (newPage: number) => {
    filters.page = newPage
    fetchBlogs()
}

// Reset page to 1 when category changes to avoid empty results on deep pages
const handleCategoryChange = () => {
    filters.page = 1
    fetchBlogs()
}

onMounted(() => {
    fetchCategories()
    fetchBlogs()
})
</script>


<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px); }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px); }
</style>