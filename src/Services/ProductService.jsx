import axios from "axios";
// This function fetches all products from the API
// and returns the data as a promise.
function getAllProducts() {
  return axios
    .get("http://localhost:5000/Products/get-products")
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error fetching the products!", error);
      throw error;
    });
}

function addProduct(product) {
  return axios
    .post(
      "http://localhost:5000/Products/add-product",
      JSON.stringify(product),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error adding the product!", error);
      throw error;
    });
}
const ProductService = {
  getAllProducts,
  addProduct,
};
export default ProductService;
// This service is responsible for fetching product data from the API.
