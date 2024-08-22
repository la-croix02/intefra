<template>
    <template v-if="type === 'tops'">
        <div class="product">
        <div class="product__img">
            <router-link :to="`${type}/` + product.id">
                <img class="product__img-pic" :src="product.thumbnail" alt="product picture">
            </router-link>
        </div>
        <h3 class="product__title">
            <router-link :to="`${type}/` + product.id">
                {{ product.title }}
            </router-link>
        </h3>
        <span class="product__stock">Stock: {{ product.stock }}</span>
        <div class="product__price">
            <span class="product__old-price">{{ product.price }}$</span>
            <span class="product__price-discount">{{ getDiscount }}$</span>
        </div>
        <span class="product__discount-percentage">-{{ Math.floor(product.discountPercentage)}}%</span>
    </div>
    </template>
    <template v-else>
        <div class="product" v-if="idx >= prevElements && idx <= nextElements">
        <div class="product__img">
            <router-link :to="`${type}/` + product.id">
                <img class="product__img-pic" :src="product.thumbnail" alt="product picture">
            </router-link>
        </div>
        <h3 class="product__title">
            <router-link :to="`${type}/` + product.id">
                {{ product.title }}
            </router-link>
        </h3>
        <span class="product__stock">Stock: {{ product.stock }}</span>
        <div class="product__price">
            <span class="product__old-price">{{ product.price }}$</span>
            <span class="product__price-discount">{{ getDiscount }}$</span>
        </div>
        <span class="product__discount-percentage">-{{ Math.floor(product.discountPercentage)}}%</span>
    </div>
    </template>
</template>

<script setup>
import { computed, onMounted, watch } from "vue"

    const props = defineProps(['product', 'type', 'idx', 'prevElements', 'nextElements'])


    const getDiscount = computed(() => {
        return Math.round(props.product.price - (props.product.price * (props.product.discountPercentage / 100)))
    })
</script>

<style lang="scss" scoped>

</style>