import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/shared/Layout";
import HomePage from "../modules/home-page/HomePage";
import ProductsPage from "../modules/product-list/ProductsPage";
import MinimalLayout from "../components/shared/MinimalLayout";
import CartPage from "../modules/card-page/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // With header/footer
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:category", element: <ProductsPage /> },
    ],
  },
  {
    element: <MinimalLayout />, // Without header/footer
    children: [
      { path: "/cart", element: <CartPage /> },
      // Add other minimal pages here
    ],
  },
]);
