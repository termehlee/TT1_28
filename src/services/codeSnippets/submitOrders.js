const submitOrder = () => {
  var data = {
    //! TODO: uuidv4 for orderId
    orderId: "123",
    //! TODO: get cart value
    cartValue: "3.40",
    cart: {
      //! 1 == index of cart, information is as per product.json
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

  OrderService.create(data)
    .then(() => {
      setSubmitted(true);
    })
    .catch((e) => {
      console.log(e);
    });
};

const newOrder = () => {
  setOrder(initialOrderState);
  setSubmitted(false);
};
