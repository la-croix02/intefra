<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__inner">
                <router-link class="logo" to="/">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </router-link> 
                <!-- <div class="nav__search">
                    <button class="nav__search-btn">
                        <img src="@/assets/images/search.svg" alt="">
                    </button>
                    <input class="nav__search-field" type="text" placeholder="Поиск по продукции">
                </div> -->
                <ul class="nav__list">
                    <li class="nav__list-item" v-for="item in links" :key="item.title">
                        <router-link class="nav__list-link" :to="item.url">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
                <div class="nav__icons">
                    <router-link class="nav__icons-link" to="">
                        <img src="@/assets/images/delivery.svg" alt="favorites">
                        <span class="nav__icons-title">Delivery</span>
                        <span class="nav__icons-counter">0</span>
                    </router-link>
                    <router-link class="nav__icons-link" to="">
                        <img src="@/assets/images/basket.svg" alt="basket">
                        <span class="nav__icons-title">Basket</span>
                        <span class="nav__icons-counter">0</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
    {title: 'Home', url: '/'},
    {title: 'Male', url: '/male'},
    {title: 'Female', url: '/female'}
])

</script>

<style lang="scss" scoped>

</style>