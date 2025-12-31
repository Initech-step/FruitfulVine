<template>
    <section class="bg-gray-50 min-h-[calc(100vh-60px)] flex items-center justify-center p-6">
        <div class="w-full max-w-md">
            <div class="flex flex-col items-center mb-8">
                <div class="bg-red-600 p-2 rounded-lg mb-4">
                    <img class="w-8 h-8 brightness-0 invert" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                </div>
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
                <p class="text-gray-500 text-sm mt-2">Enter your details to access your account</p>
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
                        class="w-full text-white bg-red-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-red-100 font-bold uppercase tracking-widest text-xs py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    email: '',
    password: '',
});

const handleLogin = () => {
    console.log('Logging in with:', form);
    // Add your login logic here
};
</script>