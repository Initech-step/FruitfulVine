<template>
  <DashboardHeader />
  <div class="min-h-screen bg-white pb-24 relative">
    
    <Transition name="slide-up">
      <div v-if="notification.show" 
        :class="[
          notification.isError ? 'bg-red-600' : 'bg-black',
          'fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl min-w-[320px] border border-white/10'
        ]"
      >
        <span :class="[notification.isError ? 'text-white' : 'text-red-600', 'icon-[tabler--circle-check] size-5']" v-if="!notification.isError"></span>
        <span class="icon-[tabler--alert-circle] text-white size-5" v-else></span>
        
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white">
          {{ notification.message }}
        </p>
        
        <button @click="notification.show = false" class="ml-auto text-white/50 hover:text-white transition-colors">
          <span class="icon-[tabler--x] size-4"></span>
        </button>
      </div>
    </Transition>

    <header class="py-10 border-b border-gray-100 mb-8">
      <div class="mx-auto max-w-5xl px-6 flex items-center justify-between">
        <h1 class="text-3xl font-black tracking-tighter text-black uppercase">
          Category <span class="text-red-600">Registry</span>
        </h1>
        <NuxtLink to="/admin/categories">
            <button class="bg-black hover:bg-red-600 text-white font-black py-3 px-8 rounded-full transition-all text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                New Category
            </button>
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6">
      <div class="overflow-hidden bg-white rounded-[2rem] border border-gray-100 shadow-sm">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white">
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Name</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Type</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Control</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="cat in categories" :key="cat.id" class="hover:bg-gray-50/50 transition-colors group">
              <td class="px-8 py-6">
                <div class="flex items-center gap-4">
                  <div class="size-2 bg-red-600 rounded-full"></div>
                  <span class="text-sm font-black text-black uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {{ cat.name }}
                  </span>
                </div>
              </td>
              <td class="px-8 py-6">
                <span class="text-[10px] font-bold px-3 py-1 bg-gray-100 rounded-md uppercase tracking-widest text-gray-500">
                  {{ cat.type }}
                </span>
              </td>
              <td class="px-8 py-6">
                <p class="text-xs text-gray-400 font-medium truncate max-w-[200px]">
                  {{ cat.description || '—' }}
                </p>
              </td>
              <td class="px-8 py-6 text-right">
                <button @click="handleDelete(cat._id, cat.type)" class="btn text-sm rounded-full bg-red-800 p-2 text-white hover:bg-red-400">
                   Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="loading" class="py-24 text-center">
          <div class="inline-block size-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">Fetching Database</p>
        </div>

        <div v-else-if="categories.length === 0" class="py-24 text-center">
          <span class="icon-[tabler--database-off] size-12 text-gray-100 mb-4 block mx-auto"></span>
          <p class="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Registry is empty</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const categories = ref([])
const loading = ref(true)
const { getUrl } = useApi()

// Notification state from create form
const notification = reactive({
  show: false,
  message: '',
  isError: false
})

const triggerNotification = (msg: string, error = false) => {
  notification.message = msg
  notification.isError = error
  notification.show = true
  setTimeout(() => { notification.show = false }, 4000)
}

const fetchCategories = async () => {
  loading.value = true
  try {
    const response = await fetch(getUrl('category/'))
    if (!response.ok) throw new Error()
    categories.value = await response.json()
    console.log(categories.value)
  } catch (err) {
    triggerNotification('Failed to sync with server', true)
  } finally {
    loading.value = false
  }
}

const handleDelete = async (id: any, type: string) => {
  if (!confirm(`Confirm permanent removal of: ${type}?`)) return

  try {
    const response = await fetch(getUrl(`category/${id}/${type}/`), {
      method: 'DELETE',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      }
    })

    if (!response.ok) throw new Error()

    triggerNotification(`Successfully deleted ${name}`, false)
    fetchCategories() // Refresh list
  } catch (err) {
    triggerNotification('Delete failed: System error', true)
  }
}

onMounted(fetchCategories)
</script>

<style scoped>
/* Transition Styles (Integrated from Create Form) */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}

table {
  font-feature-settings: "tnum" on, "lnum" on;
}
</style>