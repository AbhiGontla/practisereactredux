import { use, useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";


function ProductListFormik(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="col-sm-12">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.productCategory}</td>
              <td>{product.productName}</td>
              <td>${product.productPrice}</td>
              <td>{product.productDescription}</td>
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
export default ProductListFormik;
