// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getProductById, getProductsByCategory } from './productService';

// Load cart from localStorage if it exists
const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        cart: savedCart, // use saved cart
        loading: false,
        error: null,
    },
    reducers: {
        // Generic state setter similar to categorySlice
        setState: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const product = state.items.find(p => p.id === productId);
            if (product) product.quantity = Math.max(1, quantity);
        },
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.push({ ...action.payload });
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) item.quantity = quantity;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
});

export const { setState, setQuantity, addToCart, updateQuantity, removeFromCart } = productSlice.actions;

export const fetchProducts = (category = null) => async (dispatch) => {
    try {
        dispatch(setState({ key: 'loading', value: true }));
        // Call the appropriate function based on whether category is numeric.
        const data = await (!isNaN(category) ? getProductById : getProductsByCategory)(category);
        // If the response doesn't contain an array (i.e., products property), wrap the single object.
        const products = (data.products ? data.products : [data]).map(product => ({
            ...product,
            quantity: 1,
        }));
        dispatch(setState({ key: 'items', value: products }));
        dispatch(setState({ key: 'loading', value: false }));
    } catch (error) {
        dispatch(setState({ key: 'error', value: error.message }));
        dispatch(setState({ key: 'loading', value: false }));
    }
};


export const selectProducts = (state) => state.products.items;
export const selectCartItems = (state) => state.products.cart;
export const selectCartTotalItems = (state) =>
    state.products.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
    state.products.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

export default productSlice.reducer;
