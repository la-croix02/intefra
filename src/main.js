import { createApp } from 'vue'
import { createPinia } from "pinia";
import { routers } from "@/router";
import './assets/style/main.scss'
import App from './App.vue'

import ProductCard from "@/components/UI/ProductCard.vue";
import Loader from "@/components/UI/Loader.vue";

const app = createApp(App)
const pinia = createPinia()

app.component('ProductCard', ProductCard);
app.component('Loader', Loader);
app.use(pinia)
app.use(routers)
app.mount('#app')
