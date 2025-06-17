import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "/src/css/productcss/ProductGrid.css"; // Import the CSS file for styling

function ProductGrid() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.productsWithImage);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product List</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/productFormWithImage")}
        >
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="text-center mt-5">
          <div className="alert alert-warning p-5" role="alert">
            <h1 className="display-4">No Products Found</h1>
            <p className="lead">Please add products to see them here.</p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/productFormWithImage")}
            >
              Add Product
            </button>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top zoom-on-hover"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;