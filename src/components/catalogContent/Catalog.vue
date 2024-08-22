<template>
    <div class="catalog">
        <div class="catalog__top">
            <div class="catalog__sort-menu">
                <div class="catalog__sort-menu-label">Sort by</div>
                <div class="catalog__sort-menu-dropdown">
                    <button class="catalog__sort-menu-btn">
                        {{ sortBy }}
                        <img src="@/assets/images/down-arrow.svg" alt="arrow">
                    </button>
                    <ul class="catalog__sort-menu-list">
                        <li 
                        v-for="item in items" :key="item.title"
                        @click="sortProductsByType(item.type)"
                        >
                        {{ item.title }}</li>
                    </ul>
                </div>
            </div>
            <div class="catalog__elem-per-page">
                <span>Show</span>
                <div class="catalog__elem-per-page-field">
                    <input type="number" v-model="productsPerPage" disabled>
                    <div class="catalog__elem-per-page-btns">
                        <button @click="incrementValue" :disabled="currentPage > 1 || productsPerPage === products.length">&#9650;</button>
                        <button @click="decrementValue" :disabled="currentPage > 1 || productsPerPage === 1">&#9660;</button>
                    </div>
                </div>
                <span>products per page</span>
            </div>
            <div class="catalog__pagination">
                <button @click="changePage(currentPage, 'prev')" :disabled="currentPage == 1">prev</button>
                <span>{{ currentPage }} page of {{ total }}</span>
                <button @click="changePage(currentPage, 'next')" :disabled="currentPage == total">next</button>
            </div>
        </div>
        <div class="catalog__products">
            <template v-if="selectedProducts.length > 0">
                <ProductCard
                v-for="(product, idx) in selectedProducts"
                :key="product.id"
                :idx="idx"
                :product="product"
                :type="type"
                :prevElements="prevElements"
                :nextElements="nextElements"
                />
            </template>
            <template v-else>
                <ProductCard
                v-for="(product, idx) in products"
                :key="product.id"
                :idx="idx"
                :product="product"
                :type="type"
                :prevElements="prevElements"
                :nextElements="nextElements"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineProps, watch, ref, onMounted, computed } from "vue";
import { useProducts } from "@/store/products";

    const props = defineProps(['products', 'type', 'selectedCategory'])
    const productsStore = useProducts()
    let selectedProducts = ref([])

    // sorting
    let sortBy = ref('Select')

    // pagination buttons
    const currentPage = ref(1)
    let productsPerPage = ref(6);
    const total = computed(() => {
        if (selectedProducts.value.length > 0) {
            return Math.ceil(selectedProducts.value.length / productsPerPage.value)
        } else {
            return Math.ceil(props.products.length / productsPerPage.value)
        }
    })
    let prevElements = ref(0)
    let nextElements = ref(productsPerPage.value - 1)
    
    watch(() => productsPerPage.value, () => {
        prevElements = ref(0)
        nextElements = ref(productsPerPage.value - 1)
    })
    

    const items = ref([
        {title: 'Price', type: 'price'},
        {title: 'Title', type: 'title'},
        {title: 'Stock', type: 'stock'}
    ])

    watch(() => props.selectedCategory, async (newCateg, oldCateg) => {
        sortBy.value = 'Select'
        await productsStore.getProducts()
        selectedProducts.value = await productsStore.getProductsByCategories(newCateg)
        productsPerPage.value = 6
        console.log(productsPerPage.value)
        resetPage()
    });

    const sortProductsByType = async (type) => {
        sortBy.value = type
        await productsStore.getProducts()
        selectedProducts.value = await productsStore.getProductsByType(props.selectedCategory, type)
    }

    const changePage = (current, step) => {
        if (step === 'prev') {
            currentPage.value--
            prevElements.value -= productsPerPage.value
            nextElements.value -= productsPerPage.value
        } else {
            currentPage.value++
            prevElements.value += productsPerPage.value
            nextElements.value += productsPerPage.value
        }
    }


    const incrementValue = () => {
        productsPerPage.value += 1;
    }

    const decrementValue = () => {
        if (productsPerPage.value > 1) {
            productsPerPage.value -= 1;
        }
    }

    const resetPage = () => {
        prevElements.value = 0
        nextElements.value = 5
        currentPage.value = 1
    }

</script>

<style lang="scss" scoped>

</style>