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

    const categories = ref([
        {title: 'All', categ: ['mens-shoes', 'mens-shirts', 'mens-watches'], isActive: true},
        {title: 'Shirts', categ: ['mens-shirts'], isActive: false},
        {title: 'Shoes', categ: ['mens-shoes'], isActive: false},
        {title: 'Wrist Watch', categ: ['mens-watches'], isActive: false}
    ])

    const type = ref('male')
    const productsStore = useProducts()
    const allProducts = ref([]) 
    const products = ref([])
    const selectedCategory = ref(categories.value[0].categ);

    onMounted(async () => {
        await productsStore.getProducts()
        allProducts.value = await productsStore.getProductsByCategories(['mens-shoes', 'mens-shirts', 'mens-watches'])
        products.value = allProducts.value
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