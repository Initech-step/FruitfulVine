<template>
    <nav class="border-y border-gray-100 bg-white sticky top-0 z-10">
        <div class="mx-auto max-w-screen-xl px-6 py-2 flex items-center justify-between gap-8">
            <div class="flex-1 overflow-x-auto no-scrollbar">
                <ul class="flex gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">
                    <li 
                        v-for="category in categories" 
                        :key="category"
                        @click="activeCategory = category"
                        :class="[
                            'cursor-pointer py-4 transition-all duration-300 border-b-2 hover:text-black',
                            activeCategory === category 
                                ? 'text-red-600 border-red-600' 
                                : 'border-transparent'
                        ]"
                    >
                        {{ category }}
                    </li>
                </ul>
            </div>

            <div class="relative hidden md:block flex-shrink-0">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    class="bg-gray-100 border-none rounded-full py-2.5 px-10 text-xs focus:ring-1 focus:ring-red-600 focus:bg-white transition-all w-64 outline-none" 
                />
                <span class="icon-[tabler--search] absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-4"></span>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categories = [
    'All Posts', 
    'Design', 
    'Development', 
    'Business', 
    'Marketing', 
    'Strategy', 
    'Tutorials',
    'All Posts', 
    'Design', 
    'Development', 
    'Business', 
    'Marketing', 
    'Strategy', 
    'Tutorials'
];
const activeCategory = ref('All Posts');
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>