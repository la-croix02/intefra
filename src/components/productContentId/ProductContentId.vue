<template>
    <div class="product-block" v-if="product.title">
        <div class="container">
            <div class="product-block__inner">
                <Swiper
                :loop="true"
                :navigation = "true"
                :modules = "modules"
                :slides-per-view="1"
                class="product-block__swiper"
                >
                    <Swiper-slide
                    class="product-block__swiper-item"
                    v-for="image in product.images"
                    :key="image"
                    >
                        <div class="product-block__swiper-img">
                            <img :src="image" alt="slider-img">
                        </div>
                        <span class="product-block__swiper-discount">-{{ Math.floor(product.discountPercentage) }}%</span>
                    </Swiper-slide>
                </Swiper>
                <div class="product-block__info">
                    <h2 class="product-block__info-title">{{ product.title }}</h2>
                    <div class="product-block__info-price">
                        <div class="product-block__old-price">{{ product.price }}$</div>
                        <div class="product-block__discount-price">{{ getDiscount }}$</div>
                    </div>
                    <div class="product-block__basket">
                        <button class="product-block__basket-btn">Add to Basket</button>
                    </div>
                    <p class="product-block__info-desc">{{ product.description }}</p>
                    <ul class="product-block__additional">
                        <li class="product-block__additional-item"><span>Stock:</span> {{ product.stock }}</li>
                        <li class="product-block__additional-item"><span>Rating:</span> {{ product.rating }}</li>
                        <li class="product-block__additional-item"><span>Brand:</span> {{ product.brand }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Loader v-else/>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useProducts } from "@/store/products";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

    const modules = ref([Navigation])
    const route = useRoute()
    const productsStore = useProducts()
    const product = ref([]) 

    onMounted(async () => {
        await productsStore.getProducts()
        product.value = await productsStore.getProductById(route.params.id)
    })

    const getDiscount = computed(() => {
        return Math.round(product.value.price - (product.value.price * (product.value.discountPercentage / 100)))
    })
</script>

<style lang="scss" scoped>

</style>