<template>
    <aside class="sidebar">
        <h3 class="sidebar__title">Категории</h3>
        <ul class="sidebar__categories-list">
            <li class="sidebar__categories-item" 
            v-for="category in categories" 
            :key="category.title" 
            @click="selectCategory(category.categ), changeStatus(category.title)">
                {{ category.title }}
                <span :class="{'sidebar__categories-count': true, 'active': category.isActive}" >{{ getProductCount(category.categ, products) }}</span>
            </li>
        </ul>
    </aside>
</template>

<script setup>
    import { ref, computed, defineProps, onMounted } from "vue";
    const props = defineProps(['categories', 'products'])
    const emits = defineEmits(['categorySelected'])


    const getProductCount = (categoryNames, products) => {
    let counter = 0;

    for (const product of products) {
        if (categoryNames.some(categoryName => product.category.includes(categoryName))) {
        counter++;
        }
    }

    return counter;
    };

    const selectCategory = (selectedCategory) => {
        emits('categorySelected', selectedCategory);
    };

    const changeStatus = (changedStatus) => {
        emits('statusChanged', changedStatus);
    };
</script>

<style lang="scss" scoped>

</style>