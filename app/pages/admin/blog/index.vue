<template>
<DashboardHeader />
  <div class="min-h-screen bg-white pb-24">
    <header class="py-12 border-b border-gray-100 mb-12">
      <div class="mx-auto max-w-5xl px-6 flex items-end justify-between">
        <div>
          <span class="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Content Management</span>
          <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
            Draft <span class="text-red-600">Article</span>
          </h1>
        </div>
        <div class="hidden md:flex items-center gap-4 text-gray-400">
          <span class="icon-[tabler--clock] size-5"></span>
          <p class="text-sm font-bold uppercase tracking-widest">Auto-saving Enabled</p>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6">
      <form @submit.prevent="handleBlogSubmit" class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-8 space-y-12">
          
          <div class="space-y-8">
            <div class="form-control">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Main Headline</label>
              <input 
                v-model="form.post_title" 
                type="text" 
                class="w-full bg-white border-b-4 border-gray-100 py-4 text-3xl md:text-4xl font-black uppercase tracking-tighter focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-100" 
                placeholder="Enter a compelling title..." 
              />
            </div>

            <div class="form-control">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Short Title (For Navigation/Tabs)</label>
              <input 
                v-model="form.short_title" 
                type="text" 
                class="w-full bg-gray-50 rounded-xl px-6 py-4 text-lg font-bold text-black focus:ring-2 focus:ring-red-600 focus:outline-none transition-all border-none" 
                placeholder="e.g. 2026 Trends" 
              />
            </div>
          </div>

          <div class="form-control">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Article Body</label>
            <div class="relative group">
              <div class="absolute left-[-20px] top-0 w-1 h-full bg-gray-100 group-focus-within:bg-red-600 transition-colors"></div>
              <textarea 
                v-model="form.body" 
                rows="18"
                class="w-full bg-white text-xl leading-relaxed text-gray-700 font-serif focus:outline-none placeholder:text-gray-200 resize-none" 
                placeholder="Start writing your story..."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-10">
          
          <div class="form-control">
            <label class="text-xs font-black uppercase tracking-widest text-black mb-4 block">Featured Image</label>
            <div class="aspect-video w-full rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center group hover:border-red-600 transition-all cursor-pointer">
              <div v-if="!form.image_url" class="space-y-2">
                <span class="icon-[tabler--photo-plus] size-8 text-gray-300 group-hover:text-red-600"></span>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Paste URL below or click to upload</p>
              </div>
              <img v-else :src="form.image_url" class="size-full object-cover rounded-xl" />
            </div>
            <input 
              v-model="form.image_url" 
              type="text" 
              class="mt-4 w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-none" 
              placeholder="https://image-url.com/hero.jpg" 
            />
          </div>

          <div class="bg-black p-8 rounded-[2rem] text-white shadow-2xl">
            <h3 class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
              <span class="w-1.5 h-5 bg-red-600"></span> Publication
            </h3>
            
            <div class="space-y-6">
              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block text-white/50">Category</label>
                <select v-model="form.category_name" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-red-600 outline-none">
                  <option class="text-black" value="Design">Design Insights</option>
                  <option class="text-black" value="Tech">Technology</option>
                  <option class="text-black" value="Business">Strategy</option>
                </select>
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block text-white/50">Category ID</label>
                <input v-model="form.category_id" type="text" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-red-600 outline-none" placeholder="ARCHIVE-2026-01" />
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block text-white/50">Post Date</label>
                <input v-model="form.date" type="date" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-red-600 outline-none" />
              </div>
            </div>
          </div>

          <div class="pt-6 space-y-4">
            <button type="submit" class="w-full bg-red-600 hover:bg-black text-white font-black py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-[0.2em] text-xs">
              Publish Post
            </button>
            <button type="button" class="w-full text-black hover:text-red-600 font-black py-2 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
              <span class="icon-[tabler--archive] size-4"></span> Save to Drafts
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Data model matching BlogPost Pydantic class
const form = reactive({
  image_url: '',
  category_id: '',
  category_name: 'Design',
  post_title: '',
  short_title: '',
  body: '',
  date: new Date().toISOString().split('T')[0] // Default to date.today()
})

const handleBlogSubmit = () => {
  console.log('Dispatching BlogPost to API:', JSON.parse(JSON.stringify(form)))
  // Validation and submit logic here
}
</script>

<style scoped>
/* Typography focus for the body editor */
textarea::placeholder {
  font-family: ui-sans-serif, system-ui, sans-serif;
  letter-spacing: normal;
}
textarea {
  font-family: 'Georgia', serif; /* Editorial feel */
}
</style>