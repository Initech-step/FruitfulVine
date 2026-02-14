<template>
  <div class="relative isolate bg-gradient-to-b from-white via-gray-50 to-white px-6 py-24 sm:py-32 lg:px-8">
    <!-- Background Gradient Blobs -->
    <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
      <div 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-red-600 opacity-10 sm:w-[72.1875rem]"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-base font-semibold text-red-600 tracking-wide uppercase mb-3">What We Offer</h2>
        <h1 class="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-4">
          Details of Our <span class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Services</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Professional phone repair and software services delivered with expertise and care
        </p>
        <div class="mt-6 h-1.5 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto"></div>
      </div>

      <!-- Services Grid -->
      <div class="space-y-20">
        <!-- Service 1: Screen Replacement -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          data-aos="fade-up"
        >
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 text-red-600 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900">Screen Replacement</h3>
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Cracked or unresponsive screen? We replace damaged screens with high-quality parts to restore clarity and touch sensitivity. Most screen repairs are completed the same day.
            </p>

            <div class="bg-gray-50 rounded-2xl p-6 mb-6">
              <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-1 h-6 bg-red-600 rounded-full"></span>
                What you get:
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Clear display & smooth touch</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Quality replacement parts</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Careful installation</span>
                </li>
              </ul>
            </div>

            <!-- <NuxtLink 
              to="/#contact-us"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get This Service
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink> -->
            <a 
              :href="screen_replacement_href"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get This Service
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="/img/images (2).jpg" 
                alt="Screen Replacement Service"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Service 2: Battery Replacement -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          data-aos="fade-up"
        >
          <div class="order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="/img/images (4).jpg" 
                alt="Battery Replacement Service"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div class="order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 text-red-600 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900">Battery Replacement</h3>
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Is your phone shutting down fast, overheating, or not holding charge? We replace weak or damaged batteries to give your phone longer life and better performance.
            </p>

            <div class="bg-gray-50 rounded-2xl p-6 mb-6">
              <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-1 h-6 bg-red-600 rounded-full"></span>
                Signs you need this service:
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Phone dies quickly</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Battery percentage jumps</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Phone gets hot</span>
                </li>
              </ul>
            </div>

            <!-- <NuxtLink 
              to="/#contact-us"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get This Service
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink> -->
            <a 
              :href="battery_replacement_href"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get This Service
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
            
          </div>
        </div>

        <!-- Service 3: Charging Port Repair -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          data-aos="fade-up"
        >
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 text-red-600 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900">Charging Port Repair</h3>
            </div>
            
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Phone not charging properly or only charging at a certain angle? We clean, repair, or replace faulty charging ports to get your device powered again.
            </p>

            <div class="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-6">
              <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Common Issues We Fix</h4>
                <p class="text-sm text-gray-600">Loose connections, debris buildup, damaged pins, and more</p>
              </div>
            </div>

            <!-- <NuxtLink 
              to="/#contact-us"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get This Service
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink> -->

            <a 
              :href="charging_port_href"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get This Service
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="/img/images (5).jpg" 
                alt="Charging Port Repair Service"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Service 4: Water Damage Cleaning -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          data-aos="fade-up"
        >
          <div class="order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=600&fit=crop" 
                alt="Water Damage Cleaning Service"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div class="order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 text-red-600 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900">Water Damage Cleaning</h3>
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Dropped your phone in water or liquid? Bring it in fast. We professionally clean and treat water-damaged phones to prevent corrosion and data loss.
            </p>

            <div class="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200 mb-6">
              <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-amber-900 mb-1 text-lg">⚠️ Time is Critical!</h4>
                <p class="text-sm text-amber-800 font-medium">The sooner you come in, the higher the chance of recovery.</p>
              </div>
            </div>

            <a 
              :href="water_damage_cleaning_href"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get Emergency Help
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
          </div>
        </div>

        <!-- Service 5: Camera, Speaker & Microphone Repair -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          data-aos="fade-up"
        >
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 text-red-600 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900">Camera, Speaker & Mic</h3>
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Blurry photos, low sound, or people can't hear you on calls? We repair or replace faulty cameras, speakers, and microphones.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                <div class="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </div>
                <p class="text-sm font-semibold text-purple-900">Camera</p>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
                <div class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <p class="text-sm font-semibold text-blue-900">Speaker</p>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                <div class="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p class="text-sm font-semibold text-green-900">Microphone</p>
              </div>
            </div>

            <NuxtLink 
              to="/#contact-us"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get This Service
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop" 
                alt="Camera and Audio Repair Service"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Service 6: Software Services -->
        <div 
          class="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-800"
          data-aos="fade-up"
        >
          <div class="order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=600&fit=crop" 
                alt="Software Services"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div class="order-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white">Software Services</h3>
            </div>
            
            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              We provide professional software solutions, including phone flashing, network unlocking, and account-related fixes.
            </p>

            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3 text-gray-200">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Phone flashing & firmware installation</span>
              </div>
              <div class="flex items-center gap-3 text-gray-200">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Network unlocking</span>
              </div>
              <div class="flex items-center gap-3 text-gray-200">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>FRP & account-related fixes</span>
              </div>
              <div class="flex items-center gap-3 text-gray-200">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Cloud / ID removal (where legally permitted)</span>
              </div>
            </div>

            <a 
              :href="software_service_href"
              class="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get This Service
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-20 text-center">
        <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-12 shadow-2xl">
          <h3 class="text-3xl font-bold text-green-900 mb-4">Ready to Get Your Phone Fixed?</h3>
          <p class="text-lg text-green-800 mb-8 max-w-2xl mx-auto">
            Visit us today or contact us to schedule your repair. Fast, reliable, and affordable service guaranteed.
          </p>

        <a :href="main_href" class="inline-flex items-center gap-2 px-8 py-4 bg-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us Now
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const WHATSAPP_NUMBER = '231887777364'
const message = `
    Hello FruitFul Vine 👋
    I’m interested in your services,
    let me know your availability.`.trim()
const screen_replacement = `
Hello FruitFul Vine 👋
    I’m interested in Screen Replacement service,
    let me know your availability.
`
const battery_replacement = `
Hello FruitFul Vine 👋
    I’m interested in Battery Replacement service,
    let me know your availability.
`
const charging_port = `
Hello FruitFul Vine 👋
    I’m interested in Charging Port Repair,
    let me know your availability.
`
const water_damage_cleaning = `
Hello FruitFul Vine 👋
    I’m interested in Water Damage Cleaning,
    let me know your availability.
`
const software_service = `
Hello FruitFul Vine 👋
    I’m interested in software service,
    let me know your availability.
`

const encodedMessage = encodeURIComponent(message)
const main_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

const encodedMessage_screen_replacement = encodeURIComponent(screen_replacement)
const screen_replacement_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage_screen_replacement}`

const battery_replacement_encodedMessage = encodeURIComponent(battery_replacement)
const battery_replacement_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${battery_replacement_encodedMessage}`

const charging_port_encodedMessage = encodeURIComponent(charging_port)
const charging_port_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${charging_port_encodedMessage}`

const water_damage_cleaning_encodedMessage = encodeURIComponent(water_damage_cleaning)
const water_damage_cleaning_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${water_damage_cleaning_encodedMessage}`

const software_service_encodedMessage = encodeURIComponent(software_service)
const software_service_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${software_service_encodedMessage}`

</script>

<style scoped>
/* Custom animations can be added here if needed */
</style>