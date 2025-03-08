import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    { id: 1, name: 'Product 1', category: 'electronics', price: 99.99 },
    { id: 2, name: 'Product 2', category: 'clothing', price: 49.99 },
    // Add more products
  ],
  categories: ['electronics', 'clothing', 'books', 'furniture'],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productSlice.reducer
export const selectCategories = (state) => state.products.categories
export const selectProducts = (state) => state.products.products