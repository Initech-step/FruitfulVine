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
            <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Product Featured Image</label>
            <div 
              @dragover.prevent="dragOver = true"
              @dragleave.prevent="dragOver = false"
              @drop.prevent="handleDrop"
              @click="$refs.fileInput.click()"
              :class="[dragOver ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-gray-50', 'relative h-64 border-2 border-dashed rounded-[2.5rem] transition-all cursor-pointer overflow-hidden group flex flex-col items-center justify-center text-center px-6']"
            >
              <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileSelect" />
              
              <template v-if="!imagePreview">
                <span class="icon-[tabler--photo-up] size-10 text-gray-300 group-hover:text-red-600 transition-colors mb-2"></span>
                <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">Drag & Drop or click to upload</p>
              </template>
              
              <template v-else>
                <img :src="imagePreview" class="absolute inset-0 size-full object-cover" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <p class="text-[10px] font-black uppercase tracking-widest text-white">Click to change image</p>
                </div>
              </template>
            </div>
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
              {{ loading ? 'Uploading Product...' : 'Save Product' }}
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

const loading = ref(false)
const dragOver = ref(false)
const datePicker = ref<HTMLInputElement | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
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
    const res = await fetch('http://127.0.0.1:8000/api/category/?type=product')
    categoryList.value = await res.json()
  } catch (err) {
    console.error("Failed to load categories")
  }
}

const syncCategoryName = () => {
  const selected = categoryList.value.find(c => c._id === form.category_id)
  if (selected) form.category_name = selected.name
}

const handleFileSelect = (e: any) => {
  const file = e.target.files[0]
  if (file) setFile(file)
}

const handleDrop = (e: DragEvent) => {
  dragOver.value = false
  const file = e.dataTransfer?.files[0]
  if (file && file.type.startsWith('image/')) setFile(file)
}

const setFile = (file: File) => {
  imageFile.value = file
  imagePreview.value = URL.createObjectURL(file)
}

const handleProductSubmit = async () => {
  if (!imageFile.value) {
    triggerNotification('Please upload a product image', true)
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
  formData.append('image', imageFile.value)

  try {
    const res = await fetch('http://127.0.0.1:8000/api/product/', {
      method: 'POST',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      },
      body: formData
    })

    const data = await res.json()
    if (data.status) {
      triggerNotification('Product added to catalog', false)
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