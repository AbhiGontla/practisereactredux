import { createAction } from "@reduxjs/toolkit";

export const ProductAction = {
  FilteredProducts: createAction("product/FilteredProducts"),
  SetSearchText: createAction("product/setSearchText"),
  SetCategory: createAction("product/setCategory"),
  Reset: createAction("product/reset"),
};
