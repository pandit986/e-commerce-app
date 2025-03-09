import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../modules/home-page/action/productSlice'
import categoryReducer from '../modules/home-page/action/homeSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer
    },
})