import React, { useState, useEffect } from "react";
import { get, child, ref, remove } from "firebase/database";
import { db } from "../../server.js";

const OrdersPage = () => {
  const [Orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const dbRef = ref(db);

  const onDataChange = (items) => {
    let Orders = [];

    items.forEach((item) => {
      Orders.push({
        orderId: item.orderId,
        cartValue: item.cartValue,
        cart: item.cart,
      });
    });

    setOrders(Orders);
  };

  //! change hardcored userId
  useEffect(() => {
    get(child(dbRef, "users/1/orders/"))
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

  //! TODO: Implement delete order function
  const onDeleteButtonPressed = () => {
    console.error("Deleted!");
    remove(child(dbRef, "users/1/orders/"))
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
  };

  //! TODO: HTML
  return (
    <div>
      <ul class="list-group">
        {Orders &&
          Orders.map((order) => (
            <a class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">#{order.orderId}</h5>
              </div>
              {order.cart.map((cartItem) => (
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {cartItem.title}
                    <span class="badge badge-primary badge-pill">
                      {cartItem.qty}
                    </span>
                  </li>
                </ul>
              ))}
              <small>${order.cartValue}</small>
              <button
                onclick={onDeleteButtonPressed}
                className="btn btn-danger btn-block mt-2"
              >
                Delete
              </button>
            </a>
          ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
