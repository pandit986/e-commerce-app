// src/services/categoryService.js

import httpClient from "../../../api/httpClient";

export const getCategories = () => httpClient('/products', { method: 'GET' });

export const getCategoryProducts = (category) => httpClient(`/products/category/${category}`, { method: 'GET' });