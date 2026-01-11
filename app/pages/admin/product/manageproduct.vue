<template>
    <DashboardHeader />
    <div class="min-h-screen bg-white">
        <header class="py-10 border-b border-gray-100">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 class="text-3xl font-black tracking-tighter text-black uppercase">
                        Product <span class="text-red-600">Inventory</span>
                    </h1>
                    <p class="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your storefront assets</p>
                </div>
                <button class="bg-black hover:bg-red-600 text-white font-black py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-xs shadow-lg flex items-center gap-2">
                    <span class="icon-[tabler--plus] size-4"></span> Add New Product
                </button>
            </div>
        </header>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    
      <section class="mb-8 bg-gray-50 rounded-3xl p-6 border border-gray-100">
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex items-center gap-3">
            <span class="icon-[tabler--filter] text-red-600 size-5"></span>
            <span class="text-xs font-black uppercase tracking-widest text-black">Filter By:</span>
          </div>
          
          <div class="relative">
            <select v-model="filters.category" class="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all">
              <option value="All">All Categories</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <span class="icon-[tabler--chevron-down] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></span>
          </div>

          <div class="relative">
            <select v-model="filters.status" class="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all">
              <option value="All">All Status</option>
              <option value="Listed">Listed</option>
              <option value="Unlisted">Unlisted</option>
            </select>
            <span class="icon-[tabler--chevron-down] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></span>
          </div>

          <div class="flex-grow md:max-w-xs relative">
            <input type="text" v-model="filters.search" placeholder="Search products..." class="w-full bg-white border border-gray-200 rounded-xl px-10 py-2 text-xs focus:ring-2 focus:ring-red-600 outline-none transition-all" />
            <span class="icon-[tabler--search] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4"></span>
          </div>
        </div>
      </section>

      <div class="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white">
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Product Details</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Category</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Date Created</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="product in products" :key="product.product_name" class="hover:bg-gray-50/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                    <img :src="product.image_urls[0]" class="size-full object-cover" alt="Product thumbnail" />
                  </div>
                  <div>
                    <div class="text-sm font-black text-black leading-none mb-1 group-hover:text-red-600 transition-colors">{{ product.product_name }}</div>
                    <div class="text-[11px] text-gray-400 font-medium line-clamp-1 max-w-[200px]">{{ product.short_description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{{ product.category_name }}</span>
                <div class="text-[10px] text-gray-400 mt-1 ml-1">ID: {{ product.category_id }}</div>
              </td>
              <td class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                {{ product.date }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <span class="size-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-black">Listed</span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex justify-end gap-2">
                  <button @click="handleEdit(product)" class="p-2 text-white bg-black rounded-lg border border-transparent transition-all" title="Edit Product">Edit
                  </button>
                  <button @click="handleDelete(product)" class="p-2 bg-red-600 text-white rounded-lg transition-all" title="Delete Product">Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div v-if="products.length === 0" class="py-20 text-center">
          <span class="icon-[tabler--package-off] size-12 text-gray-200 mb-4"></span>
          <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">No products found</p>
        </div>
      </div>

      <footer class="mt-8 flex items-center justify-between px-2">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Showing 1 to 10 of 48 entries</p>
        <div class="flex gap-2">
          <button class="px-4 py-2 border border-gray-100 rounded-xl text-xs font-black uppercase hover:bg-black hover:text-white transition-all disabled:opacity-30">Prev</button>
          <button class="px-4 py-2 bg-black text-white rounded-xl text-xs font-black uppercase hover:bg-red-600 transition-all">Next</button>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Filtering Logic
const filters = reactive({
  category: 'All',
  status: 'All',
  search: ''
})

const categories = ['Electronics', 'Design', 'Lifestyle', 'Hardware']

// Product List (Mocked using your Product Model Structure)
const products = ref([
  {
    image_urls: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070'],
    category_id: 'CAT-001',
    category_name: 'Electronics',
    product_name: 'Studio Headphones X1',
    short_description: 'High-fidelity audio for creative professionals.',
    body: 'Full content here...',
    date: '2026-01-06',
    iframe: ''
  },
  {
    image_urls: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099'],
    category_id: 'CAT-002',
    category_name: 'Design',
    product_name: 'Minimalist Watch v2',
    short_description: 'A timeless piece of industrial design.',
    body: 'Full content here...',
    date: '2026-01-05',
    iframe: ''
  }
])

const handleEdit = (product: any) => {
  console.log('Editing:', product.product_name)
}

const handleDelete = (product: any) => {
  if(confirm(`Are you sure you want to delete ${product.product_name}?`)) {
    console.log('Deleting:', product.product_name)
  }
}
</script>