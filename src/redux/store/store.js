import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/product-redux";

const store =configureStore({
  reducer: {
    productReducer,
  },
});
export default store;