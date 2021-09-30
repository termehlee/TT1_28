import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import { get, child, ref } from "firebase/database";
import { db } from "../../services/server";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [Products, setProducts] = useState([]);

  const onDataChange = (items) => {
    let Products = [];

    items.forEach((item) => {
      Products.push({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category_id: item.category_id,
        image: item.image,
        qty: item.qty,
      });
    });

    setProducts(Products);
  };

  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, `products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          onDataChange(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  //! TODO: JSX
  return (

  <div className="wrapper">
        
    <div className="container">
      

      <div className="row">
      
      {/* the product items to display here.  */}

      {Products.map((Products, index) => (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
          <div className="card">
            <div className="img-container p-5" >
                <img src={Products.image} style={{height: "200px", width: "200px"}}></img>
              </div>
              <div><h4>{Products.title}</h4></div>
              <div><p>{Products.description}</p></div>

            {/* Card footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0"></p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>{Products.price}</h5>
              <h6>qty: {Products.qty}</h6>
              <input type="text" style={{width:"40px", height:"25px"}}/>
              <button style={{fontSize: 12}}>Add to Cart</button>
            </div>
          </div>
      </ProductWrapper>
    ))}  
      
      </div>

    </div>

  </div>

  );
};

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

export default ProductList;
