import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./router/router";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={route} />
      </CartProvider>
    </>
  );
}

export default App;
