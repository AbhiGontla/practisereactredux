import { useEffect, useState } from "react";
import { productData } from "../Data/SampleData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../redux/Actions/product-action";

function ProductsListRedux(props) {
const filteredProductsData = useSelector((state) => state.productReducer.filteredProducts);

  const dispatch = useDispatch(); // Get the dispatch function from props
  useEffect(() => {
    dispatch(ProductAction.FilteredProducts()); // Dispatch an action to fetch products
  }, [dispatch]);
  
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
          {filteredProductsData.map((product) => (
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
export default ProductsListRedux;
