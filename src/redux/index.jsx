import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import ShoppingSlice from "./ShoppingSlice/index"

const store = configureStore({
  reducer: {
    counter: counterSlice,
    Shopping: ShoppingSlice,
  },
});

export default store;
