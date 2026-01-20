<template>
    <DashboardHeader />
    <div class="min-h-screen bg-white pb-20">
        <Transition name="slide-up">
            <div v-if="notification.show" 
                :class="[notification.isError ? 'bg-red-600' : 'bg-black', 'fixed bottom-10 left-1/2 z-[100] flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl min-w-[320px] border border-white/10']"
                style="transform: translateX(-50%)"
            >
                <span :class="[notification.isError ? 'text-white' : 'text-red-600', 'icon-[tabler--circle-check] size-5']" v-if="!notification.isError"></span>
                <span class="icon-[tabler--alert-circle] text-white size-5" v-else></span>
                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white">{{ notification.message }}</p>
            </div>
        </Transition>

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
                    <button @click="toggleEdit" :class="[isEditing ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white', 'px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all']">
                        {{ isEditing ? 'Discard Changes' : 'Edit Product' }}
                    </button>
                    <button v-if="isEditing" @click="saveProduct" :disabled="saving" class="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-200 disabled:opacity-50">
                        {{ saving ? 'Syncing Catalog...' : 'Save Changes' }}
                    </button>
                </div>
            </div>
        </nav>

        <main class="mx-auto max-w-7xl px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div class="lg:col-span-5 space-y-8">
                    <div class="aspect-square w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 relative group">
                        <img :src="activeImage" class="size-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Product View" />
                        <div class="absolute bottom-6 left-6 flex gap-2">
                            <span class="bg-black/80 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                                {{ product.category_name }}
                            </span>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Product Gallery</label>
                        <div class="grid grid-cols-4 gap-4">
                            <div v-for="(url, idx) in product.image_urls" :key="'cloud-'+idx" class="relative aspect-square group">
                                <img :src="url" @click="activeImage = url" :class="[activeImage === url ? 'border-red-600' : 'border-transparent', 'size-full rounded-2xl object-cover border-2 cursor-pointer transition-all']" />
                                <button v-if="isEditing" @click="removeExistingImage(idx)" class="absolute -top-2 -right-2 size-6 bg-black text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform shadow-lg">
                                    <span class="icon-[tabler--x] size-3"></span>
                                </button>
                            </div>

                            <div v-for="(src, idx) in newImagePreviews" :key="'new-'+idx" class="relative aspect-square group">
                                <img :src="src" @click="activeImage = src" :class="[activeImage === src ? 'border-red-600' : 'border-transparent', 'size-full rounded-2xl object-cover border-2 cursor-pointer transition-all opacity-70']" />
                                <button v-if="isEditing" @click="removeNewImage(idx)" class="absolute -top-2 -right-2 size-6 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                                    <span class="icon-[tabler--x] size-3"></span>
                                </button>
                                <div class="absolute bottom-1 right-1 bg-red-600 size-2 rounded-full"></div>
                            </div>

                            <button v-if="isEditing" @click="$refs.fileInput.click()" class="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-red-600 hover:bg-red-50 transition-all group">
                                <span class="icon-[tabler--plus] size-6 text-gray-300 group-hover:text-red-600"></span>
                                <span class="text-[8px] font-black uppercase text-gray-400">Add</span>
                                <input type="file" ref="fileInput" class="hidden" accept="image/*" multiple @change="handleImageChange" />
                            </button>
                        </div>
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
                            <h1 class="text-5xl font-black text-black tracking-tighter uppercase mb-4 leading-none">{{ product.product_name }}</h1>
                            <p class="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-red-600 pl-6">{{ product.short_description }}</p>
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

                        <div class="prose prose-lg max-w-none">
                            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Product Body Content</label>
                            <div v-if="!isEditing" v-html="product.body" class="leading-relaxed text-gray-600"></div>
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
                                Last Updated: {{ product.date?.split(' ')[0] || 'N/A' }}
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

const notification = reactive({ show: false, message: '', isError: false })
const newImageFiles = ref<File[]>([])
const newImagePreviews = ref<string[]>([])

