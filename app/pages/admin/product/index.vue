<template>
  <DashboardHeader />
  <div class="min-h-screen bg-white pb-20 relative">
    
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
          <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
            Create New <span class="text-red-600">Product</span>
          </h1>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6">
      <form @submit.prevent="handleProductSubmit" class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-8 space-y-10">
          <div class="form-control">
            <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Product Gallery (Multi-Upload)</label>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div v-for="(src, idx) in imagePreviews" :key="idx" class="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 group">
                <img :src="src" class="size-full object-cover" />
                <button @click.stop="removeFile(idx)" type="button" class="absolute top-2 right-2 size-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div 
                @dragover.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false"
                @drop.prevent="handleDrop"
                @click="$refs.fileInput.click()"
                :class="[dragOver ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-gray-50', 'relative aspect-square border-2 border-dashed rounded-[2.5rem] transition-all cursor-pointer overflow-hidden group flex flex-col items-center justify-center text-center px-4']"
              >
                <input type="file" ref="fileInput" class="hidden" accept="image/*" multiple @change="handleFileSelect" />
                <span class="icon-[tabler--plus] size-8 text-gray-300 group-hover:text-red-600 transition-colors mb-1"></span>
                <p class="text-[8px] font-black uppercase tracking-widest text-gray-400">Add Assets</p>
              </div>
            </div>
            <p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Supports PNG, JPG, WEBP • Max 10 files</p>
          </div>

          <div class="form-control">
            <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Product Name</label>
            <input 
              v-model="form.product_name" 
              type="text" 
              required
              class="w-full bg-white border-b-2 border-gray-100 py-4 font-bold focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-200" 
              placeholder="Enter product name..." 
            />
          </div>

          <div class="space-y-6">
            <div class="form-control">
              <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Short Description</label>
              <textarea 
                v-model="form.short_description" 
                rows="2"
                required
                class="w-full bg-gray-100 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all resize-none border-none text-gray-700" 
                placeholder="A brief overview for listings..."
              ></textarea>
            </div>

            <div class="form-control">
              <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Full Body Content</label>
              <textarea 
                v-model="form.body" 
                rows="8"
                required
                class="w-full bg-gray-100 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all border-none text-gray-700" 
                placeholder="Detailed product documentation..."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-8">
          <div class="bg-black p-8 rounded-3xl text-white shadow-2xl">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-3">
              <span class="w-1.5 h-6 bg-red-600"></span> Classification
            </h3>
            
            <div class="space-y-6">
              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Category</label>
                <select 
                  v-model="form.category_id" 
                  @change="syncCategoryName"
                  required
                  class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-red-600 focus:outline-none appearance-none"
                >
                  <option value="" disabled class="text-black">Select Category</option>
                  <option v-for="cat in categoryList" :key="cat._id" :value="cat._id" class="text-black">
                    {{ cat.name }}
                  </option>
                </select>
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Publish Date</label>
                <input ref="datePicker" v-model="form.date" type="text" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-red-600 focus:outline-none cursor-pointer" />
              </div>

              <div class="flex items-center gap-3 pt-2">
                <input type="checkbox" v-model="form.draft" id="draftMode" class="size-4 accent-red-600" />
                <label for="draftMode" class="text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer">Save as Draft</label>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full bg-red-600 hover:bg-black text-white font-black py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-[0.2em] text-xs disabled:opacity-50"
            >
              {{ loading ? `Uploading ${imageFiles.length} Assets...` : 'Save Product' }}
            </button>
            <button @click="goBack" type="button" class="w-full mt-4 text-gray-400 hover:text-red-600 font-bold py-2 text-xs uppercase tracking-widest transition-colors">
              Cancel Draft
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
const { getUrl } = useApi()
const loading = ref(false)
const dragOver = ref(false)
const datePicker = ref<HTMLInputElement | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

// NEW: Store arrays for multiple files
const imageFiles = ref<File[]>([])
const imagePreviews = ref<string[]>([])

const categoryList = ref<{_id: string, name: string}[]>([])
const notification = reactive({ show: false, message: '', isError: false })

const form = reactive({
  category_id: '',
  category_name: '',
  product_name: '',
  short_description: '',
  body: '',
  draft: false,
  date: new Date().toISOString().split('T')[0],
})

const triggerNotification = (msg: string, isErr: boolean) => {
  notification.message = msg
  notification.isError = isErr
  notification.show = true
  setTimeout(() => notification.show = false, 4000)
}

const fetchCategories = async () => {
  try {
    const res = await fetch(getUrl('category/?type=product'))
    categoryList.value = await res.json()
  } catch (err) {
    console.error("Failed to load categories")
  }
}

const syncCategoryName = () => {
  const selected = categoryList.value.find(c => c._id === form.category_id)
  if (selected) form.category_name = selected.name
}

// NEW: Logic to handle multiple file selection
const handleFileSelect = (e: any) => {
  const files = Array.from(e.target.files) as File[]
  addFiles(files)
}

const handleDrop = (e: DragEvent) => {
  dragOver.value = false
  const files = Array.from(e.dataTransfer?.files || []) as File[]
  const validImages = files.filter(f => f.type.startsWith('image/'))
  addFiles(validImages)
}

const addFiles = (files: File[]) => {
  files.forEach(file => {
    imageFiles.value.push(file)
    imagePreviews.value.push(URL.createObjectURL(file))
  })
}

const removeFile = (index: number) => {
  imageFiles.value.splice(index, 1)
  imagePreviews.value.splice(index, 1)
}

const handleProductSubmit = async () => {
  if (imageFiles.value.length === 0) {
    triggerNotification('At least one product image is required', true)
    return
  }

  loading.value = true
  const formData = new FormData()
  
  formData.append('category_id', form.category_id)
  formData.append('category_name', form.category_name)
  formData.append('product_name', form.product_name)
  formData.append('short_description', form.short_description)
  formData.append('body', form.body)
  formData.append('draft', String(form.draft))
  
  // NEW: Append multiple files to the same key 'images'
  imageFiles.value.forEach(file => {
    formData.append('images', file)
  })

  try {
    const res = await fetch(getUrl('product/'), {
      method: 'POST',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      },
      body: formData
    })

    const data = await res.json()
    if (data.status) {
      triggerNotification(`${imageFiles.value.length} assets uploaded successfully`, false)
      setTimeout(() => window.history.back(), 1500)
    } else {
      throw new Error()
    }
  } catch (err) {
    triggerNotification('Submission failed. Check your token.', true)
  } finally {
    loading.value = false
  }
}

const goBack = () => window.history.back()

onMounted(() => {
  fetchCategories()
  if (datePicker.value) {
    flatpickr(datePicker.value, {
      monthSelectorType: 'static',
      dateFormat: "Y-m-d",
    })
  }
})
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px); }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px); }
</style>