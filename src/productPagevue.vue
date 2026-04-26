<script setup>
import { RouterView } from 'vue-router';
import EntireProduct from './components/EntireProduct.vue';
import Nav from './components/Nav.vue';

</script>

<template>
  <div class="container">
    <header>
      <Nav />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #252525;
}
.container {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  background-image: url('/img/background/entire-product-background.jpg');
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

@media (max-width: 980px) {
  .container {
    padding: 20px 10px;
  }
  .product-list-box {
    padding: 30px;
  }
}

@media (max-width: 400px) {
  .product-category-title {
    width: 90%;
  }
  .orblist-order {
    gap: 5px;
  }
}
</style>
