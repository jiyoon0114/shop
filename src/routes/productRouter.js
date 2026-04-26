import { createRouter, createWebHistory } from "vue-router";
import EntireProduct from "../components/EntireProduct.vue";
import ProductDetail from "../components/ProductDetail.vue";

const productRoutes = [
  {
    path: '/pages/product-page.html',
    component: EntireProduct
  },
  {
    path:'/pages/product-page.html/:id',
    component: ProductDetail
  }
];

const productRouter = createRouter({
  history: createWebHistory(),
  routes: productRoutes
});

export default productRouter;