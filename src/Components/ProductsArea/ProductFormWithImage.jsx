import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { categoriesData } from "../../Data/SampleData";
import store from "../../redux/store/store";
import { ProductAction } from "../../redux/Actions/product-action";

function ProductFormWithImage() {
  const [products, setProducts] = useState([]);
  const [popupImage, setPopupImage] = useState(null);
  const fileInputRef = useRef(null); // Reference to the file input
  const navigate = useNavigate(); // Initialize useNavigate

  const categories = categoriesData;

  const initialValues = {
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
    productImage: null,
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    productImage: Yup.mixed()
      .required("Product Image is required")
      .test(
        "fileFormat",
        "Only JPEG or HEIC files are allowed",
        (value) =>
          value && (value.type === "image/jpeg" || value.type === "image/heic")
      ),
    productDescription: Yup.string().required(
      "Product Description is required"
    ),
    productPrice: Yup.number()
      .typeError("Product Price must be a number")
      .required("Product Price is required"),
    productCategory: Yup.string().required("Product Category is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      const newProduct = {
        name: values.productName,
        description: values.productDescription,
        price: values.productPrice,
        category: categories.find((cat) => cat.id == values.productCategory)
          ?.categoryName,
        image: base64Image,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      alert("Product added successfully!");
      resetForm(); // Reset Formik fields
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input manually
      }
      store.dispatch(ProductAction.SetProductsWithImage(newProduct)); // Dispatch the new product to the Redux store
      console.log(
        "Product added to Redux store:",
        store.getState().productReducer.productsWithImage
      );
    };
    reader.readAsDataURL(values.productImage);
  };

  const handleShowImage = (image) => {
    setPopupImage(image);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Add Product</h2>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/productGrid")} // Navigate to ProductGrid
        >
          View Products
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, resetForm }) => (
          <Form>
            <div className="row g-3 border p-3 mb-4 mt-3 rounded-3 shadow-sm">
              {/* Row 1 */}
              <div className="col-md-4">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <Field
                  type="text"
                  id="productName"
                  name="productName"
                  className="form-control"
                />
                <ErrorMessage
                  name="productName"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="productDescription" className="form-label">
                  Product Description
                </label>
                <Field
                  as="textarea"
                  id="productDescription"
                  name="productDescription"
                  className="form-control"
                />
                <ErrorMessage
                  name="productDescription"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <Field
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  className="form-control"
                  min="0"
                />
                <ErrorMessage
                  name="productPrice"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Row 2 */}
              <div className="col-md-4">
                <label htmlFor="productCategory" className="form-label">
                  Product Category
                </label>
                <Field
                  as="select"
                  id="productCategory"
                  name="productCategory"
                  className="form-control"
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="productCategory"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="productImage" className="form-label">
                  Product Image (JPEG or HEIC only)
                </label>
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  className="form-control"
                  accept="image/jpeg, image/heic"
                  ref={fileInputRef} // Attach the ref to the file input
                  onChange={(event) => {
                    setFieldValue("productImage", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage
                  name="productImage"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col-md-4 d-flex align-items-end">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    resetForm(); // Reset Formik fields
                    if (fileInputRef.current) {
                      fileInputRef.current.value = ""; // Clear the file input manually
                    }
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <h3 className="mt-4 text-center">Product List</h3>
      <div className="d-flex justify-content-center">
        <table className="table table-bordered table-striped mt-3 rounded-3 shadow-sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td style={{ whiteSpace: "pre-wrap" }}>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleShowImage(product.image)}
                  >
                    View Image
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {popupImage && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={popupImage}
              alt="Popup"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
            <button className="btn btn-danger mt-3" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductFormWithImage;
