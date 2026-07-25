import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});