<template>
    <DashboardHeader />
  <div class="min-h-screen bg-white pb-24">
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <button @click="goBack" class="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black">
            <span class="icon-[tabler--arrow-narrow-left] size-5 group-hover:-translate-x-1 transition-transform"></span>
            Back to Archive
          </button>
          <div class="h-4 w-px bg-gray-200"></div>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            {{ isEditing ? 'Editor Mode' : 'Reading Mode' }}
          </span>
        </div>

        <div class="flex items-center gap-3">
          <button 
            @click="isEditing = !isEditing"
            :class="[isEditing ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white', 'px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all']"
          >
            {{ isEditing ? 'Cancel' : 'Edit Post' }}
          </button>
          <button v-if="isEditing" @click="savePost" class="bg-red-600 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-red-100">
            Update Archive
          </button>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-7">
          <article class="space-y-8">
            <div class="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100">
              <img :src="post.image_url" class="size-full object-cover" alt="Featured Image" />
              <div v-if="isEditing" class="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
                <div class="w-full max-w-xs px-6">
                  <label class="text-[10px] font-black uppercase text-white mb-2 block text-center">Update Image URL</label>
                  <input v-model="post.image_url" class="w-full bg-white border-none rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-red-600" />
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <span class="bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  {{ post.category_name }}
                </span>
                <span class="text-gray-300 font-bold text-xs uppercase tracking-widest">{{ post.date }}</span>
              </div>

              <div v-if="!isEditing">
                <h1 class="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.95] mb-6">
                  {{ post.post_title }}
                </h1>
                <p class="text-sm font-bold text-red-600 uppercase tracking-[0.3em] italic">
                  Short Title: {{ post.short_title }}
                </p>
              </div>
              <div v-else class="space-y-4">
                <textarea v-model="post.post_title" rows="2" class="w-full text-5xl font-black uppercase tracking-tighter border-none focus:ring-0 p-0 placeholder:text-gray-100" placeholder="Main Headline"></textarea>
                <input v-model="post.short_title" class="w-full bg-gray-50 border-none rounded-xl px-6 py-3 font-bold text-red-600 uppercase tracking-widest" placeholder="Short Title" />
              </div>
            </div>

            <div class="pt-10 border-t border-gray-100">
              <div v-if="!isEditing" v-html="post.body" class="prose prose-xl max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-black font-serif"></div>
              <textarea 
                v-else 
                v-model="post.body" 
                rows="20" 
                class="w-full bg-white border border-gray-100 rounded-3xl p-8 text-lg font-serif leading-relaxed text-gray-700 focus:ring-2 focus:ring-red-600 transition-all outline-none"
              ></textarea>
            </div>
          </article>
        </div>

        <div class="lg:col-span-5">
          <div class="lg:sticky lg:top-32 space-y-8">
            
            <div class="bg-black p-10 rounded-[3rem] text-white shadow-2xl">
              <h3 class="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span class="w-2 h-8 bg-red-600"></span> 
                Post <span class="text-red-600">Metadata</span>
              </h3>

              <div class="space-y-8">
                <div class="form-control">
                  <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 block">Category Mapping</label>
                  <div class="grid grid-cols-2 gap-4">
                    <div v-if="!isEditing" class="text-sm font-bold py-2 border-b border-white/10">{{ post.category_name }}</div>
                    <select v-else v-model="post.category_name" class="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs font-bold focus:border-red-600 outline-none">
                      <option class="text-black" value="Design">Design</option>
                      <option class="text-black" value="Tech">Tech</option>
                    </select>

                    <div v-if="!isEditing" class="text-sm font-bold py-2 border-b border-white/10">{{ post.category_id }}</div>
                    <input v-else v-model="post.category_id" class="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs font-bold focus:border-red-600 outline-none" placeholder="ID" />
                  </div>
                </div>

                <div class="form-control">
                  <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 block">Publishing Timeline</label>
                  <div v-if="!isEditing" class="text-sm font-bold flex items-center gap-2">
                    <span class="icon-[tabler--calendar-event] text-red-600"></span>
                    {{ post.date }}
                  </div>
                  <input v-else v-model="post.date" type="date" class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs font-bold focus:border-red-600 outline-none" />
                </div>
              </div>

              <div v-if="isEditing" class="mt-12 pt-8 border-t border-white/10">
                <button @click="confirmDelete" class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors">
                  <span class="icon-[tabler--trash] size-4"></span>
                  Move post to trash
                </button>
              </div>
            </div>

            <div class="border-2 border-dashed border-gray-100 rounded-[3rem] p-10">
              <h4 class="text-xs font-black uppercase tracking-widest text-black mb-4">Post Stats</h4>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-2xl font-black text-black">{{ wordCount }}</div>
                  <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Words</div>
                </div>
                <div>
                  <div class="text-2xl font-black text-black">{{ readTime }}m</div>
                  <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Read Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const isEditing = ref(false)

// Sample data following your BlogPost Pydantic Model
const post = reactive({
  image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
  category_id: 'ED-2026-X',
  category_name: 'Design',
  post_title: 'The Evolution of High-Contrast Digital Interfaces',
  short_title: 'UI Evolution',
  body: '<p>The shift towards high-contrast interfaces is not merely an aesthetic choice, but a functional response to the cognitive load of modern users. By utilizing <strong>deep blacks</strong> and <strong>vibrant reds</strong>, brands can command attention.</p><p>In 2026, we see a return to editorial-style layouts that prioritize typography over cluttered components...</p>',
  date: '2026-01-06'
})

const wordCount = computed(() => post.body.replace(/<[^>]*>/g, '').split(/\s+/).length)
const readTime = computed(() => Math.ceil(wordCount.value / 200))

const savePost = () => {
  console.log('Syncing Pydantic Model with Database...', JSON.parse(JSON.stringify(post)))
  isEditing.value = false
}

const confirmDelete = () => {
  if (confirm('Are you sure you want to delete this article?')) {
    console.log('Post purged')
  }
}

const goBack = () => window.history.back()
</script>

<style scoped>
/* Maintains the professional editorial feel */
:deep(.prose p) {
  margin-bottom: 2rem;
}
textarea {
  resize: none;
}
</style>