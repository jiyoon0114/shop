<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const id = Number(route.params.id)

  const res = await axios.get('/data/Products.json')

  const data = Array.isArray(res.data)
    ? res.data
    : res.data.products

  product.value = data.find(item => item.id === id)
})
</script>

<template>
  <div class="product-container" v-if="product">
    <img :src="product.img" :alt="product.name">
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<style>
.product-container {
  display: flex;
  padding: 50px;
  gap: 100px;
}
.product-container > img {
  flex: 1;
}

.product-info {
  flex: 1;
}
</style>