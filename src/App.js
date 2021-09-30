import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
//! Uncomment
// import Login from "./components/Login/Login";
import ProductList from "./components/Products/productPage";
import OrdersPage from "./services/codeSnippets/orderPage";
// import Signup from './components/Signup/Signup';

function App() {
  //! Uncomment
  // const [token, setToken] = useState();
  //! Uncomment
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/products"} component={OrdersPage} />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
