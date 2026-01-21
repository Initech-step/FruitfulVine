<template>
  <Transition name="fade">
    <div v-if="isChecking" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div class="relative flex items-center justify-center">
        <div class="w-20 h-20 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
        
        <div class="absolute w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div class="w-4 h-4 bg-red-600 rotate-45"></div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <h2 class="text-black font-black uppercase tracking-[0.3em] text-xs mb-2 animate-pulse">
          Authenticating
        </h2>
        <p class="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          Securing your session...
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isChecking = useAuthChecking()
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>