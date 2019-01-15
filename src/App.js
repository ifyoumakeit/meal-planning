import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import "./App.css";

import Books from "./pages/Books";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Meals from "./pages/Meals";
import Recipes from "./pages/Recipes";
import ShoppingList from "./pages/ShoppingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="books">Books</Link>
            </li>
            <li>
              <Link to="ingredients">Ingredients</Link>
            </li>
            <li>
              <Link to="meals">Meals</Link>
            </li>
            <li>
              <Link to="recipes">Recipes</Link>
            </li>
            <li>
              <Link to="shopping-list">ShoppingList</Link>
            </li>
          </ul>
        </aside>
        <Router>
          <Home path="/" />
          <Books path="books" />
          <Ingredients path="ingredients" />
          <Meals path="meals" />
          <Recipes path="recipes" />
          <ShoppingList path="shopping-list" />
        </Router>
      </div>
    );
  }
}

export default App;
