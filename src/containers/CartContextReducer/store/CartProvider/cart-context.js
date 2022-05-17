/* eslint-disable no-unused-vars */
import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0.0,
  addItem: (_item) => {},
  removeItem: (_sku) => {},
  increaseQuantity: (_sku) => {},
  decreaseQuantity: (_sku) => {},
});

export default CartContext;
