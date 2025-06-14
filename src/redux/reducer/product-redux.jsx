import { createReducer } from "@reduxjs/toolkit";
import { ProductAction } from "../Actions/product-action";
import { productData } from "../../Data/SampleData";

const initialState = {
  products: [...productData],
  categories: [],
  selectedCategory: "",
  searchText: "",
  filteredProducts: [],
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ProductAction.FilteredProducts, (state, action) => {
      state.filteredProducts = action.payload;
    })
    .addCase(ProductAction.SetSearchText, (state, action) => {
      state.searchText = action.payload;
    })
    .addCase(ProductAction.SetCategory, (state, action) => {
      state.selectedCategory = action.payload;
    })
    .addCase(ProductAction.Reset, (state, action) => {
      state.selectedCategory = "";
      state.searchText = "";
      state.filteredProducts = state.products; // Reset filtered products to all products
    });
});
export default productReducer;
