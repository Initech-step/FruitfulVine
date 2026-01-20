<template>
    <section class="bg-gray-50 min-h-[calc(100vh-60px)] flex items-center justify-center p-6">
        <div class="w-full max-w-md">
            <div class="flex flex-col items-center mb-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
                <p class="text-gray-500 text-sm mt-2">Enter your details to access your account</p>
            </div>

            <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 animate-shake">
                <svg class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs font-bold text-red-700 uppercase tracking-tight">Invalid details. Please re-enter.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form class="space-y-5" @submit.prevent="handleLogin">
                    <div>
                        <label for="email" class="block mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                        <input 
                            v-model="form.email"
                            type="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-1 focus:ring-red-600 focus:border-red-600 block w-full p-3 transition-all outline-none" 
                            placeholder="name@company.com" 
                            required
                        >
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label for="password" class="block text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
                            <a href="#" class="text-xs font-bold text-red-600 hover:text-red-700 transition-colors">Forgot?</a>
                        </div>
                        <input 
                            v-model="form.password"
                            type="password" 
                            id="password" 
                            placeholder="••••••••" 
                            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-1 focus:ring-red-600 focus:border-red-600 block w-full p-3 transition-all outline-none" 
                            required
                        >
                    </div>

                    <button 
                        type="submit" 
                        :disabled="isLoading"
                        class="w-full text-white bg-red-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-red-100 font-bold uppercase tracking-widest text-xs py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 flex justify-center items-center"
                    >
                        <span v-if="!isLoading">Sign In</span>
                        <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);
const error = ref(false);

const form = reactive({
    email: '',
    password: '',
});

const handleLogin = async () => {
    isLoading.value = true;
    error.value = false;

    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if (response.ok && data.status) {
            // 2. Save token into local storage
            localStorage.setItem('FVTOKEN', data.token);
            
            // 4. Redirect to /admin on success
            router.push('/admin');
        } else {
            error.value = true;
        }
    } catch (e) {
        error.value = true;
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake { animation: shake 0.3s ease-in-out; }
</style>