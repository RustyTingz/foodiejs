import React, { useState } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Layout/Header"
import MealsList from "./components/Meals/MealsList";
import "./App.css"
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const onCartShowHandler = () => {
    setShowCart(true);
  };
  
  const onCartCloseHandler = () => {
    setShowCart(false);
  } 

  return (
    <div className="App">
      <CartProvider>
        <Header onCartShow={onCartShowHandler} />
        {showCart && (
          <Cart onClose={onCartCloseHandler} />
        )}
        <main>
          <MealsList />
        </main>
      </CartProvider> 
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));