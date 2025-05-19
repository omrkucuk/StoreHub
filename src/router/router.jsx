import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const route = createBrowserRouter([
  { path: "/", element: <MainLayout /> },
]);
