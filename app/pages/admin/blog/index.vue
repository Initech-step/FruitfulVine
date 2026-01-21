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

    <header class="py-12 border-b border-gray-100 mb-12">
      <div class="mx-auto max-w-5xl px-6 flex items-end justify-between">
        <div>
          <span class="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Content Management</span>
          <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
            Draft <span class="text-red-600">Article</span>
          </h1>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6">
      <form @submit.prevent="handleBlogSubmit(false)" class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-8 space-y-12">
          <div class="space-y-8">
            <div class="form-control">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Main Headline</label>
              <input v-model="form.post_title" type="text" required class="w-full bg-white border-b-4 border-gray-100 py-4 text-3xl md:text-4xl font-black uppercase tracking-tighter focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-100" placeholder="Enter a compelling title..." />
            </div>

            <div class="form-control">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Short Title (For Navigation/Tabs)</label>
              <input v-model="form.short_title" type="text" class="w-full bg-gray-50 rounded-xl px-6 py-4 text-lg font-bold text-black focus:ring-2 focus:ring-red-600 outline-none transition-all border-none" placeholder="e.g. 2026 Trends" />
            </div>
          </div>

          <div class="form-control">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Article Body</label>
            <div class="relative group">
              <div class="absolute left-[-20px] top-0 w-1 h-full bg-gray-100 group-focus-within:bg-red-600 transition-colors"></div>
              <textarea v-model="form.body" rows="18" class="w-full bg-white text-xl leading-relaxed text-gray-700 font-serif focus:outline-none placeholder:text-gray-200 resize-none" placeholder="Start writing your story..."></textarea>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-10">
          <div class="form-control">
            <label class="text-xs font-black uppercase tracking-widest text-black mb-4 block">Featured Image</label>
            <div @click="$refs.fileInput.click()" class="aspect-video w-full rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-2 text-center group hover:border-red-600 transition-all cursor-pointer overflow-hidden">
              <img v-if="imagePreview" :src="imagePreview" class="w-full h-full object-cover rounded-xl" />
              <div v-else class="space-y-2">
                <span class="icon-[tabler--photo-plus] size-8 text-gray-300 group-hover:text-red-600"></span>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Click to upload hero image</p>
              </div>
              <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="onFileChange" />
            </div>
          </div>

          <div class="bg-black p-8 rounded-[2rem] text-white shadow-2xl">
            <h3 class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
              <span class="w-1.5 h-5 bg-red-600"></span> Publication
            </h3>
            
            <div class="space-y-6">
              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2 block">Category</label>
                <select v-model="form.category_name" @change="syncCategoryId" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-red-600 outline-none">
                  <option v-for="cat in categories" :key="cat.id" :value="cat.name" class="text-black">{{ cat.name }}</option>
                </select>
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2 block">Category ID</label>
                <input v-model="form.category_id" readonly type="text" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-gray-400 outline-none cursor-not-allowed" />
              </div>
            </div>
          </div>

          <div class="pt-6 space-y-4">
            <button type="submit" :disabled="loading" class="w-full bg-red-600 hover:bg-black text-white font-black py-5 rounded-full transition-all duration-300 shadow-xl uppercase tracking-[0.2em] text-xs disabled:opacity-50">
              {{ loading ? 'Uploading...' : 'Publish Post' }}
            </button>
            <button type="button" @click="handleBlogSubmit(true)" class="w-full text-black hover:text-red-600 font-black py-2 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
              <span class="icon-[tabler--archive] size-4"></span> Save to Drafts
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
const { getUrl } = useApi()

const loading = ref(false)
const categories = ref([])
const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const notification = reactive({ show: false, message: '', isError: false })

const form = reactive({
  category_id: '',
  category_name: '',
  post_title: '',
  short_title: '',
  body: '',
  date: new Date().toISOString().split('T')[0]
})

const triggerNotification = (msg: string, isErr: boolean) => {
  notification.message = msg
  notification.isError = isErr
  notification.show = true
  setTimeout(() => notification.show = false, 4000)
}

const fetchCategories = async () => {
  try {
    const res = await fetch(getUrl('category/?type=blog'))
    const data = await res.json()
    categories.value = data
    if (data.length > 0) {
      form.category_name = data[0].name
      form.category_id = data[0].id
    }
  } catch (err) {
    console.error("Failed to load categories", err)
  }
}

const syncCategoryId = () => {
  const selected = categories.value.find(c => c.name === form.category_name)
  if (selected) form.category_id = selected.id
}

const onFileChange = (e: any) => {
  const file = e.target.files[0]
  if (file) {
    imageFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const handleBlogSubmit = async (isDraft: boolean) => {
  loading.value = true
  
  // Use FormData for multipart/form-data support (Files + Forms)
  const formData = new FormData()
  formData.append('category_id', form.category_id)
  formData.append('category_name', form.category_name)
  formData.append('post_title', form.post_title)
  formData.append('short_title', form.short_title)
  formData.append('body', form.body)
  formData.append('draft', isDraft.toString())
  
  if (imageFile.value) {
    formData.append('image', imageFile.value)
  }

  try {
    const response = await fetch(getUrl('blog/'), {
      method: 'POST',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
        // Note: Do NOT set Content-Type header manually when using FormData
      },
      body: formData
    })

    if (!response.ok) throw new Error('Publication failed')

    triggerNotification(isDraft ? 'Draft Saved' : 'Article Published Successfully', false)
    // Optional: Reset form or Redirect
  } catch (err) {
    triggerNotification('Server Error: Could not publish article', true)
  } finally {
    loading.value = false
  }
}

onMounted(fetchCategories)
</script>

<style scoped>
textarea { font-family: 'Georgia', serif; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px); }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px); }
</style>