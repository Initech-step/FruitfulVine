<template>
  <DashboardHeader />
  <div class="min-h-screen bg-white">
    <Transition name="slide-up">
      <div v-if="notification.show" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl bg-black border border-white/10">
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white">{{ notification.message }}</p>
      </div>
    </Transition>

    <header class="py-10 border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 class="text-3xl font-black tracking-tighter text-black uppercase">
            Product <span class="text-red-600">Inventory</span>
          </h1>
          <p class="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your storefront assets</p>
        </div>
        <NuxtLink to="/admin/product" class="bg-black hover:bg-red-600 text-white font-black py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-xs shadow-lg flex items-center gap-2">
          <span class="icon-[tabler--plus] size-4"></span> Add New Product
        </NuxtLink>
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
            <select @change="fetchProducts" v-model="selectedCategoryId" class="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all">
              <option :value="null">All Categories</option>
              <option v-for="cat in categoryList" :key="cat._id" :value="cat._id">{{ cat.name }}</option>
            </select>
            <span class="icon-[tabler--chevron-down] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></span>
          </div>

          <div class="flex-grow md:max-w-xs relative">
            <input type="text" v-model="searchQuery" placeholder="Search product name..." class="w-full bg-white border border-gray-100 rounded-xl px-10 py-2 text-xs focus:ring-2 focus:ring-red-600 outline-none transition-all" />
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
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Date</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
              <th class="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="product in filteredProducts" :key="product._id" class="hover:bg-gray-50/50 transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="size-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                    <img :src="product?.images[0]?.secure_url || product?.images[0]?.url" class="size-full object-cover" alt="Thumbnail" />
                  </div>
                  <div>
                    <div class="text-sm font-black text-black leading-none mb-1 group-hover:text-red-600 transition-colors">{{ product.product_name }}</div>
                    <div class="text-[11px] text-gray-400 font-medium line-clamp-1 max-w-[200px]">{{ product.short_description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{{ product.category_name }}</span>
              </td>
              <td class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase">
                {{ formatDate(product.date) }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <span :class="[product.draft ? 'bg-gray-300' : 'bg-red-600 animate-pulse', 'size-2 rounded-full']"></span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-black">
                    {{ product.draft ? 'Draft' : 'Listed' }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex justify-end gap-2">
                  <NuxtLink :to="`/admin/product/${product._id}`" class="p-2 text-[10px] font-black uppercase bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                    Edit
                  </NuxtLink>
                  <button @click="handleDelete(product)" class="p-2 text-[10px] font-black uppercase bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div v-if="loading" class="py-20 text-center">
           <p class="text-gray-400 font-bold uppercase tracking-widest text-xs animate-bounce">Synchronizing Inventory...</p>
        </div>
        <div v-else-if="products.length === 0" class="py-20 text-center">
          <span class="icon-[tabler--package-off] size-12 text-gray-200 mb-4"></span>
          <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">No products found</p>
        </div>
      </div>

      <footer class="mt-8 flex items-center justify-between px-2">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Page {{ currentPage }} of {{ totalPages }}</p>
        <div class="flex gap-2">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="px-4 py-2 border border-gray-100 rounded-xl text-xs font-black uppercase hover:bg-black hover:text-white transition-all disabled:opacity-30">Prev</button>
          <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="px-4 py-2 bg-black text-white rounded-xl text-xs font-black uppercase hover:bg-red-600 transition-all">Next</button>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

const products = ref<any[]>([])
const categoryList = ref<any[]>([])
const loading = ref(false)
const searchQuery = ref('')
const selectedCategoryId = ref<string | null>(null)
const currentPage = ref(1)
const totalPages = ref(1)
const notification = reactive({ show: false, message: '' })

const triggerNotification = (msg: string) => {
  notification.message = msg
  notification.show = true
  setTimeout(() => notification.show = false, 3000)
}

// API: Fetch Products with Pagination and Category Filtering
const fetchProducts = async () => {
  loading.value = true
  try {
    let url = `http://127.0.0.1:8000/api/products/?page=${currentPage.value}&limit=10`
    if (selectedCategoryId.value) url += `&category_id=${selectedCategoryId.value}`
    
    const res = await fetch(url)
    const data = await res.json()
    
    products.value = data.products || []
    totalPages.value = data.pages || 1
  } catch (err) {
    triggerNotification("Error loading inventory")
  } finally {
    loading.value = false
  }
}

const fetchCategories = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/category/?type=product')
    categoryList.value = await res.json()
  } catch (err) { console.error("Category fetch error") }
}

const handleDelete = async (product: any) => {
  if (!confirm(`Permanently remove ${product.product_name} from inventory?`)) return

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/product/${product._id}/`, {
      method: 'DELETE',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      }
    })
    if (res.ok) {
      triggerNotification("Product purged from database")
      fetchProducts()
    }
  } catch (err) {
    triggerNotification("Delete failed")
  }
}

const changePage = (page: number) => {
  currentPage.value = page
  fetchProducts()
}

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value
  return products.value.filter(p => 
    p.product_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return '---'
  return dateStr.split(' ')[0] // Returns YYYY-MM-DD
}

onMounted(() => {
  fetchProducts()
  fetchCategories()
})
</script>