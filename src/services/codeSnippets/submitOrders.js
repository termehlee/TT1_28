import { set, child, ref } from "firebase/database";
import { db } from "../../server.js";
import { useState } from "react";

const { v4: uuidv4 } = require("uuid");
const dbRef = ref(db);

const [submitted, setSubmitted] = useState(false);

const newOrder = () => {
  setSubmitted(false);
};

function saveOrderToDB(userId, orderData) {
  set(ref(dbRef, "users/" + userId + "orders/"), {
    cart: orderData.cart,
    cartValue: orderData.cartValue,
    orderId: orderData.orderId,
  });
}

const submitOrder = (userId, cartData) => {
  //! TODO: get cart value
  //! data is hardcored for now, supposed to use cartData
  var data = {
    orderId: uuidv4(),
    cartValue: "3.40",
    cart: {
      0: {
        id: 1,
        title: "shampoo",
        price: "1",
        description: "Test",
        category_id: 3,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        qty: 50,
      },
    },
  };

  //! TODO: Upon pressing submitOrder
  saveOrderToDB(userId, data);
  setSubmitted(true);

  //   OrderService.create(data)
  //     .then(() => {

  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
};
