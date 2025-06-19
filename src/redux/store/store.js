import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/product-redux";
import authReducer from "../reducer/auth.reducer";

const store =configureStore({
  reducer: {
    productReducer,
    authReducer,
  },
});
export default store;