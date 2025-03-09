import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/shared/Layout";
import HomePage from "../modules/home-page/HomePage";
import ProductsPage from "../modules/product-list/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:category", element: <ProductsPage /> },
    ],
  },
]);
