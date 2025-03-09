import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../modules/home-page/action/productSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
})