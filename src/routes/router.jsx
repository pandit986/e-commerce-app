import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/ui/Loader";

// Lazy load components
const MainLayout = lazy(() => import("../components/shared/Layout"));
const HomePage = lazy(() => import("../modules/home-page/HomePage"));
const ProductsPage = lazy(() => import("../modules/product-list/ProductsPage"));
const MinimalLayout = lazy(() => import("../components/shared/MinimalLayout"));
const CartPage = lazy(() => import("../modules/card-page/CartPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={Loader}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={Loader}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "products/:category",
        element: (
          <Suspense fallback={Loader}>
            <ProductsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={Loader}>
        <MinimalLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/cart",
        element: (
          <Suspense fallback={Loader}>
            <CartPage />
          </Suspense>
        ),
      },
    ],
  },
]);
