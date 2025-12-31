<template>
  <section id="contact-us" class="bg-white">
    <div class="py-12 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-8">
        
        <div class="mb-16 text-center">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-50 border border-red-100">
            <span class="text-xs font-semibold text-red-700 uppercase tracking-wider">CONTACT US</span>
          </div>
          <h2 class="text-black mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Let's Reach <span class="relative z-10 text-red-600">Out</span>
          </h2>
          <p class="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below to be contacted or make an inquiry. We look forward to serving you!
          </p>
        </div>
        
        <div class="border border-gray-100 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div class="grid gap-0 lg:grid-cols-7">
            
            <div class="p-8 lg:p-14 lg:col-span-4 bg-white">
              <form class="space-y-7" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">Full Name</label>
                    <div class="relative group">
                      <input v-model="form.name" type="text" class="w-full bg-white border-b-2 border-gray-200 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-300" placeholder="John Doe" id="username" />
                      <span class="icon-[tabler--user] absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors"></span>
                    </div>
                  </div>
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">Phone Number</label>
                    <div class="relative group">
                      <input v-model="form.phone" type="text" class="w-full bg-white border-b-2 border-gray-200 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder:text-gray-300" placeholder="+1 (212) 555-0000" id="userphone" />
                      <span class="icon-[tabler--phone] absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors"></span>
                    </div>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">Preferred Date</label>
                    <div class="relative group">
                      <input ref="dateInput" v-model="form.date" type="text" class="w-full bg-white border-b-2 border-gray-200 py-3 focus:border-red-600 focus:outline-none transition-colors cursor-pointer" placeholder="Select date" id="userdate" />
                      <span class="icon-[tabler--calendar-event] absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600"></span>
                    </div>
                  </div>
                  <div class="form-control">
                    <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">Preferred Time</label>
                    <div class="relative group">
                      <input v-model="form.time" type="text" class="w-full bg-white border-b-2 border-gray-200 py-3 focus:border-red-600 focus:outline-none transition-colors" placeholder="19:00" id="usertime" />
                      <span class="icon-[tabler--clock] absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600"></span>
                    </div>
                  </div>
                </div>
                
                <div class="form-control">
                  <label class="text-xs font-bold uppercase tracking-wider text-black mb-2 block">Special Requests</label>
                  <textarea v-model="form.message" class="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all min-h-[100px] resize-none" placeholder="Allergies, seating preference, or occasion..." id="usermessage"></textarea>
                </div>
                
                <button type="submit" class="w-full bg-black hover:bg-red-600 text-white font-bold py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/20 uppercase tracking-widest text-sm">
                  Submit
                </button>
              </form>
            </div>
            
            <div class="p-8 lg:p-14 lg:col-span-3 bg-black flex flex-col justify-between border-l border-gray-100">
              <div class="space-y-10">
                <div>
                  <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                    <span class="w-8 h-[2px] bg-red-600"></span> Contact Info
                  </h4>
                  <p class="text-white font-medium">johndoe@gmail.com</p>
                  <p class="text-white font-bold text-xl mt-1">+148 589 2001 2466</p>
                </div>
                
                <div>
                  <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                    <span class="w-8 h-[2px] bg-red-600"></span> Visit Us
                  </h4>
                  <address class="text-white not-italic leading-relaxed">
                    Office 149, 450 South Brand Brooklyn<br />
                    San Diego County, CA 91905, USA
                  </address>
                </div>
              </div>
              
              <div class="mt-12 lg:mt-0">
                <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <p class="text-black font-bold flex justify-between items-center mb-1">
                    <span>Opening Hours</span>
                    <span class="text-red-600">9AM — 11PM</span>
                  </p>
                  <p class="text-xs text-gray-400">Open every day including holidays</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

const dateInput = ref<HTMLInputElement | null>(null)

const form = reactive({
  name: '',
  phone: '',
  date: '',
  time: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}

onMounted(() => {
  if (dateInput.value) {
    flatpickr(dateInput.value, {
      monthSelectorType: 'static',
      dateFormat: "F j, Y", // More professional date format
    })
  }
})
</script>