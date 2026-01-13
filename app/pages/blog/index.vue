<template>
    <Header />
    <br/>
    <br/>
    <br/>
    <div class="bg-gray-100">
        <section class="relative bg-gray-100 text-black overflow-hidden">
            <div class="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 translate-x-1/2">
            </div>

            <div class="mx-auto max-w-screen-xl px-6 py-12 lg:py-20">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-7 space-y-6">
                    <div class="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-[0.2em]">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Featured Story
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter">
                    The Future of <span class="text-red-600">Digital Craftsmanship</span> in 2026
                    </h1>
                    
                    <p class="text-gray-800 text-lg md:text-xl max-w-xl leading-relaxed">
                    Discover how leading designers are merging traditional aesthetics with cutting-edge AI to create timeless brand experiences.
                    </p>

                    <div class="flex flex-wrap items-center gap-6 pt-4">
                    <button class="bg-red-600 hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-red-600/20">
                        Read Full Story
                    </button>
                    </div>
                </div>

                <div class="lg:col-span-5 space-y-8">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-3">
                    Latest Updates <div class="h-px grow bg-gray-800"></div>
                    </h3>
                    
                    <div class="space-y-6">
                    <a href="#" class="group flex gap-4 items-start border-b border-gray-800 pb-6 hover:border-red-600 transition-colors">
                        <span class="text-2xl font-black text-gray-800 group-hover:text-red-600 transition-colors">01</span>
                        <div>
                        <h4 class="text-lg font-bold group-hover:text-red-600 transition-colors">Mastering Minimalist UI with Tailwind CSS</h4>
                        <p class="text-sm text-gray-500 mt-1">Jan 12, 2026</p>
                        </div>
                    </a>

                    <a href="#" class="group flex gap-4 items-start border-b border-gray-800 pb-6 hover:border-red-600 transition-colors">
                        <span class="text-2xl font-black text-gray-800 group-hover:text-red-600 transition-colors">02</span>
                        <div>
                        <h4 class="text-lg font-bold group-hover:text-red-600 transition-colors">Why Red is the Power Color of 2026 Branding</h4>
                        <p class="text-sm text-gray-500 mt-1">Jan 10, 2026</p>
                        </div>
                    </a>

                    <a href="#" class="group flex gap-4 items-start">
                        <span class="text-2xl font-black text-gray-800 group-hover:text-red-600 transition-colors">03</span>
                        <div>
                        <h4 class="text-lg font-bold group-hover:text-red-600 transition-colors">The Shift to Sustainable Web Architecture</h4>
                        <p class="text-sm text-gray-500 mt-1">Jan 08, 2026</p>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Categories type="blog"/>
        <HomePageBlog />
        <Categories type="blog"/>
        <Footer />
    </div>
</template>

<script setup lang="ts">
// Logic for fetching latest posts can be added here
</script>

<style scoped>
/* Custom text-shadow for that extra premium feel on dark backgrounds */
h1 {
  text-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>