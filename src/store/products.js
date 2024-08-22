import { defineStore } from 'pinia';
import axios from 'axios';

export const useProducts = defineStore({
    id: 'products',
    state: () => ({
        url: 'https://dummyjson.com/products',
        allProducts: null,
        tempProducts: null,
    }),
    actions: {
        async getProducts() {
            try {
                const resp = await axios.get(`${this.url}?limit=100`)
                this.allProducts = resp.data.products
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        }
    },
    getters: {
        getProductsByCategories: (state) => (categories) => {
            state.tempProducts = null
            if (!state.allProducts || !Array.isArray(categories)) {
                return []
            }

            return state.allProducts.filter(product => categories.includes(product.category));
        },
        getProductById: (state) => (id) => {
            if (!state.allProducts) {
                return {}
            }

            for (let product of state.allProducts) {
                if (product.id === Number(id)) {
                    return product
                }
            }
        },
        getProductsByType: (state) => (categories, sortType) => {
            state.tempProducts = null
            if (!state.allProducts || !Array.isArray(categories)) {
                return []
            }

            const sortFunction = (a, b) => {
                if (sortType === 'price') {
                    return a.price - b.price;
                } else if (sortType === 'stock') {
                    return a.stock - b.stock;
                } else if (sortType === 'title') {
                    return a.title.localeCompare(b.title);
                }
                return 0;
            };

            const sortedProducts = state.allProducts
                .filter(product => categories.includes(product.category))
                .sort(sortFunction);

            return sortedProducts;
        }
    }
})