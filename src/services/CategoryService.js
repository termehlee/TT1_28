import firebase from "../firebase";

const db = firebase.ref("/categories");

const getAllCategories = () => {
  return db;
};

const CategoryService = {
  getAllCategories,
};

export default CategoryService;
