import React, { useState } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Layout/Header"
import MenuContainer from "./components/Menu/MenuContainer";
import "./App.css"
import Cart from "./components/Cart/Cart";
import CartProvider from "./CartContextReducer/store/CartProvider";

const CartContextReducer = () => {
  const [showCart, setShowCart] = useState(false);

  const onCartShowHandler = () => {
    setShowCart(true);
  };

  const onCartCloseHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <Header onCartShow={onCartShowHandler} />
        {showCart && <Cart onClose={onCartCloseHandler} />}
        <main className="app-content">
          <MenuContainer />
        </main>
      </CartProvider>
    </div>
  );
};

export default CartContextReducer;