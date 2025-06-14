import React, { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    categoryId: "",
    productDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }
    if (!formData.categoryId.trim()) {
      newErrors.categoryId = "Category ID is required";
    }
    if (!formData.productDescription.trim()) {
      newErrors.productDescription = "Product description is required";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const product = {
      productName: formData.productName,
      categoryId: formData.categoryId,
      productDescription: formData.productDescription,
    };

    console.log("Product added:", product);
    // Reset form
    setFormData({
      productName: "",
      categoryId: "",
      productDescription: "",
    });
    setErrors({});
    alert("Product added successfully!");
    // Here you can also send the product data to your backend or perform any other action
    // fetch("http://localhost:5000/readings/addProduct", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Product added successfully:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding product:", error);
    //   });
  };

  return (
    <div className="container mt-4">
      <div className="form-container border border-primary rounded p-4">
        <h1 className="text-center mb-4">Product Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="form-control"
              value={formData.productName}
              onChange={handleChange}
            />
            {errors.productName && (
              <p className="text-danger">{errors.productName}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">
              Category ID:
            </label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              className="form-control"
              value={formData.categoryId}
              onChange={handleChange}
            />
            {errors.categoryId && (
              <p className="text-danger">{errors.categoryId}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description:
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              className="form-control"
              value={formData.productDescription}
              onChange={handleChange}
            />
            {errors.productDescription && (
              <p className="text-danger">{errors.productDescription}</p>
            )}
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
