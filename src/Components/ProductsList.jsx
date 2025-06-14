import { useEffect, useState } from "react";
import { productData } from "../Data/SampleData";
import { useNavigate } from "react-router-dom";

function ProductsList(props) {
  const products = productData;
  const selectedSearchTerm = props.selectedTerm;
  const [filteredProducts, setFilteredProducts] = useState([]);

  //useEffect gets called when the component mounts and when the selectedSearchTerm changes
  useEffect(() => {
    const filteredProducts = selectedSearchTerm
      ? products.filter((product) => product.categoryId == selectedSearchTerm)
      : products;
    setFilteredProducts(filteredProducts);
    // Notify the parent component about the count of filtered products
    props.notifyMessage(
      "Filtered Products for search item" +
        selectedSearchTerm +
        ":" +
        filteredProducts.length
    );
  }, [selectedSearchTerm]);
  
  //redirectToProductView function to redirect to the product view page
  const navigate = useNavigate();
  const redirectToProductView = (productId) => {
    navigate(`/product-view/${productId}`);
  };
  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>
                <input
                  type="button"
                  value="View Product"
                  className="btn btn-secondary"
                  onClick={() => redirectToProductView(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductsList;
