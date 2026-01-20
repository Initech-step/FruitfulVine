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

    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <button @click="goBack" class="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M5 12l6 6m-6-6 6-6"/>
            </svg>
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
          <button v-if="isEditing" @click="savePost" :disabled="loading" class="bg-red-600 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-red-100 disabled:opacity-50">
            {{ loading ? 'Updating...' : 'Update Archive' }}
          </button>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-7">
          <article class="space-y-8">
            <div 
              class="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 group"
              @dragover.prevent="dragOver = true"
              @dragleave.prevent="dragOver = false"
              @drop.prevent="handleDrop"
              :class="{ 'border-red-600 border-2 shadow-2xl': dragOver && isEditing }"
            >
              <img :src="imagePreview || post.secure_url" class="size-full object-cover" alt="Featured Image" />
              
              <div v-if="isEditing" @click="$refs.fileInput.click()" class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span class="icon-[tabler--photo-up] size-10 text-white mb-2"></span>
                <p class="text-[10px] font-black uppercase text-white tracking-widest">Click or Drop to Replace</p>
                <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="onFileChange" />
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
                <textarea v-model="post.post_title" rows="2" class="w-full text-5xl font-black uppercase tracking-tighter border-none focus:ring-0 p-0 placeholder:text-gray-100 bg-transparent" placeholder="Main Headline"></textarea>
                <input v-model="post.short_title" class="w-full bg-gray-50 border-none rounded-xl px-6 py-3 font-bold text-red-600 uppercase tracking-widest outline-none" placeholder="Short Title" />
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
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const b_id = route.params.id as string

const isEditing = ref(false)
const loading = ref(false)
const dragOver = ref(false)
const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const notification = reactive({ show: false, message: '', isError: false })

const post = reactive({
  secure_url: '',
  post_title: '',
  short_title: '',
  body: '',
  date: ''
})

const triggerNotification = (msg: string, isErr: boolean) => {
  notification.message = msg
  notification.isError = isErr
  notification.show = true
  setTimeout(() => notification.show = false, 4000)
}

// 1. Fetch current post data on mount
const fetchPostData = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blog/${b_id}`)
    const data = await res.json()
    Object.assign(post, data)
  } catch (err) {
    triggerNotification('Could not load article data', true)
  }
}

// 2. Image Handlers
const onFileChange = (e: any) => {
  const file = e.target.files[0]
  if (file) {
    imageFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const handleDrop = (e: DragEvent) => {
  if (!isEditing.value) return
  dragOver.value = false
  const file = e.dataTransfer?.files[0]
  if (file && file.type.startsWith('image/')) {
    imageFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

// 3. Save Logic using PUT
const savePost = async () => {
  loading.value = true
  const formData = new FormData()
  
  // Append fields (matching Optional[str] = Form(None))
  formData.append('post_title', post.post_title)
  formData.append('short_title', post.short_title)
  formData.append('body', post.body)
  
  if (imageFile.value) {
    formData.append('image', imageFile.value)
  }

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blog/${b_id}/`, {
      method: 'PUT',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      },
      body: formData
    })

    if (!res.ok) throw new Error()
    
    const updatedData = await res.json()
    Object.assign(post, updatedData)
    
    triggerNotification('Archive updated successfully', false)
    isEditing.value = false
    imageFile.value = null
    imagePreview.value = null
  } catch (err) {
    triggerNotification('Failed to update content', true)
  } finally {
    loading.value = false
  }
}

const wordCount = computed(() => post.body?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0)
const readTime = computed(() => Math.ceil(wordCount.value / 200))

const confirmDelete = () => {
  if (confirm('Are you sure you want to delete this article?')) {
    console.log('Post purged')
  }
}

const goBack = () => window.history.back()

onMounted(fetchPostData)
</script>

<style scoped>
:deep(.prose p) { margin-bottom: 2rem; }
textarea { resize: none; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px); }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px); }
</style>