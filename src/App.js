import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import ProductList from "./components/Products/productPage";
// import Signup from './components/Signup/Signup';
import ShoppingCart from "./components/Cart/ShoppingCart";
import NavBar from "./components/Navbar/Navbar";
import OrdersPage from "./components/OrderPage/orderPage";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="wrapper">
        <h1>Application</h1>
        <Switch>
          <Route exact path={"/products"} component={ProductList} />
          <Route exact path="/" component={Login} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route exact path={"/cart"} component={ShoppingCart} />

          <Route exact path={"/orders"} component={OrdersPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
