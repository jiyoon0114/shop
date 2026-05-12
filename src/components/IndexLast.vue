<script setup>
import { onMounted, ref } from 'vue';

const productCategory = ['Clothes', 'Accessories', 'Glasses'];
const categoryActive = ref("");
const productList = ref([]);
const productActiveIdx = ref(0);

let isDataTryOk = true;

onMounted(async () => {
  if(isDataTryOk) {
    try {
      isDataTryOk = false;
      productList.value = (await axios.get("http://localhost:5173/data/Products.json")).data;
    } 
    catch (error) {
      console.log(error);
    }
    finally {
      isDataTryOk = true;
    }
  }
})

function changeCategory(index) {
  productActiveIdx.value = index;
}

function chooseList() {
  const cpList = [...product].filter((item) => item.category === category);
  const top8 = cpList.sort((a, b) => b.selling - a.selling).slice(0, 8);
  updateList(top8);
}

</script>

<template>
<header>
  <span class="playfair-display-sc-bold title">Best Sell Products</span>
  <ul>
    <li class="roboto-mono"
    v-for="(item, index) in productCategory"
    :key = "index"
    :class="{active : productActiveIdx === index}"
    @click="() => {changeCategory(index); }"
    >{{productCategory[index]}}</li>
  </ul>
</header>
<div class="product-box">

</div>
<a class="go-product-page roboto-mono" href="./pages/product-page.html">View More</a>
</template>

<style>
header > ul > li:hover {
  background-color: #94939398;
  padding: 10 2px;
}

.active {
  background-color: #94939398;
  padding: 10 2px;
}
</style>