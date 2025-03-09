import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../modules/product-list/action/productSlice'
import categoryReducer from '../modules/home-page/action/homeSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer
    },
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.products.cart));
});