
<template>
  <div class="bg-base-100">
    <main>
      <Header />
      <HeroSection />
      <OurServices />
      <ProductCategory no_of_products="6"/>
      <HomePageBlog no_blog_posts="6"/>
      <ContactSection />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
  import '@tailwindplus/elements';
useHead({
  title: 'Fruitful Vine',
  meta: [
    { name: 'description', content: 'Phone Care Experts' }
  ]
})
</script>