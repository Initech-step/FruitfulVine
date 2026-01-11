<template>
    <DashboardHeader />
  <div class="min-h-screen bg-white pb-20">
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button @click="goBack" class="p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
            <span class="icon-[tabler--arrow-left] size-6"></span>
          </button>
          <span class="text-xs font-black uppercase tracking-widest text-gray-400">Product Details</span>
        </div>
        
        <div class="flex items-center gap-3">
          <button 
            @click="isEditing = !isEditing" 
            :class="[isEditing ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white', 'px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all']"
          >
            {{ isEditing ? 'Cancel Editing' : 'Edit Product' }}
          </button>
          <button v-if="isEditing" @click="saveProduct" class="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-200">
            Save Changes
          </button>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-5 space-y-8">
          <div class="aspect-square w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 relative group">
            <img :src="activeImage" class="size-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Product View" />
            <div class="absolute bottom-6 left-6 flex gap-2">
              <span class="bg-black/80 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                {{ product.category_name }}
              </span>
            </div>
          </div>

          <div v-if="isEditing" class="bg-gray-50 p-6 rounded-3xl space-y-4">
            <label class="text-[10px] font-black uppercase tracking-widest text-black flex justify-between">
              Gallery Images
              <button @click="addImageUrl" class="text-red-600">+ Add</button>
            </label>
            <div v-for="(url, idx) in product.image_urls" :key="idx" class="flex gap-2">
              <input v-model="product.image_urls[idx]" class="grow bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-red-600 outline-none" />
              <button @click="removeImageUrl(idx)" class="text-gray-300 hover:text-red-600"><span class="icon-[tabler--x] size-4"></span></button>
            </div>
          </div>
          <div v-else class="flex gap-4 overflow-x-auto pb-2">
            <img 
              v-for="(img, idx) in product.image_urls" 
              :key="idx" :src="img" 
              @click="activeImage = img"
              :class="[activeImage === img ? 'border-red-600 scale-95' : 'border-transparent', 'size-20 rounded-2xl object-cover border-2 cursor-pointer transition-all hover:scale-105']"
            />
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="max-w-2xl">
            <div class="flex items-center gap-2 mb-6">
              <span class="text-red-600 font-bold text-xs uppercase tracking-tighter">{{ product.category_name }}</span>
              <span class="text-gray-300">/</span>
              <span class="text-gray-400 font-bold text-xs uppercase tracking-tighter">ID: {{ product.category_id }}</span>
            </div>

            <div v-if="!isEditing" class="mb-8">
              <h1 class="text-5xl font-black text-black tracking-tighter uppercase mb-4 leading-none">
                {{ product.product_name }}
              </h1>
              <p class="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-red-600 pl-6">
                {{ product.short_description }}
              </p>
            </div>
            <div v-else class="space-y-6 mb-12">
              <div class="group">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Product Title</label>
                <input v-model="product.product_name" class="w-full text-4xl font-black uppercase tracking-tighter border-b-4 border-gray-100 focus:border-red-600 transition-colors outline-none pb-2" />
              </div>

              <div class="group">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Short Description</label>
                <textarea v-model="product.short_description" rows="2" class="w-full text-lg text-gray-600 bg-gray-50 rounded-xl p-4 focus:ring-1 focus:ring-red-600 outline-none transition-all"></textarea>
              </div>
            </div>

            <div class="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600 prose-strong:text-black">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Product Body</label>
              <div v-if="!isEditing" v-html="product.body" class="leading-relaxed"></div>
              <textarea v-else v-model="product.body" rows="12" class="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-inner focus:ring-2 focus:ring-red-600 outline-none text-gray-700 font-serif"></textarea>
            </div>

            <div class="mt-12 grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div>
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Category Reference</label>
                <div v-if="!isEditing" class="font-bold text-black">{{ product.category_name }} ({{ product.category_id }})</div>
                <div v-else class="space-y-2">
                  <input v-model="product.category_name" placeholder="Name" class="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-red-600" />
                  <input v-model="product.category_id" placeholder="ID" class="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-red-600" />
                </div>
              </div>
              <div>
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Creation Date</label>
                <div v-if="!isEditing" class="font-bold text-black">{{ product.date }}</div>
                <input v-else v-model="product.date" type="date" class="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isEditing = ref(false)

// Sample data following your Pydantic Model
const product = reactive({
  image_urls: [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070'
  ],
  category_id: 'DSGN-2026',
  category_name: 'Industrial Design',
  product_name: 'The Core Chronograph',
  short_description: 'A study in balance, weight, and timeless monochromatic aesthetics.',
  body: '<p>Engineered for the modern creative, the Core Chronograph features a brushed steel finish and a proprietary movement. <strong>Every detail</strong> has been considered to reflect the brand’s commitment to minimalism.</p>',
  date: '2026-01-06',
  iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>'
})

const activeImage = ref(product.image_urls[0])

const addImageUrl = () => product.image_urls.push('')
const removeImageUrl = (index: number) => {
  if (product.image_urls.length > 1) product.image_urls.splice(index, 1)
}

const saveProduct = () => {
  console.log('Pushing Updated Product:', JSON.parse(JSON.stringify(product)))
  isEditing.value = false
}

const goBack = () => window.history.back()
</script>

<style scoped>
/* Custom prose styles to match brand */
:deep(.prose p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}
</style>