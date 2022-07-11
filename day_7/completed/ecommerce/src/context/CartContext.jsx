import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? localStorage.getItem("cart") : 0
  );
  const updateCart = () => {
    localStorage.setItem("cart", cart + 1);
    setCart(cart + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
