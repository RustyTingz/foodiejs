import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CartContextReducer from "./containers/CartContextReducer/CartContextReducer";
import CartContextHook from "./containers/CartContextHook/CartContextHook";

const App = () => {
  return (
    <div className="App">
      <h1>Shopping Cart State Patterns</h1>
      <nav>
        <Link to="/context-reducer">Cart Context Reducer</Link>
        <Link to="/context-hook">Cart Context Hook</Link>
      </nav>
      <div className="router-container">
        <Routes>
          <Route path="/" exact element={<h2>Choose a cart context type</h2>} />
          <Route path="/context-reducer" element={<CartContextReducer />} />
          <Route path="/context-hook" element={<CartContextHook />} />
        </Routes>
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