const product = reactive({
    _id: '',
    image_urls: [] as string[],
    product_name: '',
    category_id: '',
    category_name: '',
    short_description: '',
    body: '',
    date: '',
    draft: false
})

const triggerNotification = (msg: string, isErr: boolean) => {
    notification.message = msg
    notification.isError = isErr
    notification.show = true
    setTimeout(() => notification.show = false, 4000)
}

const fetchProductDetails = async () => {
    loading.value = true
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/product/${route.params.id}/`)
        const data = await res.json()
        Object.assign(product, data)
        if (product.image_urls.length > 0) activeImage.value = product.image_urls[0]
    } catch (err) {
        triggerNotification('Failed to fetch product data', true)
    } finally {
        loading.value = false
    }
}

const toggleEdit = () => {
    if (isEditing.value) {
        // Clear blob URLs from memory when discarding
        newImagePreviews.value.forEach(url => URL.revokeObjectURL(url))
        fetchProductDetails() 
        newImageFiles.value = []
        newImagePreviews.value = []
    }
    isEditing.value = !isEditing.value
}

const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files) as File[]
    files.forEach(file => {
        newImageFiles.value.push(file)
        const previewUrl = URL.createObjectURL(file)
        newImagePreviews.value.push(previewUrl)
        activeImage.value = previewUrl
    })
    triggerNotification(`Added ${files.length} images to queue`, false)
}

const removeExistingImage = (index: number) => {
    const removedUrl = product.image_urls[index]
    product.image_urls.splice(index, 1)
    
    // Sync active image if we removed the current one
    if (activeImage.value === removedUrl) {
        activeImage.value = product.image_urls[0] || newImagePreviews.value[0] || ''
    }
}

const removeNewImage = (index: number) => {
    const removedUrl = newImagePreviews.value[index]
    URL.revokeObjectURL(removedUrl) // Fix Memory Leak
    
    newImageFiles.value.splice(index, 1)
    newImagePreviews.value.splice(index, 1)
    
    // Sync active image
    if (activeImage.value === removedUrl) {
        activeImage.value = product.image_urls[0] || newImagePreviews.value[0] || ''
    }
}

const saveProduct = async () => {
    saving.value = true
    const formData = new FormData()
    
    // Include ALL fields to ensure "Row Replacement" doesn't wipe metadata
    formData.append('product_name', product.product_name)
    formData.append('short_description', product.short_description)
    formData.append('body', product.body)
    formData.append('draft', String(product.draft))
    formData.append('category_id', product.category_id)
    formData.append('category_name', product.category_name)
    
    // The "Keep" List
    formData.append('existing_images', JSON.stringify(product.image_urls))
    // The "New" List
    newImageFiles.value.forEach(file => formData.append('images', file))

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/edit_product/${product._id}`, {
            method: 'POST',
            headers: { 'token': "t7t7PWOxi='D0ov9iG&L+.I{K!x~8g0zr^M3v_P;g(vt,mX_Bg" },
            body: formData
        })

        if (res.ok) {
            const updated = await res.json()
            // Cleanup blob URLs before overwriting
            newImagePreviews.value.forEach(url => URL.revokeObjectURL(url))
            
            Object.assign(product, updated)
            newImageFiles.value = []
            newImagePreviews.value = []
            isEditing.value = false
            triggerNotification('Product synchronized successfully', false)
        } else {
            throw new Error()
        }
    } catch (err) {
        triggerNotification('Update failed. Check server logs.', true)
    } finally {
        saving.value = false
    }
}

const goBack = () => window.history.back()
onMounted(fetchProductDetails)
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
/* Use !important to ensure center alignment persists during animation */
.slide-up-enter-from { opacity: 0; transform: translate(-50%, 20px) !important; }
.slide-up-leave-to { opacity: 0; transform: translate(-50%, 10px) !important; }
</style>