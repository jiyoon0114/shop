import { createApp } from 'vue'
import './style.css'
import productRouter from './routes/productRouter' 
import productPagevue from './productPagevue.vue'

createApp(productPagevue)
.use(productRouter)
.mount('#product-entire');
