function setProducts(products) {
    console.log("Setting products in sessionStorage:", products);
  sessionStorage.setItem("sessionProducts", JSON.stringify(products));
}

function getAllSessionProducts() {
  const products = sessionStorage.getItem("sessionProducts");
  return products ? JSON.parse(products) : null;
}
const ProductsSessionProvider = {
  setProducts,
  getAllSessionProducts
};
export default ProductsSessionProvider;
