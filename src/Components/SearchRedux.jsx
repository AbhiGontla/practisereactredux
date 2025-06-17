import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList.jsx"; // Adjust the path as necessary
import { categoriesData } from "../Data/SampleData.jsx";
import store from "../redux/store/store.js";
import { ProductAction } from "../redux/Actions/product-action.jsx";
import { useSelector } from "react-redux";
import ProductsListRedux from "./ProductListRedux.jsx";

function SearchRedux() {
  const [searchTerm, setSearchTerm] = useState("");
  const sampleData = categoriesData; // Assuming categoriesData is imported from SampleData.jsx;
  const [filteredCategories, setFilteredCategories] = useState(sampleData);
  const [totalFilteredProducts, setTotalFilteredProducts] = useState([]);

  //setSearchTerm is used to set the search term
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    store.dispatch(ProductAction.SetCategory(event.target.value)); // Dispatch the selected category to the Redux store
    store.dispatch(ProductAction.FilteredProducts()); // Dispatch the action to filter products based on the selected category
  };

  // Filter categories based on the search term
  const handleSearchClear = () => {
    setFilteredCategories(sampleData); // Reset the dropdown options
    store.dispatch(ProductAction.Reset()); // Reset the search and category in the Redux store
  };

  //event to notify when products are filtered from child component
  const onProductsFiltered = (message) => {
    //alert(message);
    setTotalFilteredProducts(message);
  };

  return (
    <div className="container mt-4 border border-2 rounded-3 shadow-sm">
      <div className="col-sm-12 mt-5">
        <h2>Products List</h2>
        <div className="row">
          <div className="col-sm-6">
            <select
              onChange={handleSearch}
              className="form-select"
              value={searchTerm} // Bind the value to reset the dropdown
            >
              <option value="">Select Category</option>
              {filteredCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <input
              type="button"
              value="Clear"
              className="btn btn-primary align-right"
              onClick={handleSearchClear}
            />
          </div>
        </div>
      </div>
      <hr />

      <ProductsListRedux notifyMessage={(e)=>onProductsFiltered(e)}/>
        <h6 className="text-right text-success">{totalFilteredProducts}</h6>
    </div>
  );
}

export default SearchRedux;
