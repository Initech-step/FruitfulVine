<template>
    <nav class="border-y border-gray-100 bg-white sticky top-0 z-10">
        <div class="mx-auto max-w-screen-xl px-6 py-2 flex items-center justify-between gap-8">
            <div class="flex-1 overflow-x-auto no-scrollbar">
                <ul class="flex gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">
                    <li 
                        v-for="catName in categoryList" 
                        :key="catName"
                        @click="activeCategory = catName"
                        :class="[
                            'cursor-pointer py-4 transition-all duration-300 border-b-2 hover:text-black',
                            activeCategory === catName 
                                ? 'text-red-600 border-red-600' 
                                : 'border-transparent'
                        ]"
                    >
                        {{ catName }}
                    </li>
                    
                    <li v-if="loading" class="py-4 animate-pulse text-gray-200 uppercase tracking-widest text-[10px]">
                        Syncing {{ type }} Taxonomy...
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
import { ref, onMounted, computed, watch } from 'vue';

// Define the component props
const props = defineProps({
    type: {
        type: String,
        default: 'blog', // Default to blog if no prop is provided
        required: false
    }
});

const loading = ref(true);
const categories = ref<any[]>([]);
const activeCategory = ref('All Posts');

const categoryList = computed(() => {
    const names = categories.value.map(c => c.name);
    return ['All Posts', ...names];
});

const fetchCategories = async () => {
    loading.value = true;
    try {
        // Appending the query parameter dynamically based on the prop
        const url = `http://127.0.0.1:8000/api/category/?type=${props.type}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        categories.value = data;
    } catch (error) {
        console.error("Failed to load navigation categories:", error);
    } finally {
        loading.value = false;
    }
};

// Re-fetch if the type prop changes while the component is mounted
watch(() => props.type, () => {
    fetchCategories();
});

onMounted(() => {
    fetchCategories();
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>