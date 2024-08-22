<template>
    <div class="content-wrapper">
        <div class="container">
            <div class="content-wrapper__inner">
                <Sidebar
                :categories="categories"
                :products="products"
                @categorySelected="selectCategory"
                @statusChanged="changeStatus"
                />
                <Catalog
                :products="products"
                :type="type"
                :selectedCategory="selectedCategory"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProducts } from "@/store/products";
import Sidebar from "@/components/catalogContent/Sidebar.vue";
import Catalog from "@/components/catalogContent/Catalog.vue";
import { ref, onMounted } from "vue";

    const type = ref('female')

    const categories = ref([
        {title: 'All', categ: [
        'womens-dresses', 
        'womens-shoes', 
        'womens-watches', 
        'womens-bags', 
        'womens-jewellery', 
        'skincare', 
        'fragrances'], isActive: true},
        {title: 'Skincare', categ: ['skincare'], isActive: false},
        {title: 'Watch', categ: ['womens-watches'], isActive: false},
        {title: 'Bags', categ: ['womens-bags'], isActive: false},
        {title: 'Jewelry', categ: ['womens-jewellery'], isActive: false},
        {title: 'Aromas', categ: ['fragrances'], isActive: false},
        {title: 'Dresses', categ: ['womens-dresses'], isActive: false}
    ])

    const productsStore = useProducts()
    const products = ref([]) 
    const selectedCategory = ref(categories.value[0].categ);

    onMounted(async () => {
        await productsStore.getProducts()
        products.value = await productsStore.getProductsByCategories([
        'womens-dresses', 
        'womens-shoes', 
        'womens-watches', 
        'womens-bags', 
        'womens-jewellery', 
        'skincare', 
        'fragrances'
        ])
    })


    const selectCategory = (category) => {
        selectedCategory.value = category;
    };

    const changeStatus = (categoryTitle) => {
        for (const category of categories.value) {
            category.title === categoryTitle ? category.isActive = true : category.isActive = false
        }
    }
</script>

<style lang="scss" scoped>

</style>