import React, { useContext, useState } from "react";

const CartContext = React.createContext({});

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0.0);

  const CartContextValue = {
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
    cartItemCount,
    setCartItemCount,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
