import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Layout/Header"
import MealsList from "./components/Meals/MealsList";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <MealsList />
      </main>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));