import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {
  cartItems: [],
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function removeFromCart(productId) {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  }

  function decreaseQuantity(productId) {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const value = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
