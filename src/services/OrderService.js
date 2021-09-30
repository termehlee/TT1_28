import firebase from "../firebase";

const db = firebase.ref("/orders");

const getAllOrders = () => {
  return db;
};

const createOrder = (data) => {
  return db.push(data);
};

const updateOrder = (key, data) => {
  return db.child(key).update(data);
};

const removeOrder = (key) => {
  return db.child(key).remove();
};

const removeAllOrders = () => {
  return db.remove();
};

const ProductService = {
  getAllOrders,
  createOrder,
  updateOrder,
  removeOrder,
  removeAllOrders,
};

export default ProductService;
