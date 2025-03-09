import httpClient from "../../../api/httpClient";

export const getProductsByCategory = (category) => httpClient(`/products/category/${category}`);

export const getProductById = (id) => httpClient(`/products/${id}`);
