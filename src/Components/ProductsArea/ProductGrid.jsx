import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "/src/css/productcss/ProductGrid.css"; // Import the CSS file for styling
import { OverlayTrigger, Tooltip } from "react-bootstrap"; // Import Bootstrap Tooltip
import ProductsSessionProvider from "../../Services/ProductsSession";

function ProductGrid() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.productsWithImage);
  // State for filters
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  // Filtered products based on filters
  const filteredProducts = products.filter((product) => {
    const matchesName =
      filters.name === "" ||
      product.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesCategory =
      filters.category === "" || product.category === filters.category;
    const matchesMinPrice =
      filters.minPrice === "" || product.price >= parseFloat(filters.minPrice);
    const matchesMaxPrice =
      filters.maxPrice === "" || product.price <= parseFloat(filters.maxPrice);

    return matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      name: "",
      category: "",
      minPrice: "",
      maxPrice: "",
    });
  };

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

      {/* Filters Section */}
      <div className="p-3 border rounded mb-4">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <input
            type="text"
            name="name"
            className="form-control w-auto"
            placeholder="Search by Name"
            value={filters.name}
            onChange={handleFilterChange}
          />
          <select
            name="category"
            className="form-control w-auto"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            {[...new Set(products.map((product) => product.category))].map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
          <input
            type="number"
            name="minPrice"
            className="form-control w-auto"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            className="form-control w-auto"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <button className="btn btn-secondary ms-auto" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center mt-5">
          <div className="alert alert-warning p-5" role="alert">
            <h1 className="display-4">No Products Found</h1>
            <p className="lead">Try adjusting your filters.</p>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100 position-relative">
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
                {/* Info Icon with Tooltip */}
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>
                    
                      <strong>Name:</strong> {product.name}
                      <br />
                      <strong>Description:</strong> {product.description}
                      <br />
                      <strong>Price:</strong> ${product.price}
                      <br />
                      <strong>Category:</strong> {product.category}
                    </Tooltip>
                  }
                >
                  <i
                    className="bi bi-info-circle-fill position-absolute"
                    style={{
                      bottom: "10px",
                      right: "10px",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      color: "#0d6efd",
                    }}
                  ></i>
                </OverlayTrigger>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;