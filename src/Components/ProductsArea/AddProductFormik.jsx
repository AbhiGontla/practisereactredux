import React, { use, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { categoriesData } from "../../Data/SampleData";
import ProductListFormik from "./ProductListFormik";
import ProductService from "../../Services/ProductService";

const AddProductFormik = () => {
  const sampleData = categoriesData;
  const [categories, setCategories] = useState(sampleData);

  const initialValues = {
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
    productImage: null,
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    productDescription: Yup.string().required(
      "Product Description is required"
    ),
    productPrice: Yup.number()
      .typeError("Product Price must be a number")
      .required("Product Price is required"),
    productCategory: Yup.string().required("Product Category is required"),
    // productImage: Yup.mixed().required("Product Image is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    ProductService.addProduct(values)
      .then((response) => {
        console.log("Product added successfully:", response);
        alert("Product added successfully!");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product");
      });
    // Reset form values after submission
    setValues(initialValues);
  };

  return (
    <div className="container mt-4 mb-3 border border-2 rounded-3 shadow-sm">
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Add Product</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="mb-3 form-group">
                  <label htmlFor="productName" className="form-label">
                    Name
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

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Description
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

                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price
                  </label>
                  <Field
                    type="text"
                    id="productPrice"
                    name="productPrice"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="productPrice"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Category
                  </label>
                  <Field
                    as="select"
                    id="productCategory"
                    name="productCategory"
                    className="form-control"
                  >
                    <option value="">Select Category</option>
                    {categories.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.categoryName}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="productCategory"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    id="productImage"
                    name="productImage"
                    className="form-control"
                    onChange={(event) => {
                      setFieldValue(
                        "productImage",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <ErrorMessage
                    name="productImage"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-md-6">
          <ProductListFormik />
        </div>
      </div>
    </div>
  );
};

export default AddProductFormik;
