import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [token, setToken] = useState();
  const [product, setProduct] = useState();
  const productLists = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category_id": 3, 
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "qty": 50
}, {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category_id": 3, 
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "qty": 50
}];
  
{/*
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category_id": 3, 
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "qty": 50
    */}

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }


  return (
    <div className="wrapper">
      
      
      <div className="container">
        <div className="row">
          
          <p>first row -- for nav bar maybe. includes the cart btn probably</p>
        </div>

        <div className="row">
        <p>second row, the rest of the page</p>
        {/* the product items to display here.  */}

        {productLists.map(({ id, title, price, description, category_id, image, qty }) => (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <div className="img-container p-5" >
              <img src={image} style={{height: "200px", width: "200px"}}></img>
            </div>
            <div><h4>{title}</h4></div>
            <div><p>{description}</p></div>
          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"></p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5><h6>qty: {qty}</h6>
            <button style={{fontSize: 12}}>Add to Cart</button>
          </div>
          
        </div>
      </ProductWrapper>
      ))}

        {/* <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
          <div className="card">
            <div className="img-container p-5" >
                <h1>here is the img part</h1>
                </div>
            {/* Card footer }
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">title of the product name</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                price
              </h5>
              <button style={{fontSize: 12}}>Add to Cart</button>
            </div>
            
          </div>
        </ProductWrapper> */}
        
        
        
        </div>

      </div>


      {/* <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

const ProductWrapper = styled.div`

  .card {
    border-color: transparent;
    transition: all 1s linear;
    width: 280px;
    flex-direction:
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.6s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export default App;
