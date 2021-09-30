
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Registration from './components/Login/Registration';
// import Signup from './components/Signup/Signup';
import ShoppingCart from './components/Cart/ShoppingCart';
import Complete from './components/Cart/Complete';
function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path={"/products"} component={ProductList} /> */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/Registraion">
            <Registration />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route exact path={"/cart"} component={ShoppingCart} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
