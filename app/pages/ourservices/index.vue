
<template>
  <div class="bg-base-100">
    <main>
      <Header />
      <OurServicesDetail />
      <ContactSection />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
  import '@tailwindplus/elements';
useHead({
  title: 'Fruitful Vine Services',
  meta: [
    { name: 'description', content: 'Phone Care Experts' }
  ]
})
</script>