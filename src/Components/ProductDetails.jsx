import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../Data/SampleData";
import { useEffect, useState } from "react";

export function ProductDetails() {
  // Use the useParams hook to get the product id from the URL
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // Use the useNavigate hook to navigate to the home page
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Use the useEffect hook to set the document title
  useEffect(() => {
    // Find the product with the matching id from webApi
    const productObj = productData.find((product) => product.id == id);
    if (productObj) {
      setProduct(productObj); // Directly set the product object
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h4>Product Details for Product ID : {id}</h4>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">{product.description}</p>
          <button onClick={goBack} className="btn btn-dark ">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
