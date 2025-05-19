import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Contact from "../pages/Contact";
import ProductsPage from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { productsLoader } from "../services/productService";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage />, loader: productsLoader },
          { path: ":id", element: <ProductDetail /> },
        ],
      },
      {
        path: "auth",
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);
