<template>
    <Header />
    <br/>
    <br/>
    <br/>
    <br/>
    <Categories type="product"/>
    <ProductCategory no_of_products="50"/>
    <Categories type="product"/>
    <Footer />
</template>

<script setup lang="ts">
import Categories from '~/components/Categories.vue';

// Logic for fetching latest posts can be added here
</script>

<style scoped>
/* Custom text-shadow for that extra premium feel on dark backgrounds */
h1 {
  text-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>