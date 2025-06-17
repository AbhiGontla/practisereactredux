import { createReducer } from "@reduxjs/toolkit";
import { ProductAction } from "../Actions/product-action";
import { productData } from "../../Data/SampleData";

const initialState = {
  products: [...productData],
  categories: [],
  selectedCategory: "",
  searchText: "",
  filteredProducts: [],
  productsWithImage: [],
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ProductAction.FilteredProducts, (state, action) => {
      //state.filteredProducts = action.payload;
      const { searchText, selectedCategory, products } = state;
      if (selectedCategory === "") {
        state.filteredProducts = products; // If no category is selected, show all products
      }
      const filtered = products.filter((product) => {
        const matchesCategory =
          selectedCategory === "" || product.categoryId == selectedCategory;
        const matchesSearchText =
          searchText === "" ||
          product.name.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearchText;
      });
      state.filteredProducts = filtered;
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
    })
    .addCase(ProductAction.SetProductsWithImage, (state, action) => {
      state.productsWithImage = [...state.productsWithImage, action.payload];
    });
});
export default productReducer;
