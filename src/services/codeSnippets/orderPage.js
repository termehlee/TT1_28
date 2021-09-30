import React, { useState, useEffect } from "react";
import OrderService from "../services/OrderService";
import Order from "./Order";

const OrdersList = () => {
  const [Orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const onDataChange = (items) => {
    let Orders = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      Orders.push({
        id: key,
        title: data.title,
        price: data.price,
        description: data.description,
        category_id: data.category_id,
        image: data.image,
        qty: data.qty,
      });
    });

    setOrders(Orders);
  };

  useEffect(() => {
    OrderService.getAll().on("value", onDataChange);

    return () => {
      OrderService.getAll().off("value", onDataChange);
    };
  }, []);

  const refreshList = () => {
    setCurrentOrder(null);
    setCurrentIndex(-1);
  };

  const setActiveOrder = (Order, index) => {
    const { id, title, price, description, category_id, image } = Order;

    setCurrentOrder({
      id: id,
      title: title,
      price: price,
      description: description,
      category_id: category_id,
      image: image,
    });

    setCurrentIndex(index);
  };

  const removeAllOrders = () => {
    OrderService.removeAll()
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //! TODO: HTML
  //   return (
  //     // ...
  //   );
};

export default OrdersList;
