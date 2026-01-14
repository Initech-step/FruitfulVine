<template>
    <DashboardHeader />
    <div class="min-h-screen bg-white pb-20">
        <div v-if="loading" class="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">Retrieving Product Data...</p>
        </div>

        <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div class="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <button @click="goBack" class="p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
                        <span class="icon-[tabler--arrow-left] size-6"></span>
                    </button>
                    <span class="text-xs font-black uppercase tracking-widest text-gray-400">Product Management</span>
                </div>
                
                <div class="flex items-center gap-3">
                    <button 
                        @click="toggleEdit"
                        :class="[isEditing ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white', 'px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all']"
                    >
                        {{ isEditing ? 'Discard Changes' : 'Edit Product' }}
                    </button>
                    <button v-if="isEditing" @click="saveProduct" :disabled="saving" class="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-200 disabled:opacity-50">
                        {{ saving ? 'Updating...' : 'Save Changes' }}
                    </button>
                </div>
            </div>
        </nav>

        <main class="mx-auto max-w-7xl px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                <div class="lg:col-span-5 space-y-8">
                    <div class="aspect-square w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 relative group">
                        <img :src="imagePreview || activeImage" class="size-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Product View" />
                        
                        <div v-if="isEditing" @click="$refs.fileInput.click()" class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                            <span class="icon-[tabler--camera-rotate] size-8 text-white mb-2"></span>
                            <span class="text-[10px] font-black text-white uppercase tracking-widest">Change Image</span>
                            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleImageChange" />
                        </div>

                        <div class="absolute bottom-6 left-6 flex gap-2">
                            <span class="bg-black/80 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                                {{ product.category_name }}
                            </span>
                        </div>
                    </div>

                    <div v-if="!isEditing" class="flex gap-4 overflow-x-auto pb-2">
                        <img 
                            :src="product.secure_url || product.url" 
                            @click="activeImage = product.secure_url || product.url"
                            :class="[activeImage === (product.secure_url || product.url) ? 'border-red-600 scale-95' : 'border-transparent', 'size-20 rounded-2xl object-cover border-2 cursor-pointer transition-all hover:scale-105']"
                        />
                    </div>
                    <div v-else class="bg-gray-100/50 p-6 rounded-3xl">
                        <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">Image Status</p>
                        <p class="text-xs font-bold text-black mt-2">{{ newImage ? 'New file selected' : 'Using current cloud image' }}</p>
                    </div>
                </div>

                <div class="lg:col-span-7">
                    <div class="max-w-2xl">
                        <div class="flex items-center gap-2 mb-6">
                            <span class="text-red-600 font-bold text-xs uppercase tracking-tighter">{{ product.category_name }}</span>
                            <span class="text-gray-300">/</span>
                            <span class="text-gray-400 font-bold text-xs uppercase tracking-tighter">ID: {{ product.category_id }}</span>
                        </div>

                        <div v-if="!isEditing" class="mb-8">
                            <h1 class="text-5xl font-black text-black tracking-tighter uppercase mb-4 leading-none">
                                {{ product.product_name }}
                            </h1>
                            <p class="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-red-600 pl-6">
                                {{ product.short_description }}
                            </p>
                        </div>
                        <div v-else class="space-y-6 mb-12">
                            <div class="group">
                                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Product Title</label>
                                <input v-model="product.product_name" class="w-full text-4xl font-black uppercase tracking-tighter border-b-4 border-gray-100 focus:border-red-600 transition-colors outline-none pb-2" />
                            </div>

                            <div class="group">
                                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Short Description</label>
                                <textarea v-model="product.short_description" rows="2" class="w-full text-lg text-gray-600 bg-gray-50 rounded-xl p-4 focus:ring-1 focus:ring-red-600 outline-none transition-all"></textarea>
                            </div>
                        </div>

                        <div class="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600 prose-strong:text-black">
                            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Product Body Content</label>
                            <div v-if="!isEditing" v-html="product.body" class="leading-relaxed"></div>
                            <textarea v-else v-model="product.body" rows="12" class="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-inner focus:ring-2 focus:ring-red-600 outline-none text-gray-700 font-serif"></textarea>
                        </div>

                        <div class="mt-12 pt-10 border-t border-gray-100 flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <input v-if="isEditing" type="checkbox" v-model="product.draft" id="draftEdit" class="size-5 accent-red-600" />
                                <label for="draftEdit" :class="[product.draft ? 'text-red-600' : 'text-gray-400', 'text-xs font-black uppercase tracking-[0.2em] cursor-pointer']">
                                    {{ product.draft ? 'Saved as Draft' : 'Publicly Listed' }}
                                </label>
                            </div>
                            <div class="text-[10px] font-black uppercase tracking-widest text-gray-300">
                                Last Updated: {{ product.date?.split(' ')[0] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()
const isEditing = ref(false)
const loading = ref(true)
const saving = ref(false)
const activeImage = ref('')
const imagePreview = ref<string | null>(null)
const newImage = ref<File | null>(null)

const product = reactive({
    _id: '',
    url: '',
    secure_url: '',
    product_name: '',
    category_id: '',
    category_name: '',
    short_description: '',
    body: '',
    draft: false,
    date: ''
})

// Fetch Product Details
const fetchProductDetails = async () => {
    loading.value = true
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/product/${route.params.id}/`)
        const data = await res.json()
        Object.assign(product, data)
        activeImage.value = product.secure_url || product.url
    } catch (err) {
        console.error("Fetch error:", err)
    } finally {
        loading.value = false
    }
}

const toggleEdit = () => {
    if (isEditing.value) {
        fetchProductDetails() // Reset data if canceling
        imagePreview.value = null
        newImage.value = null
    }
    isEditing.value = !isEditing.value
}

const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
        newImage.value = file
        imagePreview.value = URL.createObjectURL(file)
    }
}

const saveProduct = async () => {
    saving.value = true
    const formData = new FormData()
    
    // Append your form fields
    formData.append('product_name', product.product_name)
    formData.append('short_description', product.short_description)
    formData.append('body', product.body)
    formData.append('draft', String(product.draft))
    
    if (newImage.value) {
        formData.append('image', newImage.value)
    }

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/edit_product/${product._id}`, {
            method: 'POST',
            headers: {
                'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg"
            },
            body: formData
        })

        if (res.ok) {
            const updated = await res.json()
            Object.assign(product, updated)
            isEditing.value = false
            newImage.value = null
            imagePreview.value = null
            activeImage.value = product.secure_url || product.url
            alert('Inventory Updated Successfully')
        }
    } catch (err) {
        alert('Update failed. Check connection or token.')
    } finally {
        saving.value = false
    }
}

const goBack = () => window.history.back()

onMounted(fetchProductDetails)
</script>

<style scoped>
:deep(.prose p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
}
input:focus, textarea:focus {
    outline: none;
}
</style>