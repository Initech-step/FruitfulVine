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

    <header class="py-12 border-b border-gray-100 mb-12">
      <div class="mx-auto max-w-3xl px-6">
        <span class="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">System Setup</span>
        <h1 class="text-4xl font-black tracking-tighter text-black uppercase">
          New <span class="text-red-600">Category</span>
        </h1>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-6">
      <form @submit.prevent="handleCategorySubmit" class="space-y-10">
        <div class="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 space-y-8">
          <div class="form-control">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block">Category Name</label>
            <input 
              v-model="form.name" 
              type="text" 
              required
              class="w-full bg-white rounded-2xl px-6 py-4 text-xl font-bold text-black focus:ring-2 focus:ring-red-600 outline-none transition-all border-none shadow-sm" 
              placeholder="e.g. Industrial Design" 
            />
          </div>

          <div class="form-control">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block">Category Type</label>
            <div class="flex gap-4">
              <label v-for="type in ['product', 'blog']" :key="type" class="flex-1 cursor-pointer group">
                <input type="radio" v-model="form.type" :value="type" class="sr-only peer" />
                <div class="w-full text-center py-4 rounded-xl border-2 border-transparent bg-white text-xs font-black uppercase tracking-widest transition-all peer-checked:border-red-600 peer-checked:text-red-600 group-hover:bg-gray-100">
                  {{ type }}
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 items-center">
          <button 
            type="submit" 
            :disabled="loading"
            class="w-full md:w-2/3 bg-red-600 hover:bg-black text-white font-black py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-[0.2em] text-xs disabled:opacity-50"
          >
            {{ loading ? 'Processing...' : 'Create Category' }}
          </button>
          <button type="button" @click="$router.back()" class="text-black hover:text-red-600 font-black py-2 text-xs uppercase tracking-widest transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const { getUrl } = useApi()
const loading = ref(false)
const notification = reactive({
  show: false,
  message: '',
  isError: false
})

const form = reactive({
  name: '',
  type: 'product',
  description: ''
})

const triggerNotification = (msg: string, error = false) => {
  notification.message = msg
  notification.isError = error
  notification.show = true
  
  // Auto-hide after 4 seconds
  setTimeout(() => {
    notification.show = false
  }, 4000)
}

const handleCategorySubmit = async () => {
  loading.value = true
  
  try {
    const response = await fetch(getUrl('category'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) throw new Error('Failed to create category')

    triggerNotification('Category created successfully', false)
    form.name = ''
  } catch (err) {
    triggerNotification('Error Occurred: Connection Failed', true)
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Animation for the popup */
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
</style>