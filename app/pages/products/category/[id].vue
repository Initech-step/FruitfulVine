<template>
    <Header />
    <br/>
    <br/>
    <br/>
    <br/>
    <Categories type="product"/>
    <ProductInCategory :no_of_products="50" :category_id="category_id"/>
    <Categories type="product"/>
    <Footer />
</template>

<script setup lang="ts">
import Categories from '~/components/Categories.vue';
import ProductInCategory from '~/components/ProductInCategory.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const category_id = route.params.id as string

// Logic for fetching latest posts can be added here
</script>

<style scoped>
/* Custom text-shadow for that extra premium feel on dark backgrounds */
h1 {
  text-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>