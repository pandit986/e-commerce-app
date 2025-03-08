import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/slices/productSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
})