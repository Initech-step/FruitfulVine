
<template>
  <div class="bg-base-100">
    <main>
      <HeroSection />
      <OurServices />
      <ProductCategory />
      <HomePageBlog />
      <ContactSection />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
  import '@tailwindplus/elements';
useHead({
  title: 'Restaurant - Landing Page',
  meta: [
    { name: 'description', content: 'Savor every bite, savor every moment at our restaurant' }
  ]
})
</script>