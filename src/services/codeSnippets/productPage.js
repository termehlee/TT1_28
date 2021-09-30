import React, { useState, useEffect } from "react";
import ProductService from "../ProductService";
import { get, child, ref } from "firebase/database";
import { db } from "../../server.js";

const ProductList = () => {
  //   const [Products, setProducts] = useState([]);

  //   const onDataChange = (items) => {
  //     let Products = [];

  //     items.forEach((item) => {
  //       let key = item.id;
  //       let data = item.val();
  //       Products.push({
  //         id: key,
  //         title: data.title,
  //         price: data.price,
  //         description: data.description,
  //         category_id: data.category_id,
  //         image: data.image,
  //       });
  //     });

  //     setProducts(Products);
  //   };

  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, `products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //   const setActiveOrder = (Order, index) => {
  //     const { title, description, published } = Order;

  //     setCurrentOrder({
  //       key: Order.key,
  //       title,
  //       description,
  //       published,
  //     });

  //     setCurrentIndex(index);
  //   };

  //! TODO: JSX
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Products List</h4>

        {/* <ul className="list-group">
          {Products.map((Products, index) => (
            <li className={"list-group-item "} onClick={() => {}} key={index}>
              {Products.title}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ProductList;
