<template>
  <DashboardHeader />
  <div class="min-h-screen bg-white pb-20">
    
    <Transition name="slide-up">
      <div v-if="notification.show" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl bg-black border border-white/10">
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white">{{ notification.message }}</p>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="selectedContact" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
        <div class="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
          <div class="p-8 md:p-12">
            <div class="flex justify-between items-start mb-10">
              <div>
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-2 block">Inquiry Details</span>
                <h2 class="text-3xl font-black text-black uppercase tracking-tighter">{{ selectedContact.name }}</h2>
              </div>
              <button @click="selectedContact = null" class="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <span class="icon-[tabler--x] size-6 text-black"></span>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Email Address</label>
                <p class="font-bold text-black">{{ selectedContact.email }}</p>
              </div>
              <div>
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Phone Number</label>
                <p class="font-bold text-black">{{ selectedContact.phone_number || 'Not Provided' }}</p>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-3xl mb-10">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">Message Body</label>
              <p class="text-gray-700 leading-relaxed font-medium">{{ selectedContact.message }}</p>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Received: {{ selectedContact.created_at }}</p>
              <button 
                @click="handleDelete(selectedContact._id)" 
                class="bg-red-600 hover:bg-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all"
              >
                Delete Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <header class="py-12 border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-6">
        <h1 class="text-4xl font-black tracking-tighter text-black uppercase">
          Client <span class="text-red-600">Inquiries</span>
        </h1>
        <p class="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Manage contact form submissions</p>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-10">
      <div class="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white">
              <th class="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Sender</th>
              <th class="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Contact Info</th>
              <th class="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Message Preview</th>
              <th class="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Date</th>
              <th class="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="contact in contacts" :key="contact._id" class="hover:bg-gray-50/50 transition-colors group">
              <td class="px-8 py-5">
                <div class="flex items-center gap-3">
                  <div class="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-black text-xs">
                    {{ contact.name.charAt(0) }}
                  </div>
                  <span class="text-sm font-black text-black">{{ contact.name }}</span>
                </div>
              </td>
              <td class="px-8 py-5">
                <div class="text-[11px] font-bold text-gray-600 uppercase tracking-wider">{{ contact.email }}</div>
                <div class="text-[10px] text-gray-400">{{ contact.phone_number }}</div>
              </td>
              <td class="px-8 py-5">
                <p class="text-xs text-gray-500 line-clamp-1 max-w-[300px]">{{ contact.message }}</p>
              </td>
              <td class="px-8 py-5">
                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ contact.created_at }}</span>
              </td>
              <td class="px-8 py-5 text-right">
                <button 
                  @click="openDetails(contact)" 
                  class="bg-black text-white px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all"
                >
                  View Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="contacts.length === 0" class="py-32 text-center">
          <span class="icon-[tabler--message-off] size-12 text-gray-100 mb-4"></span>
          <p class="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No inquiries found</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const contacts = ref<any[]>([])
const loading = ref(true)
const selectedContact = ref<any | null>(null)
const notification = reactive({ show: false, message: '' })

const triggerNotification = (msg: string) => {
  notification.message = msg
  notification.show = true
  setTimeout(() => notification.show = false, 3000)
}

const fetchContacts = async () => {
  loading.value = true
  try {
    const res = await fetch('http://127.0.0.1:8000/api/contact/')
    const data = await res.json()
    // Mapping API "contacts" key
    contacts.value = data.contacts || []
  } catch (err) {
    triggerNotification("Failed to load contacts")
  } finally {
    loading.value = false
  }
}

const openDetails = (contact: any) => {
  selectedContact.value = contact
}

const handleDelete = async (contact_id: string) => {
  if (!confirm('Are you sure you want to delete this inquiry permanently?')) return

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/contact/${contact_id}/`, {
      method: 'DELETE',
      headers: {
        'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
      }
    })

    if (res.ok) {
      triggerNotification("Entry removed successfully")
      selectedContact.value = null
      fetchContacts()
    }
  } catch (err) {
    triggerNotification("Delete failed. Verification required.")
  }
}

onMounted(fetchContacts)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px); }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px); }

/* Custom clamp for preview */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>