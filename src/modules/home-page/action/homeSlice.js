// src/store/categorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getCategories, searchProducts } from "./homeService";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        loading: false,
        query: '',
        suggestions: [],
        categories: [],
    },
    reducers: {
        setState: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        clearSuggestions: (state) => {
            state.suggestions = [];
            state.query = '';
        },
    }
});

export const { setState, setQuery, clearSuggestions } = categorySlice.actions;

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(setState({ key: "loading", value: true }));
            const data = await getCategories();

            // Process categories with thumbnails
            const categoryMap = data.products.reduce((acc, product) => {
                if (!acc[product.category]) {
                    acc[product.category] = {
                        count: 1,
                        thumbnail: product.thumbnail
                    };
                } else {
                    acc[product.category].count += 1;
                }
                return acc;
            }, {});

            const categories = Object.entries(categoryMap).map(([name, details]) => ({
                name,
                count: details.count,
                thumbnail: details.thumbnail
            }));

            dispatch(setState({ key: "categories", value: categories }));
            dispatch(setState({ key: "loading", value: false }));

        } catch (err) {
            console.log(err)
            dispatch(setState({ key: "loading", value: false }));
        }
    };
};

export const fetchSuggestions = (query) => {
    return async (dispatch) => {
        try {
            // dispatch(setState({ key: 'loading', value: true }));
            const response = await searchProducts(query);
            dispatch(setState({ key: 'suggestions', value: response.products }));
            // dispatch(setState({ key: 'loading', value: false }));
        } catch (error) {
            dispatch(setState({ key: 'error', value: error.message }));
            // dispatch(setState({ key: 'loading', value: false }));
        }
    };
};


export const selectCategories = (state) => state.category.categories;
export const selectLoading = (state) => state.category.loading;

export default categorySlice.reducer;