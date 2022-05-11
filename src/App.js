import React, { useState } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Layout/Header"
import MealsList from "./components/Meals/MealsList";
import "./App.css"
import Cart from "./components/Cart/Cart";

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
      <Header onCartShow={onCartShowHandler} />
      {showCart && (
        <Cart items={[]} total={31.95} onClose={onCartCloseHandler} />
      )}
      <main>
        <MealsList />
      </main>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));