import { createWebHistory, createRouter } from "vue-router";


import Home from "@/pages/Home.vue";
export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/electronics', name: 'electronics', component: () => import('@/pages/categories/Electronics.vue')},
    {path: '/female', name: 'female', component: () => import('@/pages/categories/Female.vue')},
    {path: '/forhome', name: 'forhome', component: () => import('@/pages/categories/ForHome.vue')},
    {path: '/male', name: 'male', component: () => import('@/pages/categories/Male.vue')},
    {path: '/other', name: 'other', component: () => import('@/pages/categories/Other.vue')},
    {path: '/basket', name: 'basket', component: () => import('@/pages/categories/')},
    {path: '/favorites', name: 'favorites', component: () => import('@/pages/Favorites.vue')},
    {path: '/male/:id', name: 'maleProductId', component: () => import('@/pages/MaleProductId.vue')},
    {path: '/female/:id', name: 'femaleProductId', component: () => import('@/pages/FemaleProductId.vue')},
    {path: '/tops/:id', name: 'topProductId', component: () => import('@/pages/TopProductId.vue')}
  ]
})