<template>
  <section id="contact-us" class="bg-white">
    <div class="py-12 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-8">
        
        <div class="mb-16 text-center">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-50 border border-red-100">
            <span class="text-xs font-semibold text-red-700 uppercase tracking-wider">Inquiry Form</span>
          </div>
          <h2 class="text-black mb-6 text-4xl font-extrabold tracking-tight md:text-5xl uppercase">
            Let's Reach <span class="relative z-10 text-red-600">Out</span>
          </h2>
          <p class="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below. Fields marked with <span class="text-red-600 font-bold">*</span> are required.
          </p>
        </div>
        
        <div class="border border-gray-100 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div class="grid gap-0 lg:grid-cols-7">
            
            <div class="p-8 lg:p-14 lg:col-span-4 bg-white">
              <form class="space-y-7" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">
                      Full Name <span class="text-red-600">*</span>
                    </label>
                    <div class="relative group">
                      <input v-model="form.name" required type="text" class="w-full bg-white border-b-2 border-gray-200 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-300" placeholder="John Doe" />
                    </div>
                  </div>
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block text-gray-400">
                      Phone Number <span class="text-red-600">*</span>
                    </label>
                    <div class="relative group">
                      <input v-model="form.phone_number" type="text" class="w-full bg-white border-b-2 border-gray-100 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-300" placeholder="+1 (212) 555-0000" />
                    </div>
                  </div>
                </div>
                
                <div class="form-control">
                  <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block text-gray-400">
                    Email Address (Optional)
                  </label>
                  <div class="relative group">
                    <input v-model="form.email" type="email" class="w-full bg-white border-b-2 border-gray-100 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-300" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div class="form-control">
                  <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">
                    Your Message <span class="text-red-600">*</span>
                  </label>
                  <textarea v-model="form.message" required class="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all min-h-[150px] resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button :disabled="submitting" type="submit" class="w-full bg-black hover:bg-red-600 text-white font-bold py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-widest text-sm disabled:bg-gray-400">
                  <span v-if="submitting">Sending...</span>
                  <span v-else>Submit Inquiry</span>
                </button>
              </form>
            </div>
            
            <div class="p-8 lg:p-14 lg:col-span-3 bg-black flex flex-col justify-between">
              <div class="space-y-10">
                <div>
                  <h4 class="text-white font-bold mb-4 flex items-center gap-2 uppercase tracking-tighter">
                    <span class="w-8 h-[2px] bg-red-600"></span> Contact Info
                  </h4>
                  <p class="text-gray-400 font-medium">support@fruitfulvine.com</p>
                  <p class="text-white font-bold text-2xl mt-1">+148 589 2001 2466</p>
                </div>
                
                <div>
                  <h4 class="text-white font-bold mb-4 flex items-center gap-2 uppercase tracking-tighter">
                    <span class="w-8 h-[2px] bg-red-600"></span> Visit Us
                  </h4>
                  <address class="text-gray-400 not-italic leading-relaxed">
                    Office 149, 450 South Brand Brooklyn<br />
                    San Diego County, CA 91905, USA
                  </address>
                </div>
              </div>
              
              <div class="mt-12">
                <div class="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p class="text-white font-bold flex justify-between items-center mb-1">
                    <span>Opening Hours</span>
                    <span class="text-red-500">9AM — 11PM</span>
                  </p>
                  <p class="text-xs text-gray-500">Available for support 24/7 online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showSuccess" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
        <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl scale-in">
          <div class="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-black text-black mb-2 uppercase">Message Sent!</h3>
          <p class="text-gray-500 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
          <button @click="showSuccess = false" class="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-colors">
            Close
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const { getUrl } = useApi()

const submitting = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
  phone_number: '',
})

const handleSubmit = async () => {
  submitting.value = true
  try {
    const res = await fetch(getUrl('contact/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        created_at: new Date().toISOString().split('T')[0]
      })
    })

    const data = await res.json()
    if (data.status) {
      showSuccess.value = true
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
      form.phone_number = ''
    }
  } catch (err) {
    alert("Something went wrong. Please try again later.")
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>