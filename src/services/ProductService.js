import { get, child } from "firebase/database";
import { db } from "./server.js";

const getAllProducts = () => {
  get(child(db, "products"))
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
};

const ProductService = {
  getAllProducts,
};

export default ProductService;
