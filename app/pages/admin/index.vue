<template>
  <div class="min-h-screen bg-white">
    <DashboardHeader />
    
    <main class="max-w-5xl mx-auto px-6 py-12">
      <header class="mb-12">
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
          <span class="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Management Guide</span>
        </div>
        <h1 class="text-4xl font-black text-black uppercase tracking-tight mb-4">Dashboard <span class="text-red-600">Manual</span></h1>
        <p class="text-gray-500 text-lg">Follow these steps to keep your store and blog updated efficiently.</p>
      </header>

      <div class="grid gap-8">
        <section class="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl shrink-0">01</div>
            <div>
              <h2 class="text-xl font-black text-black uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors">Start Here: Categories</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                Before adding any products or blog posts, you <strong>must</strong> create a Category. This acts as a "folder" for your content (e.g., "Chargers" or "Industry News").
              </p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-600 rounded-full"></span> Go to the <strong>Categories</strong> tab.</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-600 rounded-full"></span> Enter a simple name and save.</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl shrink-0">02</div>
            <div>
              <h2 class="text-xl font-black text-black uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors">Adding Product Listings</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                Showcase your accessories by providing clear details and high-quality images.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl border border-gray-100">
                  <span class="text-xs font-bold text-red-600 uppercase">Image Quality</span>
                  <p class="text-xs text-gray-400 mt-1">Use bright, clear photos. The first image will be the primary thumbnail.</p>
                </div>
                <div class="bg-white p-4 rounded-xl border border-gray-100">
                  <span class="text-xs font-bold text-red-600 uppercase">Descriptions</span>
                  <p class="text-xs text-gray-400 mt-1">Keep short descriptions punchy. Use the "Body" for technical specs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl shrink-0">03</div>
            <div>
              <h2 class="text-xl font-black text-black uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors">Publishing Blog Posts</h2>
              <p class="text-gray-600 leading-relaxed">
                Use the blog to engage customers with tutorials or phone maintenance tips. Select the appropriate blog category so users can find your articles easily.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer class="mt-16 p-6 rounded-2xl bg-black flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="p-3 bg-red-600 rounded-xl">
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-white font-bold uppercase text-xs tracking-widest">Admin Pro-Tip</p>
            <p class="text-gray-400 text-sm">Always log out when using a public computer to keep your store secure.</p>
          </div>
        </div>
        <button @click="$router.push('/admin/categories')" class="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-600 hover:text-white transition-all">
          Start with Categories
        </button>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
// Logic for DashboardHeader visibility or state can go here
</script>