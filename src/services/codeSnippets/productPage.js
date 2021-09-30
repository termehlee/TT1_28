import React, { useState, useEffect } from "react";
import ProductService from "../ProductService";

const ProductList = () => {
  const [Products, setProducts] = useState([]);

  const onDataChange = (items) => {
    let Products = [];

    items.forEach((item) => {
      let key = item.id;
      let data = item.val();
      Products.push({
        id: key,
        title: data.title,
        price: data.price,
        description: data.description,
        category_id: data.category_id,
        image: data.image,
      });
    });

    setProducts(Products);
  };

  useEffect(() => {
    ProductService.getAllProducts().on("value", onDataChange);

    return () => {
      ProductService.getAllProducts().off("value", onDataChange);
    };
  }, []);

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
