<script setup>
import { onMounted, ref, computed } from 'vue';
import axios  from 'axios'
import { useRouter } from 'vue-router';

const fullProductData = ref([]);
const productCategory = ['Clothes', 'Accessories', 'Glasses'];
const sortedCategory = ['Most Viewed', 'Best Selling', 'Low to High'];
const productActiveIndex = ref(0);
const sortedActiveIndex = ref(0);

const productRouter = useRouter();

let isDataTryOk = true;

onMounted(async () => {
  if(isDataTryOk) {
    try {
      isDataTryOk = false;
      fullProductData.value = (await axios.get('http://localhost:5173/data/Products.json')).data;
    } catch (error) {
      console.log(error);
    } finally {
      isDataTryOk = true;
    }
  }
})

function selectCategory(index) {
  productActiveIndex.value = index;
}

function selectSorted(index) {
  sortedActiveIndex.value = index;
}

const productData = computed(() => {
  const filtered = fullProductData.value.filter((item) => {
    return item.category === productCategory[productActiveIndex.value];
  });

  const sorted = [...filtered];

  if (sortedActiveIndex.value === 0) {
    sorted.sort((item, item2) => item2.view - item.view)
  }
  else if (sortedActiveIndex.value === 1) {
    sorted.sort((item, item2) => item2.selling - item.selling)
  }
  else {
    sorted.sort((item, item2) => item.price - item2.price)
  }

  return sorted;
});

function showProductDetail(id) {
  productRouter.push(`/pages/product-page.html/${id}`);
}

</script>

<template>
<div class="entire-product-main">
  <div class="product-category-title glass-card playfair-display-sc-bold">{{ productCategory[productActiveIndex] }}</div>
  <ul class="orblist-order glass-card">
    <li 
      class="playfair-display-sc-bold" 
      v-for="(item, index) in sortedCategory"
      :class="{active : sortedActiveIndex === index}"
      @click="() => selectSorted(index)"
    >{{ sortedCategory[index] }}</li>

  </ul>
  <div class="product-list-box glass-card border-rad">
    <ul class="product-category">
      <!-- :class="{클래스명 : 조건식 -> 조건식이 true면 클래스 줄겡}" -->
      <li 
        class="" v-for="(item, index) in productCategory" 
        :key="index"
        @click = "() => selectCategory(index)"
        :class="{active : productActiveIndex === index}"
        >{{ productCategory[index] }}</li>
    </ul>
    <div class="product-box">
      <a class="product-card border-rad"  v-for="item in productData" :key="item.id" @click="() => showProductDetail(item.id)">
        <img :src="item.img" :alt= item.id class="border-rad">
        <div class="product-name">{{ item.name }}</div>
        <div class="price-tag">{{ item.price }}</div>
      </a>
    </div>
  </div>
</div>
</template>

<style>
li {
  cursor: pointer;
}

.entire-product-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
}

.product-category-title {
  font-size: 60px;
  width: 80%;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.248);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
}

.orblist-order {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    padding: 10px;
    width: 400px;
    background: rgba(3, 3, 3, 0.315);
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.orblist-order > li {
  color: #e4e4e4;
  padding: 20px;
  border-radius: 100px;
}

.orblist-order > li.active {
  transition: 0.4s;
  color: #4c4b4b;
  color: #141414;
  background: rgba(255, 255, 255, 0.411);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
}

.product-list-box {
  width: 100%;
  backdrop-filter: blur(20px);
  padding: 30px 50px;
  background: rgba(3, 3, 3, 0.523);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1), 
    inset 0 1px 0 rgba(139, 139, 139, 0.5), 
    inset 0 -1px 0 rgba(255, 255, 255, 0.1), 
    inset 0 0 10px 5px rgba(255, 255, 255, 0.132);
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  gap: 70px;
}

.product-category {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 20px;
}

.product-category > li {
  padding: 3px 15px;
  border-radius: 40px;
  color: #e4e4e4;
}

.product-category > li:hover,
.product-category > .active {
  background: rgba(59, 59, 59, 0.523);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1), 
    inset 0 1px 0 rgba(139, 139, 139, 0.5), 
    inset 0 -1px 0 rgba(255, 255, 255, 0.1), 
    inset 0 0 10px 5px rgba(255, 255, 255, 0.132);
}

.product-box > a {
  cursor: pointer;
}

.product-card:hover {
  box-shadow:
    rgba(255, 255, 255, 0.3) 0px 19px 38px, 
    rgba(255, 252, 252, 0.22) 0px 15px 12px;
  transform: scale(1.07);
  transition: 0.3s;
}

.product-card > div {
    color: #e4e4e4;
}


@media (max-width: 980px) {
  .entire-product-main {
    padding: 20px 10px;
  }

  .product-box {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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