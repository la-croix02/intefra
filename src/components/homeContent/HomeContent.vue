<template>
    <div class="intro">
        <div class="intro__left">
            <img class="intro__img" src="@/assets/images/home/intro-male.jpg" alt="male">
            <router-link class="intro__link male" to="/male">Male</router-link>
        </div>
        <div class="intro__right">
            <img class="intro__img" src="@/assets/images/home/intro-female.jpg" alt="female">
            <router-link class="intro__link female" to="/female">Female</router-link>
        </div>
    </div>
    <section class="brands">
        <div class="container">
            <h2 class="brands__title">TOP-BRANDS</h2>
            <div class="brands__inner">
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-1.png" alt="brand">
                </div>
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-2.png" alt="brand">
                </div>
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-3.png" alt="brand">
                </div>
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-4.png" alt="brand">
                </div>
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-5.png" alt="brand">
                </div>
                <div class="brands__item">
                    <img class="brands__item-img" src="@/assets/images/home/brand-item-6.png" alt="brand">
                </div>
            </div>
        </div>
    </section>
    <section class="top">
        <div class="container">
            <div class="top__inner">
                <h2 class="top__title">TOP SALES</h2>
                <Swiper
                :loop="false"
                :navigation = "true"
                :modules = "modules"
                :space-between = "24"
                :slides-per-view="4"
                class="top__swiper"
                >
                    <Swiper-slide
                    class="top__swiper-item"
                    v-for="product in topProducts"
                    :key="product.id"
                    >
                        <ProductCard
                        :product="product"
                        :type="type"
                        />
                    </Swiper-slide>
                </Swiper>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useProducts } from "@/store/products";
import { ref, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const type = ref('tops')
const productsStore = useProducts()
const products = ref([]) 

onMounted(async () => {
  await productsStore.getProducts()
  products.value = productsStore.allProducts
  filterTopProducts() 
})

const topProducts = ref([])

const filterTopProducts = () => {
  topProducts.value = products.value.filter(product => product.category === 'tops')
}

const modules = ref([Navigation])

// const swiperOptions = ref({
//     breakpoints: {
//         320: {
//             slidesPerView: 1
//         },
//         576: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 1
//         },
//         1200: {
//             slidesPerView: 1
//         }
//     }
// })
</script>

<style lang="scss" scoped>

</style>