import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import { get, child, ref } from "firebase/database";
import { db } from "../../server.js";

const ProductList = () => {
  const [Products, setProducts] = useState([]);
  const dbRef = ref(db);

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
      });
    });

    setProducts(Products);
  };

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
    <div className="list row">
      <div className="col-md-6">
        <h4>Products List</h4>

        <ul className="list-group">
          {Products.map((Products, index) => (
            <li className={"list-group-item "} onClick={() => {}} key={index}>
              {Products.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
