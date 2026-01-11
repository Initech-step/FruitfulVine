<template>
    <DashboardHeader/>
  <div class="min-h-screen bg-white pb-20">
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
            <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Product Name</label>
            <input 
              v-model="form.product_name" 
              type="text" 
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
                class="w-full bg-gray-100 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all resize-none border-none text-gray-700" 
                placeholder="A brief overview for listings..."
              ></textarea>
            </div>

            <div class="form-control">
              <label class="text-xs font-black uppercase tracking-widest text-black mb-3 block">Full Body Content</label>
              <textarea 
                v-model="form.body" 
                rows="8"
                class="w-full bg-gray-100 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all border-none text-gray-700" 
                placeholder="Detailed product documentation and storytelling..."
              ></textarea>
            </div>
          </div>

          <div class="form-control bg-gray-100 p-8 rounded-3xl">
            <label class="text-xs font-black uppercase tracking-widest text-black mb-6 block flex justify-between items-center">
              Product Gallery (URLs)
              <button type="button" @click="addImageUrl" class="text-red-600 hover:text-black transition-colors font-bold">+ Add Image</button>
            </label>
            <div class="space-y-4">
              <div v-for="(url, index) in form.image_urls" :key="index" class="flex gap-3">
                <input 
                  v-model="form.image_urls[index]" 
                  type="text" 
                  class="grow bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-red-600 focus:outline-none" 
                  placeholder="https://image-source.com/photo.jpg" 
                />
                <button @click="removeImageUrl(index)" type="button" class="p-3 text-gray-300 hover:text-red-600 transition-colors">
                  <span class="icon-[tabler--trash] size-5"></span>
                </button>
              </div>
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
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Category Name</label>
                <select v-model="form.category_name" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-red-600 focus:outline-none">
                  <option value="" disabled>Select Category</option>
                  <option class="text-black" value="Electronics">Electronics</option>
                  <option class="text-black" value="Design">Design</option>
                  <option class="text-black" value="Lifestyle">Lifestyle</option>
                </select>
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Category ID</label>
                <input v-model="form.category_id" type="text" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-red-600 focus:outline-none" placeholder="CAT-001" />
              </div>

              <div class="form-control">
                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Publish Date</label>
                <input ref="datePicker" v-model="form.date" type="text" class="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-red-600 focus:outline-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="pt-6">
            <button type="submit" class="w-full bg-red-600 hover:bg-black text-white font-black py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-[0.2em] text-xs">
              Save Product
            </button>
            <button type="button" class="w-full mt-4 text-gray-400 hover:text-red-600 font-bold py-2 text-xs uppercase tracking-widest transition-colors">
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

const datePicker = ref<HTMLInputElement | null>(null)

const form = reactive({
  image_urls: [''],
  category_id: '',
  category_name: '',
  product_name: '',
  short_description: '',
  body: '',
  date: new Date().toISOString().split('T')[0],
  iframe: ''
})

const addImageUrl = () => form.image_urls.push('')
const removeImageUrl = (index: number) => {
  if (form.image_urls.length > 1) form.image_urls.splice(index, 1)
}

const handleProductSubmit = () => {
  console.log('Pushing Pydantic-ready Product Object:', JSON.parse(JSON.stringify(form)))
  // API Call logic here
}

onMounted(() => {
  if (datePicker.value) {
    flatpickr(datePicker.value, {
      monthSelectorType: 'static',
      dateFormat: "Y-m-d", // Matches Pydantic date.today() format
    })
  }
})
</script>

<style scoped>
/* Scoped styles to ensure clean focus rings */
input:focus, select:focus, textarea:focus {
  outline: none;
}
</style>