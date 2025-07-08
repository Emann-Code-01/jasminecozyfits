import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItemCount: 0
    }),
    actions: {
        addToCart() {
            this.cartItemCount++
        },
        resetCart() {
            this.cartItemCount = 0
        }
    }
})
